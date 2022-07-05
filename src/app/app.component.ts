import { Component } from '@angular/core';
import { EnvService } from './env.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDeployWithoutChangeUrl';
  constructor(public env: EnvService){
    console.log(env.apiUrl);
  }
}
