import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BlankComponent } from './layout/blank/blank.component'
import { FullComponent } from './layout/full/full.component'

// modulos
import {
	AppAsideModule,
	AppBreadcrumbModule,
	AppHeaderModule,
	AppFooterModule,
	AppSidebarModule,
} from '@coreui/angular'

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar'
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar'

import {
	IconModule,
	IconSetModule,
	IconSetService,
} from '@coreui/icons-angular'

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true,
}

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { TabsModule } from 'ngx-bootstrap/tabs'
import { ChartsModule } from 'ng2-charts'
import { HashLocationStrategy, LocationStrategy } from '@angular/common'

@NgModule({
	declarations: [AppComponent, BlankComponent, FullComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		AppAsideModule,
		AppBreadcrumbModule.forRoot(),
		AppFooterModule,
		AppHeaderModule,
		AppSidebarModule,
		PerfectScrollbarModule,
		BsDropdownModule.forRoot(),
		TabsModule.forRoot(),
		ChartsModule,
		IconModule,
		IconSetModule.forRoot(),
	],
	providers: [
		{
			provide: LocationStrategy,
			useClass: HashLocationStrategy,
		},
		IconSetService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
