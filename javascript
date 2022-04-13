// this code section to go custom code section on the page, inside head tag

<script>// 🥑 on DOM loaded
document.addEventListener("DOMContentLoaded", event => {
  const element = document.getElementById("element");
  // getting the values of prep and cook time
  let birthdate = new Date(document.getElementById("birthdate").value);
    
    var month_diff = Date.now() - birthdate.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);

  element.innerHTML = `${age} years old`;
}); // end DOM listener
</script>


//this code section to into HTMLEmbed code editor on the page Designer
//insert HTMLEmbed component on the page where you want the age to display

<input type="hidden" id="birthdate" value="YOUR CMS BIRTHDAY FIELD VALUE">
<p class="body-text-tag" id="element"><p>
