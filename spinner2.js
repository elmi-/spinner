const sides = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   "];
let delay = 0;

for (const side of sides) {
  setTimeout(() => {
    process.stdout.write(side);
  }, delay);
  
  delay += 100;
}