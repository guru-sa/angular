import { Injectable } from '@angular/core';
import { Admin } from '../interfaces/admin';
import { ADMINS } from '../mock/admin';

// Injectable 데코레이터는 이 클래스가 의존성 주입 시스템 에 포함되는 클래스라고 선언합니다.
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  getAdmins(): Admin[] {
    return ADMINS;
  }
  constructor() { }
}
