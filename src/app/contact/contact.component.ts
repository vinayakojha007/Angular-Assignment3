import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  data: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Access pre-fetched data
    this.data = this.route.snapshot.data['data'];
    console.log(this.data);
  }
}
