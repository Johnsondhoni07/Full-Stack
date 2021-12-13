<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" >
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</head>
<body>
    

<div class="container p-5 ">
    <div class="col-md-5 p-5">
        <h3>sample form</h3>
        <form action="" method="post" class="form-group " id="testform">
            <label for="">Name</label>
            <input type="text" name="uname" placeholder="Enter your name .." id="uname" class="form-control">
            <br>
            <label for="">Email</label>
            <input type="text" name="email" id="email" placeholder="Enter your email...." class="form-control">
            <br>
            <input type="submit" value="Submit" class="btn btn-success">
        </form>
    </div>
</div>
<script type="text/javascript">
    $("#testform").on('submit',function(e){
        e.preventDefault();
        $.ajax({
            url:"val.php",
            method:"POST",
            data:$("#testform").serialize(),
            success:function(dat){
                alert(dat);
            }

        });

    });
</script>

</body>
</html>