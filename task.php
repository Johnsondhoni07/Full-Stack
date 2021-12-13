<?php
$num=4;
for ($x=1; $x<=$num; $x++)
{
    echo $x . " ";
    for ($y=$x; $y<=$num+$num; $y+=$num)
    {
        echo $y+$num . " ";
    }
    echo "<br>";
}

?>