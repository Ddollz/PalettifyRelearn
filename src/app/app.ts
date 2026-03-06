import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pallete } from './pallete/pallete';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pallete],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Palletify');
}
