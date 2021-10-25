<?php
$fname = $_POST["fname"];
$lname = $_POST["lname"];
$email = $_POST["email"];
$pass = $_POST["pass1"];

setcookie("name",$fname,time()+5000);
setcookie("name2",$lname,time()+5000);


echo($_COOKIE["name"]." ".$_COOKIE["name2"].",Thank you For registration"."<br>");
echo "<span>Kindly </span><a href='login.html'>LOGIN</a>";

?>
