import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

ngOnInit(): void {
  
}
//user defined event
//child to parent component communication - @Output
@Output() toggle=new EventEmitter();

menuIconclicked(){
this.toggle.emit()   //emit()-Emits an event containing a given value.


}

}
