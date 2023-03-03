import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';




function handleMailto(){
  const recipient = 'mailto:careers@mytdevcorp.com';
  const subject = 'Hello';
  const body = 'How are you doing today?';
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}


function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to=''>
{/* 
                <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=recipient@example.com&su=Email%20Subject&body=Email%20Body">
  <button>{buttonLabel}</button>
</a> */}

                <Button buttonSize='btn--wide' onClick={() => window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&to=careers@mytdevcorp.com&su=Email%20Subject&body=Email%20Body", "_blank")}>
                  {buttonLabel}
                </Button>

                </Link>
              </div>
            </div>

            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape"></div>
      </div>
    </>
  );
}

export default HeroSection;