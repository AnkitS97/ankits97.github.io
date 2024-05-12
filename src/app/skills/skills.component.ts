import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skills = [
    'Python',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'NLP',
    'Generative AI',
    'Tensorflow/Pytorch',
    'SQL',
    'DOCKER',
    'Kubernetes',
    'Airflow',
    'Streamlit',
    'Flask/Django',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
