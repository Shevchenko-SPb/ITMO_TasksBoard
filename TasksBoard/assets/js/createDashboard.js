import Dom from './dom.js';
import {randomString} from "./stringUtils.js";
import {DashboardVO} from "assets/js/DashboardVO";
export const addNewDashboard = () => {
  const getDOM = (id) => document.getElementById(id);
  const domSafeDashboard = getDOM(Dom.Button.SAFE_DASHBOARD)
  const domDashboardTemplate = getDOM(Dom.Template.DASHBOARD_TEMPLATE);
  const domDashboardList = getDOM(Dom.Template.DASHBOARD_LIST);
  const domDashboard = getDOM(Dom.Template.DASHBOARD);
  const domNewDashboardListName = getDOM('dashboardInpName');
  const domDashboardName = getDOM(Dom.Template.DASHBOARD_NANE);
  const QUERY = (container, id) => container.querySelector(`[data-id="${id}"]`);

  const newDashboard = domDashboard.querySelector("div[id]").cloneNode(true);
  const dashboardItem = QUERY(domDashboardList, 'dashboardItem');
  const newDashboardItem = dashboardItem.cloneNode(true)
  const clone = getDOM('cloneColumn')
  const cloneCol = clone.cloneNode(true)


  const dashboardVO = new DashboardVO();



  if (!domSafeDashboard.style.display) {
    return
  }
  domDashboardTemplate.removeAttribute('id');
  domDashboardTemplate.remove();

  // domDashboardList.classList.add('pointer-events-none')
  // domDashboardList.classList.add('text-neutral-400/50')


  newDashboard.id = randomString(5) + Date.now();
  while (newDashboard.children.length > 0) {
    newDashboard.removeChild(newDashboard.lastChild);
  }

  cloneCol.style.display = 'block';
  QUERY(cloneCol, 'btnAddColumn').style.display = 'block';
  newDashboard.appendChild(cloneCol)

  newDashboard.childNodes.forEach(element => element.id = newDashboard.id + "||" + randomString(5))
  domDashboard.appendChild(newDashboard);


  domNewDashboardListName.style.display = 'block';
  let dashboardName;
  domDashboardName.innerText = ''
  domNewDashboardListName.addEventListener('keyup', function (e) {

    dashboardName = domNewDashboardListName.querySelector("input").value;
    domDashboardName.innerText = dashboardName
    QUERY(newDashboardItem, "dashboardName").innerText = dashboardName
  })
  newDashboardItem.dataset.id = newDashboard.id
  domDashboardList.appendChild(newDashboardItem)
  domSafeDashboard.style.display = 'block';

  function createNewColumn (elem) {
    let taskColumn = elem.closest(".column")
    let clone = taskColumn.cloneNode(true);
    let tasksArray = clone.querySelectorAll('div.task')
    for (let i = 0; i < tasksArray.length; i++) {
      tasksArray[i].remove();
    }
    clone.id = newDashboard.id + "||" + randomString(5);
    console.log(clone.id)
    if (taskColumn.parentNode.children.length === 10) {
      alert("Количество колонок не более 10")
      return
    }
    QUERY(clone, 'columnNameTemp').style.display = 'none';
    QUERY(clone, 'columnNameInp').style.display = 'block';
    taskColumn.parentNode.insertBefore(clone, taskColumn.nextSibling);

  }

  domDashboard.onclick = (e) => {
    switch (e.target.dataset.id) {
      case 'btnAddTask':
        console.log('addTask')
        // templatePopupCreateTask (e);
        break;
      case 'btnAddColumn':
        console.log('click')
        createNewColumn(e.target);
        break;
    }
  }


  QUERY(domSafeDashboard, "confirm").onclick = () => {

    domDashboardList.classList.remove('pointer-events-none')
    domDashboardList.classList.remove('text-neutral-400/50')

    dashboardVO.id = newDashboard.id;
    dashboardVO.dashboard_name = dashboardName;
    const columnsList = newDashboard.querySelectorAll(".column")

    columnsList.forEach(element => {
      for (var key in dashboardVO) {
        if(!(dashboardVO[key]) && key.indexOf('name_column')) {
          dashboardVO[key] = element.id
          return;
        }
      }
    })
    columnsList.forEach(element => {
      for (var key in dashboardVO) {
        if(!(dashboardVO[key]) && key.indexOf('id_column')) {
          dashboardVO[key] = QUERY(element, 'columnNameTemp').innerText
          return
        }
      }
    })
    console.log(newDashboard)
    newDashboard.childNodes.forEach(e => {
      if (newDashboard.childNodes[0] !== e) {
        QUERY(e, 'columnNameTemp').style.display = 'block';
        QUERY(e, 'columnNameInp').style.display = 'none';
        QUERY(e, 'btnAddColumn').style.display = 'none';
      }
    })


    // saveDashboard(dashboardVO)



    newDashboardItem.style.display = 'block';
    // cloneCol.classList.add("hidden")
    domNewDashboardListName.style.display = 'none'
    domSafeDashboard.style.display = 'none'
    location.reload()

  }
  QUERY(domSafeDashboard, "cancel").onclick = () => {
    window.location.reload(true);
  }
}