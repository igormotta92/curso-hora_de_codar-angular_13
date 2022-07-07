import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Camila'
  userData = {
    email: "igor@tese",
    role: "admn"
  }

  title = 'curso_angular_yt';

  rotasNav = [
    {title: "Home", path: "/"},
    {title: "Change Number", path: "/change-number"},
    {title: "Directives", path: "/directives"},
    {title: "Emitter", path: "/emitter"},
    {title: "Eventos", path: "/eventos"},
    {title: "First Component", path: "/first-component"},
    {title: "If Render", path: "/if-render"},
    {title: "List Render", path: "/list-render"},
    {title: "Parent Data", path: "/parent-data"},
    {title: "Pipes", path: "/pipes"},
    {title: "Two Way Biding", path: "/two-way-binding"},
  ]
}
