<?php
    // $num=121;
	// $temp=$num;
	// $rev=0;
	// while($num>0){
	//   $dig=$num%10;
	//   $rev=$rev*10+$dig;
	//   $num=$num/10;
	// }
	// echo $temp. "<br>";
	// echo $rev."<br>";
	// if ($temp==$rev)
    // {
	//   echo "the number is palindrome";
	// }
	// else
    // {
	//   echo"Not Palindrome";
	// }

    // using inbuilt function 
    $input=1221;
    $output=strrev($input);
    if($input==$output)
    {
        echo "The number {$input} is palindrome";   
    }
    else 
    {
        echo "The Number {$input} is not a palindrome";
    }
?>