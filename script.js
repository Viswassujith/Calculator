function Add(){
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    // var opr=document.getElementById("operators").value;
  if(document.getElementById('op1').checked)
  {
    document.getElementById("add").value = n1+n2;
  }
  if(document.getElementById('op2').checked)
  {
    document.getElementById("add").value = n1-n2;
  }
  if(document.getElementById('op3').checked)
  {
    document.getElementById("add").value = n1/n2;
  }
  if(document.getElementById('op4').checked)
  {
    document.getElementById("add").value = n1*n2;
  }




};