/*Recibir el id del formulario para poder maipular*/
const FRM_AUTOS  = document.querySelector("#frmAutos");

//Genereamos el evento del formulario por el medio de submit
FRM_AUTOS.addEventListener("submit",autosController);

function autosController(event){
   event.preventDefault();
   //recibir datos de caja de textos 
   let marca = document.querySelector("#txtmarcaAuto").value;
   let origen = document.querySelector("#txtorigenAuto").value;
   let precio = parseFloat(document.querySelector("#txtPrecioAuto").value);
   let precioInput = document.querySelector("#txtPrecioAuto");
   let nombreComprador = document.querySelector("#txtcomprador").value;
  
   // validar cajas de texto vacias
   if (precioInput.value.trim() == "" ) {
      alert("Por favor, ingrese un valor en el capos Vacios.");
      return;  // Detener la ejecución si está vacía
  }


   // imprimir resultados TDA
   let imprimirRes = document.getElementById("resultado");
   imprimirRes.textContent = autoTDA(marca,precio,origen,nombreComprador);
}
const autoTDA =(marca,precio,origen,nombreComprador) =>{
   let aumentoOrigen=0;
   let aumentoOrigen45=0;
   let aumentoOirgen45Iva16=0;
   let aumentoOrigFinal=0;
   let aumento30=0;

   if(origen == "Alemania"){
         aumentoOrigen45 = (precio*0.45)
         aumentoOrigen = (precio + aumentoOrigen45)
         aumento30 = (aumentoOrigen*0.20)
         aumentoOrigFinal = aumentoOrigen + aumento30
   }else if(origen == "Japon"){
      aumentoOrigen45 = (precio*0.45)
         aumentoOrigen = (precio + aumentoOrigen45)
         aumento30 = (aumentoOrigen*0.30)
         aumentoOrigFinal = aumentoOrigen + aumento30
   }
   else if(origen == "Italia"){
      aumentoOrigen45 = (precio*0.45)
      aumentoOrigen = (precio + aumentoOrigen45)
      aumento30 = (aumentoOrigen*0.15)
      aumentoOrigFinal = aumentoOrigen + aumento30
   }
   else if(origen == "EU"){
      aumentoOrigen45 = (precio*0.45)
      aumentoOrigen = (precio + aumentoOrigen45)
      aumento30 = (aumentoOrigen*0.08)
      aumentoOrigFinal = aumentoOrigen + aumento30

      
   }else if(origen == "noSelecciona"){
      alert("No selecciono Origen");
   }
      aumentoOirgen45Iva16 =aumentoOrigFinal+(aumentoOrigFinal*0.16)

   return"Nombre del comprador: " + nombreComprador  +"::::::::::"+
          "Marca del automovil: " + marca +"::::::::::"+
          "Origen del automvil: " + origen  +"::::::::"+
          "Precio Principal $:" + precio +"::::::::::::"+
          "Precio sin IVA $:" + aumentoOrigFinal +":::::::::::"+
          "Precio Final $: " + aumentoOirgen45Iva16;

}
/*function autosTDA(marca,precio,origen,nombreComprador){
   let aumentoOrigen=0;
   let aumentoOrigen45=0;
   let aumentoOirgen45Iva16=0;
   let aumentoOrigFinal=0;
   let aumento30=0;

   if(origen == "Alemania"){
         aumentoOrigen45 = (precio*0.45)
         aumentoOrigen = (precio + aumentoOrigen45)
         aumento30 = (aumentoOrigen*0.20)
         aumentoOrigFinal = aumentoOrigen + aumento30
   }else if(origen == "Japon"){
      aumentoOrigen45 = (precio*0.45)
         aumentoOrigen = (precio + aumentoOrigen45)
         aumento30 = (aumentoOrigen*0.30)
         aumentoOrigFinal = aumentoOrigen + aumento30
   }
   else if(origen == "Italia"){
      aumentoOrigen45 = (precio*0.45)
      aumentoOrigen = (precio + aumentoOrigen45)
      aumento30 = (aumentoOrigen*0.15)
      aumentoOrigFinal = aumentoOrigen + aumento30
   }
   else if(origen == "EU"){
      aumentoOrigen45 = (precio*0.45)
      aumentoOrigen = (precio + aumentoOrigen45)
      aumento30 = (aumentoOrigen*0.08)
      aumentoOrigFinal = aumentoOrigen + aumento30

      
   }else if(origen == "noSelecciona"){
      alert("No selecciono Origen");
   }
    aumentoOirgen45Iva16 =aumentoOrigFinal+(aumentoOrigFinal*0.16)
    
     return  "Nombre del comprador: " + nombreComprador  +"::::::::::"+
             "Marca del automovil: " + marca +"::::::::::"+
             "Origen del automvil: " + origen  +"::::::::"+
             "Precio Principal $:" + precio +"::::::::::::"+
             "Precio sin IVA $:" + aumentoOrigFinal +":::::::::::"+
             "Precio Final $: " + aumentoOirgen45Iva16 ;

             
            


             
}*/



