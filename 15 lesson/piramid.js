// variant1
{
  const printPyramid = (n) => {
    for (let i = 0; i < n; i++) {
      let row = "";
      row += "#".repeat(n - i - 1);
      row += "*".repeat(2 * i + 1);
      row += "#".repeat(n - i - 1);

      console.log(row.padStart(n + i).padEnd(2 * n - 1));
    }
  };

  printPyramid(5);
}
//  variant2
{
  const printPyramid = (n) => {
    const pyramid = [];
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < n - i - 1; j++) {
        row.push("#");
      }
      for (let k = 0; k < 2 * i + 1; k++) {
        row.push("*");
      }
      for (let l = 0; l < n - i - 1; l++) {
        row.push("#");
      }
      pyramid.push(row.join(""));
    }
    pyramid.forEach((row) => console.log(row));
  };
  printPyramid(5);
}
