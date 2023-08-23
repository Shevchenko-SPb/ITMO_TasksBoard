import Dom from './dom.js';
import {randomString} from "./stringUtils.js";
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

  class DashboardVO {
    static fromJSON(json) {
      return new DashboardVO(json.id, json.dashboard_name, json.id_column1, json.name_column1, json.id_column2, json.name_column2, json.id_column3, json.name_column3, json.id_column4, json.name_column4, json.id_column5, json.name_column5, json.id_column6, json.name_column6, json.id_column7, json.name_column7, json.id_column8, json.name_column8, json.id_column9, json.name_column9, json.id_column10, json.name_column10)
    }
    constructor(id, dashboardName, idColumn1, nameColumn1, idColumn2, nameColumn2, idColumn3, nameColumn3, idColumn4, nameColumn4, idColumn5, nameColumn5, idColumn6, nameColumn6, idColumn7, nameColumn7, idColumn8, nameColumn8, idColumn9, nameColumn9, idColumn10, nameColumn10) {
      this.id = id;
      this.dashboard_name = dashboardName;
      this.id_column1 = idColumn1;
      this.name_column1 = nameColumn1;
      this.id_column2 = idColumn2;
      this.name_column2 = nameColumn2;
      this.id_column3 = idColumn3;
      this.name_column3 = nameColumn3;
      this.id_column4 = idColumn4;
      this.name_column4 = nameColumn4;
      this.id_column5 = idColumn5;
      this.name_column5 = nameColumn5;
      this.id_column6 = idColumn6;
      this.name_column6 = nameColumn6;
      this.id_column7 = idColumn7;
      this.name_column7 = nameColumn7;
      this.id_column8 = idColumn8;
      this.name_column8 = nameColumn8;
      this.id_column9 = idColumn9;
      this.name_column9 = nameColumn9;
      this.id_column10 = idColumn10;
      this.name_column10 = nameColumn10;
    }
  }

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