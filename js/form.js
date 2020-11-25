<!-- JavaScript 
function pr(form) 
{ 
//Если не заполнено поле 
if((form.name.value=="")) 
{ 
//Выводим грозное сообщение 
alert("Вы заполнили не все поля! Заполните поля обязателные для заполнения"); 
//Возвращаем ложь 
return false; 
} //Если заполнены все поля else //Возвращаем правду 
return true; 
} 
// - JavaScript - -->

function
checkEmail(inputvalue){ 
var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
if(pattern.test(inputvalue)) 
{ 
//Возращаем правду 
return true; 
} 
else
{ 
//выводим на экран сообщение 
alert("Вы неверно заполнили поле e-mail!"); 
//Возвращаем ложь 
return false; 
}
}
