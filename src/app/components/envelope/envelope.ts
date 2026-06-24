import { Component, Input } from '@angular/core';
import { LetterComponent } from '../letter/letter';

@Component({
  selector: 'app-envelope',
  standalone: true,
  imports: [LetterComponent],
  templateUrl: './envelope.html',
  styleUrl: './envelope.css',
})
export class EnvelopeComponent {
  @Input()
  isOpen = false;
}
