import DOM from './dom.js';
const Tags = ['Web', 'Update', 'Design', 'Content'];
export const main = (e) => {

  const getDOM = (id) => document.getElementById(id);
  const QUERY = (container, id) => container.querySelector(`[data-id="${id}"]`);

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

        // renderTask(taskVO);
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

    domPopupContainer.classList.remove('hidden');

    const onClosePopup = () => {
      domPopupContainer.children[0].remove();
      domPopupContainer.classList.add('hidden');
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
}
