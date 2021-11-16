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
	public themeList: string[] = ['dark', 'light']
	public theme: string = 'dark'

	constructor(public auth: AuthService, private menu: TypeMenuService) {
		const theme = this.themeList[0]
		document.body.classList.add(theme)
		this.navItems = menu.getMenu()
	}

	toggleMinimize(e: any): void {
		this.sidebarMinimized = e
	}

	changeTheme(theme: string): void {
		for (let index = 0; index < this.themeList.length; index++) {
			const element = this.themeList[index]
			document.body.classList.remove(element)
		}
		document.body.classList.add(theme)
		this.theme = theme
	}
}
