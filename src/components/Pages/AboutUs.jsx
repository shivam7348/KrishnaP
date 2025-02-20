import React from 'react'
import Banner from './../../Banner/Banner';

const AboutUs = () => {
  const breadcrumb = [
    {name: 'Home', link: '/', active: true}
]
  return (
    <div>
       <Banner
        title="About"
        image="https://www.saikrishnapoultry.co.in/img/slider.png"
        breadcrumbItems={breadcrumb}
      />
     
    </div>
  )
}

export default AboutUs