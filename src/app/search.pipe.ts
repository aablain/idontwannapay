import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(projects: any, term: any):any {
    if (term === undefined) return projects;
    return projects.filter(function(project){
      if (project.name.toLowerCase().includes(term.toLowerCase()) || project.manager.toLowerCase().includes(term.toLowerCase())) {
        return project;
      }
    })
  }

}
