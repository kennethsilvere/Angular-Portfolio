import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private sideNavService: SidenavService) { }

  ngOnInit() {
  }

  closeNav(){
    this.sideNavService.closeNav();
  }
}
