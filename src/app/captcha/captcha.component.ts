import { Component } from '@angular/core';
import { RecaptchaModule } from 'ng-recaptcha-2';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css'],
  standalone: true,
  imports: [RecaptchaModule]
})
export class CaptchaComponent {
  recaptchaSiteKey = environment.site_url_key
  executeRecaptchaVisible(token?: string) {
    console.log('Token: ', token);
  }


}
