<template>
  <v-col
      id="popupContainer"
      class="h-screen"
      style="padding:0; margin:0; position: absolute; height: 100%; background-color: rgba(20, 20, 20, 0.48); z-index: 5555; visibility: hidden"
  >
<!--   <TaskPopupContainer />-->
    <div class="spinner"></div>
  </v-col>

  <v-col class="flex" style="background-color: #e5fcf7; background-size: 100%; height: 100%;  position: absolute;"  >
    <v-row class="d-flex flex-row rounded-xl mx-4  mb-5 mt-4 h-100"
           style="background-color: #e5e9ec">
      <v-col class="rounded-xl w-25"
             style="background-color: #e5e9ec">
        <v-col class="ml-6 mt-4">
          <v-row class="align-center text-teal-darken-3">
            <v-icon size="55">mdi-alpha-t-circle-outline</v-icon>
            <v-col class="font-weight-bold text-h4">Taski</v-col>
          </v-row>
          <v-row class="mt-7">
            <v-avatar color="teal-darken-3" size="x-large">
              Avatar
            </v-avatar>
            <v-col class="ml-3">
              <v-row class="font-weight-bold text-h5">
                <div>Name Surname</div>
              </v-row>
              <v-row class="text-h7">
                Premium account
              </v-row>
            </v-col>
          </v-row>
          <v-row class="align-center pt-4 text-grey-darken-2">
            <v-icon size="large">mdi-view-dashboard</v-icon>
            <v-col>Dashboards</v-col>
            <v-spacer></v-spacer>
            <v-chip size="small" class="mr-5 bg-teal-darken-3">0</v-chip>
          </v-row>
          <v-row id="dashboardsList" class="align-center pb-2 text-grey-darken-2">
            <div data-id="dashboardItem" style="display: none">
              <button data-id="dashboardName">name</button>
            </div>
          </v-row>
          <div id="dashboardInpName" style="display: none">
            <input
                data-id="inpTitle"
                type="text"
                placeholder="New dashboard"/>
          </div>
          <div id="btnSafeDashboard" style="display: none" >
            <button data-id="confirm">Сохранить</button>
            <button data-id="cancel">Отменить</button>
          </div>
          <v-btn @click="addNewDashboard" icon="mdi-plus" size="x-small" class="align-center text-grey-darken-2 mb-6 mt-4">
          </v-btn>
          <v-row class="w-100% me-4" style="border-bottom: 1px solid #BDBDBD"></v-row>
          <v-row class="font-weight-bold text-h6 pt-4">
            Tasks
          </v-row>
          <v-row class="align-center text-grey-darken-2" style="height: 35px">
            <v-icon size="default" class="text-red-lighten-1">mdi-label</v-icon>
            <v-col style="white-space: nowrap">High Priority</v-col>
            <v-spacer></v-spacer>
            <v-chip size="small" class="mr-5 bg-teal-darken-3">0</v-chip>
          </v-row>
          <v-row class="align-center text-grey-darken-2" style="height: 35px">
            <v-icon size="default" class="text-orange-lighten-1">mdi-label</v-icon>
            <v-col style="white-space: nowrap">Medium Priority</v-col>
            <v-spacer></v-spacer>
            <v-chip size="small" class="mr-5 bg-teal-darken-3">0</v-chip>
          </v-row>
          <v-row class="align-center text-grey-darken-2" style="height: 35px">
            <v-icon size="default" class="text-yellow-lighten-1">mdi-label</v-icon>
            <v-col style="white-space: nowrap">Low Priority</v-col>
            <v-spacer></v-spacer>
            <v-chip size="small" class="mr-5 bg-teal-darken-3">0</v-chip>
          </v-row>
          <v-row class="align-center text-grey-darken-2" style="height: 35px">
            <v-icon size="default" class="text-green-lighten-1">mdi-label</v-icon>
            <v-col style="white-space: nowrap">On Standby</v-col>
            <v-spacer></v-spacer>
            <v-chip size="small" class="mr-5 bg-teal-darken-3">0</v-chip>
          </v-row>
          <v-row class="w-100% me-4 pt-5" style="border-bottom: 1px solid #BDBDBD"></v-row>
          <v-spacer ></v-spacer>
          <v-row class="align-center text-grey-darken-2 mt-4" style="height: 50px">
            <v-icon size="large">mdi-logout</v-icon>
            <v-col>Log out</v-col>
          </v-row>
        </v-col>
      </v-col>
      <v-col cols="auto" class="w-75 rounded-t-xl py-8 mb-4"
             style="background-color: #e5e9ec">
        <v-row class="w-100 rounded-t-xl "
               style="height: 100%;  background-color: #f9fafb">
          <v-col>
            <v-row class="w-100 align-center ">
              <v-col id="dashboardName" class="font-weight-bold text-h6">Name board</v-col>
              <v-row class="align-center ms-7 justify-end mr-3 " >
                <v-icon icon="mdi-account-group-outline" color=teal-darken-2 size="x-large"></v-icon>
                <div class="font-bold mx-3" >Groups</div>
                <v-btn size="x-small" icon="mdi-plus"></v-btn>
              </v-row>
            </v-row>
            <v-row class="text-grey-darken-1">
              <v-col class="align-center">
                <v-btn icon="mdi-filter" size="x-small"></v-btn>
              </v-col>
              <v-row class="align-center ms-7 justify-end mr-9 " >
                <div class="font-bold mx-3" >(Список людей в группе)</div>
                <v-avatar color="blue-grey-lighten-4" size="25"></v-avatar>
                <v-btn icon="mdi-plus" size="25"></v-btn>
              </v-row>
            </v-row>
            <v-row class="w-100% mx-0 my-3" style="border-bottom: 1px solid #E0E0E0"></v-row>
            <div id="dashboard" style="height: 100%">
              <v-row id="dashboardTemplate" class=" v-row-auto "
                     style="min-height: 800px">
                <v-col id="cloneColumn" class="column rounded-lg ms-3"
                       data-test-id="tasks-column"
                       style="background-color: #e5e9ec; max-width: 320px; display: none">
                  <v-row class="font-weight-bold text-h7 align-center">
                    <v-col>
                      <span data-id="columnNameTemp" style="display: none">In Progress </span>
                      <input class="rounded-md"  data-id="columnNameInp" value="" placeholder="Name">
                      <span class="text-gray-400">0</span>
                    </v-col>
                    <v-row class="justify-end mr-3 text-grey-lighten-1">
                      <v-icon>mdi-dots-vertical</v-icon>
                      <button data-id="btnAddColumn" style="display: none">
                        <svg style="pointer-events: none" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24">
                          <path fill="currentColor"
                                d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/>
                        </svg>
                      </button>
                    </v-row>
                  </v-row>
                  <v-row class="w-100% mx-0 mb-3" style="border-bottom: 1px solid #BDBDBD"></v-row>
                  <div>
                    <v-btn @click="addNewTask" color="#f9fafb" id="btnAddTask" class="w-100 mb-3">Add task</v-btn>
                    <div id="templateTask" style="display: none">
                      <TaskCard/>
                    </div>
                  </div>
                  <div data-box="true" >
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
        <v-row class="w-100 rounded-b-xl mt-4 align-center"
               style="height: 40px; background-color: #f9fafb"
        >
        </v-row>
      </v-col>
    </v-row>
  </v-col>

</template>

<script>


import {TaskPopup} from "assets/js/TaskPopup";
import TaskPopupContainer from "~/components/TaskPopupContainer.vue";
import {addNewDashboard} from "assets/js/createDashboard";
import {main} from "assets/js/main";
import {getDashboards} from "assets/js/getDashboard";

export default {
  components: {TaskPopupContainer},
  methods: {
    addNewTask(e) {
     main(e)
    },
    addNewDashboard () {
      addNewDashboard()
    },
    getDashboards () {
      getDashboards()
    }
  }
};
getDashboards ()
</script>

<style>
.container {
  background: rgba(250, 255, 255, 1);
  width: 350px;
  height: 500px;
  border-radius: 20px;
  margin: auto;
  margin-top: 10%;
  position: relative;
  padding: 30px;
  z-index: 999999
}
.btnClose {
  float: right;
}
.btnConfirm {
  margin-top: 15px;
  background-color: lightgray;
  border-radius: 5px;
  height: 35px;
  width: 100%;
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