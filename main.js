'use strict';

const projects = [
    {
        title: "Sorting Hat", 
        screenshot: "images/sorting-hat.png", 
        description: "The user enters a student name and a card is generated with the name entered and a random assignment to one of the four Hogwarts Houses.", 
        technologiesUsed: "HTML, CSS, JavaScript, Version Control with Github",
        available: true,
        url: "https://sorting-hat-by-kait.netlify.app/", 
        githubUrl: "https://github.com/kaitvan/sorting-hat"
      },
      {
        title: "Pet Adoption Site", 
        screenshot: "images/pet-adoption.png", 
        description: "The site shows available pet information on individual cards and the user can filter available pets by type.", 
        technologiesUsed: "HTML, CSS, JavaScript, Version Control with Github",
        available: true,
        url: "https://pet-adoption-by-kait.netlify.app/", 
        githubUrl: "https://github.com/kaitvan/pet-adoption"
      },
      {
        title: "Cool Project", 
        screenshot: "https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/more-info-ctas-homepage-adjust.jpg?cuz35Lr2MESIFEs86KqaQzZM_MTPdpRW&itok=HtiZcxZC", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Another Cool Project", 
        screenshot: "https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/more-info-ctas-homepage-adjust.jpg?cuz35Lr2MESIFEs86KqaQzZM_MTPdpRW&itok=HtiZcxZC", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Another Cool Project", 
        screenshot: "https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/more-info-ctas-homepage-adjust.jpg?cuz35Lr2MESIFEs86KqaQzZM_MTPdpRW&itok=HtiZcxZC", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      }
]

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const createProjectCards = () => {
    let domString = '';

    for (let i = 0; i < projects.length; i ++) {
        if (projects[i].available === true) {
            domString += `<div class="box">
                            <div class="image-fit">
                                <img src="${projects[i].screenshot}" alt="screenshot of work">
                            </div>
                            <div class="inner">
                                <h3>${projects[i].title}</h3>
                                <p>${projects[i].description} ${projects[i].technologiesUsed}</p>
                                <a class="live-button" href="${projects[i].url}">Link</a>
                                <a class="github-button" href="${projects[i].githubUrl}">GitHub</a>
                            </div>
                          </div>`
        }
    }

    printToDom('thumbnails', domString);
}



const init1 = () => {
    createProjectCards();
}

init1()