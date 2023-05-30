import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webpage';
  constructor(){
  }
  ngOnInit(): void {
  }

  openSideNav(sideNavBar: any) {
    sideNavBar.style.width = "45%";
  }

  closenavBar(sideNavBar: any) {
    sideNavBar.style.width = "0%";
  }

}
