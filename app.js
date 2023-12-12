const users = [
    {
        id: 1,
        nome: "Admin",
        email: 'admin@email.com',
        password: 'password123'
    }, {
        id: 2,
        nome: "user",
        email: 'user@email.com',
        password: 'password123'
    }
];

if (!localStorage.users) {
    localStorage.setItem('users', JSON.stringify(users))
}

document.addEventListener('DOMContentLoaded', function() {
    const divUsers = document.querySelector('#users');
  
    if (sessionStorage.userLogin) {
      divUsers.innerHTML = `<a>${sessionStorage.userLogin}</a>`;
    } else {
      divUsers.innerHTML = `<a href="html/authentication/register.html">Register</a>
        <a href="html/authentication/login.html">Login</a>`;
    }
});
  
