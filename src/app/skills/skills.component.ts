import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private sideNavService: SidenavService) { }

  ngOnInit() {
  }

  closeNav() {
    this.sideNavService.closeNav();
  }

}
