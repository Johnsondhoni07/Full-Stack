<?php
$strrep="I am in Chennai.One of my favorite team in the ipl is CSK.Dhoni was borned in ranchi at July 7. ";

// $strrep=str_replace("at","$",$strrep);
// $strrep=str_replace("of",".",$strrep);
// $strrep=str_replace("in","=",$strrep);
// $strrep=str_replace("are","+",$strrep);
// $strrep=str_replace("the","_",$strrep);

//method 2 
$repstr=str_replace(array("at","of","in","are","the"),array("$",".","=","+","_"),$strrep);
echo $repstr;   
?>
