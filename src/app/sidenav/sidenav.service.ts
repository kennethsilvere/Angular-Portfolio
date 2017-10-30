import { Subject } from 'rxjs/Subject';

export class SidenavService {
    sideNavButton = new Subject<boolean>();

    private showNav: boolean = true;

    toggleSideNav() {
        this.sideNavButton.next(this.showNav);
        this.showNav = !this.showNav;
    }

    closeNav() {
        this.showNav = false;
        this.toggleSideNav();
    }
}