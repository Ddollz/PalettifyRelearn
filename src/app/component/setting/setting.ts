import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-setting',
  imports: [],
  templateUrl: './setting.html',
  styleUrl: './setting.scss',
})
export class Setting {
  @Input() max: number = 255;
  @Input() min: number = 0;
  @Input() value: any = 0;
  @Input() label!: string;
  @Input() type!: string;
  resultPercent = '';

  @Output() colorVal = new EventEmitter<number>();

  ngOnInit() {
    this.resultPercent = 100 - (this.max - this.value) / (this.max - this.min) * 100 + "%";
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value'] || changes['min']) {

      let convertVal = 100 - (this.max - this.value) / (this.max - this.min) * 100
      this.resultPercent = convertVal.toString() + "%";
    }
  }

  onInputChange(event: any) {
    console.log(event.target.value)
    if(this.type === 'range') {
      let convertVal = 100 - (this.max - event.target.value) / (this.max - this.min) * 100
      this.resultPercent = convertVal.toString() + "%";
    }
    this.colorVal.emit(event.target.value);
  }
}
