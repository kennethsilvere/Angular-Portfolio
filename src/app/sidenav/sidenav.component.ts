import { Component, OnInit } from '@angular/core';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private sideNavService: SidenavService) { }

  width: number;

  showNav: boolean = false;

  ngOnInit() {
    this.width = window.innerWidth;
    this.sideNavService.sideNavButton.subscribe(
      (showNav: boolean) => {
        this.showNav = showNav;
      }
    );
  }

  ngOnChanges() {
    this.width = window.innerWidth;
  }

  onShowNav() {
    this.sideNavService.toggleSideNav();
  }

}
