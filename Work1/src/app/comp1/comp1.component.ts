import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
 title = "Component 1";
 shree:number = 10;
 ary:any=[10,20,320,45];
 option:number=23;
 dt:Date = new Date();
  constructor() { }
  ngOnInit() {
console.log('Initialized');
console.log(this.data);
this.childData.emit("Child Data");
  }
  inputReference($event){
    console.log($event);
  }
@Input('dataParent') data:string;

@Output('emitEvent') childData = new EventEmitter<String>();

}
