import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import {ContactserviceService} from "../contactservice.service";

  @Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactAddComponent implements OnInit {

    private form: FormGroup;
  constructor(private contactserviceService: ContactserviceService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log('onSubmit passé');
      this.contactserviceService.create(this.form.value).subscribe();
        }

}
