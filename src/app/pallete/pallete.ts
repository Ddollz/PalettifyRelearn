import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorBlock } from '../component/color-block/color-block';
import { Setting } from '../component/setting/setting';
import { defaultState, hexToNumber, isValidHex } from '../shared/utilities';
import Color from 'color';


@Component({
  selector: 'app-pallete',
  imports: [ColorBlock, Setting],
  templateUrl: './pallete.html',
  styleUrl: './pallete.scss',
})
export class Pallete {
  redValue = Math.floor(Math.random() * 100) + 1;
  greenValue = Math.floor(Math.random() * 100) + 1;
  blueValue = Math.floor(Math.random() * 100) + 1;
  light = defaultState.light;
  saturation = defaultState.sat
  currentHex = defaultState.mainColor;
  maxDark = 0;
  maxLight = 90;
  colorList = {
    color1: "",
    color2: "",
    color3: "",
    color4: "",
    color5: "",
  }

  randomHex() {
    this.currentHex = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.documentElement.style.setProperty('--primary-hex', this.currentHex);
    this.hexToRgb(this.currentHex);
    this.colorChanged()
  }

  ngOnInit() {
    this.colorChanged()
  }

  hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result != null) {
      this.redValue = parseInt(result[1], 16);
      this.greenValue = parseInt(result[2], 16);
      this.blueValue = parseInt(result[3], 16);
    }
  }
  receiveColor(value: any, color: string) {
    if (color === 'red') {
      this.redValue = value;
    } else if (color === 'green') {
      this.greenValue = value;
    } else if (color === 'blue') {
      this.blueValue = value;
    } else if (color === 'light') {
      this.maxLight = value;
    } else if (color === 'dark') {
      this.maxDark = value;
    } else if (color === 'saturation') {
      this.saturation = value;

    }
    else if (color === 'hex') {
      console.log("here",value)
      this.currentHex = value;
      this.hexToRgb(this.currentHex)
    }
    this.colorChanged()
  }

  colorChanged() {

    if (isValidHex(hexToNumber(Color(`rgb(${this.redValue}, ${this.greenValue}, ${this.blueValue})`).hex()))) {
      console.log("pasado")
      this.currentHex = Color(`rgb(${this.redValue}, ${this.greenValue}, ${this.blueValue})`).hex();

      // Find greatest and smallest channel values
      let h = Color(this.currentHex).hsl().hue().toFixed(1);
      let s = this.saturation;
      let l = Color(this.currentHex).hsl().lightness();
      if (l <= 0) {
        this.light = 1;

      } else {
        this.light = parseFloat(l.toFixed());
      }



      this.colorList.color1 = "hsl(" + h + "," + s + "%," + this.maxDark + "%)"
      this.colorList.color2 = "hsl(" + h + "," + s + "%," + (((l + parseInt(String(this.maxDark))) / 2)).toFixed(1) + "%)"
      this.colorList.color3 = "hsl(" + h + "," + s + "%," + l.toFixed(1) + "%)"
      this.colorList.color4 = "hsl(" + h + "," + s + "%," + (((this.maxLight - l) / 2) + l).toFixed(1) + "%)"
      this.colorList.color5 = "hsl(" + h + "," + s + "%," + this.maxLight + "%)"
      document.documentElement.style.setProperty('--primary-text', this.currentHex)
    }
  }

}
