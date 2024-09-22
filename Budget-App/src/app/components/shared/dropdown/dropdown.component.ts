import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() dropdownList : Array<string> = [];

  selected : string = '';
  dropdownHidden: boolean = true;

  ngOnInit(){
    this.selected = this.dropdownList[0]
  }

  toggleDropdown(){
    if(this.dropdownHidden === true){
      this.dropdownHidden = false;
    }else{
      this.dropdownHidden = true;
    }
  }
  
  selectOption(option : string){
    this.selected = option;
  }
}
