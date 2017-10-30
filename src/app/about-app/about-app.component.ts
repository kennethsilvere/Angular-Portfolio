import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-about-app',
  templateUrl: './about-app.component.html',
  styleUrls: ['./about-app.component.css']
})
export class AboutAppComponent implements OnInit {

  constructor(private sideNavService: SidenavService) { }

  ngOnInit() {
    
  }

  closeNav() {
    this.sideNavService.closeNav();
  }

}
