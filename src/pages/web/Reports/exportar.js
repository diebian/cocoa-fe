let button = document.querySelector("#button-excel");

button.addEventListener("click", e => {
  let table = document.querySelector("#simpleTable1");
  TableToExcel.convert(table);
});