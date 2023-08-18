
//define the variables of input field

//all input
var input = document.querySelectorAll('input');
var show = document.querySelector('.show');
//about details 
const firstName = document.querySelector('#firstName');
const MiddleName = document.querySelector('#MiddleName');
const lastName = document.querySelector('#lastName');
const ProfileImage = document.querySelector('#yourImage');
const designation = document.querySelector('#designation');
const address = document.querySelector('#address');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const summary = document.querySelector('#summary');

//add button
var add = document.querySelectorAll('.add');
var AddAchivement = document.querySelectorAll('#AddAchivement');
var AddExperience = document.querySelectorAll('#AddExperience');
var AddEducation = document.querySelectorAll('#AddEducation');
var AddProjects = document.querySelectorAll('#AddProjects');
var AddSkill = document.querySelectorAll('#AddSkill');


//these variable are redefining and act as a html collection after the calling the add button
function definVariable() {
    //achivements
    var titleAchievement = document.querySelectorAll('#titleAchievement');
    var descriptionAchivement = document.querySelectorAll('#descriptionAchivement');

    //experience
    var titleExperience = document.querySelectorAll('#titleExperience');
    var company = document.querySelectorAll('#company');
    var locationExperinece = document.querySelectorAll('#locationExperinece');
    var startDateEx = document.querySelectorAll('#startDateEx');
    var endDateEx = document.querySelectorAll('#endDateEx');
    var descriptionExperience = document.querySelectorAll('#descriptionExperience');


    //education 
    var school = document.querySelectorAll('#school');
    var degree = document.querySelectorAll('#degree');
    var city = document.querySelectorAll('#city');
    var startDateEd = document.querySelectorAll('#startDateEd');
    var endDateEd = document.querySelectorAll('#endDateEd');
    var descriptionEducation = document.querySelectorAll('#descriptionEducation');


    //projects
    var projectName = document.querySelectorAll('#projectName');
    var projectLink = document.querySelectorAll('#projectLink');
    var descriptionProject = document.querySelectorAll('#descriptionProject');

    //skills
    var skill = document.querySelectorAll('#skill');

}



//calling the definvariable function  and inputCalling() function because without the calling the first time we are not shown the data 

definVariable();
inputCalling(input);



//add the elements in form
add.forEach((element) => {
    element.addEventListener('click', () => {
        var y = element.previousElementSibling;
        var x = y.firstElementChild;
        var z = document.createElement('form');
        z.innerHTML = x.innerHTML;
        z.id = x.id;
        y.appendChild(z);
        var input = document.querySelectorAll('input');
        definVariable();
        inputCalling(input);

    });
})


function inputCalling(input) {
    definVariable();
    input.forEach((element) => {
        element.addEventListener('change', () => {

            //for skills adding
            var skillsInner = '';
            if(!(skill instanceof HTMLCollection)){
                skillsInner += `<p>${skill.value}</p>`;
            }
            else{
                for (var i = 0; i < skill.length; i++) {
                    skillsInner += `<p>${skill[i].value}</p>`;
                }
            }
            

            // for Achivement adding
            var achieveInner = '';
            if(!(titleAchievement instanceof HTMLCollection)){
                achieveInner += `
                    <div class="achiveItem show-item">
                        <p>${titleAchievement.value}</p>
                        <p>${descriptionAchivement.value}</p>
                    </div>`;
            }
            else{
                for (var i = 0; i < titleAchievement.length; i++) {
                    achieveInner += `
                        <div class="achiveItem show-item">
                            <p>${titleAchievement[i].value}</p>
                            <p>${descriptionAchivement[i].value}</p>
                        </div>`;
                }
            }
            


            // for education adding
            var educationInner = '';
            if(!(school instanceof HTMLCollection)){
                educationInner += `
                <div class="show-item">
                    <p>${school.value}</p>
                    <div class="orgStart">
                        <p>${degree.value}</p>
                        <p>${city.value}</p>
                        <div class="show-start">${startDateEd.value}</div>
                        <div class="show-end">${endDateEd.value}</div>
                    </div>
                    <p>${descriptionEducation.value}</p>
                </div>`;
            }
            else{
                for (var i = 0; i < school.length; i++) {
                    educationInner += `
                    <div class="show-item">
                        <p>${school[i].value}</p>
                        <div class="orgStart">
                            <p>${degree[i].value}</p>
                            <p>${city[i].value}</p>
                            <div class="show-start">${startDateEd[i].value}</div>
                            <div class="show-end">${endDateEd[i].value}</div>
                        </div>
                        <p>${descriptionEducation[i].value}</p>
                    </div>`;
                }
            }
           

            //for experience adding
            var experienceInner='';
            if(!(titleExperience instanceof HTMLCollection)){
                experienceInner +=`
                <div class="show-item">
                    <p>${titleExperience.value}</p>
                    <div class="orgStart">
                        <p>${company.value}</p>
                        <p>${locationExperinece.value}</p>
                        <div class="show-start">${startDateEx.value}</div>
                        <div class="show-end">${endDateEx.value}</div>
                    </div>
                    <p>${descriptionExperience.value}</p>
                </div>`;
            }
            else{
                for(var i=0;i<titleExperience.length;i++){
                    experienceInner +=`
                    <div class="show-item">
                        <p>${titleExperience[i].value}</p>
                        <div class="orgStart">
                            <p>${company[i].value}</p>
                            <p>${locationExperinece[i].value}</p>
                            <div class="show-start">${startDateEx[i].value}</div>
                            <div class="show-end">${endDateEx[i].value}</div>
                        </div>
                        <p>${descriptionExperience[i].value}</p>
                    </div>`;
                }
            }
            

            //for project adding
            var projectInner='';
            if(!(projectName instanceof HTMLCollection)){
                projectInner +=`
                <div class="project-item">
                    <p>${projectName.value}</p>
                    <p>${projectLink.value}</p>
                    <p>${descriptionProject.value}</p>
                </div>`;
            }
            else{
                for(var i=0;i<projectName.length;i++){
                    projectInner +=`
                    <div class="project-item">
                        <p>${projectName[i].value}</p>
                        <p>${projectLink[i].value}</p>
                        <p>${descriptionProject[i].value}</p>
                    </div>`;
                }
            }
            


            var Resume = `
            <div class="left">
                <div class="firstUpper">
                    <div class="profileImg">
                        <img src="./images/hibban-photo.png" alt="profile Image">
                    </div>
                    <h1>${firstName.value + ' ' + MiddleName.value + ' ' + lastName.value}</h1>
                    <div class="line"></div>
                    <p>${designation.value}</p>
                </div>
                <div class="show-about">
                    <h1>ABOUT</h1>
                    <p>${phone.value}</p>
                    <p>${email.value}</p>
                    <p>${address.value}</p>
                    <p>${summary.value}</p>
                </div>
                <div class="show-skills">
                    <h1>SKILLS</h1>
                    ${skillsInner}
                </div>
    
            </div>
    
    
            <div class="right">
                <div class="show-achivment">
                    <div class="head">
                        <h1>ACHIEVEMENTS</h1>
                    </div>
                    ${achieveInner}
                    
                </div>
                <div class="show-education sameEE">
                    <div class="head">
                        <h1>EDUCATIONS</h1>
                    </div>
                    ${educationInner}
                </div>
                <div class="show-experience sameEE">
                    <div class="head">
                        <h1>EXPERIENCES</h1>
                    </div>
                   ${experienceInner}
                </div>
                <div class="show-project">
                    <div class="head">
                        <h1>PROJECTS</h1>
                    </div>
                    ${projectInner}
                </div>
            </div>
            `;
            show.innerHTML = Resume;

        })
    })
}






window.jsPDF = window.jsPDF;
var download = document.querySelector('.download');
download.addEventListener('click', () => {
    var element = document.querySelector(".show");
    console.log(element);
    // Use html2canvas to convert the HTML element to an image
    html2canvas(element).then(function (canvas) {
        var imgData = canvas.toDataURL("image/jpeg");

        // Create a new jsPDF instance
        var doc = new jsPDF();

        // Add the image to the PDF
        doc.addImage(imgData, "JPG", 10, 10, 190, 270);

        //for auto printing when it is download 
        // doc.autoPrint({variant: 'non-conform'});

        // Save the PDF
        doc.save("output.pdf");
    });
})


var printout = document.querySelector('.printout');
printout.addEventListener('click', () => {
    var element = document.querySelector(".show");
    printout(element);
})


var print = document.querySelector('.print');
print.addEventListener('click', () => {
    var element = document.querySelector(".show");
    var footer=document.querySelector('.footer');
    // printjs(element, 'html');
    let opt={
        margin:0,
        filename: 'myResume.pdf',
        image: {type:'jpeg',quality:0.98},
        html2canvas:{scale:4},
        jsPDF: {format: 'a4',orientation: 'portrait'}
    }
    console.log(element);
    html2pdf(footer,opt);
})