import { Component, OnInit,ViewChild } from '@angular/core';
import { TeApiService } from '../te-api.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import {NgbModal,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {  slidelr,sliderl,ecAni,hiddenShow} from '../animations';

@Component({
  selector: 'ticket-event',
  templateUrl: './ticket-event.component.html',
  styleUrls: ['./ticket-event.component.css'],
  animations:[
    slidelr,
    sliderl,
    ecAni,
    hiddenShow
  ]
})
export class TicketEventComponent implements OnInit {
  keyword: string = "";
  category: string = "";
  distance: string = "";
  unit: string = "miles";
  location1: string = "";
  latCurrent: string = "";
  lonCurrent: string = "";
  lat:string="";
  lon:string="";
  geoPoint: string = "";
  isDisaSearch: boolean = true;
  islocalInput: boolean = false;
  locationR: string = "0";
  isChecked:boolean=true;
  eventsList:Array<object>=[];
  isShowEtBar:boolean=false;
  favoList:Array<object>=[];
  autoList:Object;
  private subject: Subject<string> = new Subject();
  hightlightRow : Number;
  hightlightFvrtRow : Number;
  isDisaDetail:boolean=true;
  eventInfo:Object;
  isShowEvent:boolean=false;
  isShowDetail:boolean=false;
  eventnameD:string="";
  attractionnames:string="";
  attractionsList:Array<object> = [];
  
  venueD:string="";
  dateD:string="";
  timeD:string="";
  generD:string="";
  segmentD:string="";
  curD:string="";
  minD:string="";
  maxD:string=""
  tsD:string="";
  btaD:string="";
  smD:string="";

  venueInfo:Object;
  mapLat:Number;
  mapLon:Number;
  upcomingList:Array<object>=[];
  upDefaultList:Array<object>=[];
  tweettext:string="";
  hash:string="";
  ArtFinalArr:Array<object>=[];
  imaFinalArr:Array<object>=[];

  isExpanded: boolean;
  reslistctl:boolean=true;
  sorttype:string="";
  sortby:string="asc";
  isDisaSelect:boolean=true;
  isShowDtpBar:boolean;
  isShowArtBar:boolean;
  isShowVenueBar:boolean;
  isShowUpcomBar:boolean;
  isDisSlide:boolean;

  dtIdStar:string="";
  dtInfoStar:object;
  isnotclear:boolean=true;
  modalRef:any;
  tabCtl:string="";
constructor(public serv: TeApiService, public modalService: NgbModal,public activeModal: NgbActiveModal) { }

  
  
  //------------------------page setting & control
  ngOnInit() {
    this.ipAPICall();
    this.subject.pipe(debounceTime(300))
         .subscribe(searchTextValue => {
           this.autoCpl(searchTextValue);
          });
   }
  onKeyUp(searchTextValue: string){
    this.subject.next(searchTextValue);
  }
  radioCtl() {
    if (this.locationR == '0') {
      this.islocalInput = true;
    } else {
      this.islocalInput = false;
    }
  }
  gobackEventListCtl() {
    this.isShowDetail=false;
    this.isShowEvent=true;
    this.isDisSlide=false;
    this.favoList=[];
    for(let i=0;i<localStorage.length;i++){
      this.favoList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
  }
  gobackDetail(){
    this.isShowDetail=true;
    this.isShowEvent=false;
  }
  
  seatInModal(event,content){
    event.preventDefault();
    this.modalRef=this.modalService.open(content);
    
  }
  closeModal(){
    this.modalRef.dismiss("close");
  }
  expColCtl() { 
    this.isExpanded = !this.isExpanded;
  }
  showResult(event){
    this.isDisSlide=true;
    event.preventDefault();
    this.reslistctl=true;
  }
  showFavorite(event){
    this.isDisSlide=true;
    if(event!=undefined){
      event.preventDefault();
    }
    this.reslistctl=false;
    this.favoList=[];
    if(localStorage.length==0){
      this.favoList=null;
    }else{
      for(let i=0;i<localStorage.length;i++){
        this.favoList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
  }
  doClear(){
    this.keyword="";
    this.category = "";
    this.distance = "";
    this.unit= "miles";
    this.isChecked=true;
    this.locationR="0";
    this.location1 = "";

    this.isDisaSearch = true;
    this.islocalInput= false;
    
    this.isShowDetail=false;
    this.isShowEvent=false;
    this.isnotclear=false;
    this.reslistctl=true;
  }
  //---------  localstorage
  addFvrt(eid:string,entity:object){
    localStorage.setItem(eid, JSON.stringify(entity));
  }
  removeFvrt(eid:string){
    localStorage.removeItem(eid);
    this.hightlightFvrtRow=-1;
    this.isDisaDetail=true;
  }
  deleteFvrt(eid:string,entity:object){
    localStorage.removeItem(eid);
    let index = this.favoList.indexOf(entity);
    this.favoList.splice(index, 1);
    this.hightlightFvrtRow=-1;
    this.isDisaDetail=true;
    if(localStorage.length==0){
      this.favoList=null;
    }
  }

  favoriteCmp(eventid:string){
    if(localStorage.getItem(eventid)==null){
      return true;
    }else{
      return false;
    }
  }
//------------------- two dropdown sorting
  sortByType(){
    if(this.sorttype==""){
      this.isDisaSelect= true;
      this.upcomingList=JSON.parse(JSON.stringify( this.upDefaultList ));
    }else{
      this.isDisaSelect= false;
      if(this.sorttype=="ename"){
        if(this.sortby=="asc"){
        this.upcomingList.sort((a,b) => a['displayName'].localeCompare(b['displayName']));
        }else{
          this.upcomingList.sort((a,b) => b['displayName'].localeCompare(a['displayName']));
        }
      }
      if(this.sorttype=="time"){
        if(this.sortby=="asc"){
        this.upcomingList.sort((a,b) => a['start']['date'].localeCompare(b['start']['date']));
        }else{
          this.upcomingList.sort((a,b) => b['start']['date'].localeCompare(a['start']['date']));
        }
      }
      if(this.sorttype=="artist"){
        if(this.sortby=="asc"){
        this.upcomingList.sort((a,b) => a['performance'][0].displayName.localeCompare(b['performance'][0].displayName));
      }else{
        this.upcomingList.sort((a,b) => b['performance'][0].displayName.localeCompare(a['performance'][0].displayName));

      }
    }
      if(this.sorttype=="type"){
        if(this.sortby=="asc"){
        this.upcomingList.sort((a,b) => a['type'].localeCompare(b['type']));
        }else{
          this.upcomingList.sort((a,b) => b['type'].localeCompare(a['type']));
        }
      }
    }
  }
  
  //------------------------call Api directly
  ipAPICall() {
    this.serv.goCallIpApi().subscribe(result => {
      if (result && result['lat'] && result['lon']) {
        this.latCurrent = result['lat'];
        this.lonCurrent = result['lon'];
        this.isDisaSearch = true;
      }
    });
  }

  //----------------------go Express server
  autoCpl(val){
    this.serv.goCallAutoCpl(val).subscribe(result => {
      if(result&&result['_embedded']!=null&&result['_embedded']['attractions']!=null){
       this.autoList=result['_embedded']['attractions'];
      }
    });
  }
  
  submitForm() {
    this.isShowEvent=true;
    this.reslistctl=true;
    this.isnotclear=true;
    this.isDisSlide=true;
    this.isShowEtBar=true;
    this.hightlightRow=null;
    this.isDisaDetail = true;
    if (this.distance == "") {
      this.distance = '10';
    }
    if(this.locationR=='0'){
      this.lat=this.latCurrent;
      this.lon=this.lonCurrent;
      this.geohashCall();
    }else{
      this.goGeocodingCall();
    }
  }

  goGeocodingCall() {
    this.serv.goCallGeoCoding(this.location1).subscribe(result => {
      if(result!=null&&result['results']!=null&&result['results'].length!= 0&&result['results'][0]['geometry']!=undefined&&result['results'][0]['geometry']['location']!=undefined){
        let locationRes=result['results'][0]['geometry']['location'];
        this.lat=locationRes['lat'];
        this.lon=locationRes['lng'];
        this.geohashCall();
      }
    });
  }
  geohashCall() {
    this.serv.goCallGeoHash(this.lat, this.lon).subscribe(results => {
      this.geoPoint = results;
      if (this.geoPoint != null && this.geoPoint != "") {
        console.log(this.geoPoint);
        this.getEventsList();
      }
    });
  }
  
  getEventsList() {
    this.isShowEtBar=true;
    this.serv.getEventsList(this.keyword, this.category, this.distance, this.unit, this.geoPoint).subscribe(result => {
     
      if(result!=null&&result['_embedded']!=null&&result['_embedded']!= undefined&&result['_embedded']['events']!=undefined){
          this.eventsList=result['_embedded']['events'];
          this.isShowEvent=true;
          this.isShowDetail=false;
      }else{
        this.eventsList=null;
      }
      this.isShowEtBar=false;
    });
  }
  

  // --------------------- Detail Info Start
  getDetailInfo(flag,event,ind,eventid,eventinfo) {
    this.isShowDtpBar=true;
    this.tabCtl='a';
    this.dtIdStar=eventid;
    this.dtInfoStar=eventinfo;
    event.preventDefault();
    if(flag=='res'){
      this.hightlightRow = ind;
      this.hightlightFvrtRow = -1;
    }else{
      this.hightlightFvrtRow = ind;
      this.hightlightRow = -1;
    }
    this.isDisaDetail = false;
    this.isShowEvent=false;
    this.serv.getDetialInfo(eventid).subscribe(result => {
      this.isShowDtpBar=false;
      if(result!=null){
        this.isShowDetail=true;
        this.eventInfo=result;
        // eventnameD
        if(result['name']!=undefined){
          this.eventnameD=result['name'];
        }
        // ArtistTeam
        if(result['_embedded']!=undefined&&result['_embedded']!=null&&result['_embedded']['attractions']!=undefined&&result['_embedded']['attractions'].length!=0){
          this.attractionsList = result['_embedded']['attractions'];
          this.attractionnames="";
          for(let i=0;i<this.attractionsList.length-1;i++){
            this.attractionnames+=this.attractionsList[i]['name']+"|";
          }
          this.attractionnames+=this.attractionsList[this.attractionsList.length-1]['name'];
        }
        //VenueD
        if(result['_embedded']!=undefined&&result['_embedded']!=null&&result['_embedded']['venues']!=undefined&&result['_embedded']['venues'].length!=0){
          this.venueD = result['_embedded']['venues'][0].name;
        }else{
          this.venueD =null;
        }

        // timeD:string="";
        if(result['dates']!=undefined&&result['dates']!=null&&result['dates']['start']!=undefined&&result['dates']['start']['localDate']!=undefined){
          this.dateD=result['dates']['start']['localDate'];
        }
        // timeD:string="";
        if(result['dates']!=undefined&&result['dates']!=null&&result['dates']['start']!=undefined&&result['dates']['start']['localTime']!=undefined){
          this.timeD=result['dates']['start']['localTime'];
        }
        // categoryD:string="";
        if(result['classifications']!=undefined&&result['classifications'].length!=0&&result['classifications'][0]['genre'].name!=undefined){
          this.generD=result['classifications'][0]['genre'].name;
        }
        if(result['classifications']!=undefined&&result['classifications'].length!=0&&result['classifications'][0]['segment'].name!=undefined){
          this.segmentD=result['classifications'][0]['segment'].name;
        }
  
        // prD:string="";
        if(result['priceRanges']!=undefined&&result['priceRanges'].length!=0){
          if(result['priceRanges'][0]['currency']!=undefined){
            this.curD=result['priceRanges'][0]['currency'];
          }

          if(result['priceRanges'][0]['min']!=undefined){
            this.minD=result['priceRanges'][0]['min'];
          }
          if(result['priceRanges'][0]['max']!=undefined){      
            this.maxD=result['priceRanges'][0]['max'];
          }
        }
        // tsD:string="";
        if(result['dates']!=undefined&&result['dates']!=null&&result['dates']['status']!=undefined&&result['dates']['status']['code']!=undefined){
          this.tsD=result['dates']['status']['code'];
        }
        // btaD:string="";
        if(result['url']!=undefined&&result['url']!=null){
          this.btaD=result['url'];
        }
        // smD:string=""
        if(result['seatmap']!=undefined&&result['seatmap']['staticUrl']!=undefined){
          this.smD=result['seatmap']['staticUrl'];
        }
        //twitter
        this.tweettext="Check out "+this.eventnameD+" at "+this.venueD+". Website: "+result['url'];
        this.hash = "CSCI571EventSearch,";
      }else{
        this.eventInfo=null;
      }
     
      

    });
  }
 //---------- Call Venue Api
  getVenueInfo() {
    this.isShowVenueBar=true;
    this.tabCtl='c'
    if(this.venueD!=null&&this.venueD!=""){
      this.serv.getVenueInfo(this.venueD).subscribe(result => {
        this.isShowVenueBar=false;
        if(result['_embedded']!=undefined&&result['_embedded']['venues']!=undefined&&result['_embedded']['venues'].length!=0){
          this.venueInfo = result['_embedded']['venues'][0];
          
          this.mapLat=Number(this.venueInfo['location']['latitude']);
          this.mapLon=Number(this.venueInfo['location']['longitude']);
        }else{
          this.venueInfo =null;
        }
      });
    }
  }

  //---------- Call upcoming Api
  getUpcomingInfo() {
    this.isShowUpcomBar=true;
    this.tabCtl='d'
    if(this.venueD!=null&&this.venueD!=""){
      this.serv.getUpcomingInfo(this.venueD).subscribe(result => {
        if(result['resultsPage']['results']!=null&&result['resultsPage']['results']['venue']!=null){
          let venueid=result['resultsPage']['results']['venue'][0].id;
          this.getUpcomingInfoCtn(venueid);
        }else{
          this.isShowUpcomBar=false;
          this.upcomingList=null;
          this.upDefaultList=[];
        }
      });
    }
  }

  getUpcomingInfoCtn(venueid) {
   
    this.upcomingList=null;
      this.serv.getUpcomingInfoCtn(venueid).subscribe(result => {
        this.isShowUpcomBar=false;
        if(result!=null&&result['resultsPage']!=undefined&&result['resultsPage']['results']!=undefined&&result['resultsPage']['results']['event']!=undefined&&result['resultsPage']['results']['event'].length!=0){
          this.upcomingList=result['resultsPage']['results']['event'];
          this.upDefaultList=JSON.parse(JSON.stringify( this.upcomingList ));
        }
      });
  }
//---------- Call Spotify Api for Artist 
extractSame(targetname:string,comArr:Array<object>){
    for(let i=0;i<comArr.length;i++){
      if(targetname==comArr[i]['name']){
        this.ArtFinalArr.push(comArr[i]);
        break;
      }
    }
}
getArtAndImg(){
  this.tabCtl='b';
  this.isShowArtBar=true;
  if(this.attractionsList!=null&&this.attractionsList.length!=0){
    this.getArtistFirst();
    this.getImages();
  }else{
    this.isShowArtBar=false;
  }
}
getArtistFirst() {
  this.ArtFinalArr=[];
  if(this.segmentD=="Music"){
      this.serv.getArtistInfo(this.attractionsList[0]['name']).subscribe(result => {
       
        if(result['statusCode']==200){
          if(result['body']!=undefined&&result['body']['artists']!=null&&result['body']['artists']!=undefined&&result['body']['artists']['items']!=undefined){
            this.extractSame(this.attractionsList[0]['name'],result['body']['artists']['items']);
          }
          this.getArtistOther(1);
        }else{
          if(result['statusCode']==401){
            this.getArtistTokenInfo();
          }
        }
      });
    }else{
      
    }
   
}
getArtistOther(n:any) {
    for(let i=n;i<this.attractionsList.length;i++){
      this.serv.getArtistInfo(this.attractionsList[i]['name']).subscribe(result => {
        if(result['statusCode']==200){
          if(result['body']!=undefined&&result['body']['artists']!=null&&result['body']['artists']!=undefined&&result['body']['artists']['items']!=undefined){
            this.extractSame(this.attractionsList[i]['name'],result['body']['artists']['items']);
          }
      }
      });
    }
}

//   get Token and then call again
getArtistTokenInfo() {
 
    this.serv.getArtistTokenInfo().subscribe(result => {
      if(result!=null&&result!=undefined&&result['token']!=undefined&&result['token']=="yes"){
        this.getArtistOther(0);
      }
    });
}

getImages() {
  this.imaFinalArr=[];
  for(let i=0;i<this.attractionsList.length;i++){
    this.serv.getImages(this.attractionsList[i]['name']).subscribe(result => {
      this.isShowArtBar=false;
      if(result!=null&&result['items']!=undefined&&result['items'].length!=0){
          this.imaFinalArr.push(result['items']);
      }
    });
  }
}
  
}
