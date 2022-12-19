
// DO NOT EDIT BELOW THIS LINE!!! YOU WILL BREAK THE CODE!!!

document.querySelector("#userName").innerHTML = `<h1>${userInfo.name.first} ${userInfo.name.last}</h1>`;
if ((userInfo.name.first + " " + userInfo.name.last) != "Anden Wieseler"){
    document.querySelector("#adapted").innerText = ` and adapted by ${userInfo.name.first} ${userInfo.name.last}`
}
document.querySelector("#userTitle").innerHTML = `<h6>${userInfo.about.title}</h6>`;
document.querySelector("#bio").innerHTML = `<p>${userInfo.about.description}</p>`;
for (x = 0; x < userInfo.about.social.length; x++) {
    document.querySelector("#socialBank").innerHTML += `<a href="${userInfo.about.social[x].url}" style=""><i class="${userInfo.about.social[x].icon.set} ${userInfo.about.social[x].icon.iconName}"></i></a>`;
};
for (let school of userSchools.schools) {
    let schoolName = school.name;
    let schoolAddressOne = school.address.street;
    let schoolAddressTwo = school.address.city + ", " + school.address.state + " " + school.address.zip;
    let schoolMajor;
    let schoolMinor;
    if (school.type != "High School") {
        schoolMajor = school.major;
        schoolMinor = school.minor;
    };
    let schoolGPA = school.gpa;
    let schoolGraduation = school.graduation;
    let schoolClubs;
    if (school.clubs){
        schoolClubs = school.clubs;
    }

    let schoolCard = document.createElement('div');
    schoolCard.setAttribute('class', 'school');
    let rowInCard = document.createElement('div');
    rowInCard.setAttribute("class", "row");
    let univLeft = document.createElement('div');
    univLeft.setAttribute("class", "univLeft");
    let univRight = document.createElement('div');
    univRight.setAttribute("class", "univRight");

    let schoolNameElement = document.createElement('h3');
    schoolNameElement.innerHTML = schoolName;
    let schoolAddressElementString = document.createElement("p")
    schoolAddressElementString.innerHTML = `${schoolAddressOne}<br>${schoolAddressTwo}`;
    let schoolUserInfoBlock = document.createElement('ul');
    let schoolGPAElement = document.createElement('li');
    schoolGPAElement.innerHTML = "GPA: " + schoolGPA;
    let schoolGraduationElement = document.createElement('li');
    schoolGraduationElement.innerHTML = "Graduation: " + schoolGraduation;
    let schoolClubsElement = document.createElement('div');
    if (school.clubs) {
        schoolClubsElement.innerHTML = "<h3 style=\"margin-top: 0px;\">Clubs and Activities</h3>";
        for (x = 0; x < schoolClubs.length; x++) {
            schoolClubsElement.innerHTML += `<h4>${schoolClubs[x].name}</h4>`
            schoolClubsElement.innerHTML += `<p style="margin-top: -25px;">${schoolClubs[x].position}</p>`
        }
    }

    if (school.type == "Bachelor's Degree") {
        let schoolMajorElement = document.createElement('li');
        schoolMajorElement.innerHTML = "Major: " + schoolMajor;
        let schoolMinorElement = document.createElement('li');
        schoolMinorElement.innerHTML = "Minor: " + schoolMinor;
        
        schoolUserInfoBlock.appendChild(schoolMajorElement);
        schoolUserInfoBlock.appendChild(schoolMinorElement);
    }
    schoolUserInfoBlock.appendChild(schoolGPAElement);
    schoolUserInfoBlock.appendChild(schoolGraduationElement);
    //schoolUserInfoBlock.appendChild(schoolClubsElement);

    univLeft.appendChild(schoolNameElement);
    univLeft.appendChild(schoolUserInfoBlock);
    univRight.appendChild(document.createElement('br'));
    univLeft.appendChild(schoolAddressElementString);
    univRight.appendChild(schoolClubsElement);

    rowInCard.appendChild(univLeft);
    rowInCard.appendChild(univRight);

    schoolCard.appendChild(rowInCard);
    document.querySelector("#schoolBank").appendChild(schoolCard);
}

for (x = 0; x < userJobs.jobs.length; x++) {
    document.querySelector("#jobs").innerHTML += `<div>
                                                    <h3>${userJobs.jobs[x].company} - ${userJobs.jobs[x].title}</h3>
                                                    <p style="font-size: 14px; margin-top: -10px;">${userJobs.jobs[x].description}</p>
                                                    <pstyle="font-size: 14px; margin-top: -15px;">${userJobs.jobs[x].start} - ${userJobs.jobs[x].end}</p>
                                                  </div>`;
}

for (x = 0; x < userSkills.skills.length; x++) {
    if (typeof userSkills.skills[x] == "object"){
        if (userSkills.skills[x].icon != null){
            if(userSkills.skills[x].link != null){
                document.querySelector("#skills ul").innerHTML += `<a style='color: white; text-decoration: none;' href='${userSkills.skills[x].link}' target='_blank'><li class="clickable">${userSkills.skills[x].name}<i class="${userSkills.skills[x].icon}" style="margin-left: 15px;"></i></li></a>`;
            } else {
                document.querySelector("#skills ul").innerHTML += `<li class="notClickable">${userSkills.skills[x].name}<i class="${userSkills.skills[x].icon}" style="margin-left: 15px;"></i></li>`;
            }
        } else if (userSkills.skills[x].link != null){
            document.querySelector("#skills ul").innerHTML += `<a style='color: white; text-decoration: none;' href='${userSkills.skills[x].link}' target='_blank'><li class="clickable">${userSkills.skills[x].name}</li></a>`;
        } else {
            document.querySelector("#skills ul").innerHTML += `<li class="notClickable">${userSkills.skills[x].name}</li>`;
        }
    } else if (typeof userSkills.skills[x] == "string"){
        document.querySelector("#skills ul").innerHTML += `<li class="notClickable">${userSkills.skills[x]}</li>`;
    }
}

for (x = 0; x < userAwards.certifications.length; x++) {
    document.querySelector("#certificates").innerHTML += `<div>
                                                            <h3>${userAwards.certifications[x].name}</h3>
                                                            <p>${userAwards.certifications[x].date}</p>
                                                          </div>`;
}

document.querySelector(":root").style.setProperty("--userImage", `url(/${userInfo.image})`);
document.querySelector(":root").style.setProperty("--userInfoWidth", `${(window.innerWidth - 35) * 0.01}px`);
document.querySelector(":root").style.setProperty("--userSelectedFont", `${userInfo.headerFont}`);

window.addEventListener('resize', () => {
    document.querySelector(":root").style.setProperty("--userInfoWidth", `${(window.innerWidth - 35) * 0.01}px`);
});

window.addEventListener('rotate', () => {
    document.querySelector(":root").style.setProperty("--userInfoWidth", `${(window.innerWidth - 35) * 0.01}px`);
});

document.body.style.display = "initial";