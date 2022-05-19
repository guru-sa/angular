import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Admin } from '../interfaces/admin';
import { AdminService } from '../services/admin/admin.service';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.scss']
})
export class AdminDetailComponent implements OnInit {
  @Input() admin?: Admin;
  
  // ActivateRoute는 AdminDetailComponent의 인스턴스를 생성하면서 적용한 라우팅 규칙에 대한 정보를 담고 있습니다.
  // 그래서 이 라우팅 규칙을 참조하면 URL을 통해 컴포넌트로 전달되는 변수를 추출할 수 있습니다.
  // Location은 브라우저를 제어하기 위해 Angular가 제공하는 서비스입니다.
  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getAdmin();
  }

  getAdmin(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.adminService.getAdmin(id)
      .subscribe(admin => this.admin = admin);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.admin) {
      this.adminService.updateHero(this.admin)
        .subscribe(() => this.goBack());
    }
  }

}
