<!DOCTYPE html>
<html>
<body>

<p>Click the button bellow.</p>

<button onclick="myFunction()">Enter</button>

<p id="demo"></p>

<script>
function myFunction() {
  var person = prompt("Please enter your name", "");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! welcome to SFLC India.";
  }
}
</script>

</body>
</html>