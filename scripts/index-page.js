// creating form section
let commentSection = document.querySelector('.conversation');

// heading
let mainHeading = document.createElement('h2');
mainHeading.innerText = 'Join the Conversation';
mainHeading.classList.add('conversation__heading');
commentSection.appendChild(mainHeading);

// form box
let formBox = document.createElement('section');
commentSection.appendChild(formBox);
formBox.classList.add('conversation__form-box');

// form
let mainForm = document.createElement('form');
formBox.appendChild(mainForm);
mainForm.classList.add('conversation__form')

// avatar div
let divAvatarBox = document.createElement('div');
formBox.appendChild(divAvatarBox);
divAvatarBox.classList.add('conversation__form-avatar-box');

// name heading
let nameLabel = document.createElement('p');
nameLabel.innerText = 'Name';
nameLabel.classList.add('conversation__form-name-heading');
mainForm.appendChild(nameLabel);

// name input
let nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('name', 'fullname');
nameInput.setAttribute('placeholder', 'Enter your name');
nameInput.classList.add('conversation__form-input-name');
mainForm.appendChild(nameInput);

// comment heading
let commentLabel = document.createElement('p');
commentLabel.innerText = 'Comment';
commentLabel.classList.add('conversation__form-comment-heading');
mainForm.appendChild(commentLabel);

// comment input
let commentInput = document.createElement('input');
commentInput.setAttribute('type', 'text');
commentInput.setAttribute('name', 'comment');
commentInput.setAttribute('placeholder', 'Add a new comment');
commentInput.setAttribute('rows', '6')
commentInput.setAttribute('cols', '10')
commentInput.classList.add('conversation__form-input-comment');
mainForm.appendChild(commentInput);

// button
let submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.innerText = "Comment"
submitButton.classList.add('conversation__form-button');
mainForm.appendChild(submitButton);

// comment section
let divCommentBox = document.createElement('section');
commentSection.appendChild(divCommentBox);
divCommentBox.classList.add('conversation__comment-box');


let commenterList = [
    {
        name: 'Connor Walton',
        date: '02/17/2021', 
        text: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
    },
    {
        name: 'Emilie Beach',
        date: '01/09/2021', 
        text: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day'
    },
    {
        name: 'Miles Acosta',
        date: '12/20/2020', 
        text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    },
]


// adding list of comments function
function createComments (listOfComments) {

// comment card
    let divCommentCard = document.createElement('div');
    divCommentBox.appendChild(divCommentCard);
    divCommentCard.classList.add('conversation__comment-card');

// avatar box
    let divCommentAvatar = document.createElement('div');
    divCommentCard.appendChild(divCommentAvatar);
    divCommentAvatar.classList.add('conversation__comment-avatar-box');

// text box
    let divCommentText = document.createElement('div');
    divCommentCard.appendChild(divCommentText);
    divCommentText.classList.add('conversation__comment-text-box');

// name and date box
    let divCommentNameDate = document.createElement('div');
    divCommentText.appendChild(divCommentNameDate);
    divCommentNameDate.classList.add('conversation__comment-name-date');

// commenter name
    let commenterName = document.createElement('p');
    commenterName.innerText = listOfComments.name;
    divCommentNameDate.appendChild(commenterName);
    commenterName.classList.add('conversation__comment-name');

// comment and date box
    let commentDate = document.createElement('p');
    commentDate.innerText = listOfComments.date;
    divCommentNameDate.appendChild(commentDate);
    commentDate.classList.add('conversation__comment-date')

// comment
    let comment = document.createElement('p');
    comment.innerText = listOfComments.text;
    divCommentText.appendChild(comment);
    comment.classList.add('conversation__comment-text');
}

for (let i = 0; i < commenterList.length; i++) {
    createComments(commenterList[i]);
}


// add new comments function 
const formEl = document.querySelector('.conversation__form').addEventListener("submit", displayComment);

const today = new Date ();
const todaysDate = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();

function displayComment (event) {
     event.preventDefault();

     let newComment = {};
     newComment.name = event.target.fullname.value;
     newComment.text = event.target.comment.value;
     newComment.date = todaysDate;

     commenterList.unshift(newComment);
     console.log(commenterList);

    divCommentBox.innerHTML = '';
    for (let i = 0; i < commenterList.length; i++) {
        createComments(commenterList[i]);
    }

    event.target.reset();
}

let key = axios.get('https://project-1-api.herokuapp.com/register');

key.then(result => {
    
})

