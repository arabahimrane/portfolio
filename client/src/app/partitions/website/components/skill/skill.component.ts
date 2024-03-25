import { Component } from '@angular/core';
import { Skills } from 'src/app/interface/skills';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  items: Skills[] = [
    {
      title: "<Languages />",
      icons: [{
        class: 'bx bxl-typescript',
        title: "Typescript"
      },
      {
        class: 'bx bxl-javascript',
        title: "Javascript"
      },
      {
        class: 'bx bxl-html5',
        title: "Html5"
      },
      {
        class: 'bx bxl-css3',
        title: "Css3"
      },
      {
        class: 'bx bxl-flutter',
        title: "Dart"
      },
      {
        class: 'bx bxl-python',
        title: "Python"
      },
      {
        class: 'bx bxl-c-plus-plus',
        title: "C & C++"
      }]
    },
    {
      title: "<Frameworks & Libraries />",
      icons: [
        {
          class: 'bx bxl-nodejs',
          title: "NodeJs"
        },
        {
          class: 'bx bxl-angular',
          title: "Angular"
        },
        {
          class: 'bx bxl-bootstrap',
          title: "Bootstrap"
        },
        {
          class: 'bx bxl-flutter',
          title: "Flutter"
        },
      ]
    },
    {
      title: "<Tools />",
      icons: [
        {
          class: 'bx bxl-mongodb',
          title: 'Mongodb'
        },
        {
          class: 'bx bxl-github',
          title: 'Github'
        },
        {
          class: 'bx bxl-firebase',
          title: 'Firebase'
        },
        {
          class: 'bx bxl-aws',
          title: 'Aws'
        },
      ],
    }
  ]

}