// for opening using hamburger
let menu=document.querySelector("#menu");
menu.addEventListener("click",function(event){
   let sidebar=document.querySelector(".sidebar");
   sidebar.style.display="flex";
   sidebar.style.flexDirection="column";
})

// for closing sidebar
let close=document.querySelector("#close");
close.addEventListener("click",function(event){
    let sidebar=document.querySelector(".sidebar");
   sidebar.style.display="none";
})

// login page
let signin = document.querySelectorAll(".signin");

signin.forEach(function(element) {
  element.addEventListener("click", function() {
    window.location.href = "animated-login/index.html";
  });
});


// FORM SUBMISSION CODE


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission from reloading the page
  
  // Get form data
  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const email = document.getElementById("email").value;
  const orderDetails = document.getElementById("orderDetails").value;
  
  // Construct request body
  const formData = new FormData();
  formData.append("name", name);
  formData.append("mobile", mobile);
  formData.append("email", email);
  formData.append("orderDetails", orderDetails);
}
);