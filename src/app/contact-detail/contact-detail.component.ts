import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ContactserviceService} from '../contactservice.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactDetailComponent implements OnInit {

  pizza = [];

  constructor(private contactserviceService: ContactserviceService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.contactserviceService.getById(id).subscribe(data => {
      this.pizza = data;
    });

  }

}
