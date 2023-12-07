import React from 'react'

const TemplateHero = ({
    logo,
    pattern,
    rectangle,
    light,
    dashboard1,
    dashboard2,
    liveHref
}) => {
    return (
        <div className='template-hero'>
            {!!pattern && <img className='template-hero-pattern' src={pattern} alt='Template Hero Pattern' />}
            {!!rectangle && <img className='template-hero-rectangle1' src={rectangle} alt='Template Hero Rectangle' />}
            {!!light && <img className='template-hero-light' src={light} alt='Template Hero Light' />}
            <div className='template-hero-card'>
                <img className='template-hero-card-logo' src={logo} alt='Template Hero Logo' />
                <p>Angular CLI template with mode options, menu layouts, sample apps, pre-made pages, and 24 PrimeNG themes.</p>
                <div className='template-hero-card-buttons'>
                    <a href={liveHref} target='_blank' className='template-hero-card-buttons-btn1'>Live Demo</a>
                    <a href='https://www.primefaces.org/store/' target='_blank' className='template-hero-card-buttons-btn2'>Buy Now</a>
                </div>
                <div className='template-hero-card-links'>
                    <a href='#'>
                        <i className="pi pi-github" style={{ fontSize: '1rem' }}></i>
                        <span>Get Support</span>
                    </a>
                    <a href='#'>
                        <i className="pi pi-book" style={{ fontSize: '1rem' }}></i>
                        <span>Read Doc</span>
                    </a>
                </div>
            </div>
            {!!dashboard1 && <img className='template-hero-dashboard1' src={dashboard1} alt='Template Dashboard Image 1' />}
            {!!dashboard2 && <img className='template-hero-dashboard2' src={dashboard2} alt='Template Dashboard Image 2' />}
        </div>
    )
}

export default TemplateHero