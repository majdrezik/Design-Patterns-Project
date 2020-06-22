import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell-and-view',
  templateUrl: './sell-and-view.component.html',
  styleUrls: ['./sell-and-view.component.scss']
})
export class SellAndViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  newCarInsurance(): void {
    this.router.navigate(['new-car-insur']);
  }

  viewAllPurhcases(): void {
    this.router.navigate(['view-all-purchases']);
  }
}
