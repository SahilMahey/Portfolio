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
							I am a software developer with experience building scalable web applications, cloud APIs, automated data pipelines and QA workflows.
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