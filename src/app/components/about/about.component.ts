import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
declare var anime: any;  

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    var anDef: {opacityIn: number[], scaleIn: number[], scaleOut: number, durationIn: number, durationOut: number, delay: number} = {
      opacityIn: [],
      scaleIn: [],
      scaleOut: 0,
      durationIn: 0,
      durationOut: 0,
      delay: 0,
    };
    
    anDef.opacityIn = [0, 1];
    anDef.scaleIn = [0.2, 1];
    anDef.scaleOut = 3;
    anDef.durationIn = 800;
    anDef.durationOut = 600;
    anDef.delay = 500;

    anime
      .timeline({ loop: true })
      .add({
        targets: '.anDef .letters-1',
        opacity: anDef.opacityIn,
        scale: anDef.scaleIn,
        duration: anDef.durationIn,
      })
      .add({
        targets: '.anDef .letters-1',
        opacity: 0,
        scale: anDef.scaleOut,
        duration: anDef.durationOut,
        easing: 'easeInExpo',
        delay: anDef.delay,
      })
      .add({
        targets: '.anDef .letters-2',
        opacity: anDef.opacityIn,
        scale: anDef.scaleIn,
        duration: anDef.durationIn,
      })
      .add({
        targets: '.anDef .letters-2',
        opacity: 0,
        scale: anDef.scaleOut,
        duration: anDef.durationOut,
        easing: 'easeInExpo',
        delay: anDef.delay,
      })
      .add({
        targets: '.anDef .letters-3',
        opacity: anDef.opacityIn,
        scale: anDef.scaleIn,
        duration: anDef.durationIn,
      })
      .add({
        targets: '.anDef .letters-3',
        opacity: 0,
        scale: anDef.scaleOut,
        duration: anDef.durationOut,
        easing: 'easeInExpo',
        delay: anDef.delay,
      })
      .add({
        targets: '.anDef .letters-4',
        opacity: anDef.opacityIn,
        scale: anDef.scaleIn,
        duration: anDef.durationIn,
      })
      .add({
        targets: '.anDef .letters-4',
        opacity: 0,
        scale: anDef.scaleOut,
        duration: anDef.durationOut,
        easing: 'easeInExpo',
        delay: anDef.delay,
      })
      .add({
        targets: '.anDef',
        opacity: 0,
        duration: 500,
        delay: 500,
      });
  }
}
