import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SET_LOCATION } from '../reducers/reducer';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loc!: string;
constructor(private store: Store<any>) { }
ngOnInit() {
  }
  search(searchForm: NgForm) {
    if (searchForm.invalid) {
      return;
    }
    this.store.dispatch({ type: SET_LOCATION, payload: this.loc });
  }
}
