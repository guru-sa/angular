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

# 컴포넌트는 데이터를 표시하는 것에만 집중하는 것이 좋으며, 데이터를 처리하는 로직은 서비스에게 맡겨두는 것이 좋습니다.
ng generate service admin