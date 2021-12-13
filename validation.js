$(document).ready(function(){
    $("#grid_btn").click(function(){
        $("#list").css('display','none');
        $("#grid").css('display','block');
        $("#grid_btn").addClass('active');
        $("#list_btn").removeClass('active');
    });
    $("#list_btn").click(function(){
        $("#list").css('display','block');
        $("#grid").css('display','none');
        $("#list_btn").addClass('active');
        $("#grid_btn").removeClass('active');
    });
});
function validation(){
    var city=document.getElementById('city').value;
    var letters = /^[A-Za-z]+$/;
    if(city==""){
        document.getElementById('add_btnmsg').innerHTML="<sup>*</sup>Field should not be empty";
        document.getElementById('add_btnmsg').style.color="red";
        document.getElementById('city').style.borderColor="red";
    }
    if(city!=""){
        document.getElementById('add_btnmsg').innerHTML="";
        document.getElementById('city').style.borderColor="black";
        if(city.match(letters)){
            document.getElementById('add_btnmsg').innerHTML="";
            document.getElementById('city').style.borderColor="";
            $.ajax({
                url: 'insert.php',
                data: $("#form").serialize(),
                type: 'POST',
                success: function(res){
                    res = res.trim();
                    console.log(res);
                    if(res=='Failed'){
                        document.getElementById('add_btnmsg').innerHTML="City not Found";
                        document.getElementById('add_btnmsg').style.color="red";
                        document.getElementById('city').style.borderColor="red";
                        return false;  
                    }else{
                        window.location.reload();
                    }
                }
            });
        }
        else{
            document.getElementById('add_btnmsg').innerHTML="Please input alphbet character only";
            document.getElementById('add_btnmsg').style.color="red";
            document.getElementById('city').style.borderColor="red";
            return false;
        }
    }
    
}
