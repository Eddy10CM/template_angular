import { Component, OnInit } from '@angular/core'
import { INavData } from '@coreui/angular'
import { AuthService } from '../../shared/services/auth.service'
import { TypeMenuService } from '../../shared/services/type-menu.service'

@Component({
	selector: 'app-full',
	templateUrl: './full.component.html',
	styles: [],
})
export class FullComponent {
	public sidebarMinimized = false
	public navItems: INavData[] = []

	public themes: string[] = ['light', 'dark', 'cosmic']
	public currentTheme: string = 'dark'

	constructor(public auth: AuthService, private menu: TypeMenuService) {
		document.body.classList.add(this.currentTheme)
		this.navItems = menu.getMenu()
	}

	toggleMinimize(e: any): void {
		this.sidebarMinimized = e
	}

	changeTheme(theme: string): void {
		this.currentTheme = theme
		for (let index = 0; index < this.themes.length; index++) {
			const element = this.themes[index]
			document.body.classList.remove(element)
		}
		document.body.classList.add(theme)
	}
}
