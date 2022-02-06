import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

   //newsApiUrl

   newsApiUrl = `https://newsdata.io/api/1/news?apikey=pub_3876c6d5211c5800ee10c89566db3a9ba193&language=en&category=top,politics,world`
   socialsApiUrl ='https://newsdata.io/api/1/news?apikey=pub_3876c6d5211c5800ee10c89566db3a9ba193&language=en&category=sports, entertainment'
   businessApiUrl ='https://newsdata.io/api/1/news?apikey=pub_3876c6d5211c5800ee10c89566db3a9ba193&language=en&category=business, health, science'
   
  
   //news Head
   newsHead():Observable<any>{  
    return this._http.get(this.newsApiUrl);
   }

   socialsHead():Observable<any>{
    return this._http.get(this.socialsApiUrl)
  } 

  

  businessHead():Observable<any> {
    return this._http.get(this.businessApiUrl)
  }

  

}
