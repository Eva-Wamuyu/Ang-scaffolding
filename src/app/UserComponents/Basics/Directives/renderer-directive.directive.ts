import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRendererDirective]'
})
export class RendererDirectiveDirective implements OnInit{

  //import renderer2, Ominit and ElementRef

  constructor() {

   }

  ngOnInit(): void {
      // this.render.setStyle(this.el.nativeElement, 'background-color')
  }

}
