import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'type',
  pure: false
})
export class TypePipe implements PipeTransform {

  transform(input: Project[], desiredType) {
  var output: Project[] = [];
  if (desiredType === "product") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].type === "product") {
        output.push(input[i]);
      }
    }
    return output;
  } else if (desiredType === "project") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].type === "project") {
        output.push(input[i]);
      }
    }
    return output;
  } else if (desiredType === "charity") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].type === "charity") {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;//return array of all objects
  }
}

}
