import { Component, signal } from '@angular/core';
import { AppLayout } from './layout/app-layout/app-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppLayout],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Bloom_Again_Nemo');
}
