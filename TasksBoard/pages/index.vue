<template>
  <v-col
      id="popupContainer"
      class="h-screen"
      style="padding:0; margin:0; position: absolute; height: 100%; background-color: rgba(20, 20, 20, 0.48); z-index: 5555; visibility: hidden"
  >
<!--   <TaskPopupContainer />-->
    <div class="spinner"></div>
  </v-col>

  <v-col style="background-color: #e5fcf7; background-size: 100%;"  >
    <v-row class="d-flex flex-row rounded-xl mx-4 my-4 h-100"
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
          <v-row class="align-center pb-2 text-grey-darken-2">
           Name board
          </v-row>
          <v-btn icon="mdi-plus" size="x-small" class="align-center text-grey-darken-2 mb-6 mt-4">
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
              <v-col class="font-weight-bold text-h6">Name board</v-col>
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
            <v-row class="justify-space-between v-row-auto"
                      style="min-height: 600px">
              <v-col class="rounded-lg ms-3"
                     data-test-id="tasks-column"
                     style="background-color: #e5e9ec; max-width: 320px">
                <v-row class="font-weight-bold text-h7 align-center">
                  <v-col><span>Name column </span>
                    <span class="text-grey-lighten-1">0</span></v-col>
                  <v-row class="justify-end mr-3 text-grey-lighten-1">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-row>
                </v-row>
                <v-row class="w-100% mx-0 mb-3" style="border-bottom: 1px solid #BDBDBD"></v-row>
                <div>
                  <v-btn @click="addNewTask" color="#f9fafb" id="btnAddTask" class="w-100 mb-3">Add task</v-btn>
                  <div id="templateTask" style="visibility: hidden">
                    <TaskCard />
                  </div>
                </div>
              </v-col>
            </v-row>
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
import {main} from "assets/js/main";
import {TaskPopup} from "assets/js/TaskPopup";
import TaskPopupContainer from "~/components/TaskPopupContainer.vue";

export default {
  components: {TaskPopupContainer},
  methods: {
    addNewTask(e) {
     main(e)
    }
  }
};
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