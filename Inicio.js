/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global end */
    $num=true;
    $vIk=0;
    $vB=0;
    $vN=0;
    $vC=0;
    $vK=0;
$("#iker").click(function(){
    
      if($num==true){
   alert("Has votado a iker como mejor portero");
    $vIk+=1;
    $num=false;
    end;
    }
  if($num==false){
    alert("Ya has votado");
    end;
    }
  });  
$("#buffon").click(function(){
    if($num==true){
    alert("Has votado a Buffon como mejor portero");
     $vB+=1;
     $num=false;
    end;
    }
    if($num==false){
    alert("Ya has votado");
    end;
    }
});
$("#neuer").click(function(){
    if($num==true){
    alert("Has votado a Neuer como mejor portero");
    $vN+=1;
    $num=false;
    end;
    }
    if($num==false){
    alert("Ya has votado");
    end;
    }
});
$("#cech").click(function(){
    if($num==true){
    alert("Has votado a Cech como mejor portero");
    $vC+=1;
    $num=false;
    end;
    }
    if($num==false){
    alert("Ya has votado");
    end;
    }
});
$("#navas").click(function(){
    if($num==true){
    alert("Has votado a Keylor como mejor portero");
    $vK+=1;
    $num=false;
    end;
    }
    if($num==false){
    alert("Ya has votado");
    end;
    }
});
