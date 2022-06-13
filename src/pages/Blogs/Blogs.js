import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='mt-4 w-50 mx-auto'>
           <Accordion defaultActiveKey="0">
                 <Accordion.Item eventKey="0">
                   <Accordion.Header>Difference between authorization and authentication?</Accordion.Header>
                   <Accordion.Body>
                   authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.In the digital world, authentication and authorization accomplish these same goals. Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users.
                   </Accordion.Body>
                 </Accordion.Item>
                 <Accordion.Item eventKey="1">
                   <Accordion.Header>why are you using firebase? what other options do you have to implement authentication?</Accordion.Header>
                   <Accordion.Body>
                   Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. Here's some firebase alternative authentication tools: Auth0. A set of unified APIs and tools that instantly enables Single Sign On and user management to all your applications. Okta, JSON web token.
                   </Accordion.Body>
                 </Accordion.Item>
                 <Accordion.Item eventKey="2">
                   <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
                   <Accordion.Body>
                   The core features of Firebase include NoSQL databases, real-time queries, scalable hosting, data storage, file storage, REST APIs, authentication, machine learning, and analytics. Realtime data. Ready-made api. Built in security at the data node level. File storage backed by Google Cloud Storage. Static file hosting.Treat data as streams to build highly scalable applications.
                   </Accordion.Body>
                 </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;