let resumeForm = document.querySelector("#cv-form") as HTMLElement
let resumeOutput = document.querySelector("#resume-output") as HTMLInputElement
let editBtn = document.querySelector("#edit-btn") as HTMLElement

resumeForm?.addEventListener("submit", (evt) => {
    evt.preventDefault()
    resumeOutput.style.display = "block"

    const name = document.getElementById("name") as HTMLInputElement
    const email = document.getElementById("email") as HTMLInputElement
    const phone = document.getElementById("phone") as HTMLInputElement
    const education = document.getElementById("education") as HTMLInputElement
    const experience = document.getElementById("experience") as HTMLInputElement
    const skills = document.getElementById("skills") as HTMLInputElement

    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("please fill all field");
        return;
    }

    (document.getElementById("resumeName") as HTMLElement).innerText = `Name: ${name.value}`;
    (document.getElementById("resumeEmail") as HTMLElement).innerText = `Email: ${email.value}`;
    (document.getElementById("resumePhone") as HTMLElement).innerText = `Phone: ${phone.value}`;
    (document.getElementById("resumeEducation") as HTMLElement).innerText = `Education: ${education.value}`;
    (document.getElementById("resumeExperience") as HTMLElement).innerText = `Experience: ${experience.value}`;
    (document.getElementById("resumeSkils") as HTMLElement).innerText = `Skills: ${skills.value}`

})

// Edit Resume button functionality
editBtn?.addEventListener("click", () => {

    resumeForm.style.display = "block"; // Show the form again
    resumeOutput.style.display = "none"; // Hide the resume output
    editBtn.style.display = "none"; // Hide the edit button



    // Repopulate the form with current resume data
    const name = document.getElementById("resumeName")?.innerText.split(': ')[1];
    const email = document.getElementById("resumeEmail")?.innerText.split(': ')[1];
    const phone = document.getElementById("resumePhone")?.innerText.split(': ')[1];
    const education = document.getElementById("resumeEducation")?.innerText;
    const experience = document.getElementById("resumeExperience")?.innerText;
    const skills = document.getElementById("resumeSkils")?.innerText;

    // Set the form inputs to these values
    (document.getElementById("name") as HTMLInputElement).value = name ?? '';
    (document.getElementById("email") as HTMLInputElement).value = email ?? '';
    (document.getElementById("phone") as HTMLInputElement).value = phone ?? '';
    (document.getElementById("education") as HTMLInputElement).value = education ?? '';
    (document.getElementById("experience") as HTMLInputElement).value = experience ?? '';
    (document.getElementById("skills") as HTMLInputElement).value = skills ?? '';


});


const shareBtn = document.querySelector("#share-btn") as HTMLElement;

shareBtn?.addEventListener("click", () => {
    const resumeText = `
    Name: ${(document.getElementById("resumeName") as HTMLElement).innerText}
    Email: ${(document.getElementById("resumeEmail") as HTMLElement).innerText}
    Phone: ${(document.getElementById("resumePhone") as HTMLElement).innerText}
    Education: ${(document.getElementById("resumeEducation") as HTMLElement).innerText}
    Experience: ${(document.getElementById("resumeExperience") as HTMLElement).innerText}
    Skills: ${(document.getElementById("resumeSkils") as HTMLElement).innerText}
    `;

    navigator.clipboard.writeText(resumeText).then(() => {
        alert("Resume copied to clipboard! You can share it now.");
    }).catch(err => {
        alert("Failed to copy resume.");
        console.error(err);
    });
});
