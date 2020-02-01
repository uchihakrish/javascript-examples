<!DOCTYPE html>
<html>

<head>

/*Get the value of the input box by using document.getElementById('numb').value and reverse this using the #reverse() method for arrays:

value.split('').reverse().join('')*/

<script> 
function myFunction() {
  var sentence = document.getElementById("numb").value;
  document.getElementById("demo").innerHTML = sentence.split('').reverse().join('');
}
</script>

</head>

<body>
	<p>Display a string in reverse order.</p>
	<input id="numb">
	<button type="button" onclick="myFunction()">Submit</button>
	<p id="demo"></p>
</body>
</html>