import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ContactserviceService} from '../contactservice.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ContactserviceService]
})
export class ContactListComponent implements OnInit {

  listPizza = [];

  constructor(private contactserviceService: ContactserviceService) {
  }

  ngOnInit() {
    this.contactserviceService.get().subscribe(data => {
      this.listPizza = data;
    });

  }

}