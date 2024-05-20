document.getElementById('doubleBtn').addEventListener('click', function() {
  let listItems = document.querySelectorAll('#itemList li');
  listItems.forEach(function(item) {
    item.textContent = parseInt(item.textContent) * 2;
  });
});
