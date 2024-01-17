    $(document).ready(function () {
        $('#fullpage').fullpage({
            sectionsColor: ['#1A120B', '#ffffff', '#D5CEA3'],
            navigation: true,
            navigationPosition: 'right',
            anchors: ['section1', 'section2', 'section3']
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        // Animate the numbers using Anime.js
        const totalCasesElement = document.getElementById('totalCases');
        const inHospitalElement = document.getElementById('inHospital');
        const totalDeathsElement = document.getElementById('totalDeaths');
        const vaccinationHeaderElement = document.getElementById('vaccinationHeader');
        const vaccinationElement = document.getElementById('vaccination');

        anime({
            targets: totalCasesElement,
            innerHTML: [0, 257510],
            easing: 'linear',
            duration: 2000,
            round: true // Round the values to the nearest whole number
        });

        anime({
            targets: inHospitalElement,
            innerHTML: [0, 1365],
            easing: 'linear',
            duration: 2000,
            round: true // Round the values to the nearest whole number
        });

        anime({
            targets: totalDeathsElement,
            innerHTML: [0, 678],
            easing: 'linear',
            duration: 2000,
            round: true // Round the values to the nearest whole number
        });

        anime({
            targets: vaccinationHeaderElement,
            innerHTML: ['0', '9'],
            easing: 'linear',
            duration: 2000,
            round: true // Round the values to the nearest whole number
        });
        anime({
            targets: vaccinationElement,
            innerHTML: ['0', '10'],
            easing: 'linear',
            duration: 2000,
            round: true // Round the values to the nearest whole number
        });
    });

    const labels = [
        'Dec 1',
        'Dec 2',
        'Dec 3',
        'Dec 4',
        'Dec 5',
        'Dec 6',
        'Dec 7',
        'Dec 8',
        'Dec 9',
        'Dec 10',
        'Dec 11',
        'Dec 12',
        'Dec 13',
        'Dec 14'
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Daily Cases (past 2 weeks)',
            backgroundColor: 'rgb(255, 255, 255)',
            borderColor: 'rgb(255, 255, 255)',
            data: [1134, 1056, 986, 771, 756, 721, 654, 742, 689, 512, 455, 376, 244, 103],
        }]
    };

    const config = {
        type: 'bar',
        data: data
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );


    // Your dataset
var dataSet = [
    { "Name": "Bedok Polyclinic", "Address": "11 Bedok North Street 1 Heartbeat@Bedok #02-01, #03-01, Singapore 469662", "Vaccine Type": "Pfizer", "Phone": "6343 1121" },
    { "Name": "Bukit Batok Polyclinic", "Address": "50 Bukit Batok West Avenue 3, Singapore 659164", "Vaccine Type": "Moderna", "Phone": "6343 1122" },
    { "Name": "Bukit Merah Polyclinic", "Address": "162 Bukit Merah Central Level 4, Singapore 150163", "Vaccine Type": "Pfizer", "Phone": "6343 1123" },
    { "Name": "Choa Chu Kang Polyclinic", "Address": "2 Teck Whye Crescent, Singapore 688846", "Vaccine Type": "Moderna", "Phone": "6343 1124" },
    { "Name": "Clementi Polyclinic", "Address": "451 Clementi Avenue 3, Singapore 120451", "Vaccine Type": "Pfizer", "Phone": "6343 1125" },
    { "Name": "Geylang Polyclinic", "Address": "21 Geylang East Central, Singapore 389707", "Vaccine Type": "Pfizer", "Phone": "6343 1126" },
    { "Name": "Hougang Polyclinic", "Address": "89 Hougang Avenue 4, Singapore 538829", "Vaccine Type": "Pfizer", "Phone": "6765 1121" },
    { "Name": "Jurong Polyclinic", "Address": "190 Jurong East Avenue 1, Singapore 609788", "Vaccine Type": "Pfizer", "Phone": "6765 1122" },
    { "Name": "Marine Parade Polyclinic", "Address": "80 Marine Parade Central, Singapore 440080", "Vaccine Type": "Pfizer", "Phone": "6765 1123" },
    { "Name": "Outram Polyclinic", "Address": "3 Second Hospital Avenue, #02-00 Health Promotion Board Building, Singapore 168937", "Vaccine Type": "Comirnaty", "Phone": "6765 1124" },
    { "Name": "Pasir Ris Polyclinic", "Address": "1 Pasir Ris Drive 4, Singapore 519457", "Vaccine Type": "Comirnaty", "Phone": "6765 1125" },
    { "Name": "Pioneer Polyclinic", "Address": "26 Jurong West Street 61, Singapore 648201", "Vaccine Type": "Moderna", "Phone": "6765 1126" }
];

$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['#1A120B', '#ffffff', '#D5CEA3'],
        navigation: true,
        navigationPosition: 'right',
        anchors: ['section1', 'section2', 'section3']
    });

    $('#example').DataTable({
        pageLength:5,
        "paging": true,
        "lengthChange": false,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": false,
        "data": dataSet,  // Your dataset goes here
        "columns": [
            { "data": "Name" },
            { "data": "Address" },
            { "data": "Vaccine Type" },
            { "data": "Phone" }
        ]
    });
});

    