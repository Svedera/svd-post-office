import { Pipe, PipeTransform } from '@angular/core';

import { enumToString } from '@shared/utilities/enum';

@Pipe({
  name: 'enumToString'
})
export class EnumToStringPipe implements PipeTransform {

  transform<T, P>(enumValue: P, enumType: T): string {
    return enumToString(enumType, enumValue);
  }

}
