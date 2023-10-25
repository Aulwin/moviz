import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
 


  movieName: any = ''
  Title: any = ''
  Year: any = ''
  Plot: any = ''
  Ratings: any = ''
  Poster: any = ''
  result:any=false
  Released:any=''
  Actors:any=''


  searchform=this.fb.group({
    title:['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }
  movizz() {
    this.result=true
    this.movieName=this.searchform.value.title
    alert(this.movieName)
    fetch(`https://www.omdbapi.com/?apikey=fa1c9c03&t=${this.movieName}`).then((data) => data.json()).then((cData) => this.displayData(cData))
  }

  displayData(dataArray: any) {
    this.Title = dataArray.Title
    this.Year = dataArray.Year
    this.Plot = dataArray.Plot
    this.Ratings = dataArray.Ratings
    this.Poster = dataArray.Poster
    this.Released = dataArray.Released
    this.Actors = dataArray.Actors

  }
}
