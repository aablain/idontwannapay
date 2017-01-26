import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(name: string, details: string, manager: string, goal: number, moneyraised:number, reward: string, type:string) {
    var newProject: Project = new Project(name, details, manager, goal, moneyraised, reward, type);
    this.projectService.addProject(newProject);
  }

}
