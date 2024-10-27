import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapButtonText!: string;
  userHasSnapped!: Boolean;

  ngOnInit(): void {
    this.title = 'Dan';
    this.description ='moi';
    this.createdAt = new Date();
    this.snaps = 0;
    this.imageUrl = 'https://i-de.unimedias.fr/2023/12/07/detbrnorm0343-6571e284016af.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=501&w=890'
    this.snapButtonText = 'Oh Snap';
    this.userHasSnapped = false;
  }
  onSnap(): void {
    if(this.userHasSnapped){
      this.unSnap();
    }else { 
    this.snaps++;
    this.snapButtonText = 'Oops, unSnap';
    this.userHasSnapped = true;
    }

  }
unSnap(){
  this.snaps--;
  this.snapButtonText = 'Oh Snap !';
  this.userHasSnapped = false;
}
  
}
