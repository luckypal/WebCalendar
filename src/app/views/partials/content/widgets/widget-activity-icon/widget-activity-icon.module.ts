import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { WidgetActivityIconComponent } from './widget-activity-icon.component';

@NgModule({
	declarations: [
		WidgetActivityIconComponent
	],
	exports: [
    WidgetActivityIconComponent
	],
	imports: [
    CommonModule,
    MatIconModule
	]
})
export class WidgetActivityIconModule {
}
