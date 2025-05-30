const form = document.getElementById('userForm');
const output = document.getElementById('output');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = form.querySelector('[name="firstName"]').value;
  const lastName = form.querySelector('[name="lastName"]').value;

  const jsonData = JSON.stringify({ firstName, lastName }, null, 2);

  const pre = document.createElement('pre');
  pre.textContent = jsonData;
  output.appendChild(pre);
});

/** output: {
  "firstName": "Daniel",
  "lastName": "Lewin"
}*/