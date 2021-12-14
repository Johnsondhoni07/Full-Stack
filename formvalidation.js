function validation(e){
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var email=document.getElementById('email').value;
    var pass1=document.getElementById('pass1').value;
    var pass2=document.getElementById('pass2').value;
    var check=document.getElementById('check').checked;

    if(fname!=""){
        document.getElementById('msgfname').innerHTML ="";
        document.getElementById('fname').style.borderColor="#ccc";
    }
    if(email!=""){
        document.getElementById('msgemail').innerHTML="";
        document.getElementById('email').style.borderColor="#ccc";
        var re=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!email.match(re)){
            document.getElementById('msgemail').innerHTML="Enter a valid Email Address";
            document.getElementById('email').style.borderColor='red'
            document.getElementById('msgemail').style.color='red';
            return false;
        }
        else{
            document.getElementById('msgemail').innerHTML="";
            document.getElementById('email').style.borderColor="#ccc  ";
        }
    }
    if(pass1!=""){
        document.getElementById('msgpass1').innerHTML="";
        document.getElementById('pass1').style.borderColor="#ccc  ";
    }
    if(pass2!=""){
        document.getElementById('msgpass2').innerHTML="";
        document.getElementById('pass2').style.borderColor="#ccc  ";
    }
    
    if(fname==""){
        document.getElementById('msgfname').innerHTML="<sup>*</sup>First Name is empty";
        document.getElementById('fname').style.borderColor="red";
        document.getElementById('msgfname').style.color="red";
        return false;
    }
    if(email==""){
        document.getElementById('msgemail').innerHTML="<sup>*</sup>Email is empty";
        document.getElementById('email').style.borderColor="red";
        document.getElementById('msgemail').style.color="red";
        return false;
    }
    if(pass1==""){
        document.getElementById('msgpass1').innerHTML="<sup>*</sup>Password is empty";
        document.getElementById('pass1').style.borderColor="red";
        document.getElementById('msgpass1').style.color="red";
        return false;
    }
    if(pass2==""){
        document.getElementById('msgpass2').innerHTML="<sup>*</sup>Password is empty";
        document.getElementById('pass2').style.borderColor="red";
        document.getElementById('msgpass2').style.color="red";
        return false;
    }
    if(pass1!=pass2){
        document.getElementById('msgpass2').innerHTML="<sup>*</sup>Password must Be Same";
        document.getElementById('pass2').style.borderColor="red";
        document.getElementById('msgpass2').style.color="red";
        return false;
    }
    if(check==false){
        document.getElementById('checkmsg').innerHTML="Accept the terms and conditions";
        document.getElementById('checkmsg').style.color="red";
        return false;
    }
    //alert(fname+" "+lname+",Thank You for Registration");
    $.ajax({
        url: 'registration.php',
        data: $("#formname").serialize(),
        type: 'POST',
        success: function(res){
            document.getElementById('finalmsg').innerHTML=res;
            document.formname.reset();
            document.getElementById("formname").style.display="none";
            document.getElementById("footer").style.display="none";
            document.getElementById("finalmsg").style.display="block";
            document.getElementById("finalmsg").style.backgroundColor="lightgoldenrodyellow";
        }
    });
    // e.preventDefault();
}

