import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';





@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit{

  displayedColumns: string[] = ['id', 'name', 'course'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}


export interface PeriodicElement {
  name: string;
  id: number;
  course: string;
  
}


const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1,  name: 'Binija.B.T',        course: 'MEARN STACK', },
  {id: 2,  name: 'Shilpa C.S',        course: 'MEARN STACK', },
  {id: 3,  name: 'Shilka.Ann.Moni',   course: 'MEARN STACK', },
  {id: 4,  name: 'Nayana.G.Sivan',    course: 'MEARN STACK',},
  {id: 5,  name: 'Surabhi.Surendran', course: 'MEARN STACK', },
  {id: 6,  name: 'Shibina.S.K',       course: 'MEARN STACK', },
  {id: 7,  name: 'Anju.Sarath',       course: 'MEARN STACK', },
  {id: 8,  name: 'Aryathulasi',       course: '.NET TESTING', },
  {id: 9,  name: 'Gayathri Devi',     course: '.NET TESTING', },
  {id: 10, name: 'Priya.C.P',         course: '.NET TESTING', },
  {id: 11, name: 'Kareeshma Bose',    course: '.NET TESTING', },
  {id :12, name: 'Arjun',             course: '.NET TESTING', },
  {id: 13, name: 'Eapen',             course:  '.NET TESTING', },
  {id: 14, name: 'Manu Chandran',     course: 'SOFTWARE TESTING', },
  {id: 15, name: 'Tom varghese John', course: 'SOFTWARE TESTING', },
  {id: 16, name: 'Narayanan Kutty',   course: 'SOFTWARE TESTING', },
  {id: 17, name: 'Nelvin George',     course: 'SOFTWARE TESTING', },
  
];
