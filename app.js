let btn = document.querySelector('button');
let inp = document.querySelector('input');
let ul = document.querySelector('ul');

btn.addEventListener("click", function () {
    let item = document.createElement('li');
    item.innerText = inp.value;

    let dltBtn = document.createElement('button');
    dltBtn.innerText = "Remove Task";
    dltBtn.classList.add('delete');

    if (item.innerText == "") {
        alert("Add something");
    }
    else {
        ul.appendChild(item);
        item.appendChild(dltBtn);
    }
    inp.value = "";
});

inp.addEventListener("keydown", function (Event) {
    if (Event.code == "Enter" || Event.code == "NumpadEnter" || Event.key === "Enter") {
        let item = document.createElement('li');
        item.innerText = inp.value;

        let dltBtn = document.createElement('button');
        dltBtn.innerText = "Remove Task";
        dltBtn.classList.add('delete');

        if (item.innerText == "") {
            alert("Add something");
        }
        else {
            ul.appendChild(item);
            item.appendChild(dltBtn);
        }
        inp.value = "";
    }
})

ul.addEventListener("click", function (Event) {
    if (Event.target.nodeName == "BUTTON") {
        let itemList = Event.target.parentElement;
        itemList.remove();
    }
})


// This is used to make webpage static when keaboard popup in mobiles

let originalHeight = window.innerHeight;

window.addEventListener('resize', () => {
    if (window.innerHeight < originalHeight) {
        // Keyboard is open
        document.body.style.height = originalHeight + 'px';
    } else {
        // Keyboard is closed
        document.body.style.height = '100vh';
    }
});

// Following event listener to handle orientation changes
window.addEventListener('orientationchange', () => {
    originalHeight = window.innerHeight;
});
