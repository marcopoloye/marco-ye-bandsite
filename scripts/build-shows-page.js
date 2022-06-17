let showsSection = document.querySelector('.shows');

let showsInfo = [
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

let mainHeader = document.createElement('h2');
mainHeader.innerText = ('Shows');
mainHeader.classList.add('shows__heading');
showsSection.appendChild(mainHeader);

// create shows card
for (let i = 0; i < showsInfo.length; i++) {
    let showsCard = document.createElement('div');
    showsCard.classList.add('shows__card');
    showsSection.appendChild(showsCard);
}

// create date heading and move into each card
for (let i = 0; i < showsInfo.length; i++) {
    let dateHeading = document.createElement('p');
    dateHeading.innerText = 'Date';
    dateHeading.classList.add('shows__date-heading');
    showsSection.appendChild(dateHeading);
}

let targetShowsCard = document.querySelectorAll('.shows__card');
let moveDateHeading = document.querySelectorAll('.shows__date-heading');

for (let i = 0; i < targetShowsCard.length; i++) {
    targetShowsCard[i].appendChild(moveDateHeading[i]);
}

// create shows date and move into each card
for (let i = 0; i < showsInfo.length; i++) {
    let showsDate = document.createElement('p');
    showsDate.innerText = showsInfo[i].date;
    showsDate.classList.add('shows__date');
    showsSection.appendChild(showsDate);
}

let moveShowsDate = document.querySelectorAll('.shows__date');

for (let i = 0; i < targetShowsCard.length; i++) {
    targetShowsCard[i].appendChild(moveShowsDate[i]);
}

// create venue heading and move into each card
for (let i = 0; i < showsInfo.length; i++) {
    let venueHeading = document.createElement('p');
    venueHeading.innerText = 'Venue';
    venueHeading.classList.add('shows__venue-heading');
    showsSection.appendChild(venueHeading);
}

let moveVenueHeading = document.querySelectorAll('.shows__venue-heading');

for (let i = 0; i < targetShowsCard.length; i++) {
    targetShowsCard[i].appendChild(moveVenueHeading[i]);
}

// create shows venue and move into each card
for (let i = 0; i < showsInfo.length; i++) {
    let showsVenue = document.createElement('p');
    showsVenue.innerText = showsInfo[i].venue;
    showsVenue.classList.add('shows__venue');
    showsSection.appendChild(showsVenue);
}

let moveShowsVenue = document.querySelectorAll('.shows__venue');

for (let i = 0; i < targetShowsCard.length; i++) {
    targetShowsCard[i].appendChild(moveShowsVenue[i]);
}

// create venue heading and move into each card
for (let i = 0; i < showsInfo.length; i++) {
    let locationHeading = document.createElement('p');
    locationHeading.innerText = 'Location';
    locationHeading.classList.add('shows__location-heading');
    showsSection.appendChild(locationHeading);
}

let moveLocationHeading = document.querySelectorAll('.shows__location-heading');

for (let i = 0; i < targetShowsCard.length; i++) {
    targetShowsCard[i].appendChild(moveLocationHeading[i]);
}

// create shows location and move into each card
for (let i = 0; i < showsInfo.length; i++) {
    let showsLocation = document.createElement('p');
    showsLocation.innerText = showsInfo[i].location;
    showsLocation.classList.add('shows__location');
    showsSection.appendChild(showsLocation);
}

let moveShowsLocation = document.querySelectorAll('.shows__location');

for (let i = 0; i < targetShowsCard.length; i++) {
    targetShowsCard[i].appendChild(moveShowsLocation[i]);
}

// create buttons and move into each card
for (let i = 0; i < showsInfo.length; i++) {
    let button = document.createElement('button');
    button.innerText = 'Buy tickets';
    button.classList.add('shows__button');
    showsSection.appendChild(button);
}

let moveButton = document.querySelectorAll('.shows__button');

for (let i = 0; i < targetShowsCard.length; i++) {
    targetShowsCard[i].appendChild(moveButton[i]);
}

