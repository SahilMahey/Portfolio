import React from 'react'
import './Home.css'
import ARemoji from './AREmoji.jpg'
import Resume from './Sahil Mahey Resume.pdf'
const Home = () => {
  return (
    <main id="main-content">
			
			<section class="hero">
				<div class="container">
					<article class="hero-text bounce-in-left">
						<div>
							<p class="subtitle">hi there 👋🏽, i'm</p>
							<h1 className='name'>Sahil Mahey</h1>
						</div>
						<div>
							<p class="intro">
							Presently a Software Developer at Memorial University of Newfoundland, overseeing the retrieval of data from a collection exceeding 25 million chemical molecules on retrievium website. Skilled in software development and data science through academic endeavors and diverse internship experiences.
							</p>
							<div class="hero-btn-container">
								<a href={Resume} download="Sahil Mahey Resume.pdf" className="btn hire-btn">
									Resume
								</a>
							</div>
						</div>
					</article>
					<img
						src={ARemoji}
						alt="ARemoji"
						class="fade-in code" />
            
				</div>
			</section>
      </main>

  )
}

export default Home