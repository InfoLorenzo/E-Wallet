import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})


export class LoadingScreenComponent implements OnInit {

  public loaderHTML = document.getElementById("loader");

  public animaciondecargaestado:boolean = true;
  
  
  
  constructor() { 
if(this.animaciondecargaestado == true){
  window.addEventListener('load',() =>{
      
    console.log("Web cargada,se inicia el intervalo")

    setTimeout(function(){ document.getElementById("loader-screen").classList.add("fade-out"); }, 3000);

    setTimeout(function(){document.getElementById("loader-screen").style.display = ("none"); }, 4600);
    

  })
}else{
  console.log("La animacion no esta cargada")
}
    

  }

  ngOnInit(): void {
    
  }

}
