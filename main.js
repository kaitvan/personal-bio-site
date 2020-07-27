'use strict';

const projects = [
    {
        title: "Cool Project", 
        screenshot: "https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/more-info-ctas-homepage-adjust.jpg?cuz35Lr2MESIFEs86KqaQzZM_MTPdpRW&itok=HtiZcxZC", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Cool Project", 
        screenshot: "https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/more-info-ctas-homepage-adjust.jpg?cuz35Lr2MESIFEs86KqaQzZM_MTPdpRW&itok=HtiZcxZC", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
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
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Another Cool Project", 
        screenshot: "https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/more-info-ctas-homepage-adjust.jpg?cuz35Lr2MESIFEs86KqaQzZM_MTPdpRW&itok=HtiZcxZC", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
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
            domString += `<div class="box">`
            domString += `  <div class="image-fit">`
            domString += `      <img src="${projects[i].screenshot}" alt="screenshot of work">`
            domString += `  </div>`
            domString += `  <div class="inner">`
            domString += `      <h3>${projects[i].title}</h3>`
            domString += `      <p>${projects[i].description} ${projects[i].technologiesUsed}</p>`
            domString += `      <a class="live-button" href="${projects[i].url}">Link</a>`
            domString += `      <a class="github-button" href="${projects[i].githubUrl}">GitHub</a>`
            domString += `  </div>`
            domString += `</div>`
        }
    }

    printToDom('thumbnails', domString);
}



const init1 = () => {
    createProjectCards();
}

init1()