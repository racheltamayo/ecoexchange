import { Component, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  logoUrl: SafeResourceUrl;
  isMinimized = false;
  showHeaderContent = true;

  constructor(private sanitizer: DomSanitizer) {
    this.logoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/logo.png'); // for the recyclable logo
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.checkScreenSize();
  }
  private checkScreenSize() { // for showing the menu
    this.isMinimized = window.innerWidth <= 700;
    this.showHeaderContent = window.innerWidth > 700;
  }
}
