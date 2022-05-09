/*
let TotalPositivo=[];

let TotalResta=[];

document.getElementById("Boton").onclick=()=>{
   
    
    let Action = document.getElementById("Action").value
    let Item = document.getElementById("Item").value
    let Precio = document.getElementById("Precio").value
    let PrecioParse = parseInt(Precio)
    function generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }
    
    

    let Id=generateUUID()
   
    if (Action==="1"){
       
        TotalPositivo.push({Item, PrecioParse,Id})
        console.log(TotalPositivo)
        let elementosPositivos = document.getElementById("ItemsPositivos")
        elementosPositivos.innerHTML='';
        let productArticles='';

        TotalPositivo.forEach(product=>{
            productArticles += `
                <section class='d-flex flex-row' id=${product.id}>
                <h1 class='Income3'>${product.Item}</h1>
                <h1 class='ms-4 me-5 Income3'>$ ${product.PrecioParse}</h1>
                <button type="button" id=${product.id} class="btn btn-danger buttonBorrar" onClick='borrarX(${product.id})'>Cancelar</button>
                
                </section>
            
            `
        })

        elementosPositivos.innerHTML= productArticles

        //---------------------- Total para Gastar---------------------------//
        let elementosParaGastar = document.getElementById("TotalPgastar")
        elementosParaGastar.innerHTML='';
        let res = TotalPositivo.reduce((sum, value) => (typeof value.PrecioParse == "number" ? sum + value.PrecioParse : sum), 0);
        elementosParaGastar.innerHTML=res
        //--------------------------------------------------------------------//
  

       //--------------------------Total quedan------------------------------//
       let elementosTotalQuedan = document.getElementById("TotalQuedan")
       elementosTotalQuedan.innerHTML='';
       //--------------------------------------------------------------------//
      
       //-------------------------Resultados Para condicionales----------------------------------//
       let total1 = TotalPositivo.reduce((sum, value) => (typeof value.PrecioParse == "number" ? sum + value.PrecioParse : sum), 0);
       let total2 = TotalResta.reduce((sum, value) => (typeof value.PrecioParse == "number" ? sum + value.PrecioParse : sum), 0);
       //--------------------------------------------------------------------//

       if(total1 != null || total2 ==undefined){
        elementosTotalQuedan.innerHTML=total1-total2
       }
       
    }
    if (Action==="2"){

       let total1 = TotalPositivo.reduce((sum, value) => (typeof value.PrecioParse == "number" ? sum + value.PrecioParse : sum), 0);
       let total2 = TotalResta.reduce((sum, value) => (typeof value.PrecioParse == "number" ? sum + value.PrecioParse : sum), 0);
       
       //if(total1 <= total2){
        //        let elementosTotalQuedan = document.getElementById("TotalQuedan")
        //         elementosTotalQuedan.innerHTML=0
        //         return alert("No puede ingresar gastos sin tener ingresos")

       
       //}
       if(total1 != 0 || total2 != 0){
        TotalResta.push({Item,PrecioParse,id:TotalPositivo.length+1})
        

        let elementosPositivos = document.getElementById("ItemsNegativos")
        elementosPositivos.innerHTML='';
        let productArticles='';

        TotalResta.forEach(product=>{
            productArticles += `
                <section class='d-flex flex-row'id=${product.id}>
                <h1>Item:${product.Item}</h1>
                <h1 class='ms-4 me-5'>Valor:$ ${product.PrecioParse}</h1>
                <button type="button" id=${product.id} class="btn btn-danger buttonBorrar" onClick='borrarY(${product.id})'>Cancelar</button>
                </section>
            
            `
        })
          //---------------------- Total que Resta---------------------------//
          let elementosGastos = document.getElementById("TotalGastos")
          elementosGastos.innerHTML='';
          let res = TotalResta.reduce((sum, value) => (typeof value.PrecioParse == "number" ? sum + value.PrecioParse : sum), 0);
          
        //--------------------------------------------------------------------//
         let elementosTotalQuedan = document.getElementById("TotalQuedan")
         elementosPositivos.innerHTML= productArticles
         elementosGastos.innerHTML=res
         elementosTotalQuedan.innerHTML=total1-res
       }  
    }
}

let borrarX=(e)=>{
    id=e;
    
    
    //------------------------Remover del Dom-------------------------------------//
    const item2 = TotalPositivo.filter(item2 => item2.id != id)
    const productoById = TotalPositivo.find(el => el.id = id)
    const inDex= TotalPositivo.indexOf(productoById)
    const eliminar = TotalPositivo.splice(0,1,inDex)
    const eliminar2 = TotalPositivo.splice(0,1)
    
    let X =document.getElementById(id).remove()
     
    ///---------------------- Total para Gastar---------------------------//
    let total3 = TotalPositivo.reduce((sum, value) => (typeof value.PrecioParse == "number" ? sum + value.PrecioParse : sum), 0);
    let total4 = TotalResta.reduce((sum, value) => (typeof value.PrecioParse == "number" ? sum + value.PrecioParse : sum), 0);
    let totalY= total3-total4   
   
  
    let elementosParaGastar = document.getElementById("TotalPgastar")
  
   elementosParaGastar.innerHTML=total3
   //---------------------------Total Gastos---------------------------//
   let elementosGastos = document.getElementById("TotalGastos")
   elementosGastos.innerHTML=total4;

   //---------------------------TotalQuedan ---------------------------//
   let elementosTotalQuedan = document.getElementById("TotalQuedan")
   elementosTotalQuedan.innerHTML=totalY



     
   
    

}

let borrarY=(e)=>{
    
    
    */
    
    /*id=e;
    const item2 = TotalResta.filter(item2 => item2.id != id)
    const productoById = TotalResta.find(el => el.id = id)
    const inDex= TotalResta.indexOf(productoById)
    const eliminar = TotalResta.splice(0,1,inDex)
    const eliminar2 = TotalResta.splice(0,1)
    let X =document.getElementById(id).remove()

    ///---------------------- Total para Gastar---------------------------//
    let elementosParaGastar = document.getElementById("TotalGastos")
    elementosParaGastar.innerHTML='';
    let res = TotalResta.reduce((sum, value) => (typeof value.PrecioParse == "number" ? sum + value.PrecioParse : sum), 0);
    elementosParaGastar.innerHTML=res
    //--------------------------------------------------------------------//


    //--------------------------Total quedan------------------------------//
    let elementosTotalQuedan = document.getElementById("TotalQuedan")
    elementosTotalQuedan.innerHTML='';
    let total1 = TotalPositivo.reduce((sum, value) => (typeof value.PrecioParse == "number" ? sum + value.PrecioParse : sum), 0);
    let total2 = TotalResta.reduce((sum, value) => (typeof value.PrecioParse == "number" ? sum + value.PrecioParse : sum), 0);
    elementosTotalQuedan.innerHTML=total1-total2
    */

    /*
    //--------------------------------------------------------------------//
    //faltan las validaciones 
    id=e;
    //let total1 = TotalPositivo.reduce((sum, value) => (typeof value.PrecioParse == "number" ? sum + value.PrecioParse : sum), 0);
    //let total2 = TotalResta.reduce((sum, value) => (typeof value.PrecioParse == "number" ? sum + value.PrecioParse : sum), 0);
    
    //let totalX=total1+1
    //if(totalX<=total2){
        //return alert("No puede ingresar gastos sin tener ingresos")
    //}
    //if(total1>=total2){
       
    //------------------------Remover del Dom-------------------------------------//
    const item2 = TotalResta.filter(item2 => item2.id != id)
    const productoById = TotalResta.find(el => el.id = id)
    const inDex= TotalResta.indexOf(productoById)
    const eliminar = TotalResta.splice(0,1,inDex)
    const eliminar2 = TotalResta.splice(0,1)
    
    let X =document.getElementById(id).remove()
     //if(total1>=total2){
    ///---------------------- Total para Gastar---------------------------//
    let total3 = TotalPositivo.reduce((sum, value) => (typeof value.PrecioParse == "number" ? sum + value.PrecioParse : sum), 0);
    let total4 = TotalResta.reduce((sum, value) => (typeof value.PrecioParse == "number" ? sum + value.PrecioParse : sum), 0);
    let elementosParaGastar = document.getElementById("TotalPgastar")
    console.log(total3)
    elementosParaGastar.innerHTML=total3
   //---------------------------Total Gastos---------------------------//
   let elementosGastos = document.getElementById("TotalGastos")
   console.log(total4)
   elementosGastos.innerHTML=total4;

   //---------------------------TotalQuedan ---------------------------//
   let elementosTotalQuedan = document.getElementById("TotalQuedan")
   elementosTotalQuedan.innerHTML=total3-total4



    // }
    //}
    
    
}
*/