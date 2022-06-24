// creating top shows card
const showsSection = document.querySelector('.shows');

// shows section
const showsSectionBox = document.createElement('div');
showsSectionBox.classList.add('shows__section-box');
showsSection.appendChild(showsSectionBox);

// main heading
let mainHeading = document.createElement('h2');
mainHeading.innerText = ('Shows');
mainHeading.classList.add('shows__heading');
showsSectionBox.appendChild(mainHeading);

let topSubHeading = document.createElement('div');
topSubHeading.classList.add('shows__categories-box');
showsSectionBox.appendChild(topSubHeading);


// showsInfo object section
const showsCardStack = document.createElement('div');
showsCardStack.classList.add('shows__box');
showsSectionBox.appendChild(showsCardStack);

// // top card
// let cardDivTop = document.createElement('div');
// cardDivTop.classList.add('shows__card-top');
// showsCardStack.appendChild(cardDivTop);


// date heading
let dateHeadingTop = document.createElement('h2');
dateHeadingTop.innerText = ('Date');
dateHeadingTop.classList.add('shows__date-heading-top');
topSubHeading.appendChild(dateHeadingTop);

// // date text 
// let dateTop = document.createElement('p');
// dateTop.classList.add('shows__date-top');
// dateDivTop.appendChild(dateTop);

// // venue box
// let venueDivTop = document.createElement('div');
// venueDivTop.classList.add('shows__venue-box-top');
// topSubHeading.appendChild(venueDivTop);

// venue heading
let venueHeadingTop = document.createElement('h2');
venueHeadingTop.innerText = ('Venue');
venueHeadingTop.classList.add('shows__venue-heading-top');
topSubHeading.appendChild(venueHeadingTop);

// // venue text
// let venueTop = document.createElement('p');
// venueTop.classList.add('shows__venue-top');
// venueDivTop.appendChild(venueTop);



// location heading
let locationHeadingTop = document.createElement('h2');
locationHeadingTop.innerText = ('Location');
locationHeadingTop.classList.add('shows__location-heading-top');
topSubHeading.appendChild(locationHeadingTop);

// // location text
// let locationTop = document.createElement('p');
// locationTop.classList.add('shows__location-top');
// locationDivTop.appendChild(locationTop);

// // button
// let button = document.createElement('button');
// button.innerText = 'Buy tickets';
// button.classList.add('shows__button-top');
// cardDivTop.appendChild(button);

const showsInfo = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
        option: 'Buy tickets'
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
        option: 'Buy tickets'
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA",
        option: 'Buy tickets'
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
        option: 'Buy tickets'
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA",
        option: 'Buy tickets'
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA",
        option: 'Buy tickets'
    },
]

// creating show cards
function createCard(show) {
    // card
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('shows__card');
    showsCardStack.appendChild(cardDiv);

    // date box
    const dateBox = document.createElement('div');
    dateBox.classList.add('shows__date-box');
    cardDiv.appendChild(dateBox);

    // date heading
    const dateHeading = document.createElement('h2');
    dateHeading.innerText = 'Date';
    dateHeading.classList.add('shows__date-heading');
    dateBox.appendChild(dateHeading);

    // date text
    const dateText = document.createElement('p');
    dateText.innerText = show.date;
    dateText.classList.add('shows__date');
    dateBox.appendChild(dateText);

    // venue box
    const venueBox = document.createElement('div');
    venueBox.classList.add('shows__venue-box');
    cardDiv.appendChild(venueBox);

    // venue heading
    const venueHeading = document.createElement('h2');
    venueHeading.innerText = 'Venue';
    venueHeading.classList.add('shows__venue-heading');
    venueBox.appendChild(venueHeading);

    // venue text
    const venueText = document.createElement('p');
    venueText.innerText = show.venue;
    venueText.classList.add('shows__venue');
    venueBox.appendChild(venueText);

    // location box
    const locationBox = document.createElement('div');
    locationBox.classList.add('shows__location-box');
    cardDiv.appendChild(locationBox);

    // location heading
    const locationHeading = document.createElement('h2');
    locationHeading.innerText = 'Location';
    locationHeading.classList.add('shows__location-heading');
    locationBox.appendChild(locationHeading);

    // location text
    const locationText = document.createElement('p');
    locationText.innerText = show.location;
    locationText.classList.add('shows__location');
    locationBox.appendChild(locationText);

    // button
    const button = document.createElement('button');
    button.classList.add('shows__button');
    button.innerText = 'Buy tickets'
    cardDiv.appendChild(button);
}

for (let i = 0; i < showsInfo.length; i++) {
    createCard(showsInfo[i]);
}

// highlighting shows on click
const cards = document.querySelectorAll('.shows__card')

cards.forEach((eachCard) => {
    eachCard.addEventListener('click', () => {
        cards.forEach((eachCard) => {
            eachCard.classList.remove('shows__card--selected')
        })
        eachCard.classList.add('shows__card--selected')
    })
})

console.log(cards)