var result = [];

var convert = function(data)
{
  result = [];
  for(var i = 1; i <= data; i ++)
  {
    result.push(i);
  }
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var data = parseInt($("#number").val());
    console.log(data);
    convert(data);
    console.log(result);
    $("#output").text(result);
  });
});
