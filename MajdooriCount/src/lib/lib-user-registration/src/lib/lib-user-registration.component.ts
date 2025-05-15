import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-lib-user-registration',
  imports: [CommonModule],
  templateUrl: './lib-user-registration.component.html',
  styleUrl: './lib-user-registration.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibUserRegistrationComponent {}
