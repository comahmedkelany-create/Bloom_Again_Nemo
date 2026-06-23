import { Component } from '@angular/core';
import { FlowersBackgroundComponent } from '../../components/background/flowers-background/flowers-background';

@Component({
  selector: 'app-app-layout',
  standalone: true,
  imports: [FlowersBackgroundComponent],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.css',
})
export class AppLayout {}
