function leftPyramid(rows) {
  for (var i = 1; i <= rows; i++) {
    var str = "";

    for (var j = 1; j <= i; j++) {
      str += "*";
    }

    console.log(str);
  }
}

leftPyramid(7);
