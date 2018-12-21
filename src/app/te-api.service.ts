import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TeApiService {
   evnUrl:string="http://localhost:3000";
  //evnUrl:string="http://tecketapi-env.yy2xtzbncj.us-east-2.elasticbeanstalk.com";
  ticketApiKey:string = "xF34U9ON4RI6uaaIMUirrSbb8hOGKVhb";
  geocodingApiKey:string = "AIzaSyCDTsY7Kesp9DHySpgaiyrVKjX0reVqI_A";
  songkickApiKey:string="dsajcjHofU4jTKj0";
  constructor(public http: HttpClient) { }
  get jsonOption() {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
  };
 
  goCallIpApi(): Observable<JSON> {
    const url = `http://ip-api.com/json`;
    return this.http.get<JSON>(url);
  }
  goGoogleMap(): Observable<JSON> {
    const url = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCDTsY7Kesp9DHySpgaiyrVKjX0reVqI_A`;
    return this.http.get<JSON>(url);
  }
  goCallAutoCpl(keyword: string): Observable<JSON> {
    let url = `${this.evnUrl}/autocomplete`;
    let params = new HttpParams().set('apikey', this.ticketApiKey).set('keyword', keyword);
    return this.http.get<JSON>(url, {params});
  }

  goCallGeoCoding(address: string): Observable<JSON> {
    let url = `${this.evnUrl}/geocoding`;
    let params = new HttpParams().set('address', address).set('key', this.geocodingApiKey);
    return this.http.get<JSON>(url, {params});
  }
  goCallGeoHash(lat: string,lon:string): Observable<any>{
    let url = `${this.evnUrl}/geohash`;
    let params = new HttpParams().set('lat', lat).set('lon', lon);
    return this.http.get(url,{responseType: 'text',params});
  }

  getEventsList(keyword: string,segmentId:string,radius:string,unit:string,geoPoint:string): Observable<JSON> {
    let url = `${this.evnUrl}/events`;
    let params = new HttpParams().set('apikey', this.ticketApiKey).set('keyword', keyword).set('segmentId',segmentId).set('radius',radius).set('unit',unit).set('geoPoint',geoPoint).set('sort',"date,asc");
    return this.http.get<JSON>(url, {params});
  }

  getDetialInfo(eventid: string): Observable<JSON> {
    let url = `${this.evnUrl}/detialinfo`;
    let params = new HttpParams().set('apikey', this.ticketApiKey).set('eventid', eventid);
    return this.http.get<JSON>(url, {params});
  }

  getVenueInfo(eventname: string): Observable<JSON> {
    let url = `${this.evnUrl}/venueinfo`;
    let params = new HttpParams().set('apikey', this.ticketApiKey).set('eventname', eventname);
    return this.http.get<JSON>(url, {params});
  }
  getUpcomingInfo(venuename: string): Observable<JSON> {
    let url = `${this.evnUrl}/upcominginfo`;
    let params = new HttpParams().set('apikey', this.songkickApiKey).set('venuename', venuename);
    return this.http.get<JSON>(url, {params});
  }
  getUpcomingInfoCtn(venueid: string): Observable<JSON> {
    let url = `${this.evnUrl}/upcominginfoctn`;
    let params = new HttpParams().set('apikey', this.songkickApiKey).set('venueid', venueid);
    return this.http.get<JSON>(url, {params});
  }
  getArtistInfo(artistname:string): Observable<JSON> {
    let url = `${this.evnUrl}/artistinfo`;
    let params = new HttpParams().set('artistname', artistname);
    return this.http.get<JSON>(url, {params});
  }
  getArtistTokenInfo(): Observable<JSON> {
    let url = `${this.evnUrl}/artisttokeninfo`;
    return this.http.get<JSON>(url);
  }

  getImages(artistname:string): Observable<JSON> {
    let url = `${this.evnUrl}/imageinfo`;
    let params = new HttpParams().set('q', artistname).set('cx','001833434290300447219:3ufbaufswls').set('imgSize','huge').set('num','8').set('searchType','image').set('key','AIzaSyDmqxBsVHfo9d9qNEl30SipPI2y1EmXxGk');
    return this.http.get<JSON>(url, {params});
  }
}



