<?php
    $conn= mysqli_connect("localhost","admin","Admin@321","weather");
    function apireq($city){
        $ch=curl_init();
        $url="api.openweathermap.org/data/2.5/weather?q=$city&appid=fff7c83f41ced58422d5b40ec3c0c01a";
        curl_setopt($ch,CURLOPT_URL,$url);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
        $rep=curl_exec($ch);
        if($e=curl_error($ch)){
            echo $e;
        }
        else{
            $decode=json_decode($rep,true);
            if($decode['weather'][0]["main"]){
                return $decode;
            }
            else{
                echo("Failed");
            }
        }  
    } 
?>

