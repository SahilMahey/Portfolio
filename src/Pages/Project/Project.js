import React from 'react'
import './Project.css'
import DSA from './DSA.jpg'
import Data_Science from './Data Science.webp'
import Fmentor from './Frontend Mentor.png'
import Frontend from './Frontend.png'
import Retrievium from './Retrievium.png'
import React_image from './React.png'

const Project = () => {
  return (
    <section className="projects-section" id="projects">
				<div className="container">
					<article data-aos="fade-up">
						<p className="subtitle">My projects</p>
						<h2 className="title">Some Things I Built</h2>
					</article>
					<section className="projects">
	  					<article className="project">
							<a
								href="https://github.com/SahilMahey/Breast-Cancer-MRI-ML-Project-"
								target="_blank"
								rel="noreferrer"
								className="project-img"
								><img
									src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftowardsdatascience.com%2Fintroduction-to-machine-learning-for-beginners-eed6024fdb08&psig=AOvVaw3VDNVJZquQTDqFXK-qpCwd&ust=1726931014986000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCp9sDl0YgDFQAAAAAdAAAAABAE"
									alt="ML"
									title="Breast-Cancer-MRI-ML-Project"
							/></a>
							<div>
								<h3>01</h3>
								<h2>Breast Cancer MRI Machine Learning Project</h2>
								<p className="description">
                This machine learning project (currently in progress) focused on classifying breast cancer in MRI images using 
		CNN and Vision Transformer models. The CNN architecture achieved 76% accuracy on the independent MAMA-MIA validation dataset. It features comprehensive data preprocessing, augmentation techniques, and the use of real-world datasets 
		such as the Duke Breast Cancer MRI and MAMA-MIA for model training and validation. The Future work includes expanding this project to tumor segmentation using UNet++.
								</p>
								<ul className="tech-stack">
									<li>PyTorch</li>
									<li>TensorFlow</li>
									<li>Transformers</li>
									<li>CNN</li>
									<li>Pandas</li>
									<li>Numpy</li>
									<li>Matplotlib</li>
									<li>Seaborn</li>
                  <li>LeetCode</li>
								</ul>
								<ul className="project-links">
									<li>
										<a
											href="https://github.com/SahilMahey/Breast-Cancer-MRI-ML-Project-"
											target="_blank"
											rel="noreferrer"
											className="hover-effect"
											>Github →</a
										>
									</li>
								</ul>
							</div>
						</article>

					
						<article className="project">
							<a
								href="https://github.com/SahilMahey/LeetCode"
								target="_blank"
								rel="noreferrer"
								className="project-img"
								><img
									src={DSA}
									alt="DSA"
									title="Data Structures and Algorithms (C++)"
							/></a>
							<div>
								<h3>01</h3>
								<h2>Data Structures and Algorithms</h2>
								<p className="description">
                This GitHub repository features solved LeetCode coding problems in C++.
								</p>
								<ul className="tech-stack">
									<li>C++</li>
									<li>Data structures and Algorithms</li>
                  <li>LeetCode</li>
								</ul>
								<ul className="project-links">
									<li>
										<a
											href="https://github.com/SahilMahey/LeetCode"
											target="_blank"
											rel="noreferrer"
											className="hover-effect"
											>Github →</a
										>
									</li>
								</ul>
							</div>
						</article>

						
						<article className="project">
							<a
								href="https://retrievium.ca/"
								target="_blank"
								rel="noreferrer"
								className="project-img"
								><img
									src={Retrievium}
									alt="Retrievium"
									title="Retrievium"
							/></a>
							<div>
								<h3>02</h3>
								<h2>Retrievium</h2>
								<p className="description">
                Under the supervision of my professor, I am developing a website for exploring chemistry compounds, using technologies like Remix, TypeScript.js, PostgreSQL, Python, and Docker
								</p>
								<ul className="tech-stack">
                <li>Chakra UI</li>
                <li>Python</li>
                <li>Remix</li>
                <li>TypeScript</li>
                <li>Docker</li>
                <li>PostgreSQL</li>
								</ul>
								<ul className="project-links">
									<li>
										<a
											href="https://retrievium.ca/"
											target="_blank"
											rel="noreferrer"
											className="hover-effect"
											>Live Site →</a
										>
									</li>
									
								</ul>
							</div>
						</article>

						
						<article className="project">
							<a
								href="https://github.com/SahilMahey/Data-Science-Academic-Project"
								target="_blank"
								rel="noreferrer"
								className="project-img"
								><img
									src={Data_Science}
									alt="Data-Science-Academic-Projects"
									title="Data-Science-Academic-Projects"
							/></a>
							<div>
								<h3>03</h3>
								<h2>Data-Science-Academic-Projects</h2>
								<p className="description">
                This repository currently contain two academic projects: one visualizes Canadian air safety data over 25 years, while the other delves into building a Logistic Regression model using the Wine Dataset to study the impact of varied data preparation techniques on predictive performance.
								</p>
								<ul className="tech-stack">
                <li>Pandas</li>
                <li>Scikit-Learn</li>
                <li>Matplotlib</li>
                <li>GeoPandas</li>
                <li>Seaborn</li>
                <li>Python</li>
								</ul>
								<ul className="project-links">
								
									<li>
										<a
											href="https://github.com/SahilMahey/Data-Science-Academic-Project"
											target="_blank"
											rel="noreferrer"
											className="hover-effect"
											>Github →</a
										>
									</li>
								</ul>
							</div>
						</article>

					
						<article className="project">
							<a
								href="https://www.frontendmentor.io/profile/SahilMahey"
								target="_blank"
								rel="noreferrer"
								className="project-img"
								><img
									src={Fmentor}
									alt="Frontend Mentor Challanges"
									title="Frontend Mentor Challanges"
							/></a>
							<div>
								<h3>04</h3>
								<h2>Frontend Mentor Challanges</h2>
								<p className="description">
                This collection features my solutions to various Frontend Mentor challenges, each providing a real-life workflow experience. From designs, assets, and style requirements, I have honed my skills in building responsive and visually appealing websites.
								</p>
								<ul className="tech-stack">
                <li>React.js</li>
                <li>Bootstrap</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
									
								</ul>
								<ul className="project-links">
									<li>
										<a
											href="https://www.frontendmentor.io/profile/SahilMahey"
											target="_blank"
											rel="noreferrer"
											className="hover-effect">
											Live Site →
										</a>
									</li>
								</ul>
							</div>
						</article>

						
						<article className="project">
							<a
								href="https://github.com/SahilMahey/React_Projects"
								target="_blank"
								rel="noreferrer"
								className="project-img"
								><img
									src={React_image}
									alt="React Projects"
									title="React Projects"
							/></a>
							<div>
								<h3>05</h3>
								<h2>React Projects</h2>
								<p className="description">
                This GitHub repository features multiple React projects with their live website links for easy access and exploration.
								</p>
								<ul className="tech-stack">
								<li>React.js</li>
								</ul>
								<ul className="project-links">
									<li>
										<a
											href="https://github.com/SahilMahey/React_Projects"
											target="_blank"
											rel="noreferrer"
											className="hover-effect"
											>Github →</a
										>
									</li>
								</ul>
							</div>
						</article>

            <article className="project">
							<a
								href="https://github.com/SahilMahey/React_Projects"
								target="_blank"
								rel="noreferrer"
								className="project-img"
								><img
									src={Frontend}
									alt="Front-end Projects"
									title="Front-end Projects"
							/></a>
							<div>
								<h3>06</h3>
								<h2 className="hover-effect">Front-end Projects</h2>
								<p className="description">
                This GitHub repository features multiple front-end projects with their live website links for convenient exploration.
								</p>
								<ul className="tech-stack">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
								</ul>
								<ul className="project-links">
									<li>
										<a
											href="https://github.com/SahilMahey/Front-end-practice"
											target="_blank"
											rel="noreferrer"
											className="hover-effect"
											>Github →</a
										>
									</li>
								</ul>
							</div>
						</article>

		</section>
    </div>
    </section>
  )
}

export default Project
