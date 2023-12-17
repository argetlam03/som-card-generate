import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Batter, Pitcher } from './player-models';

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrl: './player-search.component.scss'
})
export class PlayerSearchComponent implements OnInit {
  searchForm: FormGroup
  pitchers: Pitcher[]
  batters: Batter[]
  table: boolean
  dataSourcePitch: Pitcher[]
  dataSourceBat: Batter[]
  headers = ['last', 'first', 'year', 'card']

  constructor() {}

  ngOnInit() {
    this.table = false
    this.pitchers = new Array();
    this.batters = new Array();
    this.dataSourcePitch = new Array();
    this.dataSourceBat = new Array();
    this.createSamplePlayers()

    // all player loads will happen from player-down-up component
    // can upload personal files and war files with proper formatting
    // adds players to list to be searched on and then card made

    this.createForm()
  }

  createSamplePlayers() {
    this.pitchers.push(new Pitcher(["Tyler Glasnow", "2023"]))
    this.pitchers.push(new Pitcher(["Tyler Glasnow", "2022"]))
    this.pitchers.push(new Pitcher(["Tyler Glasnow", "2021"]))
    this.pitchers.push(new Pitcher(["Tyler Glasnow", "2020"]))
    this.pitchers.push(new Pitcher(["Pete Fairbanks", "2023"]))
    
    this.batters.push(new Batter(["Randy Arozarena", "2023"]))
    this.batters.push(new Batter(["Randy Arozarena", "2022"]))
    this.batters.push(new Batter(["Randy Arozarena", "2021"]))
    this.batters.push(new Batter(["Brandon Lowe", "2023"]))
  }

  createForm() {
    this.searchForm = new FormGroup({
      last: new FormControl(""),
      first: new FormControl(""),
      year: new FormControl(""),
      pitcher: new FormControl(false)
    })
  }

  search() {
    this.dataSourcePitch = [] as Pitcher[]
    this.dataSourceBat = [] as Batter[]
    console.log(this.searchForm.value)
    const val = this.searchForm.value
    if(val['pitcher']) {
      this.pitchers.forEach ( pitcher => {
        if((val['last'] !== "" || val['first'] !== "") && val['year'] !== "") {
          if(val['last'] === "" || val['last'] === pitcher.last) {
            if(val['first'] === "" || val['first'] === pitcher.first) {
              if(val['year'] === pitcher.year) {
                this.dataSourcePitch.push(pitcher)
              }
            }
          }
        } else if(val['last'] === pitcher.last && val['first'] === pitcher.first) {
            this.dataSourcePitch.push(pitcher)
        }
      })
    } else {
      this.batters.forEach ( batter => {
        if((val['last'] !== "" || val['first'] !== "") && val['year'] !== "") {
          if(val['last'] === "" || val['last'] === batter.last) {
            if(val['first'] === "" || val['first'] === batter.first) {
              if(val['year'] === batter.year) {
                this.dataSourceBat.push(batter)
              }
            }
          }
        } else if(val['last'] === batter.last && val['first'] === batter.first) {
            this.dataSourceBat.push(batter)
        }
      })
    }

    this.table = true
  }


}
