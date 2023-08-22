<template>
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
</template>

<script>

</script>

<style scoped>
.container {
  background: rgba(250, 255, 255, 1);
  width: 350px;
  height: 500px;
  border-radius: 20px;
  margin: auto;
  margin-top: 10%;
  position: relative;
  padding: 30px;
}
.btnClose {
  float: right;
}
.btnConfirm {
  margin-top: 15px;
  background-color: lightgray;
  border-radius: 5px;
  height: 35px;
  width: 170px;
}
.inpTitle {
  width: 100%;
  border-radius: 5px;
  background-color: rgba(237, 237, 237, 0.98);
  min-height: 35px;
}
.inpBody {
  width: 100%;
  border-radius: 5px;
  background-color: rgba(237, 237, 237, 0.98);
  min-height: 100px;
}
.inpDate {
  width: 100%;
  background-color: rgba(237, 237, 237, 0.98);
}
.title {
  font-size: 20px;
}
select {
  width: 100%;
  border-radius: 5px;
  background-color: rgba(237, 237, 237, 0.98);
  min-height: 20px;
}

label {
  font-size: 12px;
}

</style>

<!--<v-row data-test-id="task-popup" class="w-100 h-100" style="background: rgba(104, 104, 104, 0.44);">-->
<!--<v-container class="container" >-->
<!--  <v-row class="mx-2 mb-5">-->
<!--    <h2>${this.#title}</h2>-->
<!--    <v-spacer></v-spacer>-->
<!--    <v-btn data-id="btnClose">Close</v-btn>-->
<!--  </v-row>-->
<!--  <div>-->
<!--    <v-text-field-->
<!--        data-id="inpTitle"-->
<!--        value="${this.#taskTitle}"-->
<!--        label="Title:"-->
<!--        :rules="rules"-->
<!--        hide-details="auto"-->
<!--    ></v-text-field>-->
<!--    <v-textarea-->
<!--        label="Description:"-->
<!--        data-id="inpBody"-->
<!--    >${this.#taskBody}</v-textarea>-->
<!--    <label>Deadline:</label>-->
<!--    <input data-id="inpDate" value="${this.#taskDate}" class="dateInp" type="date">-->
<!--    <label>Select tag:</label>-->
<!--    <select-->
<!--        data-id="selectTag"-->
<!--        class="selector"-->
<!--    >-->
<!--      <option>Choose a tag</option>-->
<!--      <option value="1">Design</option>-->
<!--      <option value="2">Web</option>-->
<!--      <option value="3">Front</option>-->
<!--      <option value="4">Back</option>-->
<!--    </select>-->
<!--    <label>Select priority:</label>-->
<!--    <select-->
<!--        data-id="inpPriority"-->
<!--        class="selector"-->
<!--    >-->
<!--      <option>Priority choice</option>-->
<!--      <option value="1">High Priority</option>-->
<!--      <option value="2">Medium Priority</option>-->
<!--      <option value="3">Low Priority</option>-->
<!--      <option value="4">On Standby</option>-->
<!--    </select>-->
<!--    <v-btn data-id="btnConfirm">Confirm</v-btn>-->
<!--  </div>-->
<!--</v-container>-->
<!--</v-row>-->