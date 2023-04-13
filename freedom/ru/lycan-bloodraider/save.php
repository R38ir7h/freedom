<?php 
$LgPath=$_POST['img_val'];

$name = 'lycan-bloodraider-skill-tree-created-with-www-Calc.FW-Rebirth-com-'.date('Y-m-d-H-i-s').'.png';

        header("Content-Transfer-Encoding: binary");
        header("Content-Type: image/png");
        header("Content-Disposition: attachment; filename=$name");
        //start feeding with the file
readfile($LgPath);