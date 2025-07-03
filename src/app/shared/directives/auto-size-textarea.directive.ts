import {AfterViewInit, Directive, ElementRef, HostListener, inject, OnInit} from '@angular/core';

@Directive({
  selector: '[appAutoSizeTextarea]'
})
export class AutoSizeTextareaDirective implements OnInit, AfterViewInit {
  private el: ElementRef=inject(ElementRef);
  constructor(){//(private el: ElementRef) {
    this.el.nativeElement.style.width = '50%';
    this.el.nativeElement.style.overflowY = 'auto';
    this.el.nativeElement.style.lineHeight = '2';
  }
  ngOnInit() {
    this.el.nativeElement.style.borderRadius='7px';
    this.el.nativeElement.style.padding='10px';
    this.el.nativeElement.style.margin='10px 0';
  }
  ngAfterViewInit() {
    this.resize();
  }

  @HostListener('input', ['$event'])
  onInput(event: Event  ) {
    this.resize();
  }

  private resize(): void {
    this.el.nativeElement.style.height = 'auto';
    this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
  }
}
