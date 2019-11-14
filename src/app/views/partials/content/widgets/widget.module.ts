import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatChipsModule, } from '@angular/material';
import { CoreModule } from '../../../../core/core.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// Datatable
import { DataTableComponent } from './general/data-table/data-table.component';
// General widgets
import { Widget1Component } from './widget1/widget1.component';
import { Widget4Component } from './widget4/widget4.component';
import { Widget5Component } from './widget5/widget5.component';
import { Widget12Component } from './widget12/widget12.component';
import { Widget14Component } from './widget14/widget14.component';
import { Widget26Component } from './widget26/widget26.component';
import { Timeline2Component } from './timeline2/timeline2.component';
import { WidgetMonthComponent } from './widget_month/widget_month.component';
import { WidgetDayComponent } from './widget-day/widget-day.component';
import { PortletModule } from '../general/portlet/portlet.module';
import { WidgetDayactivityComponent } from './widget-dayactivity/widget-dayactivity.component';
import { WidgetActivityIconModule } from './widget-activity-icon/widget-activity-icon.module';

@NgModule({
	declarations: [
		DataTableComponent,
		// Widgets
		Widget1Component,
		Widget4Component,
		Widget5Component,
		Widget12Component,
		Widget14Component,
		Widget26Component,
		Timeline2Component,
		WidgetMonthComponent,
		WidgetDayComponent,
		WidgetDayactivityComponent
	],
	exports: [
		DataTableComponent,
		// Widgets
		Widget1Component,
		Widget4Component,
		Widget5Component,
		Widget12Component,
		Widget14Component,
		Widget26Component,
		Timeline2Component,
		WidgetMonthComponent
	],
	imports: [
		CommonModule,
		PerfectScrollbarModule,
		MatTableModule,
		CoreModule,
		MatChipsModule,
		MatIconModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatPaginatorModule,
		MatSortModule,
		PortletModule,
		WidgetActivityIconModule
	]
})
export class WidgetModule {
}
