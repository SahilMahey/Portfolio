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
							I am a software developer with a Bachelor’s in Computer Science (Hons.) from Memorial University of Newfoundland, specializing in full-stack development, cloud technologies, and data-driven solutions. My academic foundation includes Data Science, Data Engineering, Data Structures & Algorithms, and Software Engineering, equipping me to design efficient and scalable software solutions.
							</p>
							<p>
								Professionally, I have built and maintained web applications, cloud APIs, and automated data pipelines. At SiftMed, I led QA and automation workflows using TypeScript, AWS, and MySQL, collaborating with AI teams to optimize data processes. As a Software Developer at Memorial University, I implemented full-stack features for large chemical compound datasets, leveraging Remix, TypeScript, Chakra UI, PostgreSQL, and Java.
							</p>
							<p>
								My project portfolio demonstrates experience in AI and data science, including MRI breast cancer image classification models and data analytics dashboards. I also have experience integrating C++ modules in forensic software and developing serverless CRUD applications on AWS, showcasing my ability to deliver reliable, high-performance solutions. I am passionate about applying my skills to real-world problems and contributing to innovative, impactful software projects.
							</p>
						</div>
					</article>
				</div>
			</section>
  )
}

export default About
