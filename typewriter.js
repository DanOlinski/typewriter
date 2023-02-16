const print = function() {
  const sentence = "hello there from lighthouse labs";
  let timer = 200;

  for (let i = 0; i < sentence.length; i++) {
    setTimeout(()=> process.stdout.write(sentence[i]), timer);
    timer += 200;
  }
  
  setTimeout(()=> process.stdout.write('\n'), timer);
};



print();
//console.log(print())

