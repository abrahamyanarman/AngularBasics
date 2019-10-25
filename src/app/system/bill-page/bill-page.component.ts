import {Component, OnDestroy, OnInit} from '@angular/core';
import {BillService} from "../shared/services/bill.service";
import {Observable, Subscription} from "rxjs";
import {Bill} from "../shared/models/bill.model";

@Component({
  selector: 'hm-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit ,OnDestroy{
  subscription:Subscription;
  subscriptionRef:Subscription;
  currency:any;
  bill:Bill;
  isLoaded:boolean=false;

  constructor(
    private billService:BillService
  ) { }

  ngOnInit() {
    this.subscription = Observable.combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
    ).subscribe((data:[Bill,any])=>{
      this.bill = data[0];
      this.currency = data[1];
      this.isLoaded=true;
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    if (this.subscriptionRef) {
      this.subscriptionRef.unsubscribe();
    }
  }

  onRefresh() {
    this.isLoaded = false;
    this.subscriptionRef = this.billService
      .getCurrency()
      .subscribe((currency:any)=>{
      this.currency = currency;
    })
    this.isLoaded = true;
  }
}
