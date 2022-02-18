const args = process.argv.slice(2)
const timer = function(args) {
  console.log(args);
  if (args.length === 0) {
    console.log(" ");
  }
  for (let i = 0; i < args.length; i++) {
    if (isNaN(args[i])) {
      console.log("No timer");
    }
    if ((!isNaN(args[i])) && (args[i]) < 0) {
      console.log("No timer");
    }
    if ((!isNaN(args[i])) && (args[i]) > 0) {
       setTimeout (() => {
        return process.stdout.write('\x07');
       }, args[i] * 1000);
    }  
  }
};
console.log(timer(args))
