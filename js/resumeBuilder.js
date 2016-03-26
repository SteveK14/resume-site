// Need: Encapsulating display function for work, bio, and education (like projects)

// Information for Biography Section of Resume

var bio = {
	"name": "Stephen Klein",
	"role": "Engineer",
	"welcomeMessage": "Welcome to Stephen Klein's Resume. Please feel free to contact me with any questions.",
	"biopic": "images/Me.jpg",
	"skills": ["Experience in lab and manufacturing environment", "Project Management", "Consistency", "Chilling Out"],
	"contacts": {
		"mobile": "(615) 653-5106",
		"email": "steveklein014@gmail.com",
		"github": "stevek14",
		"location": ["Chattanooga, TN"]
	}
};

// Work experience information

var work = {
	"jobs" : [{

			"employer": "Coulometrics LLC",
			"title": "Battery R&D Engineer",
			"location": "Chattanooga, TN",
			"dates": "Current",
			"description": "My responsibilities range from performing lab tests on experimental battery compositions to manufacturing thousands of feet of electrode on our coater."
		},
		{
			"employer": "Tau Beta Pi Honor Society",
			"title": "Office Assistant",
			"location": "Knoxville, TN",
			"dates": "Sept. 2014 - May 2015",
			"description": "Office Work"
		},
		{
			"employer": "Altec Inc.",
			"title": "Quality Engineer Co-op",
			"location": "Burnsville, NC",
			"dates": "June 2013 - Dec. 2013",
			"description": "Kaizen events and quality control"
		}
	]
};

// Past coding project information

var projects = {
	"projects" : [{

			"title": "Mad Libs",
			"dates": "August 2015",
			"description": "Create a mad libs with code-related vocabulary using Python.",
			"images": ["images/Madlibs.jpg"]
		},
		{
			"title": "Movie Website",
			"dates": "September 2015",
			"description": "Create a movie website that plays the movie's trailer when selected.",
			"images": ["images/Movie_Website.jpg", "images/Movie_Website1.jpg"]
		}
	]
};

// Information for Education section of Resume

var education = {
	"schools": [{
			"name": "University of Tennessee",
			"location": "Knoxville, TN",
			"degree": "Bachelor of Science",
			"majors": "Mechanical Engineering",
			"dates": "2010-2015",
			"url": "http://www.utk.edu/"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"date": 2016,
			"url": "http://www.udacity.com/course/ud804"
		}
	]
};


var data = "%data%"

// function used to show bio information on webpage

bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace(data, bio.role));
	$("#header").prepend(HTMLheaderName.replace(data, bio.name));

	var formattedMobile = HTMLmobile.replace(data,bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace(data,bio.contacts.email);
	var formattedGithub = HTMLgithub.replace(data,bio.contacts.github);
	var formattedLocation = HTMLlocation.replace(data,bio.contacts.location);

	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);

	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);

	$("#header").append(HTMLbioPic.replace(data,bio.biopic));
	$("#header").append(HTMLwelcomeMsg.replace(data,bio.welcomeMessage));

	function displaySkills() {
		var i = 0;
		$("#header").append(HTMLskillsStart);
		while(bio.skills.length > i) {
			var formattedSkill = HTMLskills.replace(data,bio.skills[i]);
			$("#skills").append(formattedSkill);
			i++;
		}
	}
	displaySkills();
};

// function used to show work information on webpage

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace(data,work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace(data,work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace(data,work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace(data,work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace(data,work.jobs[job].description);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
};

// function used to show project information on webpage

projects.display = function() {
	for(project in projects.projects) {
 		$("#projects").append(HTMLprojectStart);

 		var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace(data, projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);

 		$(".project-entry:last").append(formattedTitle);
 		$(".project-entry:last").append(formattedDates);
 		$(".project-entry:last").append(formattedDescription);
 		
 		if(projects.projects[project].images.length > 0) {
	 		for(image in projects.projects[project].images) {
	 			var formattedImage = HTMLprojectImage.replace(data, projects.projects[project].images[image]);
	 			$(".project-entry:last").append(formattedImage);
	 		}
	 	}

 	}
};

// function used to show education information on webpage

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchool = HTMLschoolName.replace(data, education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace(data, education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace(data, education.schools[school].majors);
		var formattedURL = HTMLonlineURL.replace(data, education.schools[school].url);
		var combineSchooldegree = formattedSchool + formattedDegree;

		$(".education-entry:last").append(combineSchooldegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
		$(".education-entry:last").append(formattedURL);
		

	}

	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace(data, education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace(data, education.onlineCourses[course].school);
		var formattedDates = HTMLonlineDates.replace(data, education.onlineCourses[course].date);
		var formattedURL = HTMLonlineURL.replace(data, education.onlineCourses[course].url);
		var combineTitleSchool = formattedTitle + formattedSchool;

		$(".education-entry:last").append(combineTitleSchool);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedURL);
	
	}

};

// call functions to display webpage information

bio.display();
work.display();
projects.display();
education.display();

// track clicks on the page

$(document).click(function(loc){
	// your code goes here
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

// internationalize the name at the top of the page

function inName(){
	var intenName = bio.name;
  var names = intenName.trim().split(" ");
  names[1] = names[1].toUpperCase();
  names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
  intenName = names.join(" ");
  return bio.name = intenName;
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);