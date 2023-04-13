<?php 
$LgPath=$_POST['img_val'];

$name = 'kindred-warden-skill-tree-created-with-www-fwcalc-com-'.date('Y-m-d-H-i-s').'.png';

        header("Content-Transfer-Encoding: binary");
        header("Content-Type: image/png");
        header("Content-Disposition: attachment; filename=$name");
        //start feeding with the file
readfile($LgPath);