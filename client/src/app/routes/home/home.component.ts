import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/rest/models/mongoose.gen';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiService:ApiService) { }
  recipes !: Recipe[];

  ngOnInit(): void {
    
  }

}
