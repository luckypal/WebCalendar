// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// NgBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Partials
import { PartialsModule } from '../partials/partials.module';
import { CoreModule } from '../../core/core.module';
import { EditDayActivityComponent } from '../themes/default/modal/edit-day-activity/edit-day-activity.component';

@NgModule({
	entryComponents: [
		EditDayActivityComponent
	],
	declarations: [],
	exports: [],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		NgbModule,
		CoreModule,
		PartialsModule,
	],
	providers: []
})
export class PagesModule {
}
