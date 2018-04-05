import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TreinoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({ 
  selector: 'page-treino', 
  templateUrl: 'treino.html',
})
export class TreinoPage {

  musicas: Array<{nome: string, tipo: string, level: number}> = [
    {nome: "Solitary 2", tipo: "S", level: 17},
    {nome: "Sarabande", tipo: "S", level: 18},
    {nome: "Bang Bang Bang", tipo: "D", level: 20} 
  ];

  musicaObj ={nome:'', tipo:'', level:0}

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  adicionaMusicas(){
    console.log("entrou em adiciona musicas")
    this.musicas.push({
      nome: this.musicaObj.nome,
      tipo: this.musicaObj.tipo,
      level: this.musicaObj.level
    })
    console.log(this.musicaObj)
    console.log(JSON.stringify(this.musicas))
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad TreinoPage');
  // }

}
