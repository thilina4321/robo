import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patient'
})
export class PatientPipe implements PipeTransform {

  transform(value: any, filterData:string): unknown {
    if(value.lenght < 0 || filterData == ''){
      return value
    }
    const resultArray = []
    for(const data of value){
      if(data['nic'] == filterData){
        resultArray.push(data)
      }
    }

    return resultArray;
  }

}
