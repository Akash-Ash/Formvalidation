function check(form) { 
    password1 = form.pswd.value; 
    password2 = form.cnfmpswd.value; 

    if (password1 == '') 
        alert ("Please enter Password"); 
        
    else if (password2 == '') 
        alert ("Please enter confirm password"); 
        
    else if (password1 != password2) { 
        alert ("\nPassword did not match!!!") 
        return false; 
    } 
    else{ 
        alert("Password Match!!!") 
        return true; 
    } 
}
function mai(form)
{
    var ma= form.mail.value;
    var at=ma.indexOf("@");
    var dot=ma.lastIndexOf(".");
    
    if(at>1 && at!=ma.length && ma.length>=10 && dot+2<=ma.length)
    {
        return true;
    }
    else{
        alert("wrong email id");
        
    }
   
}