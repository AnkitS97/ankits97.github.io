import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  display = false;

  public projects = [
    {
      projectName: 'Face Recognition Attendance System',
      projectImage: 'save_img.jpg',
      projectDesc: 'This project verifies whether the person is actually who he is claiming to be. It captures a image of the persont hen verifies from a MongoDB database if the face of the person matches with the one stored in database. This can be used for various applications like at some organization to mark attendance based on id and face of the person or some airports, you can pass through customs by letting a system scan your passport and then verifying that you (the person carrying the passport) are the correct person.',
      projectLink: 'https://github.com/AnkitS97/attendance_system'
    },
    {
      projectName: 'Car Price Prediction',
      projectImage: 'car selling.jpeg',
      projectDesc: 'The main aim of this project is to help the users willing to buy a used car, to estimate the approximate selling price of the car to make sure they are not overpaying. This project also helps users selling their car to get an idea of what would be an appropriate price for their vehicle. The application takes various inputs from the user like car condition, distance covered by the car, transmission type. It then predicts the price using a XGBoost model trained on dataset scrapped off various websites.',
      projectLink: 'https://github.com/AnkitS97/car-price-prediction'
    },
    {
      projectName: 'Credit Card Customer Clustering',
      projectImage: 'clustering.PNG',
      projectDesc: 'This application extracts segments of customers depending on their behaviour patterns provided in the dataset, to focus marketing strategy of the company on a particular segment.',
      projectLink: 'https://github.com/AnkitS97/credit-card-clustering/blob/main/credit-card-customer-clustering-with-explanation.ipynb'
    },
    {
      projectName: 'Image Scrapper',
      projectImage: 'image scrapper.jpg',
      projectDesc: 'This is an image scrapper project created uisng python 3.6.12. It uses selenium web driver to open an instance of chrome browser. It then creates an images folder, downloads these images using requests api and saves them in a folder named by the search term inside the images folder.',
      projectLink: 'https://github.com/AnkitS97/image-scrapper'
    },
    {
      projectName: 'Book Review Scrapper',
      projectImage: 'book scrapper.jpg',
      projectDesc: 'This is review scrapper project which takes a name of book from the user, then searches that book on goodreads. Then it looks for reviews of the book in the website and exctracts them and returns the same back to user in a table.',
      projectLink: 'https://github.com/AnkitS97/review-scrapper'
    }
  ]

  project_info = this.projects[0];

  constructor() { }

  ngOnInit() {
  }

  showDialog(project) {
    this.project_info = project
    this.display = true;
  }
}
