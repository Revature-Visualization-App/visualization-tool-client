import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/Category';
import { Curriculum } from '../models/Curriculum';
import { Primer } from '../models/Primer';
import { Skill } from '../models/Skill';
import { Visualization } from '../models/Visualization';
import { CurriculumService } from '../services/curriculum.service';
import { SkillService } from '../services/skill.service';


import { VisualizationService } from '../services/visualization.service';
@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  //styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {

  currentVisualization: Visualization;
  currentCurriculumList: Curriculum[] = null;
  // currentPrimerList: Primer[] = null;
  // selected = 0;
  // distinctSkillList: Skill[] = [];
  // distinctCategoryList: Category[] = [];
  // distinctCurriculumList: Curriculum[] = [];
  // currentCurriculumId: number;
  // currentSkillList: Skill[] = [];
  //  categoryColorList: string[] = [];
  // currentPrimerId: number;





  visualizationId: number = 1;
  curriculumId: number = 1;
  vName: string = "";
  curriculumArrayLength: number = 0;
  curriculumName: string = "";
  primerName: string = "";
  skillId:number = 7;
  skillId1:number = 13;
  skillName:string = "";
  skillName1:string = "";




  //curriculumArray:Curriculum[] = [];


  //http://54.221.159.251:8090/visualization/curriculum/{id}

  constructor(private visualizationService: VisualizationService, private route: ActivatedRoute, private curriculumService: CurriculumService, private skillService: SkillService) { }

  getVisualization(): void {
    this.visualizationId = Number(this.route.snapshot.paramMap.get('id'));
    this.visualizationService.getVisualizationById(this.visualizationId).subscribe(response => {
      for (let i = 0; i < response.curriculumList.length; i++) {
        console.log(response)
        this.visualizationId = response.visualizationId;
        this.curriculumId = (Number(response.curriculumList[i]))
        console.log(this.curriculumId)
      }
      this.vName = response.visualizationName

    })
  }


  getCurriculum(curriculumId) {
    this.curriculumService.getCurriculumById(curriculumId).subscribe(response => {
      console.log(response)
      this.curriculumName = response.curriculumName;
      this.skillId = Number(response.skillList[0])

    })

  }
  getSkill(skillId) {
    this.visualizationService.getSkillsById(skillId).subscribe(response => {
      console.log(response);
     this.skillName= response.skillName;

    })

  }
  getSkill1(skillId1) {
    this.visualizationService.getSkillsById(skillId1).subscribe(response => {
     this.skillName1= response.skillName;

    })

  }




  ngOnInit(): void {
    this.getVisualization();
    this.getCurriculum(this.curriculumId);
    this.getSkill(this.skillId)
    this.getSkill1(this.skillId1)


  }




  // this.currentCurriculumList = response.curriculumList;
  // this.currentPrimerList = response.primerList;
  // if (this.currentCurriculumList.length !== 0) {
  //   this.changeCurriculumEvent(this.currentCurriculumList[0].curriculumId);
  // }
  //});


  // this.visualizationService.getCurriculumById(this.visualizationId).subscribe(
  //   (response) =>{
  //     this.distinctCurriculumList = response;
  //   });

  // this.visualizationId = Number(this.route.snapshot.paramMap.get('id'));
  // this.visualizationService.getVisualizationById(this.visualizationId).subscribe((response) => {
  //   this.currentVisualization = response;
  //   // this.currentCurriculumList = response.curriculumList;
  //   // this.currentPrimerList = response.primerList;
  //   // if (this.currentCurriculumList.length !== 0) {
  //   //   this.changeCurriculumEvent(this.currentCurriculumList[0].curriculumId);
  //   // }
  // });
  // this.visualizationService.getSkillsById(this.visualizationId).subscribe((response) => {
  //   this.distinctSkillList = response;
  // });
  // this.visualizationService.getCategoriesById(this.visualizationId).subscribe((response) => {
  //   this.distinctCategoryList = response;
  //   const total = Math.floor(360 / this.distinctCategoryList.length);
  //   for (let idx = 0; idx < this.distinctCategoryList.length; idx++) {
  //     this.categoryColorList.push(this.randColor(idx, total));
  //   }
  // });
}
  // changeCurriculumEvent(currentCurriculumId: number): void {
  //   for (const curriculum of this.currentVisualization.curriculumList){
  //     if (currentCurriculumId === curriculum.curriculumId){
  //       this.currentSkillList = curriculum.skillList;
  //     }
  //   }
  // }

  // changePrimerEvent(currentPrimerId: number): void {
  //   for (const primer of this.currentVisualization.primerList){
  //     if (currentPrimerId === primer.primerId){
  //       this.currentSkillList = primer.skillList;
  //     }
  //   }
  // }

  // randColor(i: number, total: number): string {
  //   return 'hsl(' + i * total + ', 50%, 75%)';
  // }

