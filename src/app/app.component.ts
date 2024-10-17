import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CaptchaComponent } from './captcha/captcha.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CaptchaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'captcha';
}
