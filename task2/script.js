function swapValues() {
  let input1 = document.getElementById('input1');
  let input2 = document.getElementById('input2');
  let temp = input1.value;
  input1.value = input2.value;
  input2.value = temp;
}
