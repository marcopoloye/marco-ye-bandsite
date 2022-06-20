let commentSection = document.querySelector('.conversation');

let mainHeading = document.createElement('h2');
mainHeading.innerText = 'Join the Conversation';
mainHeading.classList.add('conversation__heading');
commentSection.appendChild(mainHeading);

let formBox = document.createElement('section');
commentSection.appendChild(formBox);
formBox.classList.add('conversation__form-box');

let mainForm = document.createElement('form');
formBox.appendChild(mainForm);
mainForm.classList.add('conversation__form')

let divAvatarBox = document.createElement('div');
formBox.appendChild(divAvatarBox);
divAvatarBox.classList.add('conversation__form-avatar-box');

let nameLabel = document.createElement('p');
nameLabel.innerText = 'Name';
nameLabel.classList.add('conversation__form-name-heading');
mainForm.appendChild(nameLabel);

let nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('name', 'fullname');
nameInput.setAttribute('placeholder', 'Enter your name');
nameInput.classList.add('conversation__form-input-name');
mainForm.appendChild(nameInput);

let commentLabel = document.createElement('p');
commentLabel.innerText = 'Comment';
commentLabel.classList.add('conversation__form-comment-heading');
mainForm.appendChild(commentLabel);

let commentInput = document.createElement('input');
commentInput.setAttribute('type', 'text');
commentInput.setAttribute('name', 'comment');
commentInput.setAttribute('placeholder', 'Add a new comment');
commentInput.setAttribute('rows', '6')
commentInput.setAttribute('cols', '10')
commentInput.classList.add('conversation__form-input-comment');
mainForm.appendChild(commentInput);

let submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.innerText = "Comment"
submitButton.classList.add('conversation__form-button');
mainForm.appendChild(submitButton);

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


function createComments (listOfComments) {

// create each comment card
    let divCommentCard = document.createElement('div');
    divCommentBox.appendChild(divCommentCard);
    divCommentCard.classList.add('conversation__comment-card');

// create each avatar box
    let divCommentAvatar = document.createElement('div');
    divCommentCard.appendChild(divCommentAvatar);
    divCommentAvatar.classList.add('conversation__comment-avatar-box');

// create each text box
    let divCommentText = document.createElement('div');
    divCommentCard.appendChild(divCommentText);
    divCommentText.classList.add('conversation__comment-text-box');


// create each name-date box
    let divCommentNameDate = document.createElement('div');
    divCommentText.appendChild(divCommentNameDate);
    divCommentNameDate.classList.add('conversation__comment-name-date');

// create each commenter name
    let commenterName = document.createElement('p');
    commenterName.innerText = listOfComments.name;
    divCommentNameDate.appendChild(commenterName);
    commenterName.classList.add('conversation__comment-name');

// create each comment date
    let commentDate = document.createElement('p');
    commentDate.innerText = listOfComments.date;
    divCommentNameDate.appendChild(commentDate);
    commentDate.classList.add('conversation__comment-date')

// create each comment
    let comment = document.createElement('p');
    comment.innerText = listOfComments.text;
    divCommentText.appendChild(comment);
    comment.classList.add('conversation__comment-text');
}

for (let i = 0; i < commenterList.length; i++) {
    createComments(commenterList[i]);
}

//form function 
const formEl = document.querySelector('.conversation__form').addEventListener("submit", displayComment);

const today = new Date ();
const todaysDate = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();

function displayComment (event) {
    event.preventDefault();

    const commentersName = event.target.fullname.value;
    const theComment = event.target.comment.value;

    event.target.reset();
    
// create each comment card
    let divCommentCard = document.createElement('div');
    divCommentBox.appendChild(divCommentCard);
    divCommentCard.classList.add('conversation__comment-card');

// create each avatar box
    let divCommentAvatar = document.createElement('div');
    divCommentCard.appendChild(divCommentAvatar);
    divCommentAvatar.classList.add('conversation__comment-avatar-box');

// create each text box
    let divCommentText = document.createElement('div');
    divCommentCard.appendChild(divCommentText);
    divCommentText.classList.add('conversation__comment-text-box');

// create each name-date box
    let divCommentNameDate = document.createElement('div');
    divCommentText.appendChild(divCommentNameDate);
    divCommentNameDate.classList.add('conversation__comment-name-date');

// create each commenter name
    let commenterName = document.createElement('p');
    commenterName.innerText = commentersName;
    divCommentNameDate.appendChild(commenterName);
    commenterName.classList.add('conversation__comment-name');

// create each comment date
    let commentDate = document.createElement('p');
    commentDate.innerText = todaysDate;
    divCommentNameDate.appendChild(commentDate);
    commentDate.classList.add('conversation__comment-date')

// create each comment
    let comment = document.createElement('p');
    comment.innerText = theComment;
    divCommentText.appendChild(comment);
    comment.classList.add('conversation__comment-text');


    let newComment = {name: commentersName, date: todaysDate, text: theComment};
    let newCommentList = []

    commenterList.unshift(newComment)
    console.log(commenterList)
};
