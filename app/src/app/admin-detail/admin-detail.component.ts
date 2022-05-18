import { Component, Input, OnInit } from '@angular/core';
import { Admin } from '../interfaces/admin';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.scss']
})
export class AdminDetailComponent implements OnInit {
  @Input() admin?: Admin;
  
  constructor() { }

  ngOnInit(): void {
  }

}
