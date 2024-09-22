import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  widgetList: Array<string> = []
  widgetTypes: Array<string> = ['Goal Progress', 'Net Worth Graph', 'Add Widget']
  formHidden = true
  addWidget(widgetType: string){
    this.widgetList.push(widgetType)
  }

  openForm(){
    this.formHidden = false
  }
}
