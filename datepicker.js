  $(document).ready(function(){
  var weekdays = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var noofdays = [31,29,31,30,31,30,31,31,30,31,30,31];
  var date = new Date();
  var crntmonth = date.getMonth();
  var year = date.getFullYear();
  var mn = crntmonth;
  var textbox = document.createElement("input");
  textbox.type = "text";
  textbox.id = "selectdate";
  var calenderdiv = document.getElementById("calenderdiv");
  calenderdiv.appendChild(textbox);
  document.getElementById("selectdate").addEventListener("click",datepicker);
  function datepicker() {
    var calender = document.createElement("table");
    var thead = document.createElement("thead");
    var th = document.createElement("th");
    th.id = "header";
    th.innerHTML = "<p class = 'change' id = 'previous'>" + "&#x3c" + "</p>" + "<span>" + months[crntmonth] + "</span>" + "<span>" + "," + date.getFullYear() + "</span>" + "<p class = 'change' id = 'next'>" + "&#x3e" + "</th>";
    thead.appendChild(th);
    calender.appendChild(thead);
    var tbody = document.createElement("tbody");
    tbody.id = "calenderbody";
    var daysheader = document.createElement("tr");
    for(var i = 0; i < weekdays.length; i++)
    {
      var td = document.createElement("td");
      td.innerHTML = weekdays[i];
      daysheader.appendChild(td);
    }
    tbody.appendChild(daysheader);
    calender.appendChild(tbody);
    calenderdiv.appendChild(calender);
    document.getElementById("previous").addEventListener("click",previousmonth);
    document.getElementById("next").addEventListener("click",nextmonth);
    displaydates(date);
  }
  function displaydates(crntdate) {
    var date = new Date(crntdate);
    var firstday = date.getDay();
    var colindex = date.getDay();
    var calbody = document.getElementById("calenderbody");
    var k = 1;
    var tr = document.createElement("tr");
    for(var i = 0; i < noofdays[date.getMonth()]+firstday; i++)
    {
      if(i < firstday)
      {
        var td = document.createElement("td");
        td.innerHTML = "";
        tr.appendChild(td);
        calbody.appendChild(tr);
      }
      else if(colindex%7 != 0) {
        colindex++;
        var td = document.createElement("td");
        td.innerHTML = k++;
        tr.appendChild(td);
        calbody.appendChild(tr);
        }
        else {
          var tr = document.createElement("tr");
          colindex++;
          var td = document.createElement("td");
          td.innerHTML = k++;
          tr.appendChild(td);
          calbody.appendChild(tr);
        }
    }
  }
  function previousmonth()
  {
    var date = new Date();
    mn=(mn+12)%12-1;
    if(mn === -1)
    {
      year--;
      mn = 11;
    }
    mn = (mn < 0) ? mn * -1 : mn;
    var date = date.setDate(0);
    $("#header").html("<p class = 'change' id = 'previous'>" + "&#x3c" + "</p>" + "<span>" + months[mn] + "</span>" + "<span>" + "," + year + "</span>" + "<p class = 'change' id = 'next'>" + "&#x3e" + "</th>");
    displaydates(date);
    console.log(date.getMonth());
    document.getElementById("previous").addEventListener("click",previousmonth);
    document.getElementById("next").addEventListener("click",nextmonth);
  }
  function nextmonth()
  {
    mn=(mn+12)%12+1;
    if(mn === 12)
    {
      ++year;
      mn = 0;
    }
    var date = date.setDate(32);
    $("#header").html("<p class = 'change' id = 'previous'>" + "&#x3c" + "</p>" + "<span>" + months[mn] + "</span>" + "<span>" + "," + year + "</span>" + "<p class = 'change' id = 'next'>" + "&#x3e" + "</th>");
    document.getElementById("previous").addEventListener("click",previousmonth);
    document.getElementById("next").addEventListener("click",nextmonth);
    displaydates(crntdate);
  }
});
