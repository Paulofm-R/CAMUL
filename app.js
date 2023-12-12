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

const categories = [
    {
        id:"65708e49d183fea5ca2474dd",
        name:"Geriatrics"
    },{
        id:"65708e5ad183fea5ca2474df",
        name:"Basic Medical Sciences"
    },{
        id:"6570c15aaf20381313b455b7",
        name:"Medical Language"
    },{
        id:"6570c172af20381313b455ba",
        name:"Pathology"
    },{
        id:"6570c1e8df4a584b7075dea3",
        name:"Preventive medicine"
    },{
        id:"6570c24be057b5c2ac3c5cea",
        name:"Medical diagnostic"
    },{
        id:"6575fe693bdd621cb10724a0",
        name:"Human anatomy"
    },{
        id:"6575fe8b3bdd621cb10724a2",
        name:"Physiology"
    },{
        id:"6575fff63bdd621cb10724a4",
        name:"Pharmacology"
    },{
        id:"657600073bdd621cb10724a6",
        name:"Medical Microbiology"
    },{
        id:"657600173bdd621cb10724a8",
        name:"Clinical Biochemistry"
    },{
        id:"657600243bdd621cb10724aa",
        name:"Immunology"
    },{
        id:"657600383bdd621cb10724ac",
        name:"Public health"
    }]

if (!localStorage.users) {
    localStorage.setItem('users', JSON.stringify(users))
}

if (!localStorage.categories) {
    localStorage.setItem('categories', JSON.stringify(categories))
}

document.addEventListener('DOMContentLoaded', function() {
    const divUsers = document.querySelector('#users');
  
    if (sessionStorage.userLogin) {
      divUsers.innerHTML = `
      <a>${sessionStorage.userLogin}</a>
      <button class="btn" id="logout">Exit</button>
      `;
    } else {
      divUsers.innerHTML = `<a href="html/authentication/register.html">Register</a>
        <a href="html/authentication/login.html">Login</a>`;
    }

    document.querySelector("#logout")?.addEventListener('click', () => {
        sessionStorage.removeItem('userLogin');
        window.location.reload()
    })
});
  
const topCategories = document.querySelector('#topCategories')

if (topCategories) {
    topCategories.innerHTML = ''
    for (let i = 0; i < 10; i++) {
        topCategories.innerHTML += `
                    <div class="col-2 topCategorie">
                        <button><strong><a href="html/courses/courses.html">${categories[i].name}</a></strong></button>
                    </div>
                    ` 
    }
}