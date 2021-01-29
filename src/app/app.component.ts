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
  darkMode = false;
  lightMode = true;

  @HostListener('window', ['$event.target'])
  onClick() {
    this.sidebar = false;
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private themeService: ThemeService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((qp) => {
      this.sidebar = qp.sidebarOpenState === 'true' ? true : false;
    });
  }

  openSidebar() {
    this.sidebar = !this.sidebar;
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { sidebarOpenState: this.sidebar },
      queryParamsHandling: 'merge'
    });
  }
  openMenu() {
    this.isOpen = !this.isOpen;
  }
  toggle() {
    this.playAudio()
    const active = this.themeService.getActiveTheme();
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
      this.darkMode = true;
      this.lightMode = false;
    } else {
      this.themeService.setTheme('light');
      this.darkMode = false;
      this.lightMode = true;
    }
  }
  playAudio() {
    let audio = new Audio();
    audio.src = "assets/audio/click-sound.mp3";
    audio.load();
    audio.play();
  }

}
