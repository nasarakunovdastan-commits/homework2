const tabContents = document.querySelectorAll(".tab_content_block");
const tabButtons = document.querySelectorAll(".tab_content_item");

let currentTab = 0;

function showTab(index) {
  tabContents.forEach(function (item) {
    item.style.display = "none";
  });

  tabButtons.forEach(function (item) {
    item.classList.remove("tab_content_item_active");
  });

  tabContents[index].style.display = "block";
  tabButtons[index].classList.add("tab_content_item_active");

  currentTab = index;
}

tabButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    showTab(index);
  });
});

setInterval(function () {
  currentTab++;

  if (currentTab >= tabButtons.length) {
    currentTab = 0;
  }

  showTab(currentTab);
}, 3000);

showTab(0);