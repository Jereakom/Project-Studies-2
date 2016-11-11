var xmlhttp = new XMLHttpRequest();
var url = "https://project-studies-2.herokuapp.com/leaderboards";

xmlhttp.onreadystatechange = function()
{
  if (this.readyState == 4 && this.status == 200)
  {
    var leaders = JSON.parse(this.responseText);
    leaderboards(leaders);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function leaderboards(lead)
{

  var i;

  var table = document.getElementById("leaderboards");

  for(i = 0; i < lead.length; i++)
  {

    var row = table.insertRow(i+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = lead[i].username;
    cell2.innerHTML = lead[i].games;
    cell3.innerHTML = lead[i].wins;
    cell4.innerHTML = lead[i].losses;
    cell5.innerHTML = lead[i].ties;
  }
}
