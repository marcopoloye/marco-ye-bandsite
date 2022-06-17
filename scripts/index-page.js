let commentSection = document.querySelector('.conversation');

let mainHeader = document.createElement('h2');
mainHeader.innerText = 'Join the Conversation';
mainHeader.classList.add('conversation__header');
commentSection.appendChild(mainHeader);

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
nameInput.setAttribute('name', 'full-name');
nameInput.setAttribute('placeholder', 'Enter your name');
nameInput.classList.add('conversation__form-input-name');
mainForm.appendChild(nameInput);

let commentLabel = document.createElement('p');
commentLabel.innerText = 'Comment';
commentLabel.classList.add('conversation__form-comment-heading');
mainForm.appendChild(commentLabel);

let commentInput = document.createElement('input');
commentInput.setAttribute('type', 'textarea');
commentInput.setAttribute('name', 'comment');
commentInput.setAttribute('wrap', 'hard');
commentInput.setAttribute('placeholder', 'Add a new comment');
commentInput.setAttribute('rows', '6')
commentInput.setAttribute('cols', '10')
commentInput.classList.add('conversation__form-input-comment');
mainForm.appendChild(commentInput);

let submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('value', 'submit');
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

// create each comment card
for (let i = 0; i < commenterList.length; i++) {
    let divCommentCard = document.createElement('div');
    divCommentBox.appendChild(divCommentCard);
    divCommentCard.classList.add('conversation__comment-card');
}


// create each avatar box and move inside each comment card
for (let i = 0; i < commenterList.length; i++) {
    let divCommentAvatar = document.createElement('div');
    divCommentBox.appendChild(divCommentAvatar);
    divCommentAvatar.classList.add('conversation__comment-avatar-box');
}

let moveCommentsAvatar = document.querySelectorAll('.conversation__comment-avatar-box');
let targetCommentCard = document.querySelectorAll('.conversation__comment-card');

for (let i = 0; i < targetCommentCard.length; i++) {
    targetCommentCard[i].appendChild(moveCommentsAvatar[i]);
}


// create each text box and move inside each comment card
for (let i = 0; i < commenterList.length; i++) {
    let divCommentText = document.createElement('div');
    divCommentBox.appendChild(divCommentText);
    divCommentText.classList.add('conversation__comment-text-box');
}

let moveCommentText = document.querySelectorAll('.conversation__comment-text-box');

for (let i = 0; i < targetCommentCard.length; i++) {
    targetCommentCard[i].appendChild(moveCommentText[i]);
}


// create each name-date box and move inside each text box
for (let i = 0; i < commenterList.length; i++) {
    let divCommentNameDate = document.createElement('div');
    divCommentBox.appendChild(divCommentNameDate);
    divCommentNameDate.classList.add('conversation__comment-name-date');
}

let moveCommentNameDate = document.querySelectorAll('.conversation__comment-name-date');
let targetCommentText = document.querySelectorAll('.conversation__comment-text-box');

for (let i = 0; i < targetCommentText.length; i++) {
    targetCommentText[i].appendChild(moveCommentNameDate[i]);
}


// create each commenter name and move inside each comment-name-date box
for (let i = 0; i < commenterList.length; i++) {
    let commenterName = document.createElement('p');
    commenterName.innerText = commenterList[i].name;
    divCommentBox.appendChild(commenterName);
    commenterName.classList.add('conversation__comment-name');
}
let targetNameDateBox = document.querySelectorAll('.conversation__comment-name-date');
let moveCommenterName = document.querySelectorAll('.conversation__comment-name');

for (let i = 0; i < targetNameDateBox.length; i++) {
    targetNameDateBox[i].appendChild(moveCommenterName[i]);
}


// create each comment date and move inside each comment-name-date box
for (let i = 0; i < commenterList.length; i++) {
    let commentDate = document.createElement('p');
    commentDate.innerText = commenterList[i].date;
    divCommentBox.appendChild(commentDate);
    commentDate.classList.add('conversation__comment-date');
}
let moveCommentDate = document.querySelectorAll('.conversation__comment-date');

for (let i = 0; i < targetNameDateBox.length; i++) {
    targetNameDateBox[i].appendChild(moveCommentDate[i]);
}


// create each comment and move inside each text box
for (let i = 0; i < commenterList.length; i++) {
    let comment = document.createElement('p');
    comment.innerText = commenterList[i].text;
    divCommentBox.appendChild(comment);
    comment.classList.add('conversation__comment-text');
}
let moveComment = document.querySelectorAll('.conversation__comment-text');

for (let i = 0; i < targetCommentText.length; i++) {
    targetCommentText[i].appendChild(moveComment[i]);
}

