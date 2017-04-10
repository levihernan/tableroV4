function flechitas(){
$('#desktopTable td:nth-child(5)').each(function(){
  console.log($(this).innerHTML);
  if (parseFloat($(this)[0].innerHTML)<0){
    $(this).addClass('downValue');
  } else if (parseFloat($(this)[0].innerHTML)>0){
    $(this).addClass('upValue');
  }
 });

$('#desktopTable td:nth-child(8)').each(function(){
 console.log($(this).innerHTML);
 if (parseFloat($(this)[0].innerHTML)<0){
   $(this).addClass('downValue');
 } else if (parseFloat($(this)[0].innerHTML)>0){
   $(this).addClass('upValue');
 }
});

$('#mobileTable .mobileData:nth-child(6) td:nth-child(2)').each(function(){
  console.log($(this).innerHTML);
  if (parseFloat($(this)[0].innerHTML)<0){
    $(this).addClass('downValue');
  } else if (parseFloat($(this)[0].innerHTML)>0){
    $(this).addClass('upValue');
  }
 });

$('#mobileTable .mobileData:nth-child(10) td:nth-child(2)').each(function(){
 console.log($(this).innerHTML);
 if (parseFloat($(this)[0].innerHTML)<0){
   $(this).addClass('downValue');
 } else if (parseFloat($(this)[0].innerHTML)>0){
   $(this).addClass('upValue');
 }
});

};
