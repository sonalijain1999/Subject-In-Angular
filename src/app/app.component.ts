import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from "./user/user.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectsComponent } from './projects/projects.component';
import { HeadersComponent } from "./headers/headers.component";
import { MainTextDesignComponent } from "./main-text-design/main-text-design.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FlexLayoutModule, HeadersComponent, MainTextDesignComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Modern Home Decor';
}
