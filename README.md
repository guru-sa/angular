# angular

# create project
ng new app 

# run app : http://localhost:4200
ng serve --open

# AppComponent 
1. app.component.ts : TypeScript로 컴포넌트 클래스 코드를 작성합니다.
2. app.component.html : HTML로 컴포넌트 템플릿을 작성합니다.
3. app.component.css : 이 컴포넌트에만 적용되는 CSS 스타일을 작성합니다.

# create component
ng generate component admin
ng generate component admin-detail
ng generate component dashboard
ng generate component admin-search

# 애플리케이션에서 발생하는 메시지를 화면 아래쪽에 표시하는 컴포넌트
ng generate component messages

# 컴포넌트는 데이터를 표시하는 것에만 집중하는 것이 좋으며, 데이터를 처리하는 로직은 서비스에게 맡겨두는 것이 좋습니다.
ng generate service admin

# 이 서비스는 messages 프로퍼티에 메시지를 캐싱하는데, add() 메소드는 프로퍼티에 메시지를 추가하고 clear() 메소드는 캐시를 비우는 역할을 합니다.
ng generate service message

# 일반적으로 애플리케이션 최상위 라우팅을 담당하는 모듈의 클래스 이름은 AppRoutingModule이라고 정의하며 src/app 폴더에 app-routing.module.ts 파일로 생성합니다.
# --flat 옵션을 사용하면 새로운 폴더를 만들지 않고 src/app 폴더에 파일을 생성합니다.
# --module=app 옵션을 사용하면 Angular CLI가 이 라우팅 모듈을 AppModule의 imports 배열에 자동으로 추가합니다.
ng generate module app-routing --flat --module=app

# Data Server mocking
npm install angular-in-memory-web-api --save
ng generate service InMemoryData

# 템플릿 기반 폼은 컴포넌트에 있는 데이터를 템플릿에 반영할 때, 템플릿에 입력한 데이터를 컴포넌트에 반영할 때 양방향 데이터 바인딩(two-way data binding)을 활용합니다.

# ngx-logger
npm install ngx-logger

# translate 다국어 적용
npm install @ngx-translate/core
npm install @ngx-translate/http-loader