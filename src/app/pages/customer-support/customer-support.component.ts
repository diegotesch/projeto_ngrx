import { clearForm, sendingCustomerSupportMessage } from './../../store/actions/customer-support.actions';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerSupportService } from 'src/app/shared/services/customer-support.service';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromCurtomerSelectors from 'src/app/store/selectors/customer-support.selectors';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.scss'],
})
export class CustomerSupportComponent implements OnInit {
  constructor(
    private customerSupportService: CustomerSupportService,
    private store: Store<AppState>
  ) {}

  isSendSuccess: boolean | null = null;
  vm$: Observable<fromCurtomerSelectors.CustomerSupportViewModel>;

  ngOnInit(): void {
    this.vm$ = this.store.pipe(select(fromCurtomerSelectors.selectCustomerSupportModel))
  }

  onSubmit(f: NgForm) {
    this.store.dispatch(sendingCustomerSupportMessage({ data: f.value }));
    this.isSendSuccess = true;
    // this.customerSupportService.sendMessage(f.value).subscribe((success) => {
    //   console.log(success);
    //   this.isSendSuccess = success;
    // });
  }

  clearFeedback() {
    this.store.dispatch(clearForm());
    // this.isSendSuccess = null;
  }
}
