import { Injectable, EventEmitter } from '@angular/core';
import { DayService } from './day.service';
import { MonthService } from './month.service';
import { interval, Observable,from } from 'rxjs';

export class ActivityType {
	icon: string;
	name: string;
}

export class ActivityConfig {
	index: number;
	isActive: boolean = false;
	type: number = 0;
	name: string = "";
	color: string = "";
	description: string = "";
	marginLeft: number = 0;
}

@Injectable({
	providedIn: 'root'
})

export class ActivityService {

	activityTypes: ActivityType[];
	count: number = 6;
	defaultNames: string[] = ["Ordures ménagères", "Tri sélectif", "Verre", "Bleu", "Rouge", "Noir"];
	defaultColors: string[] = ["#fd4e88", "#4A148C", "#311B92", "#01579B", "#1B5E20", "#212121"];
	frequencesCount: number = 4;
	activityFrequences: string[] = [];

	default: number = 0;
	configuration: ActivityConfig[] = [];

	changeEvent: EventEmitter<boolean> = new EventEmitter();

	constructor(
	) {
		this.activityTypes = [
			{ icon: "lens", name: "Circle" },
			{ icon: "radio_button_unchecked", name: "Outline-Circle" },
			{ icon: "check_box_outline_blank", name: "Outline-Rectangle" },
			{ icon: "navigation", name: "Navigation" },
			{ icon: "arrow_back", name: "Arrow-Back" },
			{ icon: "arrow_downward", name: "Arrow-Down" },
			{ icon: "arrow_forward", name: "Arrow-Forward" },
			{ icon: "arrow_upward", name: "Arrow-Upward" },
			{ icon: "delete", name: "Trash" },
			{ icon: "attach_money", name: "Money" }];
		
		for (var i = 0; i < this.count; i ++)
			this.configuration.push({
				index: i,
				isActive: i < 2,
				type: 0,
				name: this.defaultNames [i],
				color: this.defaultColors [i],
				description: "",
				marginLeft: 30 + i * 20
			});
		
		for (var i = 0; i < this.frequencesCount; i ++)
			this.activityFrequences.push(`1 fois toutes les ${i + 1} semaines`);
	}
	
	getData() {
		return {
			default: this.default,
			configuration: this.configuration
		}
	}

	setData(data) {
		this.default = data.default;
		this.configuration = data.configuration;
		this.changeEvent.emit(false);
	}

	getDefaultType(): ActivityType {
		return this.activityTypes[this.default];
	}

	getActiveConfigs(): ActivityConfig[] {
		var activeConfigs = [];
		for (var i = 0; i < this.count; i ++) {
			this.configuration [i].isActive && 
			activeConfigs.push(this.configuration [i]);
		}
		return activeConfigs;
	}
}
