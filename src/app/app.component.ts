import { Component,OnInit } from '@angular/core';
import { FormGroup , FormBuilder , FormControl } from '@angular/forms';

import { MapForm } from './MapForm';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent  implements OnInit  {
	title: string = 'Key Ninja Exam';
	
	public mapFormGroup : FormGroup ;
	
	mapForm : MapForm ;
  
	public origin: any;
	public destination: any;
	public waypoints: any = [];
	
	Location1Long : number;
	
	constructor(private mapFormBuilder : FormBuilder){}
	
	ngOnInit() {
		this.mapFormGroup = this.mapFormBuilder.group({
			
			Location1Lat:[-37.822066],
			Location1Long:[144.963454],
			
			Location2Lat:[-37.841936],
			Location2Long:[144.935747],
			
			Location3Lat:[-37.803082],
			Location3Long:[144.862707],
			
			Location4Lat:[-35.309049],
			Location4Long:[149.108155],
			
			Location5Lat:[-37.807772],
			Location5Long:[145.059477],			
			
		});
		this.getDirection()
		
		
	}
	
	refreshMap(){
		
		this.origin={ lat: Number(this.mapFormGroup.value.Location1Lat), lng: Number(this.mapFormGroup.value.Location1Long) };
		this.destination={ lat: Number(this.mapFormGroup.value.Location5Lat), lng: Number(this.mapFormGroup.value.Location5Long) };		
		
		this.waypoints=[
		
			{location: { lat: Number(this.mapFormGroup.value.Location2Lat), lng: Number(this.mapFormGroup.value.Location2Long) }, stopover: true },
			{location:{ lat: Number(this.mapFormGroup.value.Location3Lat), lng: Number(this.mapFormGroup.value.Location3Long) }, stopover: true },
			{location:{ lat: Number(this.mapFormGroup.value.Location4Lat), lng: Number(this.mapFormGroup.value.Location4Long) }, stopover: true }
	  
		];
	}
 
	getDirection() {
	  this.origin = { lat: -37.822066, lng: 144.963454 };
	  this.destination = { lat: -37.807772, lng: 145.059477 };
	  
	  this.waypoints=[
		  {location: { lat: -37.841936, lng: 144.935747 }, stopover: true },
		  {location: { lat: -37.803082, lng: 144.862707 }, stopover: true },
		  {location: { lat: -35.309049, lng: 149.108155 }, stopover: true }		  
	  ];
	}

}