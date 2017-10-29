import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  width: number;

  showNav: boolean = false;

  ngOnInit() {
    this.width = window.innerWidth;
    this.showNav = false;
  }

  ngOnChanges() {
    this.width = window.innerWidth;
  }

  onShowNav() {
    this.showNav = !this.showNav;
  }

}
