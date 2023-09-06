import DOM from './dom.js';
import {TaskVO} from "assets/js/TaskVO";
const Tags = ['Web', 'Update', 'Design', 'Content'];
const headers = {
  'Content-Type': 'application/json'
}

export const main = (e) => {
  console.log('click')

  const getDOM = (id) => document.getElementById(id);
  const domTemplateTask = getDOM(DOM.Template.TASK)
  const QUERY = (container, id) => container.querySelector(`[data-id="${id}"]`);
  getDOM(DOM.Button.ADD_TASK).onclick = () => {
    console.log('click')
  }

  templatePopupCreateTask (e)

  function templatePopupCreateTask (e) {
    console.log(e)

    //_____Написать функцию вместо parentNode
    // const idCol = e.target.parentNode.parentNode.id
    const idCol = 111
    // const idDash = e.target.parentNode.parentNode.parentNode.id
    const idDash = 222
    console.log(idCol, idDash)

    renderTaskPopup(
      null,
      'Create task',
      'Create',
      (taskTitle, taskBody, taskDate, taskTag, taskPriority) => {
        console.log(taskTitle, taskBody, taskDate, taskTag, taskPriority)
        const taskId = `task_${Date.now()}`;
        const taskVO = new TaskVO(taskId, taskTitle, taskBody, taskDate, taskTag, taskPriority);

        taskVO.id_status = idCol;
        taskVO.id_dashboard = idDash;
        console.log("TaskVO ->", taskVO)

        renderTask(taskVO);
        // saveTask(taskVO);
      }
    );
  }

  async function renderTaskPopup(
    taskVO,
    popupTitle,
    confirmText,
    processDataCallback
  ) {


    const domPopupContainer = getDOM(DOM.Popup.CONTAINER);
    const domSpinner = domPopupContainer.querySelector('.spinner');

    domPopupContainer.style.visibility = null;

    const onClosePopup = () => {
      domPopupContainer.children[0].remove();
      domPopupContainer.style.visibility = 'hidden';
    };


    const TaskPopup = (await import('./TaskPopup.js')).TaskPopup;
    console.log(TaskPopup)
    const taskPopupInstance = new TaskPopup(
      popupTitle,
      Tags,
      confirmText,
      (taskTitle, taskBody, taskDate, taskTags, taskPriority) => {
        processDataCallback(taskTitle, taskBody, taskDate, taskTags, taskPriority);
        onClosePopup();
      },
      onClosePopup
    );

    if (taskVO) {
      taskPopupInstance.taskTitle = taskVO.title;
      taskPopupInstance.taskBody = taskVO.body;
      taskPopupInstance.taskDate = taskVO.dt_end;
      taskPopupInstance.taskTags = taskVO.tag;
      taskPopupInstance.taskPriority = taskVO.priority;
    }

    document.onkeyup = (e) => {
      if (e.key === 'Escape') {
        onClosePopup();
      }
    };
    domPopupContainer.append(taskPopupInstance.render());
  }

  function renderTask(taskVO) {

    domTemplateTask.style.visibility = null;
    const domTaskClone = domTemplateTask.cloneNode(true);
    domTaskClone.setAttribute('id', taskVO.id)
    domTaskClone.dataset.id = taskVO.id;

    QUERY(domTaskClone, DOM.Template.Task.TITLE).innerText = taskVO.title;


    if (getDOM(taskVO.id_status)) {
      console.log('worked')
      const targetCol = getDOM(taskVO.id_status)
      targetCol.querySelector("div[data-box]").prepend(domTaskClone);
    } else {
      console.log('Колонки не существует')
    }
  }
}
