import { Component, Input } from '@angular/core';
import { TypographyType } from '../../types/typography.types';
import { ColorType } from '../../types/color.types';

@Component({
  selector: 'app-typography',
  imports: [],
  templateUrl: './typography.html',
  styleUrl: './typography.scss',
})
export class Typography {
  @Input() text!: string
  @Input() variant: TypographyType = 'body'
  @Input() color: ColorType = 'black'
}
