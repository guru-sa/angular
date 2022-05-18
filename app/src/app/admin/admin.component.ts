import { Component, OnInit } from '@angular/core';
import { Admin } from '../interfaces/admin';
// import { ADMINS } from '../mock/admin'; 데이터를 처리하는 로직을 서비스에게 맡기기 위해 제거합니다.
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  admin: Admin = {
    id: 1,
    name: 'Windstorm'
  };
  // admins = ADMINS; 데이터를 처리하는 로직을 서비스에게 맡기기 위해 제거합니다.
  admins: Admin[] = [];
  selectedAdmin?: Admin;
  onSelect(admin: Admin): void {
    this.selectedAdmin = admin;
  }
  // 컴포넌트의 생성자는 생성자로 받은 인자를 클래스 프로퍼티로 연결하는 정도로 간단하게 유지하는 것이 좋습니다. 
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    // ngOnInit은 라이프싸이클 후킹 함수 입니다. 
    // Angular는 컴포넌트를 생성한 직후에 ngOnInit를 호출합니다. 
    // 그래서 컴포넌트를 초기화하는 로직은 이 메소드에 작성하는 것이 좋습니다. 
    this.getAdmins();
  }
  getAdmins(): void {
    this.admins = this.adminService.getAdmins();
  }
}
