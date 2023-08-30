export class TaskVO {
  static fromJSON(json) {
    return new TaskVO(json.id, json.title, json.body, json.dt_end, json.tag, json.priority, json.id_status, json.id_dashboard);
  }

  constructor(id, title, body, date, tag, priority, status, dashboard) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.dt_end = date;
    this.tag = tag;
    this.priority = priority;
    this.id_status = status;
    this.id_dashboard = dashboard;
  }
}