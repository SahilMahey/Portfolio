import React from 'react'
import './About.css'
import Image from './Image.png'
const About = () => {
  return (
    <section className="about-me" id="about">
				<div className="container" data-aos="fade-up">
					<img src={Image} alt="Williams Samuel" />
					<article>
						<p className="subtitle">Who is Sahil Mahey?</p>
						<h2 className="title">A Bit About Me</h2>
						<div className="about">
							<p>
							I am currently pursuing a Bachelor's in Computer Science (Hons.) with a focus on honing skills in programming and software development. My educational journey at Memorial University has equipped me with a comprehensive understanding of Data Structures, Algorithms, Software Engineering, and more, maintaining a stellar GPA of 3.7/4.0.
							</p>
							<p>
							My project portfolio showcases a diverse range of endeavors, from mastering Data Structures and Algorithms on platforms like LeetCode to leveraging Data Science tools like Pandas, Matplotlib, and Scikit-learn for insightful visualization and predictive modeling. I've delved into web development using React.js, honing front-end skills with HTML5, CSS3, and JavaScript, along with proficiency in various databases like MongoDB, SQL, and Postman API for effective data management.
							</p>
							<p>
							In professional roles, I've contributed significantly as a Software Developer, implementing efficient search functionalities and enhancing user experiences. My tenure as a Software Developer Intern involved integrating C++ code, debugging projects, and collaborating on software enhancement initiatives. Additionally, I've actively participated in business expansion efforts, demonstrating a well-rounded understanding of both technical and business aspects.
							</p>
							<p>
							My commitment to excellence, paired with a drive for continuous learning, propels me to explore innovative solutions and contribute meaningfully to challenging projects. I'm enthusiastic about leveraging my skills and knowledge to tackle real-world problems and contribute positively to future endeavors.
							</p>
						</div>
					</article>
				</div>
			</section>
  )
}

export default About