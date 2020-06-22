const userName = document.querySelector('#userName');
const generate = document.querySelector('#generate');
const countries = document.querySelectorAll('.countries');
const story = document.querySelector('.story');
const names = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const places = ['the soup kitchen', 'Disneyland', 'the White House'];
const events = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']
let userCountry;

function randomValueFromArray(array){
    return array[Math.floor(Math.random() * array.length)];
}

generate.onclick = function () {
    user = (userName.value === '') ? 'Bob' : userName.value;
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].checked) {
            userCountry = countries[i].value;
            break;
        }
    }
    weight = (userCountry === 'US') ? '300 pounds' : Math.round(300 / 2.2) + ' kilograms';
    temp = (userCountry === 'US') ? '94 fahrenheit' : Math.round((94 - 32) * 5 / 9) + ' celsius';
    name = randomValueFromArray(names);
    place = randomValueFromArray(places);
    event = randomValueFromArray(events);

    story.textContent = `It was ${temp} outside, so ${name} went for a walk. When they got to ${place}, they stared in horror for a few moments, then ${event}. ${user} saw the whole thing, but was not surprised — ${name} weighs ${weight}, and it was a hot day.`;
    // userName.value = '';
}

/*
function generateStory() {
    user = (userName.value === '') ? 'Bob' : userName.value;
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].checked) userCountry = countries[i].value;
    }
    weight = (userCountry === 'US') ? '300 pounds' : Math.round(300 / 2.2) + ' kilograms';
    temp = (userCountry === 'US') ? '94 fahrenheit' : Math.round((94 - 32) * 5 / 9) + ' celsius';
    name = randomValueFromArray(names);
    place = randomValueFromArray(places);
    event = randomValueFromArray(events);

    story.textContent = `It was ${temp} outside, so ${name} went for a walk. When they got to ${place}, they stared in horror for a few moments, then ${event}. ${user} saw the whole thing, but was not surprised — ${name} weighs ${weight}, and it was a hot day.`;
    // userName.value = '';
}

generate.addEventListener('click', generateStory)
*/