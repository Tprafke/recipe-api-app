import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  baseUrl: string = 'https://api.edamam.com/search';
  appId: string = 'aa19fd16';
  key: string = '5e0894fb0a6a11f5f2c8ec6d8208c9ca';

  constructor(private http: HttpClient) {}

  getData = (searchTerm: string): any => {
    return this.http.get(this.baseUrl, {
      params: {
        app_id: this.appId,
        app_key: this.key,
        q: searchTerm,
      },
    });
  };
}
