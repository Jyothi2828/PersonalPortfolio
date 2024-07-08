// dynamicProjects.js

const projects = [
    {
        name: "Project 1",
        description: "Description of Project 1",
        link: "#"
    },
    {
        name: "Project 2",
        description: "Description of Project 2",
        link: "#"
    }
    // Add more projects as needed
];

document.addEventListener("DOMContentLoaded", function() {
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectList.appendChild(projectElement);
    });
});
