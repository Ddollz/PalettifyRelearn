import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-block',
  imports: [],
  templateUrl: './color-block.html',
  styleUrl: './color-block.scss',
})
export class ColorBlock {
  @Input() boxColor!:string;

}
