import { AfterViewInit, Directive, Input } from '@angular/core';

@Directive()
export abstract class AbstractParent implements AfterViewInit {
  @Input() getLabel: () => string;

  ngAfterViewInit(): void {
    // getLabel is not initialized here if runnung storybook
    console.log('ngAfterViewInit', this.getLabel);
    this.loadLabel();
  }

  abstract loadLabel(): void;}
