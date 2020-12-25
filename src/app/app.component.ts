import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sidebar';
  sidebar = false;
  // @ViewChild('sidebar', {static: false}) sidebar: ElementRef;

  @HostListener('window', ['$event.target'])
  onClick() {
    this.sidebar = false;
 }

  constructor(){}

  openSidebar(){
    // this.sidebar.nativeElement.style.width ="300px";
    this.sidebar = !this.sidebar;

  }

  
}
