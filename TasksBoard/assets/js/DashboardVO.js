export class DashboardVO {

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