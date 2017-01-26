import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from './../project.model';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-specific-project',
  templateUrl: './specific-project.component.html',
  styleUrls: ['./specific-project.component.css'],
  providers: [ProjectService]
})
export class SpecificProjectComponent implements OnInit {
    projectId: string;
    projectToDisplay: FirebaseObjectObservable<Project>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.projectId = urlParametersArray['itsKey'];
    });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId);
  }

}
