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
commentInput.setAttribute('rows', '6');
commentInput.setAttribute('cols', '10');
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


axios.get('https://project-1-api.herokuapp.com/register').then(result => {
    let key = result.data
    console.log(key)
})

axios.get('https://project-1-api.herokuapp.com/comments?api_key=31c873a3-395f-48a2-bf1b-f8642b900438')
    .then(result => {
        let commentData = result.data; 
        commentData.sort((a, b) => b.timestamp - a.timestamp);

        function createComments (aComment) {
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
            commenterName.innerText = aComment.name;
            divCommentNameDate.appendChild(commenterName);
            commenterName.classList.add('conversation__comment-name');
        
            // comment and date box
            let commentDate = document.createElement('p');
            commentDate.innerText = aComment.timestamp;
            divCommentNameDate.appendChild(commentDate);
            commentDate.classList.add('conversation__comment-date')
        
            // comment
            let comment = document.createElement('p');
            comment.innerText = aComment.comment;
            divCommentText.appendChild(comment);
            comment.classList.add('conversation__comment-text');
        }
        for (let i = 0; i < commentData.length; i++) {
            const betterDate = new Date(commentData[i].timestamp);
            const bestDate = (betterDate.getMonth()+1) + '/' + betterDate.getDate() + '/' + betterDate.getFullYear();
            Object.assign(commentData[i], {timestamp: bestDate});
        
            createComments(commentData[i]);
        };
    })

function appendComments () {
    axios.get('https://project-1-api.herokuapp.com/comments?api_key=31c873a3-395f-48a2-bf1b-f8642b900438')
    .then (result => {
        let commentData = result.data; 
        commentData.sort((a, b) => b.timestamp - a.timestamp);

        divCommentBox.innerHTML = '';

        function createComments (aComment) {
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
            commenterName.innerText = aComment.name;
            divCommentNameDate.appendChild(commenterName);
            commenterName.classList.add('conversation__comment-name');
        
            // comment and date box
            let commentDate = document.createElement('p');
            commentDate.innerText = aComment.timestamp;
            divCommentNameDate.appendChild(commentDate);
            commentDate.classList.add('conversation__comment-date')
        
            // comment
            let comment = document.createElement('p');
            comment.innerText = aComment.comment;
            divCommentText.appendChild(comment);
            comment.classList.add('conversation__comment-text');
        }
        for (let i = 0; i < commentData.length; i++) {
            const betterDate = new Date(commentData[i].timestamp);
            const bestDate = (betterDate.getMonth()+1) + '/' + betterDate.getDate() + '/' + betterDate.getFullYear();
            Object.assign(commentData[i], {timestamp: bestDate});
        
            createComments(commentData[i]);
        }; 
    })
}

const form = document.querySelector('.conversation__form')
form.addEventListener("submit", newDisplayComment);
function newDisplayComment (event) {
    event.preventDefault();

    const today = new Date ();
    const todaysDate = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();

    const newComment = {
        name: event.target.fullname.value,
        comment: event.target.comment.value,
    };
    
    event.target.reset();
    
    axios.post('https://project-1-api.herokuapp.com/comments?api_key=31c873a3-395f-48a2-bf1b-f8642b900438', newComment)
        .then (result => {
            axios.get('https://project-1-api.herokuapp.com/comments?api_key=31c873a3-395f-48a2-bf1b-f8642b900438')
            .then (result => {
                appendComments();
            })
        })
}; 

