import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 리모트 서버를 사용하지 않고 RxJS의 of() 함수로 데이터를 즉시 반환합니다.
import { catchError, tap } from 'rxjs/operators';
import { Admin } from '../../interfaces/admin';
import { MessageService } from '../message/message.service';

// Injectable 데코레이터는 이 클래스가 의존성 주입 시스템 에 포함되는 클래스라고 선언합니다.
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private adminsUrl = 'api/admins';  // 웹 API 형식의 URL로 사용
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getAdmins(): Observable<Admin[]> {
    /* 히어로 목록 목 데이터를 Observable<Hero[]> 타입으로 반환하기 위해 RxJs of() 함수를 사용
    const admins = of(ADMINS);
    this.messageService.add('AdminService: fetched admins');
    return admins;
    */
   /** GET: 서버에서 히어로 목록 가져오기 */
    return this.http.get<Admin[]>(this.adminsUrl)
      .pipe(
        tap(_ => this.log('fetched admins')),
        catchError(this.handleError<Admin[]>('getAdmins', []))
      );
  }
  // getAdmins(): Admin[] {
  //   return ADMINS;
  // }
  getAdmin(id: number): Observable<Admin> {
    const url = `${this.adminsUrl}/${id}`;
    return this.http.get<Admin>(url).pipe(
      tap(_ => this.log(`fetched admin id=${id}`)),
      catchError(this.handleError<Admin>(`getAdmin id=${id}`))
    );
  }
  // getAdmin(id: number): Observable<Admin> {
  //   const admin = ADMINS.find(h => h.id === id)!;
  //   this.messageService.add(`AdminService: fetched admin id=${id}`);
  //   return of(admin);
  // }

   /** PUT: 서버에 저장된 히어로 데이터를 변경합니다. */
   updateHero(admin: Admin): Observable<any> {
    return this.http.put(this.adminsUrl, admin, this.httpOptions).pipe(
      tap(_ => this.log(`updated admin id=${admin.id}`)),
      catchError(this.handleError<any>('updateAdmin'))
    );
  }
  
  /** POST: 서버에 새로운 히어로를 추가합니다. */
  addAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.adminsUrl, admin, this.httpOptions).pipe(
      tap((newAdmin: Admin) => this.log(`added admin w/ id=${newAdmin.id}`)),
      catchError(this.handleError<Admin>('addAdmin'))
    );
  }

  /** DELETE: 서버에서 히어로를 제거합니다. */
  deleteAdmin(id: number): Observable<Admin> {
    const url = `${this.adminsUrl}/${id}`;

    return this.http.delete<Admin>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted admin id=${id}`)),
      catchError(this.handleError<Admin>('deleteAdmin'))
    );
  }

  /* GET: 입력된 문구가 이름에 포함된 히어로 목록을 반환합니다. */
  searchAdmins(term: string): Observable<Admin[]> {
    if (!term.trim()) {
      // 입력된 내용이 없으면 빈 배열을 반환합니다.
      return of([]);
    }
    return this.http.get<Admin[]>(`${this.adminsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found admins matching "${term}"`) :
        this.log(`no admins matching "${term}"`)),
      catchError(this.handleError<Admin[]>('searchAdmins', []))
    );
  }
  /** AdminService에서 보내는 메시지는 MessageService가 화면에 표시합니다. */
  private log(message: string) {
    this.messageService.add(`AdminService: ${message}`);
  }

  /**
   * HTTP 요청이 실패한 경우를 처리합니다.
   * 애플리케이션 로직 흐름은 그대로 유지됩니다.
   * @param operation - 실패한 동작의 이름
   * @param result - 기본값으로 반환할 객체
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: 리모트 서버로 에러 메시지 보내기
      console.error(error); // 지금은 콘솔에 로그를 출력합니다.

      // TODO: 사용자가 이해할 수 있는 형태로 변환하기
      this.log(`${operation} failed: ${error.message}`);

      // 애플리케이션 로직이 끊기지 않도록 기본값으로 받은 객체를 반환합니다.
      return of(result as T);
    };
  }
  constructor(private http: HttpClient, private messageService: MessageService) { }
}

