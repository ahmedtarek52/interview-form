var currentPage = 1;

function showPage(pageNumber) {
  var currentPageDiv = document.getElementById("page" + currentPage);
  var nextPageDiv = document.getElementById("page" + pageNumber);

  currentPageDiv.style.display = "none";
  nextPageDiv.style.display = "block";

  currentPage = pageNumber;
}

function nextPage() {
  var requiredInputs = document.querySelectorAll("#page" + currentPage + " input[required]");

  for (var i = 0; i < requiredInputs.length; i++) {
    if (requiredInputs[i].value === "") {
      document.getElementById("page" + currentPage + "ErrorMessage").classList.remove("hidden");
      return;
    }
  }

  if (currentPage < 3) {
    showPage(currentPage + 1);
  }
}

function prevPage() {
  if (currentPage > 1) {
    showPage(currentPage - 1);
  }
}

function submitForm() {
  var requiredInputs = document.querySelectorAll("#page3 input[required]");

  for (var i = 0; i < requiredInputs.length; i++) {
    if (requiredInputs[i].value === "") {
      document.getElementById("page3ErrorMessage").classList.remove("hidden");
      return;
    }
  }

  // Form submission logic
  alert("Form submitted successfully!");
}

showPage(currentPage);