import React from 'react';

const About = () => {
    return (
        <div className='d-flex container mt-4'>
            <div style={{backgroundColor:'#fcfaed', height:'500px'}} className='col-md-4 mt-4 border-4 rounded me-4 '>
              <div className='text-center'>
              <h1 className='mt-4 pe-4'>Hi I'm,</h1>
                <h1 style={{marginLeft:'70px'}} className='me-4 text-warning'>Jubayer</h1>
             </div> 
            </div>
            <div style={{backgroundColor:'#fcedfc', height:'500px'}} className='col-md-8 border-4 rounded mt-4 p-4 ms-4'>
                <h1 className='text-center'>My Goal</h1>
                <p className='text-center'>I want to be a web developer. To achieve my goal I'm spending up to 8 hours daily. Right now I'm a learner. I've already learned html, css, javascript, js es6, basic react, react firebase authentication. After learning more basic, I will learn  the advance of note then I will try to get a job or an internship and boost my skill as well.</p>
            </div>
        </div>
    );
};

export default About;