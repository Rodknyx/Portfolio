document.addEventListener('DOMContentLoaded', () => {
 
    const personalInfoCard = document.getElementById('personal-info-card');
    const skillsCard = document.getElementById('skills-card');
    const experienceCard = document.getElementById('experience-card');
    const projectsCard = document.getElementById('projects-card');

    
    const personalInfoDetail = document.getElementById('personal-info-detail');
    const skillsDetail = document.getElementById('skills-detail');
    const experienceDetail = document.getElementById('experience-detail');
    const projectsDetail = document.getElementById('projects-detail');

    const overviewCardsSection = document.querySelector('.overview-cards');
    const backButtons = document.querySelectorAll('.back-button');

    function showDetailSection(sectionToShow) {
        overviewCardsSection.classList.add('hidden');
        personalInfoDetail.classList.add('hidden');
        skillsDetail.classList.add('hidden');
        experienceDetail.classList.add('hidden');
        projectsDetail.classList.add('hidden');

        sectionToShow.classList.remove('hidden'); 
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }

    function showOverview() {
        personalInfoDetail.classList.add('hidden');
        skillsDetail.classList.add('hidden');
        experienceDetail.classList.add('hidden');
        projectsDetail.classList.add('hidden');

        overviewCardsSection.classList.remove('hidden'); 
    }

   
    personalInfoCard.addEventListener('click', () => {
        showDetailSection(personalInfoDetail);
    });

    skillsCard.addEventListener('click', () => {
        showDetailSection(skillsDetail);
    });

    experienceCard.addEventListener('click', () => {
        showDetailSection(experienceDetail);
    });

    projectsCard.addEventListener('click', () => {
        showDetailSection(projectsDetail);
    });

    backButtons.forEach(button => {
        button.addEventListener('click', showOverview);
    });

 
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    const closeButton = document.querySelector(".close-button");

 
    const projectImages = document.querySelectorAll(".project-image");

    projectImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "flex"; 
            modalImg.src = this.src; 
            modalImg.alt = this.alt; 
        });
    });

  
    closeButton.addEventListener('click', function() {
        modal.style.display = "none";
    });

 
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

   
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && modal.style.display === "flex") {
            modal.style.display = "none";
        }
    });
});