import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CmmSearchDialogComponent } from 'src/app/common/components/ecommerce/cmm-search-dialog/cmm-search-dialog.component';
import { CmmDialogService } from 'src/app/common/services/dialogs.service';
import { icons, images, logos } from 'src/assets/images/image-routes';

@Component({
  selector: 'cmp-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {

  icons = icons

  logos = logos

  navbarItems: any[] = [
    {
      text: 'Comprar',
      link: '/products'
    },
    {
      text: 'Vender',
      link: '/products'
    },
    {
      text: 'Alquiler',
      link: '/products'
    },
    {
      text: 'Asesores',
      sectionLink: 'advisors'
    },
  ]

  /**
   * Emite evento de abrir sidenav
   */
  @Output() openSidenav: EventEmitter<boolean> = new EventEmitter()

  /**
   * Indica si el sidenav está abierto
   */
  @Input() sidenavOpen: boolean = false

  /**
   * Indica si debo mostrar el background
   */
  @Input() showBg: boolean = false

  @HostListener('window:scroll', ['$event'])
  onScroll(e: Event) {

    if (document.documentElement.scrollTop != 0) {
      this.showBg = true
    } else {
      this.showBg = false
    }

  }

  showed: string = ''

  constructor(
    private dialogsService: CmmDialogService,
    private viewportScroller: ViewportScroller,
    private router: Router
  ) { }

  /**
   * Toggle el sidenav
   */
  toggleSidenav() {

    this.sidenavOpen = !this.sidenavOpen

    this.openSidenav.emit(this.sidenavOpen)

  }

  showMenu(menu: string) {

    this.showed = menu

  }

  /**
   * Abre el diálogo para buscar
   */
  openSearch() {

    this.dialogsService.CmmOpenSearchDialog({ inputMode: 'supermarket' })

  }

  /**
   * Me lleva a una sección de la página
   * @param elementId 
   */
  navigateAnchor(elementId: string) {

    if (!location.href.includes('home')) {
      this.router.navigate(['/home'])

      setTimeout(() => {
        this.viewportScroller.scrollToAnchor(elementId)
      }, 500);

    } else {
      this.viewportScroller.scrollToAnchor(elementId)
    }

  }

}
