import { Component, OnInit, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { AbstractParent } from './abstract-parent';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent extends AbstractParent implements AfterViewInit {
  @Input() childInput: string;

  constructor() {
    super();
  }

  loadLabel(): void {
   // getLabel is not initialized here if runnung storybook
    console.log('LABEL', this.getLabel);
  }
}
