
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  title: string = "I do hard think"
  paragraph: string = `My name is Imrane Arabah, a technology enthusiast from Morocco,
  <br>with a particular interest in the field of web development.
  <br>The creation of tools and the digitization of projects lie at the core of my interests.
  <br>I have previously worked on digital transformation and the redesign of outdated systems towards new technologies.
  <br>My experience has allowed me to make a meaningful contribution to several small businesses,
  assisting them in establishing a strong online presence.
       `

}
