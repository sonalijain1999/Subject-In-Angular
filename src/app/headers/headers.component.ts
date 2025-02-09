import { Component } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [FlexModule],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css'
})
export class HeadersComponent {
 linkedin:string = "https://www.linkedin.com/in/sonali-jain-1679a6192/";
 linkedinicon:string = "assets/linkedin.png";
 medium:string = "https://medium.com/@kcjain1970";
 mediumicon:string = "assets/medium.png";
 openLink(url: string): void {
  window.open(url, '_blank');
}
}
