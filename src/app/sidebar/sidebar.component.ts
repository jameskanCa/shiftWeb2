import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  change:boolean;
  constructor() { }

  ngOnInit() { 
    this.change=false;
  }
 

  switches(){
    if(this.change == true ){
      this.change = false;
  
    }else {
      this.change = true;
    }
  }
}
