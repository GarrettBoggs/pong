var myResult = [];
//business logic
var convert = function(data)
{
  result = [];
  for(var i = 1; i <= data; i ++)
  {
    if(i % 15 === 0)
    {
      myResult.push("ping-pong");
    }
    else if(i % 5 === 0)
    {
      myResult.push("pong");
    }
    else if(i % 3 === 0)
    {
      myResult.push("ping");
    }
    else
    {
      myResult.push(i);
    }

  }
}
//user-interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var data = parseInt($("#number").val());
    console.log(data);
    convert(data);
    console.log(myResult);
    $("#output").text(myResult);
  });
});
