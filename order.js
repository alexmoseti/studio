const checkboxOptions = {
    "wedding shoot": [
        { label: "Traditional", id: "treditional", price: 100 },
        { label: "Video", id: "video", price: 150 },
        { label: "Cinematic", id: "cinematic", price: 200 },
        { label: "Drone", id: "drone", price: 250 }
    ],
    "birthday shoot": [
        { label: "Cake Cutting", id: "cake", price: 50 },
        { label: "Candid", id: "candid", price: 75 },
        { label: "Group Photos", id: "group", price: 100 }
    ],
    "photo shoot": [
        { label: "Outdoor", id: "outdoor", price: 80 },
        { label: "Studio", id: "studio", price: 120 },
        { label: "Portrait", id: "portrait", price: 150 }
    ],
    "video shoot": [
        { label: "Short Film", id: "shortfilm", price: 300 },
        { label: "Music Video", id: "musicvideo", price: 350 },
        { label: "Documentary", id: "documentary", price: 400 }
    ]
};

document.getElementById('type').addEventListener('change', () => {
    const selectedValue = event.target.value;
    const checkboxContainer = document.getElementById('checkboxContainer');
    const submitButton = document.querySelector('button[type="submit"]')
    checkboxContainer.style.display = "flex";
    checkboxContainer.innerHTML = '';

    if (checkboxOptions[selectedValue]) {
        checkboxOptions[selectedValue].forEach(option => {
            const checkboxDiv = document.createElement('div');
            checkboxDiv.classList.add('checkbox');

            const label = document.createElement('label');
            label.setAttribute('for', option.id);
            label.innerText = `${option.label}`;


            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = option.id;
            checkbox.dataset.price = option.price;
            checkbox.style.display = "none";

            checkboxDiv.appendChild(label);
            checkboxDiv.appendChild(checkbox);
            checkboxContainer.append(checkboxDiv);

            checkbox.addEventListener('click', () => {
                checkboxDiv.classList.toggle('checked', checkbox.checked);

                updateTotalPrice();
            });
        });
    }

    updateTotalPrice();
});

function updateTotalPrice() {
    const checkboxes = document.querySelectorAll('#checkboxContainer input[type="checkbox"]');

    let totalPrice = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            totalPrice += parseFloat(checkbox.dataset.price);
        }
    });

    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.innerText = `Book order at $${totalPrice} only`;
}


// code to get auth Token 

// fetch("https://www.universal-tutorial.com/api/getaccesstoken", {
//     method: "GET",
//     headers: {
//         "Accept": "application/json",
//         "api-token": "J4QryFbg0aZJ--Uot9so0q_-y7g_uZvOt2ytGa024iHmCec8rrGYGPt62clmEVcy2nI",
//         "user-email": "your@email.com"
//     }
// })

// .then(response => response.json())
// .then(data => {
//     const authToken = data.auth_token;
//     console.log("Authorization Token: ", authToken);
// })

authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJ5b3VyQGVtYWlsLmNvbSIsImFwaV90b2tlbiI6Iko0UXJ5RmJnMGFaSi0tVW90OXNvMHFfLXk3Z191WnZPdDJ5dEdhMDI0aUhtQ2VjOHJyR1lHUHQ2MmNsbUVWY3kybkkifSwiZXhwIjoxNzI2MTIwNzQxfQ.tDHevBIh8cP-3J-RpF0s5JogpjP-eHrw5SsgdZ2e9YE";

function loadCountries() {
    fetch("https://www.universal-tutorial.com/api/countries/", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${authToken}` ,
            "Accept": "application/json"
        }
    })

    .then(response => response.json())
    .then(data => {
        const countrySelect = document.getElementById('country');
        countrySelect.innerHTML = '<option disabled selected value="select type">select country</option>';

        data.forEach(country => {
            const option = document.createElement('option');
            option.value = country.country_name;
            option.textContent = country.country_name;
            countrySelect.appendChild(option);
        });
    })
}

function loadStates(country) {
    fetch(`https://www.universal-tutorial.com/api/states/${country}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${authToken}` ,
            "Accept": "application/json"
        }
    })

    .then(response => response.json())
    .then(data => {
        const stateSelect = document.getElementById('state');
        stateSelect.innerHTML = '<option disabled selected value="select type">select state</option>';

        data.forEach(state => {
            const option = document.createElement('option');
            option.value = state.state_name;
            option.textContent = state.state_name;
            stateSelect.appendChild(option);
        });
    })
}

function loadCities(state) {
    fetch(`https://www.universal-tutorial.com/api/cities/${state}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${authToken}` ,
            "Accept": "application/json"
        }
    })

    .then(response => response.json())
    .then(data => {
        const citySelect = document.getElementById('city');
        citySelect.innerHTML = '<option disabled selected value="select type">select city</option>';

        data.forEach(city => {
            const option = document.createElement('option');
            option.value = city.city_name;
            option.textContent = city.city_name;
            citySelect.appendChild(option);
        });
    })
}

document.getElementById('country').addEventListener('change', (event) => {
    const selectedCountry = event.target.value;
    loadStates(selectedCountry);
    document.getElementById('state').disabled = false;
});

document.getElementById('state').addEventListener('change', (event) => {
    const selectedState = event.target.value;
    loadCities(selectedState);
    document.getElementById('state').disabled = false;
    document.getElementById('city').disabled = false;
});

// all done 

// validate form 
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstname').value.trim();
    const lastName = document.getElementById('lastname').value.trim();
    const mobileNumber = document.getElementById('number').value.trim();
    const email = document.getElementById('email').value.trim();
    const type = document.getElementById('type').value;
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zipcode').value.trim();
    const address = document.getElementById('address').value.trim();

    const checkboxContainer = document.getElementById('checkboxContainer');
    const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
    const checkedCheckboxes = Array.from(checkboxes).some(checkbox => checkbox.checked);

    const errorMessageDiv = document.getElementById('error-message');
    errorMessageDiv.innerHTML = '';

    let errorMessage = '';

    if (!firstName) {
        errorMessage = 'First name is required.';
    } else if (!lastName) {
        errorMessage = 'Last name is requireed.';
    } else if (!mobileNumber) {
        errorMessage = 'Mobile number is required.';
    } else if (!email) {
        errorMessage = 'Email address is required.';
    } else if (!type || type === 'select type') {
        errorMessage = 'Shoot type is required.';
    } else if (!country || country === 'select type') {
        errorMessage = 'Country is required.';
    } else if (!state || state === 'select type') {
        errorMessage = 'State is required.';
    } else if (!city || city === 'select type') {
        errorMessage = 'City is required.';
    } else if (!zipCode) {
        errorMessage = 'Zip code is required.';
    } else if (!address) {
        errorMessage = 'Address is required.';
    } else if (!checkedCheckboxes) {
        errorMessage = 'At least one checkbox must be checked.';
    }

    if (errorMessage) {
        errorMessageDiv.style.display = 'block';
        const p = document.createElement('p');
        p.textContent = errorMessage;
        errorMessageDiv.appendChild(p)
    } else {
        console.log('Form is valid');
        errorMessageDiv.style.display = 'none';
    }
})



loadCountries();