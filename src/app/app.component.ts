import { Component, ViewChild, Inject } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import {Observable, ReplaySubject} from 'rxjs';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {  AddShareDetailPopup } from './popup/add-share-detail-popup';


export interface PeriodicElement {
  sn: number;
  nol:number,
  cnol:number,
  nos:number,
  stime:string,
  time_interval:number,
  entry_price:number,
  investment:number,
  cum_investment: number,
  cum_average_inv:number,
  point_gained:number,
  profile:number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {sn : 1,nol:10,cnol:12,nos:50,stime:'09:30:00',time_interval:25,entry_price:12.5,investment:102.5, cum_investment: 1.0079,cum_average_inv:100,point_gained:4.5,profile:100},
  {sn: 2,nol:10,cnol:12,nos:50,stime:'09:30:00',time_interval:25,entry_price:12.5,investment:102.5,cum_investment: 4.0026,cum_average_inv:100 ,point_gained:4.5,profile:100},
  {sn: 3,nol:10,cnol:12,nos:50,stime:'09:30:00',time_interval:25,entry_price:12.5,investment:102.5,cum_investment: 6.941,cum_average_inv:100 ,point_gained:4.5,profile:100},
  {sn: 4,nol:10,cnol:12,nos:50,stime:'09:30:00',time_interval:25,entry_price:12.5,investment:102.5, cum_investment: 9.0122,cum_average_inv:100 ,point_gained:4.5,profile:100},
  {sn: 5,nol:10,cnol:12,nos:50,stime:'09:30:00',time_interval:25,entry_price:12.5,investment:102.5, cum_investment: 10.811,cum_average_inv:100 ,point_gained:4.5,profile:100},
  {sn: 6,nol:10,cnol:12,nos:50,stime:'09:30:00',time_interval:25,entry_price:12.5,investment:102.5, cum_investment: 12.0107,cum_average_inv:100 , point_gained:4.5,profile:100},
  {sn: 7,nol:10,cnol:12,nos:50,stime:'09:30:00',time_interval:25,entry_price:12.5,investment:102.5, cum_investment: 14.0067,cum_average_inv:100, point_gained:4.5,profile:100},
  {sn: 8,nol:10,cnol:12,nos:50,stime:'09:30:00',time_interval:25,entry_price:12.5,investment:102.5, cum_investment: 15.9994,cum_average_inv:100, point_gained:4.5,profile:100},
  {sn: 9,nol:10,cnol:12,nos:50,stime:'09:30:00',time_interval:25,entry_price:12.5,investment:102.5, cum_investment: 18.9984,cum_average_inv:100 , point_gained:4.5,profile:100},
  {sn: 10,nol:10,cnol:12,nos:50,stime:'09:30:00',time_interval:25,entry_price:12.5,investment:102.5, cum_investment: 20.1797,cum_average_inv:100 ,point_gained:4.5,profile:100},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shares-calculation';
  displayedColumns: string[] = ['sn','nol','cnol','nos','stime','time_interval','entry_price','investment', 'cum_investment','cum_average_inv','point_gained','profile'];
  dataToDisplay = [...ELEMENT_DATA];

  dataSource = new ExampleDataSource(this.dataToDisplay);

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {
    this.animal="";
    this.name="";
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddShareDetailPopup, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
}

class ExampleDataSource extends DataSource<PeriodicElement> {
  private _dataStream = new ReplaySubject<PeriodicElement[]>();

  constructor(initialData: PeriodicElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PeriodicElement[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: PeriodicElement[]) {
    this._dataStream.next(data);
  }
}
