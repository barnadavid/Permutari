function ver(s, k) {
  for (var i = 0; i < k; i++) {
    for (var j = 0; j < s.length; j++) {
      if (s[i] == s[j]) {
        return false;
      }
    }
  }
  return true;
}



function permutari(n, p) {
//debugger;
  var k = 0;
  var s = [];
  var valid = false;
  s[k] = 0;

  while (k >= 0) {
    s[k]++;
    valid = false;
    while (!valid && s[k] <= n) {
      if (ver(s, k + 1)) {
        valid = true;
      } else {
        s[k]++;
      }
    }
    if (valid) {
      if (k == p - 1) {
        console.log(s);
      } else {
        k++;
        s[k] = 0;
      }
    } else {
      k--;
    }
  }
}

permutari(3, 2);
