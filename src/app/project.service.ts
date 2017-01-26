import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2'

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }

    getProjects() {
      return this.projects;
    }

    addProject(newProject: Project) {
      this.projects.push(newProject);
    }

    getProjectById(projectId: string){
      return this.angularFire.database.object('/projects/' + projectId);// firebase is searching for us
    }

    updateProject(localUpdatedProject){
      var albumEntryInFirebase = this.getProjectById(localUpdatedProject.$key);// finds album by id
      albumEntryInFirebase.update({//updating album.value
        name: localUpdatedProject.name,
        details: localUpdatedProject.details,
        manager: localUpdatedProject.manager,
        goal: localUpdatedProject.goal,
        moneyraised: localUpdatedProject.moneyraised,
        reward: localUpdatedProject.reward,
        type: localUpdatedProject.type});
    }

    fundProject(localUpdatedProject, amountInputed){
      var albumEntryInFirebase = this.getProjectById(localUpdatedProject.$key);// finds album by id
      localUpdatedProject.moneyraised = parseInt(localUpdatedProject.moneyraised) + parseInt(amountInputed);
      albumEntryInFirebase.update({//updating album.value
        name: localUpdatedProject.name,
        details: localUpdatedProject.details,
        manager: localUpdatedProject.manager,
        goal: localUpdatedProject.goal,
        moneyraised: localUpdatedProject.moneyraised,
        reward: localUpdatedProject.reward,
        type: localUpdatedProject.type});
    }

    deleteProject(localProjectToDelete){
      var albumEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
      albumEntryInFirebase.remove();
    }


  }
