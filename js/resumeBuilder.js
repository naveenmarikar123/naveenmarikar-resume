var work = {
    "jobs": [
        {
            "employer" : "Virtusa",
            "title" : "Software Engineer",
            "location" : "Chennai",
            "dates_worked" : 2015,
            "description" : "Java , Pega Systems"
        }
    ]
}

work.display = function() {
    work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedworkDates = HTMLworkDates.replace("%data%", job.dates_worked);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedworkEmployerTitle = formattedworkEmployer + formattedworkTitle;
        $(".work-entry:last").append(formattedworkEmployerTitle);
        $(".work-entry:last").append(formattedworkDates);
        $(".work-entry:last").append(formattedworkDescription);
    });
}

var bio = {
    "name": "Naveen Marikar",
    "role": "Application Developer",
    "welcomeMessage": "Outstanding people always stand out.",
    "contacts": {
        "mobile_number": "+91-7736852539",
        "email" : "naveenmarikar123@gmail.com",
        "github" : "https://github.com/naveenmarikar123",
        "location" : "Jeddah , Saudi Arabia"
    },
    "pictureURL":"images/yunen.png",
    "skills" : ["C++", "C","HTML", "JavaScript","CSS","Java","Python","Android"]
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile_number);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedBioPic).append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#skills').append(formattedSkill);
        });
    }
};


var education = {
    "schools": [
        {
            "name" : "National Institute of Technology , Calicut",
            "location": "Calicut , Kerala",
            "degree": "Bachelor of Technology",
            "majors" : ["Computer Science and Engineering"],
            "dates_attended": "July 2011 - May 2015",
            //"url": "http://www.anu.edu.au/"
        }],
    "onlineCourses":[
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates_attended":"May 2015",
            "url":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title": "Full Stack Web Developer Nanodegree",
            "school": "Udacity",
            "dates_attended":"May 2015",
            "url":"https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
        },
        {
            "title": "Android Developer Nanodegree",
            "school": "Udacity",
            "dates_attended":"January 2015",
            "url":"https://www.udacity.com/course/android-developer-nanodegree--nd801"
        }]
};

education.display = function(){
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace('#', school.url);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates_attended);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last a").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolLocation).append(formattedSchoolDates);

        school.majors.forEach(function(major) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedSchoolMajor);
        });
    });

    if (education.onlineCourses.length > 0) {
        $(".education-entry").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function (course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace('#', course.url);;
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates_attended);

            $(".education-entry:last")
                .append(formattedOnlineTitle + formattedOnlineSchool)
                .append(formattedOnlineDates)
                .append('<br>');
        });
    }
};

var projects = {
    "projects" : [
        {
            "title" : "SmartShare(Android Application)",
            "dates_worked" : "01 January 2015 - 20 May 2015",
            "description" : "An application that allows users to share their items between people in their locality. Implemented the entire frontend using Android Studio , Google Maps API , Facebook API and followed Google Material Design Guidelines for designing elegant and flexible user friendly interface.",
            
        },
        {
            "title" : "Simple Integer Language Compiler",
            "dates_worked" : "01 January 2014 - 30 March 2014",
            "description" : "A compiler for the Simple Integer Language (SIL) that reads SIL source program, and generates instructions for a target machine known as the Simple Integer Machine (SIM). Implemented by Lexical Analyzer Generator (LEX) and Yet Another Compiler – Compiler (YACC).",
            
        }
    ]
};

projects.display = function() {
    projects.projects.forEach(function(project){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
        var formattedDates = HTMLprojectDates.replace("%data%",project.dates_worked);
        var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
    })
};

function inName() {
    var name = $("#name").html();
    name = name.trim().split(" ");
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name[0] + " " + name[1];
}

work.display();
bio.display();
education.display();
projects.display();

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);