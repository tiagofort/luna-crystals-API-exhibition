
function ordernarQtd(arr){
     for(var i = 0; i < arr.length; i ++){
        for(var j = 0; j < ( arr.length - i - 1 ); j++){    
        if(arr[j].qtd_vendida > arr[j+1].qtd_vendida){
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j+1] = temp;
          }
        }  
     }
     return arr.reverse();   
}

function ordernarTotal(arr){
    for(var i = 0; i < arr.length; i ++){
       for(var j = 0; j < ( arr.length - i - 1 ); j++){    
       if(arr[j].qtd_total > arr[j+1].qtd_total){
           var temp = arr[j];
           arr[j] = arr[j + 1];
           arr[j+1] = temp;
         }
       }  
    }
    return arr.reverse();   
}

function ordernarLucro(arr){
  for(var i = 0; i < arr.length; i ++){
     for(var j = 0; j < ( arr.length - i - 1 ); j++){    
     if(arr[j].lucro > arr[j+1].lucro){
         var temp = arr[j];
         arr[j] = arr[j + 1];
         arr[j+1] = temp;
       }
     }  
  }
  return arr.reverse();   
}



module.exports = {
    ordernarQtd,
    ordernarTotal,
    ordernarLucro
}