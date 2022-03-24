import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'referencia';
  copied = false;
  primeiroNome = ""
  ultimoNome = ""
  tituloArtigo = ""
  tituloRevista = ""
  localPublicacao = ""
  volume = ""
  numero = ""
  pagina = ""
  dataPublicacao = ""
  link = ""
  dataAcesso = ""

  resultado = "sapin";

  isValid(value:String ):boolean {
    return (value.trim()!='')
  }

  copy(){
    
    
    if(this.resultado!=''){
      //navigator.clipboard.writeText(this.resultado)
      this.copied=true
    }
    
    setTimeout(()=>{
      this.copied = false
    },3000);
  }

  getResultado(){
    var txtarea = document.getElementById("txtarea")?.innerText
    this.resultado = (txtarea!=null)?txtarea:''
    return this.resultado
  }

  dateFormatted(){
    var d,m,y=""
    d=this.dataAcesso.substring(8,10)
    m=this.dataAcesso.substring(5,7)
    y=this.dataAcesso.substring(0,4)
    return d+'/'+m+'/'+y
  }
}
