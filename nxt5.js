<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	
</head>

<style type="text/css">


</style>

<body>

Enter a number : <input type="number" id="num">
<button id="butnxt" class="chk">print next five numbers</button>
<ul id="print">
	
</ul>

<script type="text/javascript">

$(".chk").click(function(){
	var the_id = $(this).attr('id');
	//alert(the_id);
	var theVal = parseInt($("#num").val());

	if (the_id =="butnxt") //this means user asking for next
		{
			if (theVal==0) 
			{
				alert("please enter a valid number to continue");
			}
			else
			{
            for (var i = 1;i<6;i++)
            	{
					newVal = theVal + (i*1);
					$("#print").append($("<li>"+newVal+"</li>"));
                }
			}
		}

});


$("#num").on('change keyup keydown', function(){
	theVal = $(this).val();

	if (theVal == "") 
	{
		$("#print li").css({"display":"none"})
	}
})


</script>

</body>
</html>