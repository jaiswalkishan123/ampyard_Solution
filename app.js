 var x=Number(prompt("Enter the X coordinate"));
 var y=Number(prompt("Enter the Y coordinate"));
$("body").keypress(function(event){
  switch(event.key)
  {
    case "1": x=x-1;
    $("h1").text("("+x+","+y+")");
    break;
    case "2":x=x+1;
    $("h1").text("("+x+","+y+")");
    break;
    case "3":y=y+1;
    $("h1").text("("+x+","+y+")");

    break;
    case "4":y=y-1;
    $("h1").text("("+x+","+y+")");

    break;
    default:$("h1").text("Wrong Input");
  }

});


 // $("h1").text("("+x+","+y+")");
//
// var val=prompt("enter a value between 1-4");
// switch(val){
//   case "1":
//   x=x-1;
//   $("h1").text("("+x+","+y+")");
//   break;
//   case "2":
//   x=x+1;
//     $("h1").text("("+x+","+y+")");
//   break;
//   case "3":
//   y=y+1;;
//   $("h1").text("("+x+","+y+")");
//   break;
//   case "4":
//   y=y-1;
//   $("h1").text("("+x+","+y+")");
//   break;
//
// }
// // }
