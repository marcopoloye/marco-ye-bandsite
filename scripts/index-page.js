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


let key = axios.get('https://project-1-api.herokuapp.com/register');

axios.get('https://project-1-api.herokuapp.com/comments?api_key=f16b1e8d-038e-4e73-a9ca-78936f6ffec5')
    
    .then (result => {
        console.log(result.data)

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
            commentDate.innerText = listOfComments.timestamp;
            divCommentNameDate.appendChild(commentDate);
            commentDate.classList.add('conversation__comment-date')
        
        // comment
            let comment = document.createElement('p');
            comment.innerText = listOfComments.comment;
            divCommentText.appendChild(comment);
            comment.classList.add('conversation__comment-text');
        }
        

        for (let i = 0; i < result.data.length; i++) {

            const betterDate = new Date(result.data[i].timestamp);
            const bestDate = (betterDate.getMonth()+1) + '/' + betterDate.getDate() + '/' + betterDate.getFullYear();
            Object.assign(result.data[i], {timestamp: bestDate});

            createComments(result.data[i]);
        }



        const formEl = document.querySelector('.conversation__form').addEventListener("submit", newDisplayComment);

        const today = new Date ();
        const todaysDate = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();

        function newDisplayComment (event) {
            event.preventDefault();

            let newNewComment = {};
            newNewComment.name = event.target.fullname.value;
            newNewComment.comment = event.target.comment.value;
            newNewComment.timestamp = todaysDate;
            
            result.data.unshift(newNewComment);

            divCommentBox.innerHTML = ' ';
            for (let i = 0; i < result.data.length; i++) {
                createComments(result.data[i]);
            }

            event.target.reset();

            axios.post('https://project-1-api.herokuapp.com/comments?api_key=f16b1e8d-038e-4e73-a9ca-78936f6ffec5', newComment)
           
        }
    })

