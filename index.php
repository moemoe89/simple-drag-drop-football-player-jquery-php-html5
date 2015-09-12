
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=8" />
<link href="./css/base.css" rel="stylesheet" />
<script src="./js/jquery-git2.min.js"></script>
<script src="./js/jquery.event.drag-2.2.js"></script>
<script src="./js/jquery.event.drag.live-2.2.js"></script>
<script src="./js/jquery.event.drop-2.2.js"></script>
<script src="./js/jquery.event.drop.live-2.2.js"></script>
<script src="./js/excanvas.min.js"></script>
<script src="./js/watermark-polyfill.js"></script>
<script src="./js/main.js"></script>
<title>Simple Drag & Drop Football Player</title>
</head>
<body>
<input type="hidden" id="totalDrop" value="0">
<div id="lock"></div>
<p>Drag the player to the field.</p>
<div id="container-field"></div>
<div id="container-player"></div>

<?php 

$arrName = [null,'若林 源三','松山 光','三杉 淳','若島津 健','石崎 了','早田誠','中沢早苗','Momo','日向 小次郎','大空 翼','岬 太郎','火野 竜馬','本間 実','井沢 守','石田 鉄男'];

$totalData  = 15;
$perGroup   = 4;
$division   = ceil($totalData/$perGroup);
$group      = [];
$style_left = [];

for($x=0;$x<=$division;$x++){
	$style_left[$x] = 0;
	$group[$x] = [];
	if($x==0){
	  $z             = 1;
	  $perGroupAfter = $perGroup;
	}else{
	  $z             = ($x*$perGroup)+1;
	  $perGroupAfter = ($x*$perGroup)+$perGroup;
	}
	for($y=$z;$y<=$perGroupAfter;$y++){
	  array_push($group[$x],$y);
	}
}


for($i=1;$i<=15;$i++){

	for($x=0;$x<=$division;$x++){
		if (in_array($i, $group[$x])) {
	       $margin_top      = 90+($x*90);
	       $style_left[$x] += 80;
	       $sl              = $style_left[$x];
		}
	}

?>
<div class="drag" id="drag<?php echo $i;?>" number="<?php echo $i;?>" style="left:<?php echo $sl;?>px;top:<?php echo $margin_top;?>px;" status="0">
	<a class="boxclose" id="back<?php echo $i;?>" number="<?php echo $i;?>" top="" left="">
		<img src="./img/back.png" width="20">
	</a>
	<div class="name"><?php echo $arrName[$i]; ?></div>
</div>

<script>
$(function($){
    setTimeout(function () { 
      var text = watermark.text;
      watermark(['./img/shirt_r.png'])
        .image(text.center('<?php echo $i;?>', '18px Josefin Slab', '#000', 1, 48))
        .then(function (img) {
          $('#drag<?php echo $i;?>').css("background","url('"+img.src+"')");
        });

    }, 1000);
});
</script>

<?php 
}
?>

</body>
</html>



