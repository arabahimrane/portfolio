import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
 

@Component({
  selector: 'admin-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
   


  constructor(private titleService: Title) { }
 

  ngOnInit() {
    this.titleService.setTitle("Admin Dashboard");

  }
}
