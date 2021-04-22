/* Compute interest */
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate / 100;

    var year = new Date().getFullYear() + parseInt(years);

    /* Output result as text in `result` element */
    document.getElementById("result").innerHTML="If you deposit " +
      principal + ",\<br\>at an interest rate of " + rate +
      "%\<br\>You will receive an amount of " + interest +
      ",\<br\>in the year " + year + "\<br\>"
}

/* Display the rate as text next to the slider, `rate_val` element */
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + " %";
}

/* Show alert if invalid input in `principal` */
function validatePrincipal()
{
  var principal = document.getElementById("principal").value;

  if (principal != '' & principal <= 0) {
    alert("Enter a positive number")
    document.getElementById("principal").focus();
  }
}
