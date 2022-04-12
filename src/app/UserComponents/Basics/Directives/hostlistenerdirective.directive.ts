import { Directive, Renderer2, OnInit, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHostlistenerdirective]'
})
export class HostlistenerdirectiveDirective implements OnInit{


  constructor(private el: ElementRef, private renderer: Renderer2) {

   }

  ngOnInit(): void {

    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'green');
 
  }

  @HostListener('mouseenter') mouseover(eventDate: Event){
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
  }
  @HostListener('mouseleave') mouseleave(eventDate: Event){
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'green');
  }
    



}
