import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menuValue: boolean = false
  menu_icon: string = 'fa-solid fa-bars';

  openMenu() {
    this.menuValue = !this.menuValue;
    this.menu_icon = this.menuValue ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  }

  closeMenu() {
    this.menuValue = false;
    this.menu_icon = 'fa-solid fa-bars';
  }
}
