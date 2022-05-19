import { Component, OnInit } from '@angular/core';
import { Admin } from '../interfaces/admin';
// import { ADMINS } from '../mock/admin'; 데이터를 처리하는 로직을 서비스에게 맡기기 위해 제거합니다.
import { AdminService } from '../services/admin/admin.service';
import { MessageService } from '../services/message/message.service';

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
    this.messageService.add(`AdminComponent: Selected admin id=${admin.id}`);
  }
  // 컴포넌트의 생성자는 생성자로 받은 인자를 클래스 프로퍼티로 연결하는 정도로 간단하게 유지하는 것이 좋습니다. 
  constructor(private adminService: AdminService, private messageService: MessageService) { }

  ngOnInit(): void {
    // ngOnInit은 라이프싸이클 후킹 함수 입니다. 
    // Angular는 컴포넌트를 생성한 직후에 ngOnInit를 호출합니다. 
    // 그래서 컴포넌트를 초기화하는 로직은 이 메소드에 작성하는 것이 좋습니다. 
    this.getAdmins();
  }
  
  getAdmins(): void {
    //Subscribe Observable
    this.adminService.getAdmins()
      .subscribe(admins => this.admins = admins);
  }
  // getAdmins(): void {
  //   this.admins = this.adminService.getAdmins();
  // }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.adminService.addAdmin({ name } as Admin)
      .subscribe(admin => {
        this.admins.push(admin);
      });
  }

  delete(admin: Admin): void {
    this.admins = this.admins.filter(h => h !== admin);
    this.adminService.deleteAdmin(admin.id).subscribe();
  }
}
