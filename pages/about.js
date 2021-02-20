import React from 'react'
import Head from 'next/head'
import Link from  'next/link'


const About = () => {
    return (
        <div style={{minHeight: '100vh'}}>
            <Head>
              <title>DFE | About Us</title>
            </Head>
            
            <div style={{ width: '90%', margin: '2rem auto' }}> 
           
            <h1> About Us</h1>
            <div style={{  marginBottom: '3rem' }}>
            <p> We are a leader in education technologies and workplace transformations in Africa. We are Google Cloud Partners who deliver customized technology and innovation solutions to more than 80 companies and institutions.</p>

                <p>Our story with Google spans over five years. We have received numerous appraisals from Google for achieving maximum impact through the use of their Technologies in Africa.</p>

               <p> As a Google Cloud Partner, our service spans several industries, with the main focus being Education. We provide {''} 
                 <Link href='/gws'>
                 <a>Google Workspace </a>
               </Link> 
                technical support, sales, and training. 
                 We are passionate to see a thriving Education system, and therefore we provide unlimited access to Chromebooks to our deserving Education stakeholders. </p>
               
               <Link href='/shop'>
                      <a className='btn btn-primary'> Shop Now</a>
                    </Link>
            </div>
             
                    <div className='row'>
                      <div className='col-md-4 text-center'>
                              <i className="fas fa-female" style={{fontSize: '2rem', color: '#257CFD'}} aria-hidden='true'></i>
                                <h4> (Goo-girls!)</h4>
                                   <p>Dream Factory Enterprise is a 100% women-owned company.</p>
                                </div>
                                <div className='col-md-4 text-center'>
                                <i className="fas fa-users" style={{fontSize: '2rem', color: '#257CFD'}} aria-hidden='true'></i>
                                <h4>(#1BillionLives)</h4>
                                   <p>Dream Factory Enterprise is a social enterprise that exists for a better livelihood through our non-profit venture, Dream Factory Foundation.</p>
                                   <p> We therefore operate with dual purpose; to provide for the self-sustainability of Dream Factory Foundation.  
                                    </p>
                                </div>
                                <div className='col-md-4 text-center'>
                                <i className="fas fa-building" style={{fontSize: '2rem', color: '#257CFD'}} aria-hidden='true'></i>
                                <h4> BBBEE Compliance</h4>
                                   <p>In our promise of always being the best at what we do both professionally and compliance wise,
                                      we take utmost pleasure in letting our clients know that doing business with us works to your advantage with our LEVEL 1 BBBEE COMPLIANCE with a 135% Score.
                                    </p>
                                   
                                </div>
                       </div>
                
            </div>
        </div>
    )
}


export default About