const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
let employeeData;

fetch('https://randomuser.me/api/?results=12')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        employeeData = myJson;
        // console.log(myJson);
        handleJSONData(myJson);
    });

function handleJSONData() {
    for(let i = 0 ; i < employeeData.results.length; i++) {
        let employee = employeeData.results[i];
        addItemToList(employee, i);
        // console.log(jsonEmployees.results[i]);
    }
}

function addItemToList(employee, pos) {
    const htmlLI =
        '<li id="'+ pos +'">\n' +
        '            <div id="'+ pos +'" class="employee-container">\n' +
        '                <div id="'+ pos +'" class="employee-details-container">\n' +
        '                    <img id="'+ pos +'" class="employee-image" src="' + employee.picture.medium + '"/>\n' +
        '\n' +
        '                    <div id="'+ pos +'" class="info-container">\n' +
        '                        <p id="'+ pos +'" class="name">' + employee.name.first + employee.name.last + '</p>\n' +
        '                        <p id="'+ pos +'" class="email">' + trimEmail(employee.email) + '</p>\n' +
        '                        <p id="'+ pos +'" class="location">' + employee.location.city + '</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </li>';

    $('.employee-list').append(htmlLI);
    // console.log(employee.name)
}

// When the user clicks on the button, open the modal
$('ul').on('click', (item) => {
    modal.style.display = "block";
    console.log("Clicked");
    handleClick(item.target.parentElement.id);

});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function handleClick(position) {
    if (employeeData) {
        const employee = employeeData.results[position];
        $("#modal-employee-image").attr("src", employee.picture.large);
        $(".modal-name").text(employee.name.first + employee.name.last);
        $(".modal-email").text(employee.email);
        $(".modal-location").text(employee.location.city);
        $(".modal-phone").text(employee.phone);
        $(".modal-address").text(employee.location.street + ", " + employee.location.city + " "
            + employee.location.state + " " + employee.location.postcode);
        $(".modal-dob").text("Birthday: " + employee.dob.date);
    }
}

function trimEmail(email) {
    if (email.length > 25) {
        return email.substr(0, 25);
    }
    return email;
}