var myResult = [];
//business logic
var convert = function(data)
{
  myResult = [];
  if((data < 1) || !(data))
  {
    alert("Enter a number greater than 0!")
  }
  else
  {
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
}

var displayData = function(myResult)
{
  $(".kill").remove();
  for(var i = 0; i < myResult.length ; i ++)
  {
    $("#output").append('<div class="kill"><li>' + myResult[i] + '</div></li>');
    event.preventDefault();
  }
}

//user-interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    var inputData = parseInt($("#number").val());

    console.log(inputData);
    convert(inputData);
    console.log(myResult);
    displayData(myResult);

    event.preventDefault();
  });
});
