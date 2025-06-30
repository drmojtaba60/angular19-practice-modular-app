import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>👁️ User Details for ID: {{ id }}</h3>
  `
})
export class UserDetailsComponent {
  id : string | null =''; //this.route.snapshot.paramMap.get('id');
  constructor(private route: ActivatedRoute) {
    //route.snapshot.params['id'];
    //this.id = this.route?.snapshot?.paramMap?.get('id');
  }
  ngOnInit() {
    this.id = this.route?.snapshot?.paramMap?.get('id');
  }
}
