import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title: string = "I do hard think"
  paragraph: string= `My name is Imrane Arabah, a technology enthusiast from Morocco, with a particular interest in the field of web
            development.<br> The creation of tools and the digitization of projects lie at the core of my interests.<br> I have
            assisted
            several small businesses in their digitization process, helping them establish a strong online presence.
       `

}
