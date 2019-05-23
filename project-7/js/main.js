// Our labels along the x-axis
var years = ["16-22", "23-29", "30-5","6-12","13-19","20-26","27-3","4-10","ll-17","18-24"];
// For drawing the lines
var ageData = [500,1000,750,1250,1750,1500,1000,1500,2000,1500,2000];


var lineChart = document.getElementById("lineChart");
new Chart(lineChart, {
    responsive: true,
    type: 'line',
    data: {
        labels: years,
        datasets: [
            {
                data: ageData,
                label: "",
                borderColor: "#3e95cd",
                fill: true,
                backgroundColor: "#978cf6",
            },
        ]
    },
    options: {
        elements: {
            line: {
                tension: 0 // disables bezier curves
            }
        },
        legend: {display: false},
        title: {
            display: false
        }
    }
});

var days = ["S", "M", "T","W","T","F","S"];
var dayData = [50,75,150,125,200,175,75];
var daily = document.getElementById("dailyTraffic");
new Chart(daily, {
    responsive: true,
    type: 'bar',
    data: {
        labels: days,
        datasets: [
            {
                data: dayData,
                label: "",
                backgroundColor: "#7b70cf",
            },

        ],
    },
    options: {
        legend: {display: false},
        title: {
            display: false

        },
        scales: {
            xAxes: [{
                barThickness: 24
            }]
        }
    }
});

var mobile = ["Phones", "Tablets", "Desktop"];
var mobileData = [70,15,15];
var mobileUsers = document.getElementById("mobileUsers");
new Chart(mobileUsers, {
    responsive: true,
    type: 'doughnut',
    data: {
        labels: mobile,
        datasets: [
            {
                data: mobileData,
                label: "",
                borderColor: "#3e95cd",
                backgroundColor: ["#7b70cf", "#66cf86", "#1fa7cf"],
            },
        ]
    }
});

$("#alert_cancel").click(function(){
    $(".alert").hide();
});

$('#submit-bttn').click(function (evt) {
    validateForm();
});

function validateForm() {
    var search = $("#user-search").val();
    var message = $("#message").val();

    if (search.length === 0 || message.length === 0) {
        alert("User or message field is empty");
    } else {
        alert("Message sent!");
    }
}

window.onbeforeprint = function(event) {
    beforePrintHandler();
};

window.addEventListener("beforeprint", function(event) {
    beforePrintHandler();
});

function beforePrintHandler () {
    console.log("beforePrintHandler");
    for (var id in Chart.instances) {
        Chart.instances[id].resize();
        console.log(id);
    }
}

