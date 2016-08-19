var result = [];
var add = "";
var numerals =
var convert = function(data)
{

  return result;
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
