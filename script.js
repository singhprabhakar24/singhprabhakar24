const user = ["rahul", "arya", "anya",];

// jo jo chahiye tha wo liya hai humne
const memberdiv = document.querySelector('.memberdiv');

const addicon = document.querySelector('.addicon');




const usericon = () => {
    user.map((curele) => {
        memberdiv.insertAdjacentHTML('afterbegin', `
   <button class="btn"><span>${curele}</span></button> `); // dynamically data enter karne ke lie ise use kia hai.
    })

};


addicon.addEventListener('click', () => {
    let username = prompt("enter name");
    // agar username null ho aur jo naam ho wo array main bhi na ho to add kr deneka
    if (username =! null && !user.includes(username)) {
        // push ka use kr ke naam dala gya hai
        user.push(username);

        console.log(user);
        memberdiv.insertAdjacentHTML('afterbegin', `
        <button class="btn"><span>${username}</span></button> `);
    }else{
        alert('already exist');
    }
})




usericon();