// Angular
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	MatAutocompleteModule,
	MatButtonModule,
	MatCardModule,
	MatCheckboxModule,
	MatDatepickerModule,
	MatDialogModule,
	MatIconModule,
	MatInputModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatSelectModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatTabsModule,
	MatTooltipModule,
	MatSlideToggleModule,
	MatSliderModule,
	MatChipsModule
} from '@angular/material';
// NgBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Perfect Scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// Core module
import { CoreModule } from '../../core/core.module';
// CRUD Partials
import { ActionNotificationComponent, AlertComponent, DeleteEntityDialogComponent, FetchEntityDialogComponent, UpdateStatusDialogComponent } from './content/crud';
// Layout partials
import {
	ContextMenu2Component,
	ContextMenuComponent,
	LanguageSelectorComponent,
	NotificationComponent,
	QuickActionComponent,
	QuickPanelComponent,
	ScrollTopComponent,
	SearchDefaultComponent,
	SearchDropdownComponent,
	SearchResultComponent,
	SplashScreenComponent,
	StickyToolbarComponent,
	Subheader1Component,
	Subheader2Component,
	Subheader3Component,
	UserProfile2Component,
	UserProfileComponent,
} from './layout';
// General
import { NoticeComponent } from './content/general/notice/notice.component';
import { PortletModule } from './content/general/portlet/portlet.module';
// Errpr
import { ErrorComponent } from './content/general/error/error.component';
// Extra module
import { WidgetModule } from './content/widgets/widget.module';
// SVG inline
import { InlineSVGModule } from 'ng-inline-svg';
import { CartComponent } from './layout/topbar/cart/cart.component';
import { MonthViewComponent } from '../themes/default/modal/month-view/month-view.component';
import { DayModalComponent } from '../themes/default/modal/day-modal/day-modal.component';
import { ActivityUIModalComponent } from '../themes/default/modal/activity-uimodal/activity-uimodal.component';
import { BackgroundUIModalComponent } from '../themes/default/modal/background-uimodal/background-uimodal.component';
import { TitleDisplayModalComponent } from '../themes/default/modal/title-display-modal/title-display-modal.component';
import { WidgetActivityIconModule } from './content/widgets/widget-activity-icon/widget-activity-icon.module';

@NgModule({
	entryComponents: [
		MonthViewComponent,
		DayModalComponent,
		ActivityUIModalComponent,
		BackgroundUIModalComponent,
		TitleDisplayModalComponent,
	],
	declarations: [
		ScrollTopComponent,
		NoticeComponent,
		ActionNotificationComponent,
		DeleteEntityDialogComponent,
		FetchEntityDialogComponent,
		UpdateStatusDialogComponent,
		AlertComponent,

		// topbar components
		ContextMenu2Component,
		ContextMenuComponent,
		QuickPanelComponent,
		ScrollTopComponent,
		SearchResultComponent,
		SplashScreenComponent,
		StickyToolbarComponent,
		Subheader1Component,
		Subheader2Component,
		Subheader3Component,
		LanguageSelectorComponent,
		NotificationComponent,
		QuickActionComponent,
		SearchDefaultComponent,
		SearchDropdownComponent,
		UserProfileComponent,
		UserProfile2Component,
		CartComponent,

		ErrorComponent,
		MonthViewComponent,
		DayModalComponent,
		ActivityUIModalComponent,
		BackgroundUIModalComponent,
		TitleDisplayModalComponent,
	],
	exports: [
		WidgetModule,
		PortletModule,

		ScrollTopComponent,
		NoticeComponent,
		ActionNotificationComponent,
		DeleteEntityDialogComponent,
		FetchEntityDialogComponent,
		UpdateStatusDialogComponent,
		AlertComponent,

		// topbar components
		ContextMenu2Component,
		ContextMenuComponent,
		QuickPanelComponent,
		ScrollTopComponent,
		SearchResultComponent,
		SplashScreenComponent,
		StickyToolbarComponent,
		Subheader1Component,
		Subheader2Component,
		Subheader3Component,
		LanguageSelectorComponent,
		NotificationComponent,
		QuickActionComponent,
		SearchDefaultComponent,
		SearchDropdownComponent,
		UserProfileComponent,
		UserProfile2Component,
		CartComponent,

		ErrorComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		NgbModule,
		PerfectScrollbarModule,
		InlineSVGModule,
		CoreModule,
		PortletModule,
		WidgetModule,
		MatButtonModule,
		MatMenuModule,
		MatSelectModule,
		MatInputModule,
		MatTableModule,
		MatAutocompleteModule,
		MatChipsModule,
		MatRadioModule,
		MatIconModule,
		MatNativeDateModule,
		MatSlideToggleModule,
		MatSliderModule,
		MatProgressBarModule,
		MatDatepickerModule,
		MatCardModule,
		MatPaginatorModule,
		MatSortModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatTabsModule,
		MatTooltipModule,
		MatDialogModule,
		WidgetActivityIconModule
	]
})
export class PartialsModule {
}
