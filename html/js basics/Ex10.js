function longest(string) {
    let length = 0, start = 0, last, next = -1;
    
    do {
      last = next + 1;
      next = string.indexOf(" ", last);
      
      if (next - last > length) {
        length = next - last;
        start = last;
      }
    } while (next > -1)
    
    if (string.length - last > length) {
      length = string.length - last;
      start = last;
    }
      
    return string.substring(start, start + length);
  }
  
  console.log(longest("abcd ab"));