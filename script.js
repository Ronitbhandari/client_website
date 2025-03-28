document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("content");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  // Toggle mobile menu
  hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("active");
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", function (e) {
          e.preventDefault();
          window.location.hash = this.getAttribute("href");
          if (navLinks.classList.contains("active")) {
              navLinks.classList.remove("active");
          }
      });
  });

  // Load content based on hash
  function loadContent() {
      const hash = window.location.hash || "#home";

      switch (hash) {
          case "#home":
              content.innerHTML = `
                <h5 style="color: #2c3e50; font-size: 2rem; text-align: center; margin-top: 50px; margin-bottom: 50px;">
                  Welcome to Homefab Construction
                </h5>
                <img src="images/home.jpg" alt="My Photo" class="home-photo">
                <div class="about-text-container">
                  <h6>Crafting Excellence in Every Project</h6>
                  <p>At Homefab, we pride ourselves on delivering unparalleled craftsmanship and dedicated service in every project we undertake. With years of experience in the industry, our team of skilled carpenters and construction professionals brings a wealth of knowledge and expertise to each job site, ensuring that your vision becomes a reality with precision and care.</p>
                </div>
                <div class="why-choose-us">
                  <h2>Why Choose Us?</h2>
                  <p class="subtitle">When you choose Homefab, you are choosing a partner dedicated to delivering exceptional results. Here are just a few reasons why our clients trust us with their construction projects:</p>
                  <div class="reasons-container">
                    <div class="reason-card">
                      <div class="icon">📅</div>
                      <h3>Experience</h3>
                      <p>With years of industry experience, our team has the knowledge and skills to handle projects of all sizes and complexities.</p>
                    </div>
                    <div class="reason-card">
                      <div class="icon">⭐</div>
                      <h3>Quality</h3>
                      <p>We use only the highest quality materials and craftsmanship to ensure that every project meets our rigorous standards of excellence.</p>
                    </div>
                    <div class="reason-card">
                      <div class="icon">💬</div>
                      <h3>Customer Service</h3>
                      <p>Our clients are our top priority, and we strive to exceed their expectations with every project. We are committed to open communication and transparency throughout the construction process.</p>
                    </div>
                    <div class="reason-card">
                      <div class="icon">🚀</div>
                      <h3>Innovation</h3>
                      <p>We stay up-to-date with the latest construction techniques and technologies to deliver innovative solutions that meet the evolving needs of our clients.</p>
                    </div>
                    <div class="reason-card">
                      <div class="icon">⏱️</div>
                      <h3>Reliability</h3>
                      <p>We understand the importance of deadlines and budgets, and we work diligently to ensure that every project is completed on time and within budget.</p>
                    </div>
                  </div>
                </div>
              `;
              break;
          case "#about":
              content.innerHTML = `
                <div class="image-container">
                  <img src="images/about.jpg" alt="About Us Image" class="about-image">
                </div>
                <div class="about-text-container">
                  <h1>About Us</h1>
                  <p>Founded on the principles of quality workmanship and customer satisfaction, Homefab has established itself as a leader in the construction industry. Over the years, we have completed numerous residential and commercial projects, ranging from custom home builds to large-scale commercial renovations. Our commitment to excellence has earned us a reputation for reliability, integrity, and superior craftsmanship.</p>
                </div>
              `;
              break;
          case "#services":
              content.innerHTML = `
                <div class="services-intro">
                <h1>Our Services</h1>
                  <p>We offer a comprehensive range of carpentry and construction services tailored to meet the unique needs of our clients. Our services include:</p>
                  <ul>
                    <li>Lock Up</li>
                    <li>Fix</li>
                    <li>Frame work</li>
                    <li>Interior work</li>
                    <li>Office Partition</li>
                    <li>Renovations</li>
                  </ul>
                </div>
                <div class="service-section">
                  <div class="service-image">
                    <img src="images/custom-carpentry.jpg" alt="Custom Carpentry" class="service-img">
                  </div>
                  <div class="service-text">
                    <h2>Custom Carpentry</h2>
                    <p>Our team of skilled carpenters specializes in creating custom woodwork that adds character and functionality to your space. From intricate trim work and molding to bespoke cabinetry and furniture, we take pride in our ability to bring your ideas to life with precision and artistry.</p>
                  </div>
                </div>
                <div class="service-section reverse">
                  <div class="service-image">
                    <img src="images/residential-construction.jpg" alt="Residential Construction" class="service-img">
                  </div>
                  <div class="service-text">
                    <h2>Residential Construction</h2>
                    <p>Whether you are building your dream home from the ground up or renovating an existing property, our residential construction services cover every aspect of the project. We work closely with builders/homeowners to ensure that every detail is executed to perfection, resulting in a home that reflects your style and meets your needs.</p>
                  </div>
                </div>
                <div class="service-section">
                  <div class="service-image">
                    <img src="images/commercial-construction.jpg" alt="Commercial Construction" class="service-img">
                  </div>
                  <div class="service-text">
                    <h2>Commercial Construction</h2>
                    <p>We understand the unique challenges of commercial construction projects and have the expertise to handle them with efficiency and professionalism. Our commercial construction services include office build-outs, retail space renovations, and industrial facility upgrades, all designed to create functional and aesthetically pleasing environments for your business.</p>
                  </div>
                </div>
                <div class="service-section reverse">
                  <div class="service-image">
                    <img src="images/renovations.jpg" alt="Renovations and Remodeling" class="service-img">
                  </div>
                  <div class="service-text">
                    <h2>Renovations and Remodeling</h2>
                    <p>Transform your existing space with our expert renovation and remodeling services. Whether you're looking to update your kitchen, bathroom, or entire home, our team will work with you to design and execute a plan that enhances the beauty and functionality of your space.</p>
                  </div>
                </div>
                <div class="service-section">
                  <div class="service-image">
                    <img src="images/outdoor-structures.jpg" alt="Outdoor Structures" class="service-img">
                  </div>
                  <div class="service-text">
                    <h2>Outdoor Structures</h2>
                    <p>Enhance your outdoor living space with custom decks, pergolas, and other outdoor structures crafted by our skilled carpenters. We use high-quality materials and innovative design techniques to create outdoor spaces that are both beautiful and durable, providing you with a perfect setting for relaxation and entertainment.</p>
                  </div>
                </div>
                <div class="service-section reverse">
                  <div class="service-image">
                    <img src="images/project-management.jpg" alt="Project Management" class="service-img">
                  </div>
                  <div class="service-text">
                    <h2>Project Management</h2>
                    <p>Our comprehensive project management services ensure that your construction project runs smoothly from start to finish. We coordinate all aspects of the project, including scheduling, budgeting, and quality control, to ensure that every detail is executed to the highest standards.</p>
                  </div>
                </div>
              `;
              break;
          case "#works":
              content.innerHTML = `
                <h1>Our Works</h1>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src="images/work1.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="images/work2.png" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="images/work3.png" alt="Third slide">
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  </a>
                </div>
              `;
              break;
            case "#contact":
              content.innerHTML = `
                  <h1>Contact Us</h1>
                  <p>Get in touch with us.</p>
                  <!-- WhatsApp Icon -->
                  <ul class="whatsapp-effect">
                      <li>
                          <a href="https://wa.me/yourphonenumber" target="_blank">
                              <i class="fab fa-whatsapp icon"></i>
                          </a>
                      </li>
                  </ul>
              `;
              break;
          default:
              content.innerHTML = "<h1>Page Not Found</h1>";
      }
  }

  loadContent();
  window.addEventListener("hashchange", loadContent);
});