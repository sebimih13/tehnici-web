function updateToTopButton()
{
    const toTop = document.querySelector(".to-top");
    
    if (window.pageYOffset > 500)
    {
        toTop.classList.add("active");
    }
    else
    {
        toTop.classList.remove("active");
    }
}

function updateProgressBar()
{
    const scrollPercent = document.documentElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight) * 100 + "%";
    console.log(scrollPercent);

    document.querySelector("#progress-bar").style.width = scrollPercent;
}

function submitForm(event)
{
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const mailInput = document.getElementById("mail");
    const phoneInput = document.getElementById("phone");
    const msgInput = document.getElementById("msg");

    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Adresa de email trebuie sa fie in format valid
    const phoneRegex = /^[0-9]{10}$/;               // Numarul de telefon trebuie să contina exact 10 cifre

    console.log(nameInput);
    
    if (nameInput.value.trim().length == 0)
    {
        alert("Introduceti un nume");
        return;
    }

    if (!mailRegex.test(mailInput.value)) 
    {
        alert("Introduceti o adresa de email valida");
        return;
    }

    if (!phoneRegex.test(phoneInput.value)) {
        alert("Introduceti un numar de telefon valid format din 10 cifre");
        return;
    }

    if (msgInput.value.trim().length == 0)
    {
        alert("Introduceti un mesaj");
        return;
    }

    const form = document.getElementById("formular");
    form.submit();
    alert("Cererea a fost trimisa cu succes!");
}

function addStars(parentElementId)
{
    const section = document.getElementById(parentElementId);
    const starsDiv = document.createElement("div");
    starsDiv.classList.add("stars");

    for (let i = 1; i <= 10; i++) 
    {
        const checkboxInput = document.createElement("input");
        checkboxInput.type = "checkbox";
        checkboxInput.id = `nota-${parentElementId}-${i}`;
        checkboxInput.name = `${i}`;
        checkboxInput.style.marginLeft = "30px";

        checkboxInput.addEventListener("change", function() {
            event.stopPropagation();

            for (let i = 1; i <= 10; i++)
            {
                var checkbox = document.getElementById(`nota-${parentElementId}-${i}`);
                checkbox.checked = false;
            }
            event.target.checked = true;

            console.log(event.target.name);
            localStorage.setItem(`nota-${parentElementId}`, event.target.name);
        });
        
        const label = document.createElement("label");
        label.htmlFor = `nota-${parentElementId}-${i}`;
        label.textContent = i;

        if (localStorage.getItem(`nota-${parentElementId}`) == i)
        {
            checkboxInput.checked = true;
        }
        
        starsDiv.appendChild(checkboxInput);
        starsDiv.appendChild(label);
    }

    section.appendChild(starsDiv);
}

function changeColor(textElement) 
{
    const colors = ['red', 'gray', 'gold', 'black', 'white', 'brown', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const myText = document.getElementById("text-easter-egg");
    myText.style.color = randomColor; 
}

function changeColorBorder()
{
    const myText = document.getElementById("text-easter-egg");
    const textColor = window.getComputedStyle(myText).color;

    const myImg = document.getElementById("img-easter-egg");
    myImg.style.borderColor = textColor;
}

window.onload = function()
{
    // add rating
    addStars("nota-poveste");
    addStars("nota-gameplay");
    addStars("nota-grafica");
    addStars("nota-sunet");
    
    // to top button
    const toTop = document.querySelector(".to-top");
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 500)
        {
            toTop.classList.add("active");
        }
        else
        {
            toTop.classList.remove("active");
        }
    });

    // update scroll
    window.addEventListener("scroll", updateProgressBar);

    // formular
    const form = document.getElementById("formular");
    form.addEventListener("submit", submitForm);

    // update easter-egg
    const easterEgg = document.getElementById("easter-egg");
    easterEgg.addEventListener

    // update text
    setInterval(changeColor, 1000);
    setInterval(changeColorBorder, 1100);
}

