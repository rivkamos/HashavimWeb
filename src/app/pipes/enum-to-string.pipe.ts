import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToString'
})
export class EnumToStringPipe implements PipeTransform {

  transform(value: any, enumObj: any): string | undefined {
    return Object.values(enumObj)[value] as string | undefined;
  }}
