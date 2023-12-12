const users = localStorage.users ? JSON.parse(localStorage.users) : [];
const loginButton = document.querySelector('#userLogin');
const registerButton = document.querySelector('#userRegister');

loginButton?.addEventListener('click', e => {
    e.preventDefault();
    const email = document.querySelector('#userEmail').value;
    const password = document.querySelector('#userPassword').value;

    if (users.some(user => user.email === email && user.password === password)) {
        const name = users.filter(user => user.email === email)
        sessionStorage.setItem('userLogin', name[0].name)
        location.href = '../../index.html'
    } else {
        alert('invalid data!')
    }
});

registerButton?.addEventListener('click', e => {
    e.preventDefault();
    const name = document.querySelector('#userName').value;
    const email = document.querySelector('#userEmail').value;
    const password = document.querySelector('#userPassword').value;

    if (name == '' || email == '' || password == '') {
        alert(`Missing fields! Check again please!`)
    } else {
        const newID = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        users.push({
            id: newID,
            name,
            email,
            password
        });
        
        localStorage.setItem('users', JSON.stringify(users))
        sessionStorage.setItem('userLogin', name)
        location.href = '../../index.html'
    }
});
