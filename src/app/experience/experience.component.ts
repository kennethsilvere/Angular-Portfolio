import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private sideNavService: SidenavService) { }

  ngOnInit() {
  }

  closeNav() {
    this.sideNavService.closeNav();
  }
}
