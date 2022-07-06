const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

rl.question('How old are you? ', (age) => {
  rl.question('Whats your favourite type of hat? ', (hat) => {
    rl.question('Can you somersault? ', (roll) => {
      rl.question('How high can you count? ', (count) => {
        rl.question('Can you fix a dishwasher? ', (fix) =>  {
         rl.question('Whats for dinner? ', (din)  =>  {
          rl.question('Where is the cream cheese? ', (hungry) => {
            console.log(`${age}? Ok Boomer! And you're favourite hat is a ${hat}? don't you mean fedora? Edgy! ${roll}? wow thats unexpected. Also you can only count to ${count}? Okay, ${fix} dishwashers need love too. ${din} is for dinner eh? can i have some? I'll get some ${hungry}.`);

            rl.close();
          
          
          })
          })
          })
          })
    });
  });

});

 







