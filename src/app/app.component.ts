import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  data:any[] = []
  http = inject(HttpClient);

  ngOnInit(): void {
    const url:string='https://api.spacexdata.com/v4/rockets'
      this.http.get(url).subscribe((res: any) => {
        this.data = res
      })
  }

}
