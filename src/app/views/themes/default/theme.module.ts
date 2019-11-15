import { NgxPermissionsModule } from 'ngx-permissions';
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatProgressBarModule, MatTabsModule, MatTooltipModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatCommonModule, MatDialogModule, MatIconModule, MatSelectModule, MatSlideToggleModule, MatCheckboxModule, MatChipsModule, MatListModule, MatSliderModule, } from '@angular/material';
// NgBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Translation
import { TranslateModule } from '@ngx-translate/core';
// Loading bar
import { LoadingBarModule } from '@ngx-loading-bar/core';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Ngx DatePicker
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
// Perfect Scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// SVG inline
import { InlineSVGModule } from 'ng-inline-svg';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { HeaderComponent } from './header/header.component';
import { AsideLeftComponent } from './aside/aside-left.component';
import { FooterComponent } from './footer/footer.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { BrandComponent } from './header/brand/brand.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import { MenuHorizontalComponent } from './header/menu-horizontal/menu-horizontal.component';
import { PartialsModule } from '../../partials/partials.module';
import { BaseComponent } from './base/base.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesModule } from '../../pages/pages.module';
import { HtmlClassService } from './html-class.service';
import { HeaderMobileComponent } from './header/header-mobile/header-mobile.component';
import { ErrorPageComponent } from './content/error-page/error-page.component';
import { PermissionEffects, permissionsReducer, RoleEffects, rolesReducer } from '../../../core/auth';
import { AddActivityComponent } from './modal/add-activity/add-activity.component';
import { ActivityConfComponent } from './modal/activity-conf/activity-conf.component';
import { EditDayActivityComponent } from './modal/edit-day-activity/edit-day-activity.component';
import { WidgetActivityIconModule } from '../../partials/content/widgets/widget-activity-icon/widget-activity-icon.module';
import { PublishModalComponent } from './modal/publish-modal/publish-modal.component';
import { SaveModalComponent } from './modal/save-modal/save-modal.component';

@NgModule({
	entryComponents: [
		ActivityConfComponent,
		AddActivityComponent,
		PublishModalComponent,
		SaveModalComponent,
	],
	declarations: [
		BaseComponent,
		FooterComponent,

		// headers
		HeaderComponent,
		BrandComponent,
		HeaderMobileComponent,

		// subheader
		SubheaderComponent,

		// topbar components
		TopbarComponent,

		// aside left menu components
		AsideLeftComponent,

		// horizontal menu components
		MenuHorizontalComponent,

		ErrorPageComponent,

		AddActivityComponent,

		ActivityConfComponent,

		EditDayActivityComponent,

		PublishModalComponent,

		SaveModalComponent,
	],
	exports: [
		BaseComponent,
		FooterComponent,

		// headers
		HeaderComponent,
		BrandComponent,
		HeaderMobileComponent,

		// subheader
		SubheaderComponent,

		// topbar components
		TopbarComponent,

		// aside left menu components
		AsideLeftComponent,

		// horizontal menu components
		MenuHorizontalComponent,

		ErrorPageComponent,
	],
	providers: [
		HtmlClassService,
	],
	imports: [
		CommonModule,
		RouterModule,
		NgxPermissionsModule.forChild(),
		StoreModule.forFeature('roles', rolesReducer),
		StoreModule.forFeature('permissions', permissionsReducer),
		EffectsModule.forFeature([PermissionEffects, RoleEffects]),
		PagesRoutingModule,
		PagesModule,
		PartialsModule,
		CoreModule,
		PerfectScrollbarModule,
		NgbModule,
		FormsModule,
		MatCheckboxModule,
		MatChipsModule,
		MatDatepickerModule,
		MatDialogModule,
		MatCommonModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatSelectModule,
		MatSlideToggleModule,
		MatProgressBarModule,
		MatTabsModule,
		MatButtonModule,
		MatTooltipModule,
		MatSliderModule,
		TranslateModule.forChild(),
		LoadingBarModule,
		NgxDaterangepickerMd,
		InlineSVGModule,
		WidgetActivityIconModule
	]
})
export class ThemeModule {
}
