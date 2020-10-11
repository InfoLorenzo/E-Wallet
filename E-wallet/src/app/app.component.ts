import { Component, OnInit, } from '@angular/core';
import { Transacciones, fecha } from 'src/models/transacciones'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {


  
  title(title: any) {
    throw new Error("Method not implemented.");
  }


  public Transaccionobjeto: Transacciones;
  public TransaccionesArray: Array<Transacciones>;

  public Conceptodetransaccion: string;
  public Importedetransaccion: number;
  public ConceptoValido: boolean;
  public ImporteValido: boolean;
  public inputpulsado: boolean;
 

  public fechaactual: string;

  public TransaccionesArrayBD;


  constructor() {

    this.ConceptoValido = false;
    this.ImporteValido = false;
    this.inputpulsado = false;

  }

 

  isNumeric(componente){

  let contienenumero: boolean;
      contienenumero = false;
    for (let i = 0; i <= 10; i++) {
      
      if(componente.includes(i) == true){
        contienenumero = true;
      }
    }
    console.log("El componente " + componente + " ¿ tiene numero ?" + contienenumero)
    return contienenumero;
  }
  
  sumatransaccion() {

    this.inputpulsado = true;

    if (this.Conceptodetransaccion != "" && this.Conceptodetransaccion != null && this.Conceptodetransaccion != " " && this.isNumeric(this.Conceptodetransaccion) == false ) {
     
      this.ConceptoValido = true;
      console.log("La condición ConceptoValido es : " + this.ConceptoValido)
    } else {
      
      this.ConceptoValido = false;
      console.log("La condición ConceptoValido es : " + this.ConceptoValido)
      
    }

    if (this.Importedetransaccion != 0 && this.Importedetransaccion != null && typeof this.Importedetransaccion == "number") {
      this.ImporteValido = true
      console.log("La condición ImporteValido es : " + this.ImporteValido)
      
    } else {
      this.ImporteValido = false
      console.log("La condición ImporteValido es : " + this.ImporteValido)
      

    }

    if (this.ConceptoValido && this.ImporteValido == true) {

      if (this.TransaccionesArray == null || this.TransaccionesArray == undefined) {
        this.TransaccionesArray = [

          new Transacciones(this.Conceptodetransaccion, this.Importedetransaccion, fecha)
        ]
        console.log("Primera transaccion añadida")
        console.log(this.TransaccionesArray)
        this.TransaccionesArrayBD = this.TransaccionesArray
        localStorage.setItem("TransaccionesArrayBD", JSON.stringify(this.TransaccionesArrayBD))
      } else {

        this.TransaccionesArray.push(new Transacciones(this.Conceptodetransaccion, this.Importedetransaccion, fecha))

        console.log(this.TransaccionesArray)

        this.Conceptodetransaccion = null;
        this.Importedetransaccion = null;

        this.TransaccionesArrayBD = this.TransaccionesArray;

        localStorage.setItem("TransaccionesArrayBD", JSON.stringify(this.TransaccionesArrayBD))

        console.log("Se ha añadido una transacción")

        console.log(JSON.parse(localStorage.getItem("TransaccionesArrayBD")))
      }

    }

  }

  limpiarTransacciones() {

    localStorage.clear()
    this.TransaccionesArray = null
    this.TransaccionesArrayBD = null
    this.Conceptodetransaccion = null
    this.Importedetransaccion = null

    if (localStorage.length == 0) {
      console.log("El almacenamiento local se vació correctamente")
    } else {
      console.log("El alamacenamiento local no se vació correctamente")
    }


  }



  ngOnInit(): void {

    this.TransaccionesArrayBD = JSON.parse(localStorage.getItem("TransaccionesArrayBD"))

    if (this.TransaccionesArrayBD != null) {
      this.TransaccionesArray = this.TransaccionesArrayBD
      console.log(this.TransaccionesArray)

    }

    

  }



}
