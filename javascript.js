function dateFunc() {
  var x = setInterval(func, 1000);
  var date = new Date().toDateString();

  function func() {
    var time = new Date().toLocaleTimeString();
    document.getElementById("date").innerHTML = date;
    document.getElementById("time").innerHTML = time;
  }
}
