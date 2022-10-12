import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = [
    'Python',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'Tensorflow/Pytorch',
    'SQL',
    'DOCKER',
    'Airflow',
    'Pyspark',
    'Flask/Django',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
