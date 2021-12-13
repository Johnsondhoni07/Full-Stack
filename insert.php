<?php

    $city=$_POST['city'];

    include('config.php');
    
    $decode=apireq($city);

    $cityname=$decode['name'];
    $country=$decode['sys']['country'];
  

    $sql_insert="insert into weather_table(Country,city) values('$country','$cityname')"; 
    if($decode['weather']['0']['main']){
        if(mysqli_query($conn,$sql_insert)){
            echo "success";
        }else{
            echo "Failure";
        }
    }
    
    


?>