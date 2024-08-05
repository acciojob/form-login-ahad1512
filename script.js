const form = document.getElementById("form1");
form.addEventListener("submit",getFormvalue);
function getFormvalue() {
    //Write your code here
	alert(form.fname.value+" "+form.lname.value);
}
