import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Admin } from '../interfaces/admin';
import { AdminService } from '../services/admin/admin.service';
@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
  styleUrls: ['./admin-search.component.scss']
})
export class AdminSearchComponent implements OnInit {
  admins$!: Observable<Admin[]>;
  private searchTerms = new Subject<string>();

  constructor(private adminService: AdminService) { }

  // 사용자가 입력한 검색어를 옵저버블 스트림으로 보냅니다.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    // debounceTime(300)는 옵저버블로 전달된 문자열을 바로 보내지 않고 다음 이벤트가 올 떄까지 300 밀리초 기다립니다. 사용자가 보내는 요청은 300ms에 하나로 제한됩니다.
    // distinctUntilChanged()는 사용자가 입력한 문자열의 내용이 변경되었을 때만 옵저버블 스트림을 전달합니다.
    // switchMap()는 옵저버블 스트림이 debounce와 distinctUntilChanged를 통과했을 때 서비스에 있는 검색 기능을 호출합니다. 이 때 이전에 발생했던 옵저버블은 취소되며, AdminService가 생성한 옵저버블만 반환합니다.
    this.admins$ = this.searchTerms.pipe(
      // 연속된 키입력을 처리하기 위해 300ms 대기합니다.
      debounceTime(300),

      // 이전에 입력한 검색어와 같으면 무시합니다.
      distinctUntilChanged(),

      // 검색어가 변경되면 새로운 옵저버블을 생성합니다.
      switchMap((term: string) => this.adminService.searchAdmins(term)),
    );
  }

}
