import { Component, OnInit } from '@angular/core';
import { Admin } from '../interfaces/admin';
import { AdminService } from '../services/admin/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  admins: Admin[]= [];
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins(): void {
    this.adminService.getAdmins()
      .subscribe(admins => this.admins = admins.slice(1, 5));
  }
}
