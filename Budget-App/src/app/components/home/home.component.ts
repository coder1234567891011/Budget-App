import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  userId = '1143'
  widgetList: Map<string,string> = new Map<string, string>()
  widgetTypes: Array<string> = ['Welcome Message', 'Goal Progress', 'Net Worth Graph', 'Add Widget']
  formHidden = true

  ngOnInit(){
    this.addWidget('Welcome Message', this.userId)
    this.addWidget('Add Widget', this.userId)
  }

  addWidget(widgetType: string, userId: string){
    this.widgetList.set(widgetType, userId)
  }

  deleteWidget(widgetType:string){
    this.widgetList.delete(widgetType)
  }

  openForm(){
    this.formHidden = false
  }

  
}
