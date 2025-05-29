(function(userName) {
    const navbar = document.getElementById("navbar");

    const userDiv = document.createElement("div");
    userDiv.className = "user-info";

    userDiv.innerHTML = `
    <span>Welcome, ${userName}</span>
    <img src="https://thumbs.dreamstime.com/b/cool-guy-sunglasses-tipping-hat-80178881.jpg" alt="Profile Picture">
    `;

    navbar.appendChild(userDiv);
})("Daniel");