// retrieve the form
const form = document.getElementById('userForm');
console.log('Form:', form);

// retrieve inpputs as ID
const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
console.log('Input First Name (ID):', fnameInput);
console.log('Input Last Name (ID):', lnameInput);

// get name attributes
const firstnameByName = document.getElementsByName('firstname')[0];
const lastnameByName = document.getElementsByName('lastname')[0];
console.log('Input First Name (name):', firstnameByName);
console.log('Input Last Name (name):', lastnameByName);

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const fname = fnameInput.value.trim();
    const lname = lnameInput.value.trim();

  if (fname === '' || lname === '') {
    alert('Please fill out both fields.');
    return;
  }

  const ul = document.querySelector('.usersAnswer');
  ul.innerHTML = '';

  const li1 = document.createElement('li');
  li1.textContent = fname;

  const li2 = document.createElement('li');
  li2.textContent = lname;

  ul.appendChild(li1);
  ul.appendChild(li2);
});