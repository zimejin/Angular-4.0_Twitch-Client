import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TWITCH_API_KEY } from '../constants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class TwitchApiService {
    base_url: string = 'https://api.twitch.tv/kraken/';
    client_id: any   =  'j9ybq0hpyrlo4pgczcefitgg50lzvs';

    constructor(
        private http: Http
    ){}

    public getStreams(query: string): Observable<any> {
        return this.http.get(this.base_url + query + 'client_id=' + this.client_id )
        .map(results => {
            let res = results.json();
            return res.videos;
        })
    }
}
