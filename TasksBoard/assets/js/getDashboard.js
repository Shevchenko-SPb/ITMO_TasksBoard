import {DashboardVO} from "assets/js/DashboardVO";
import {TaskVO} from "assets/js/TaskVO";
import Dom from "assets/js/dom";
import DOM from "assets/js/dom";

export const getDashboards = () => {
  setTimeout(() => {
  const getDOM = (id) => document.getElementById(id);
  const QUERY = (container, id) => container.querySelector(`[data-id="${id}"]`);
  const domDashboardTemplate = getDOM(Dom.Template.DASHBOARD_TEMPLATE);
  const domDashboardName = getDOM(Dom.Template.DASHBOARD_NANE);
  const domDashboard = getDOM(Dom.Template.DASHBOARD);
  const domTemplateTask = getDOM(DOM.Template.TASK)
  const newDashboard = domDashboard.querySelector("div[id]").cloneNode(true);
  const clone = getDOM('cloneColumn')

  const headers = {
    'Content-Type': 'application/json'
  }
  let rawDashboards = undefined;
  let rawTasks = undefined;
  const mapTags = new Map([
  ]);


  function getDashboards() {
    fetch('http://127.0.0.1:8007/getListdashboards',{
      method: 'get',
      headers: headers,
    })
      .then(function (response) {
        response.json().then(function (data) {
          rawDashboards = data.result
          for (let key in rawDashboards) {
            mapTags.set(rawDashboards[key][0], rawDashboards[key][2])
          }
          const dashboards = rawDashboards

            ? rawDashboards.map((json) => DashboardVO.fromJSON(json))
            : [];
          if (dashboards[0].id) {

            renderDashboard(dashboards[0].id) }

          dashboards.forEach((dashboardVO) => renderDashboardList(dashboardVO));
        })
      })
  }
  getDashboards()
  function renderDashboard (e) {
    let targetElementId = undefined;
    if (e.target) {
      let element = e.target.parentNode
      targetElementId = element.dataset.id
    }

    const dashboards = rawDashboards


      ? rawDashboards.map((json) => DashboardVO.fromJSON(json))
      : [];


    dashboards.forEach((dashboardVO) => {


      if (targetElementId === dashboardVO.id || dashboardVO.id === e) {

        domDashboardTemplate.removeAttribute('id');
        domDashboardTemplate.remove();

        newDashboard.id = dashboardVO.id
        domDashboard.appendChild(newDashboard);

        //_________ Рендер колонок____________
        while (newDashboard.children.length > 1) {
          newDashboard.removeChild(newDashboard.lastChild);
        }
        const columList = []
        for (var key in dashboardVO) {
          if(dashboardVO[key] && key !== 'id' && key !== 'dashboard_name') {
            columList.push(dashboardVO[key])
          }
        }
        columList.forEach(element => {
          const cloneCol = clone.cloneNode(true)
          if (!element.indexOf(dashboardVO.id)) {
            cloneCol.id = element
          } else {
            return
          }
          QUERY(cloneCol, 'columnNameTemp').innerText = columList[columList.indexOf(element) + 1]
          newDashboard.appendChild(cloneCol)

          cloneCol.style.display = 'block';

          QUERY(cloneCol, 'columnNameTemp').style.display = 'none';
          QUERY(cloneCol, 'columnNameInp').style.display = 'block';
        })
        domDashboardName.innerText = dashboardVO.dashboard_name
        getTasks (newDashboard.id)
      }
    })
  }
  function renderDashboardList (dashboardVO) {
    console.log("> function renderDashboardList")
    // const newDashboardItem =   dashboardItem.cloneNode(true);
    // newDashboardItem.setAttribute('data-id', dashboardVO.id)
    // QUERY(newDashboardItem, 'dashboardName').innerText = dashboardVO.dashboard_name
    // newDashboardItem.classList.remove("hidden")
    // domDashboardList.appendChild(newDashboardItem)
    // countDashboards ()
    //
    // QUERY(newDashboardItem, "dashboardName").onclick = (e) =>
    // {
    //   renderDashboard (e)
    // }
  }

  function getTasks (id) {
    fetch('http://127.0.0.1:8007/tasks',{
      method: 'get',
      headers: headers,
    })
      .then(function (response) {
        response.json().then(function (data) {
          rawTasks = data.result
          for (let key in rawTasks) {
            mapTags.set(rawTasks[key][0], rawTasks[key][2])
          }
          const tasks = rawTasks
            ? rawTasks.map((json) => TaskVO.fromJSON(json))
            : [];

          tasks.forEach((taskVO) => renderTask(taskVO));
        })
      })
  }

    function renderTask(taskVO) {
      console.log(domTemplateTask)

      domTemplateTask.style.display = "block"
      const domTaskClone = domTemplateTask.cloneNode(true);
      domTaskClone.setAttribute('id', taskVO.id)
      domTaskClone.dataset.id = taskVO.id;

      QUERY(domTaskClone, DOM.Template.Task.TITLE).innerText = taskVO.title;
      QUERY(domTaskClone, DOM.Template.Task.BODY).innerText = taskVO.body;
      // QUERY(domTaskClone, DOM.Template.Task.TAG).innerText = taskVO.tag;
      // QUERY(domTaskClone, DOM.Template.Task.DATE).innerText = counterDaysLeft(taskVO.dt_end)
      // templateColorIconClock (domTaskClone, counterDaysLeft(taskVO.dt_end))
      //
      // switch(parseInt(taskVO.tag)) {
      //   case 1:
      //     QUERY(domTaskClone, DOM.Template.Task.TAG).innerText = "Design";
      //     break;
      //   case 2:
      //     QUERY(domTaskClone, DOM.Template.Task.TAG).innerText = "Web";
      //     break;
      //   case 3:
      //     QUERY(domTaskClone, DOM.Template.Task.TAG).innerText = "Front";
      //     break;
      //   case 4:
      //     QUERY(domTaskClone, DOM.Template.Task.TAG).innerText = "Back";
      //     break;
      // };
      // switch(parseInt(taskVO.priority)) {
      //   case 1:
      //     QUERY(domTaskClone, DOM.Template.Task.PRIORITY).classList.add('text-red-500');
      //     break;
      //   case 2:
      //     QUERY(domTaskClone, DOM.Template.Task.PRIORITY).classList.add('text-orange-400');
      //     break;
      //   case 3:
      //     QUERY(domTaskClone, DOM.Template.Task.PRIORITY).classList.add('text-yellow-300');
      //     break;
      //   case 4:
      //     QUERY(domTaskClone, DOM.Template.Task.PRIORITY).classList.add('text-emerald-500');
      //     break;
      // };

      if (getDOM(taskVO.id_status)) {
        const targetCol = getDOM(taskVO.id_status)
        console.log(targetCol)
        targetCol.querySelector("div[data-box]").prepend(domTaskClone);
      } else {
        console.log('Колонки не существует')
      }
    }

  }, "1000");
}