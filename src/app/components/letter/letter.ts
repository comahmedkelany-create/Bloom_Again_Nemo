import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../../models/message/message.model';

@Component({
  selector: 'app-letter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './letter.html',
  styleUrl: './letter.css',
})
export class LetterComponent {
  @Input() message: Message | null = null;
}
