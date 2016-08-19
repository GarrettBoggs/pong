var result = [];

var convert = function(data)
{
  result = [];
  for(var i = 1; i <= data; i ++)
  {
    if(i % 15 === 0)
    {
      result.push("ping-pong");
    }
    else if(i % 5 === 0)
    {
      result.push("pong");
    }
    else if(i % 3 === 0)
    {
      result.push("ping");
    }
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
