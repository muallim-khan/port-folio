    // Toggle Mobile Menu
    const menuIcon = document.querySelector('.menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.toggle('show-menu');
    });  
  
  
  // Function to animate progress bars
   function animateProgressBars() {
   const progressBars = document.querySelectorAll('.progress');
   progressBars.forEach(bar => {
   const width = bar.getAttribute('data-width');
   bar.style.width = `${width}%`;
   });
   }
   


    // Function to animate progress bars
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = `${width}%`;
        });
    }

    // Trigger animation when the skills section comes into view
    const skillsSection = document.getElementById('skills');
    const observe = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observe.unobserve(skillsSection); // Stop observing after animation
            }
        });
    }, { threshold: 0.1 }); // Lower threshold for mobile devices

    observe.observe(skillsSection);
        
    
  
    // Example projects data
    const projects = [
    {
    title: "Personal Blog",
    description: "A full-stack blog application built with Node.js, Express, MongoDB, and EJS.",
    github: "https://github.com/your-username/personal-blog",
    demo: "https://your-website.com/personal-blog",
    image: "https://via.placeholder.com/350x200?text=Blog+App",
    category: "web"
    },
    {
    title: "AI Chatbot",
    description: "A chatbot built using AI techniques with Python and TensorFlow.",
    github: "https://github.com/your-username/ai-chatbot",
    demo: "https://your-website.com/ai-chatbot",
    image: "https://via.placeholder.com/350x200?text=AI+Chatbot",
    category: "ai"
    },
    {
    title: "Data Visualization Tool",
    description: "A tool that visualizes complex data sets with interactive charts using D3.js.",
    github: "https://github.com/your-username/data-visualization-tool",
    demo: "https://your-website.com/data-visualization-tool",
    image: "https://via.placeholder.com/350x200?text=Data+Tool",
    category: "data"
    }
    ];
    
    // Load projects dynamically into the container
    function loadProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = ''; // Clear any existing projects
    
    projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <div class="card-body">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    </div>
    <div class="card-footer">
    <a href="${project.github}" target="_blank">GitHub</a>
    <a href="${project.demo}" target="_blank">Live Demo</a>
    </div>
    `;
    container.appendChild(projectCard);
    });
    }
    
    // Filter projects by category
    function filterProjects(category) {
    const filteredProjects = category === 'all' ? projects : projects.filter(project => project.category === category);
    projects.length = 0;  // Clear current projects
    projects.push(...filteredProjects);  // Add filtered projects
    loadProjects();  // Reload projects
    }
    
    // Initialize by loading all projects
    loadProjects();
  
  