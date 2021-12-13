<?php
$actual_string = "I am in Office";

$array_split = explode(" ",$actual_string);

$len_array = count($array_split);

$rev_data = "";



for($i=$len_array;$i>=0;$i--)

{

echo $array_split[$i]." ";

}