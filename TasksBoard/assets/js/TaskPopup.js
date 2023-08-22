export class TaskPopup {
  #title;
  #tags;
  #confirmText;
  #confirmCallback;
  #closeCallback;
  constructor(title, tags, confirmText, confirmCallback, closeCallback) {
    this.#title = title;
    this.#tags = tags;
    this.#confirmText = confirmText;
    this.#confirmCallback = confirmCallback;
    this.#closeCallback = closeCallback;
  }

  #taskTitle = '';
  #taskBody = '';
  #taskDate = '';
  #taskTags = '';
  #taskPriority = '';

  set taskTitle(value) {
    this.#taskTitle = value;
  }
  set taskBody(value) {
    this.#taskBody = value;
  }

  set taskDate(value) {
    this.#taskDate = value;
  }

  set taskTags(value) {
    this.#taskTags = value;
  }
  set taskPriority(value) {
    this.#taskPriority = value;
  }



  render() {
    const div = document.createElement('div');
    div.innerHTML = `
  <div data-test-id="task-popup" class="container">
    <button class="btnClose" data-id="btnClose"> <i><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="currentColor" d="M3 16.74L7.76 12L3 7.26L7.26 3L12 7.76L16.74 3L21 7.26L16.24 12L21 16.74L16.74 21L12 16.24L7.26 21L3 16.74m9-3.33l4.74 4.75l1.42-1.42L13.41 12l4.75-4.74l-1.42-1.42L12 10.59L7.26 5.84L5.84 7.26L10.59 12l-4.75 4.74l1.42 1.42L12 13.41Z"/></svg></i> </button>
    <div>
      <span class="title">${this.#title}</span>
    </div>
    <div class="flex flex-row">
      <div class="flex flex-col w-full">
        <label>Title: </label>
        <input
            class="inpTitle"
            data-id="inpTitle"
            type="text"
            value="${this.#taskTitle}"
            placeholder="Title"
        />
      </div>
    </div>
    <div>
      <label>Description: </label>
      <textarea
          class="inpBody"
          data-id="inpBody"
          type="text"
          placeholder="Description"
      >${this.#taskBody}</textarea>
    </div>
    <div>
      <div>
        <label>Deadline:</label>
        <input data-id="inpDate" value="${this.#taskDate}" class="inpDate" type="date">
      </div>
    </div>
    <div>
      <div>
        <label>Select tag:</label>
        <select
            data-id="selectTag"
        >
          <option>Choose a tag</option>
          <option  value="1">Design</option>
          <option value="2">Web</option>
          <option value="3">Front</option>
          <option  value="4">Back</option>
        </select>
      </div>
    </div>
    <div>
      <div>
        <label>Select priority:</label>
        <select data-id="inpPriority">
          <option>Priority choice</option>
          <option value="1">High Priority</option>
          <option value="2">Medium Priority</option>
          <option  value="3">Low Priority</option>
          <option  value="4">On Standby</option>
        </select>
      </div>
    </div>
    <button data-id="btnConfirm" class="btnConfirm">${this.#confirmText}</button>
</div>
    `;
    console.log('div.firstChild', div.children);


    const popup = div.children[0];

    const domBtnClose = popup.querySelector('[data-id="btnClose"]');
    const domBtnConfirm = popup.querySelector('[data-id="btnConfirm"]');
    const domInpTitle = popup.querySelector('[data-id="inpTitle"]');
    const domInpBody = popup.querySelector('[data-id="inpBody"]');
    const domInpDate = popup.querySelector('[data-id="inpDate"]');
    const domSelectTag = popup.querySelector('[data-id="selectTag"]');
    const domInpPriority = popup.querySelector('[data-id="inpPriority"]');


    domBtnClose.onclick = () => {
      console.log("Кнопка закрыть")
      domBtnClose.onclick = null;
      domBtnConfirm.onclick = null;
      this.#closeCallback();
    };

    domBtnConfirm.onclick = () => {
      const taskTitle = domInpTitle.value;
      const taskBody = domInpBody.value;
      const taskDate = domInpDate.value;
      const taskTags = domSelectTag.value;
      const taskPriority = domInpPriority.value;
      this.#confirmCallback(taskTitle, taskBody, taskDate, taskTags, taskPriority);

    };

    return div.children[0];
  }
}
