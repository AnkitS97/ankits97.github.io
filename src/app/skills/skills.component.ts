import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = [
    'Machine Learning',
    'Python',
    'SQL',
    'Angular 7+',
    'Java'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
