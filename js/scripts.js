var myResult = [];
var someVowels = ["a","e","i","o","u"];
var vowelCounter = 0;
//business logic
var convertInt = function(data)
{
  myResult = [];
  if(data < 1)
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

var convertString = function(str)
{
  myResult = [];
  for(var i = 0; i < str.length; i ++)
  {
    for(var j = 0; j < someVowels.length; j ++)
    {
      if(str[i] === someVowels[j])
      {
        myResult.push(str[i] + " -- Vowel alert!");
        vowelCounter = 1;
      }
    }
    if((vowelCounter === 0) && (str[i] === "y"))
    {
      myResult.push(str[i] + " -- y is sort of a vowel?");
    }
    else if(vowelCounter === 0)
    {
      myResult.push(str[i]);
    }
    vowelCounter = 0;
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

    if(!inputData){
      inputData = $("#number").val();
      console.log(inputData);
      convertString(inputData);
    }
    else{
      convertInt(inputData);
    }

    console.log(myResult);
    displayData(myResult);

    event.preventDefault();
  });
});
