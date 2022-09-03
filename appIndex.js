//the menu navbar

const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", ()=> {
    navLinks.classList.toggle("mobile-menu");
})

//target the submit button & add an event listener in order to detect when the user presses the button
const submitBtn = document.getElementById("btn-submit");
submitBtn.addEventListener("click", addBook);

//target the books to be added on the list & add an event listener in order to detect when a book has been clicked
const books = document.querySelector ("#books");
books.addEventListener("click",handleBookClicked);

//target the p where the messages for the user will be displayed
const message= document.getElementById("message");


//function to display a message to the user 
function displayMessage (messages) {
    message.innerText = messages; 
    message.style.visibility="visible";
}

displayMessage("You have no book on your reading list!");

//function to check if the input is empty or not
function checkInput (input){
    if(input)
    {
        return true;
    }
    else {
        return false;
    }
}

//describe the addBook function to be executed when the submit button is pressed
function addBook(){
    const newBook =document.querySelector("#new-book");
    if(checkInput(newBook.value))
    {//display new book on the list
        books.innerHTML += '<li class="list-group-item">' + newBook.value + '</li>';
        newBook.value="";
        message.style.visibility="hidden";
    }
    else{ //if the input is empty
        displayMessage("The input cannot be empty!");
    }
}

//function which changes the style when a book on the list was clicked 
function handleBookClicked (event){
    const style= event.target.style;
    if(!style.textDecoration)
    {
        style.textDecoration="line-through";
        style.cursor="pointer";
    }
    else {
        style.textDecoration= "";
    }

}

//target the clear button & add an event listener in order to detect when the user presses the button
const clearBtn = document.getElementById("btn-clear");
clearBtn.addEventListener("click", clearReadingList);

//function that clears the list

function clearReadingList(){
    const bookList = books.getElementsByClassName("list-group-item");
    while (bookList.length > 0) {
        bookList[0].parentNode.removeChild(bookList[0]);
    }
    displayMessage("You have no book on your reading list!");
}


//accordion js

document.querySelectorAll(".accordion-button").forEach(button => {
    button.addEventListener ("click", () => {
        const accordionContent = button.nextElementSibling;
        button.classList.toggle ("accordion-button-active");
        
        if(button.classList.contains ("accordion-button-active"))
        {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"; 
        }
        else 
        {
            accordionContent.style.maxHeight = 0;
        } 
    });
   });