import React from 'react'
import './Contact.css'
const Contact = () => {

    const copyEmailToClipboard = (email) => {
    navigator.clipboard.writeText(email)
    .then(() => {
      console.log('Email copied to clipboard:', email);
      
    })
    .catch((err) => {
      console.error('Failed to copy:', err);
    
    });
};

const handleGetInTouchClick = (email) => {
  copyEmailToClipboard(email);
};
  return (
    <section className="contact" data-aos="fade-up">
				<div className="container">
					<p className="subtitle">Have a project? or just looking to hire?</p>
					<h2 className="title">Let's Work Together</h2>
					<p className="info">
						Feel free to reach out if you're looking to hire, just want to
						connect or see if we can build something amazing together.
					</p>

					<div className='mail-link-box'>
						<a href="mailto:smahey@mun.ca" onClick={() => handleGetInTouchClick('smahey@mun.ca')} className="mail-link hover-effect"
							>Get in touch →</a
						>
					</div>
				</div>
			</section>
		
  )
}

export default Contact