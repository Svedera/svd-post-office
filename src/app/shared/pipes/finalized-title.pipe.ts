import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'finalizedTitle'
})
export class FinalizedTitlePipe implements PipeTransform {

  transform(finalized: Boolean): string {
    if(finalized == null){
      return '';
    }

    if(finalized){
      return 'Finalized';
    }

    return 'Not finalized';
  }

}
