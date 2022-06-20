const showsSection = document.querySelector('.shows');

const showsSectionBox = document.createElement('div');
showsSectionBox.classList.add('shows__section-box');
showsSection.appendChild(showsSectionBox);

// main heading
let mainHeading = document.createElement('h2');
mainHeading.innerText = ('Shows');
mainHeading.classList.add('shows__heading');
showsSectionBox.appendChild(mainHeading);

const showsCardStack = document.createElement('div');
showsCardStack.classList.add('shows__box');
showsSectionBox.appendChild(showsCardStack);

// top card
let cardDivTop = document.createElement('div');
cardDivTop.classList.add('shows__card-top');
showsCardStack.appendChild(cardDivTop);

let dateDivTop = document.createElement('div');
dateDivTop.classList.add('shows__date-box-top');
cardDivTop.appendChild(dateDivTop);

let dateHeadingTop = document.createElement('h2');
dateHeadingTop.innerText = ('Date');
dateHeadingTop.classList.add('shows__date-heading-top');
dateDivTop.appendChild(dateHeadingTop);

let dateTop = document.createElement('p');
dateTop.innerText = ('Mon Sept 06 2021');
dateTop.classList.add('shows__date-top');
dateDivTop.appendChild(dateTop);

let venueDivTop = document.createElement('div');
venueDivTop.classList.add('shows__venue-box-top');
cardDivTop.appendChild(venueDivTop);

let venueHeadingTop = document.createElement('h2');
venueHeadingTop.innerText = ('Venue');
venueHeadingTop.classList.add('shows__venue-heading-top');
venueDivTop.appendChild(venueHeadingTop);

let venueTop = document.createElement('p');
venueTop.innerText = ('Ronald Lane');
venueTop.classList.add('shows__venue-top');
venueDivTop.appendChild(venueTop);

let locationDivTop = document.createElement('div');
locationDivTop.classList.add('shows__location-box-top');
cardDivTop.appendChild(locationDivTop);

let locationHeadingTop = document.createElement('h2');
locationHeadingTop.innerText = ('Location');
locationHeadingTop.classList.add('shows__location-heading-top');
locationDivTop.appendChild(locationHeadingTop);

let locationTop = document.createElement('p');
locationTop.innerText = ('San Francisco, CA');
locationTop.classList.add('shows__location-top');
locationDivTop.appendChild(locationTop);

let button = document.createElement('button');
button.innerText = 'Buy tickets';
button.classList.add('shows__button-top');
cardDivTop.appendChild(button);

const showsInfo = [
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





function createCard(show) {
    //card
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('shows__card');
    showsCardStack.appendChild(cardDiv);

    //date box
    const dateBox = document.createElement('div');
    dateBox.classList.add('shows__date-box');
    cardDiv.appendChild(dateBox);

    //date heading
    const dateHeading = document.createElement('h2');
    dateHeading.innerText = 'Date';
    dateHeading.classList.add('shows__date-heading');
    dateBox.appendChild(dateHeading);

    //date
    const dateText = document.createElement('p');
    dateText.innerText = show.date;
    dateText.classList.add('shows__date');
    dateBox.appendChild(dateText);

    //venue box
    const venueBox = document.createElement('div');
    venueBox.classList.add('shows__venue-box');
    cardDiv.appendChild(venueBox);

    //venue heading
    const venueHeading = document.createElement('h2');
    venueHeading.innerText = 'Venue';
    venueHeading.classList.add('shows__venue-heading');
    venueBox.appendChild(venueHeading);

    //venue
    const venueText = document.createElement('p');
    venueText.innerText = show.venue;
    venueText.classList.add('shows__venue');
    venueBox.appendChild(venueText);

    //location box
    const locationBox = document.createElement('div');
    locationBox.classList.add('shows__location-box');
    cardDiv.appendChild(locationBox);

    //location heading
    const locationHeading = document.createElement('h2');
    locationHeading.innerText = 'Location';
    locationHeading.classList.add('shows__location-heading');
    locationBox.appendChild(locationHeading);

    //location
    const locationText = document.createElement('p');
    locationText.innerText = show.location;
    locationText.classList.add('shows__location');
    locationBox.appendChild(locationText);

    //button
    const button = document.createElement('button');
    button.classList.add('shows__button');
    button.innerText = 'Buy tickets'
    cardDiv.appendChild(button);

}

for (let i = 0; i < showsInfo.length; i++) {
    createCard(showsInfo[i]);
}


const cardEl = document.querySelector('.shows__card-top')

const cards = document.querySelectorAll('.shows__card')


cardEl.addEventListener('click', (event) => {
    cardEl.setAttribute('style', 'background: #E1E1E1')
    cards[0].removeAttribute('style', 'background: #E1E1E1')
    cards[1].removeAttribute('style', 'background: #E1E1E1')
    cards[2].removeAttribute('style', 'background: #E1E1E1')
    cards[3].removeAttribute('style', 'background: #E1E1E1')
    cards[4].removeAttribute('style', 'background: #E1E1E1')
})

cards[0].addEventListener('click', (event) => {
    cards[0].setAttribute('style', 'background: #E1E1E1');
    cardEl.removeAttribute('style', 'background: #E1E1E1');
    cards[1].removeAttribute('style', 'background: #E1E1E1');
    cards[2].removeAttribute('style', 'background: #E1E1E1');
    cards[3].removeAttribute('style', 'background: #E1E1E1');
    cards[4].removeAttribute('style', 'background: #E1E1E1');
})

cards[1].addEventListener('click', (event) => {
    cards[1].setAttribute('style', 'background: #E1E1E1');
    cardEl.removeAttribute('style', 'background: #E1E1E1')
    cards[0].removeAttribute('style', 'background: #E1E1E1')
    cards[2].removeAttribute('style', 'background: #E1E1E1')
    cards[3].removeAttribute('style', 'background: #E1E1E1')
    cards[4].removeAttribute('style', 'background: #E1E1E1')
})

cards[2].addEventListener('click', (event) => {
    cards[2].setAttribute('style', 'background: #E1E1E1');
    cardEl.removeAttribute('style', 'background: #E1E1E1')
    cards[1].removeAttribute('style', 'background: #E1E1E1')
    cards[0].removeAttribute('style', 'background: #E1E1E1')
    cards[3].removeAttribute('style', 'background: #E1E1E1')
    cards[4].removeAttribute('style', 'background: #E1E1E1')
})

cards[3].addEventListener('click', (event) => {
    cards[3].setAttribute('style', 'background: #E1E1E1');
    cardEl.removeAttribute('style', 'background: #E1E1E1')
    cards[1].removeAttribute('style', 'background: #E1E1E1')
    cards[2].removeAttribute('style', 'background: #E1E1E1')
    cards[0].removeAttribute('style', 'background: #E1E1E1')
    cards[4].removeAttribute('style', 'background: #E1E1E1')
})

cards[4].addEventListener('click', (event) => {
    cards[4].setAttribute('style', 'background: #E1E1E1');
    cardEl.removeAttribute('style', 'background: #E1E1E1')
    cards[1].removeAttribute('style', 'background: #E1E1E1')
    cards[2].removeAttribute('style', 'background: #E1E1E1')
    cards[3].removeAttribute('style', 'background: #E1E1E1')
    cards[0].removeAttribute('style', 'background: #E1E1E1')
})


