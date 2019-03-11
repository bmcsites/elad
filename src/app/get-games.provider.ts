import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GetGamesProvider {
  private data: any = null;
  constructor(private http: HttpClient) {}

  public getGames(): any {
    return this.data;
  }

  load() {
    return new Promise((resolve, reject) => {
      this.getAllGames().subscribe((data: any[]) => {
          if (data) {
            this.data = data;
            resolve(true);
          }
        },
        err => {
          reject(true);
          console.log('err:::', err);
        });
    });
  }

  getAllGames() {
    return this.http.get('assets/data/data.json');
  }
}
