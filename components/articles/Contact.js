import React, {useState, useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebook, faInstagram, faGithub} from '@fortawesome/fontawesome-free-brands';

const experienceData = [
    {
        id: 1,
        name: "UW Research Compliance",
        logo: "/static/images/uw3.png", // Replace with your actual logo path
        role: "Systems & Data Analyst",
        period: "2023 - Present",
        description: "Conduct data analysis in support of Invoicing, AR, and budget teams",
        achievements: [
          "Wrote Python scripts to conduct weekly analyses of team performance datasets, generating updates pushed to a public site",
          "Grew invoicing output by publishing reports based on data from central SQL DB.",
          "Utilized Tableau to highlight trends and improve AR team turnaround.",
          "Automated folder extraction/filewriting, increasing efficiency with Batch scripts"
        ],
        link: "https://companya.com"
    },
    {
      id: 2,
      name: "UW Interfraternity Council",
      logo: "/static/images/ifc3.png", // Replace with your actual logo path
      role: "Director of Public Relations",
      period: "2025 - Present",
      description: 'Represent 2,200+ Greek Men on <a href="https://instagram.com/uwifc" target="_blank">social media</a> and ensure policy compliance',
      achievements: [
        'Redesigned and maintained official <a href="https://uwifc.com" target="_blank">official website</a> to drive recruitment numbers',
        'Won an <a href="https://aflv.org/award-winners#mms" target="_blank">award</a> for best IFC website'
      ],
      link: "https://companya.com"
    },
    {
      id: 3,
      name: '<a href="https://montlakeconsulting.com" target="_blank">Montlake Consulting Group</a>',
      logo: "/static/images/mcg1.png", // Replace with your actual logo path
      role: "Consultant",
      period: "2024 - Present",
      description: "Consultant for clients",
      achievements: [
        "Present data-driven insights on niche markets in engagements"
      ],
      link: "https://companyb.com"
    },
    {
        id: 4,
        name: "Pi Kappa Alpha Fraternity",
        logo: "/static/images/pike1.png", // Replace with your actual logo path
        role: "Head of Public Relations",
        period: "2024 - Present",
        description: 'Represent the fraternity <a href="https://instagram.com/uwpike" target="_blank">online</a>',
        achievements: [
          "Successfully drove campaigns for recruitment and on-campus awareness"
        ],
        link: "https://companyc.com"
    },
    {
      id: 5,
      name: "Husky Taekwondo",
      logo: "/static/images/htkd1.png", // Replace with your actual logo path
      role: "Social Media",
      period: "2024",
      description: "Managed social media accounts totaling 1k+ followers",
      achievements: [
        'Grew <a href="https://instagram.com/uwhuskytkd" target="_blank">Instagram</a> following from 600 to 900+ in 3 months of tenure',
        'Directed, edited and shot a <a href="https://www.instagram.com/p/DAlSOZXg5o_/" target="_blank">recruitment video</a> reaching over 10k accounts and increasing club sign-ups by 93%'
      ],
      link: "https://companyc.com"
    }
  ];

const Contact = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [contentToShow, setContentToShow] = useState(null);

    const animationDuration = 1000;

    useEffect(() => {
        // If we selected an experience
        if (selectedExperience) {
          setContentToShow(selectedExperience);
          setTimeout(() => {
            setIsVisible(true);
          }, 15);
        } 
        // If we're closing an experience
        else if (contentToShow) {
            setIsVisible(false);
            // Wait for animation to complete before clearing content
            const timer = setTimeout(() => {
              setContentToShow(null);
            }, 0);
            return () => clearTimeout(timer);
        }
      }, [selectedExperience]);

    const handleLogoClick = (id) => {
    setSelectedExperience(selectedExperience === id ? null : id);
    };

    return (
        <div className="experiences-container">
        <h1 className="major">Experience 📝</h1>
        <p>You can access my full resume by <a href="mailto:mattcng9@uw.edu">emailing me</a></p>
        <p style={{marginTop: '-35px'}}><i>This is also the best way to get more information on my current positions</i></p>
        
        {/* Company Logos Section */}
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '20px', 
            marginBottom: '20px' 
        }}>
        {experienceData.map((experience) => (
          <div 
            key={experience.id} 
            style={{ 
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              transform: selectedExperience === experience.id ? 'scale(1.2)' : 'scale(1)',
            }}
            onClick={() => handleLogoClick(experience.id)}
            onMouseEnter={(e) => {
              if (selectedExperience !== experience.id) {
                e.currentTarget.style.transform = 'scale(1.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedExperience !== experience.id) {
                e.currentTarget.style.transform = 'scale(1)';
              }
            }}
          >
            <img 
              src={experience.logo} 
              alt={`${experience.name} logo`} 
              style={{ 
                width: '100px', 
                height: '100px', 
                objectFit: 'contain', 
              }}
            />
          </div>
        ))}
      </div>
  
        {/* Experience Details Section */}
        {contentToShow && (
          <div style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.2)', 
            padding: '24px', 
            borderRadius: '8px', 
            marginTop: '10px',
            opacity: isVisible ? 1 : 0,
            overflow: 'hidden',
            maxHeight: isVisible ? '2000px' : '0',
            transitionProperty: 'transform, max-height',
            transitionDuration: `${animationDuration/1000}s, ${animationDuration/1000}s`,
          }}>
            {experienceData.filter(exp => exp.id === selectedExperience).map(experience => (
              <div key={experience.id}>
                <div>
                  {/* <h2 style={{letterSpacing: 'normal'}}>{experience.name}</h2> */}
                  <h2  style={{letterSpacing: 'normal'}} dangerouslySetInnerHTML={{ __html: experience.name }}></h2>
                  <h3 style={{marginTop: '-15px'}}>{experience.role}</h3>
                  <p style={{marginTop: '-15px'}}><i>{experience.period}</i></p>

                  <p dangerouslySetInnerHTML={{ __html: experience.description }}></p>
                  
                  <h4>Key Achievements:</h4>
                  <ul>
                    {experience.achievements.map((achievement, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: achievement }}></li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
        </div>
    );
}

export default Contact;