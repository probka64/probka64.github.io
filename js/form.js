<!-- JavaScript 
function pr(form) 
{ 
//���� �� ��������� ���� 
if((form.name.value=="")) 
{ 
//������� ������� ��������� 
alert("�� ��������� �� ��� ����! ��������� ���� ����������� ��� ����������"); 
//���������� ���� 
return false; 
} //���� ��������� ��� ���� else //���������� ������ 
return true; 
} 
// - JavaScript - -->

function
checkEmail(inputvalue){ 
var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
if(pattern.test(inputvalue)) 
{ 
//��������� ������ 
return true; 
} 
else
{ 
//������� �� ����� ��������� 
alert("�� ������� ��������� ���� e-mail!"); 
//���������� ���� 
return false; 
}
}
