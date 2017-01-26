import { Component, OnInit } from '@angular/core';
import { Project } from './../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
  providers: [ProjectService]
})
export class ProjectsListComponent implements OnInit {

  constructor (private router: Router, private projectService: ProjectService){}
    projects: FirebaseListObservable<any[]>;
    currentRoute: string = this.router.url;

    ngOnInit() {
      this.projects = this.projectService.getProjects();
    }

    goToDetailPage(clickedProject) {
      this.router.navigate(['specific-project', clickedProject.$key]);
    }

    // filterByArtist: string = "allArtists";
    //
    // onChange(optionFromMenu) {
    //   this.filterByArtist = optionFromMenu;
    // }

}
