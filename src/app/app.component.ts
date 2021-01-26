import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from './theme/theme.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sidebar';
  sidebar = false;
  isOpen = false;

  @HostListener('window', ['$event.target'])
  onClick() {
    this.sidebar = false;
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private themeService: ThemeService) { }

  ngOnInit() {
    console.log("sayfa yük", this.sidebar)
    this.activatedRoute.queryParams.subscribe((qp) => {
      console.log('params: ', qp);
      this.sidebar = qp.sidebarOpenState;
      console.log('click 2: ', this.sidebar);
    });
  }

  openSidebar() {
    this.sidebar = !this.sidebar;
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { sidebarOpenState: this.sidebar },
      queryParamsHandling: 'merge'
    });
    console.log('click 1: ', this.sidebar);

  }

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  toggle() {
    const active = this.themeService.getActiveTheme();
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }


}
