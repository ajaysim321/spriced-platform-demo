import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterModule, DashboardComponent, CommonModule],
  selector: 'app-root',
  providers: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'spriced-platform-angular-workspace';
}
