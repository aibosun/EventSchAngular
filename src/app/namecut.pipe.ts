import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namecut'
})
export class NamecutPipe implements PipeTransform {

  transform(value: string): any {
    if(!value) return null;
    let words = value.split(' ');
    if(value.length<=35){
      return words;
    }else{
      return value.substr(0,35)+"...";
    }
  
  }

}
