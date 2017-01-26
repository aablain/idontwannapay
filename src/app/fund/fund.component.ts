import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css'],
    providers: [ProjectService]
})
export class FundComponent implements OnInit {
    @Input() selectedProject;

    constructor(private projectService: ProjectService) { }

    ngOnInit() {
    }

    fundThisAmount(projectToBeChanged, amountInputed){
      this.projectService.fundProject(projectToBeChanged, amountInputed);
    }
}
