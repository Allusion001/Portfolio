import React from 'react'

function Projects() {
  return (
    <div className='projects my-5' id="projects">
        <h1 className='text-center py-5'>Projects</h1>
        <div className='container '>
            <div className='row '>
                <div className='proj col-md-4 p-5 shadow m-2'>                   
                    <h5>DUKAAN , The Home of Everything</h5>
                    <p className='small py-3'>An e-commerce web application built with a React.js front end and Django back end. The platform features a fully functional shopping cart, integrated with PayPal for secure payment processing. It implements JWT-based authentication, allowing only registered and logged-in users to access the checkout process, ensuring a secure and personalized shopping experience.
                    </p>
                    <button type="button" className='btn btn-outline-light border btn-sm '><a className=' btn-sm text-decoration-none text-black' target="_blank" href="https://github.com/Allusion001/Dukaan/tree/master"> Github</a></button>
                    <button type="button" className='btn btn-outline-light border btn-sm ' ><a className=' btn-sm text-decoration-none text-black' target="_blank" href="https://dukaan-app-frontend.onrender.com/"> Live</a></button>
                </div>
                <div className='proj col-md-4 p-4 shadow m-2'>                   
                    <h5>WeatherNow — Real-Time Weather Forecast App</h5>
                    <p className='small py-3'>A responsive weather application developed using the React.js front end and Django back end. The app integrates the OpenWeather API to fetch real-time weather data, providing users with a 3-day forecast for any city worldwide. It features a city search functionality that allows users to retrieve current weather conditions and detailed forecasts, displaying information such as temperature, humidity, wind speed, and weather descriptions. The frontend is built with dynamic, reusable React components for forecast cards, search inputs, and weather displays, while the Django backend securely manages API calls and routes, handling CORS configurations for safe data transfer. The application boasts a clean, responsive UI, ensuring a consistent and user-friendly experience across all devices.
                    </p>
                    <button type="button" className='btn btn-outline-light border btn-sm '><a className=' btn-sm text-decoration-none text-black' target="_blank" href="https://github.com/Allusion001/WeatherApp"> Github</a></button>
                    <button type="button" className='btn btn-outline-light border btn-sm ' ><a className=' btn-sm text-decoration-none text-black' target="_blank" href="https://weatherapp-z5yt.onrender.com/"> Live</a></button>
                </div>
                <div className='proj col-md-3 p-4 shadow m-2'>                   
                    <h5>NoteMaster — Efficient Multi-Screen Notes Application</h5>
                    <p className='small py-3'>NoteMaster is a versatile notes application built with a React.js front end and Django back end, designed to help users create, organize, and manage notes seamlessly. The app features multiple distinct screens for viewing all notes, creating new notes, and editing or deleting existing ones, providing a smooth and intuitive user experience. It leverages React’s dynamic components for real-time updates and state management, while the Django backend handles secure user authentication, note storage, and API routing. The application ensures data persistence, quick retrieval, and a clean, responsive interface that works flawlessly across devices, making note-taking both productive and enjoyable.
                    </p>
                    <button type="button" className='btn btn-outline-light border btn-sm '><a className=' btn-sm text-decoration-none text-black' target="_blank" href="https://github.com/Allusion001/djangoReactChatApp"> Github</a></button>
                    <button type="button" className='btn btn-outline-light border btn-sm ' ><a className=' btn-sm text-decoration-none text-black' target="_blank" href="https://djangoreactchatapp.onrender.com/#/"> Live</a></button>
                </div>
                <div className='proj col-md-4 p-4 shadow m-2'>                   
                    <h5>ChatConnect — Real-Time Multi-Room Chat Application</h5>
                    <p className='small py-3'>ChatConnect is a dynamic real-time chat application developed with a React.js front end and a Django back end, utilizing Socket.IO for seamless bi-directional communication. The app supports multiple chat rooms, allowing users to join different channels and participate in live conversations instantly. React handles the interactive UI with real-time message updates, while Django manages user authentication, chat room creation, and message storage through RESTful APIs. Socket.IO enables low-latency event-driven messaging, ensuring messages are delivered instantly across all connected clients. The application features a responsive and intuitive design, providing an engaging and collaborative communication platform across devices.
                    </p>
                    <button type="button" className='btn btn-outline-light border btn-sm '><a className=' btn-sm text-decoration-none text-black' target="_blank" href="https://github.com/Allusion001/djnango_chat/tree/main"> Github</a></button>
                    <button type="button" className='btn btn-outline-light border btn-sm ' ><a className=' btn-sm text-decoration-none text-black' target="_blank" href="https://djnango-chat.onrender.com/"> Live</a></button>
                </div>

                <div className='proj col-md-4 p-4 shadow m-2'>                   
                    <h5>PicVault — Cloud-Based Image Gallery Management Application</h5>
                    <p className='small py-3'>PicVault is a user-friendly image gallery application developed with a React.js front end and a Django back end, designed for seamless personal image management. The app enables users to add, view, and delete images within a clean, organized gallery interface, with instant updates and smooth, responsive interactions. Uploaded images are securely stored in AWS S3, ensuring reliable cloud storage, fast content delivery, and scalable storage management. React handles dynamic rendering of image cards and gallery state management, while Django manages API routing, image uploads, and deletions, integrating with S3 for efficient cloud-based operations. The result is a fast, secure, and visually appealing image management platform that performs consistently across all devices.
                    </p>
                    <button type="button" className='btn btn-outline-light border btn-sm '><a className=' btn-sm text-decoration-none text-black' target="_blank" href="https://github.com/Allusion001/galleryApp/tree/main"> Github</a></button>
                    <button type="button" className='btn btn-outline-light border btn-sm ' ><a className=' btn-sm text-decoration-none text-black' target="_blank" href="https://galleryapp-1-67lh.onrender.com"> Live</a></button>
                </div>

                <div className='proj col-md-3 p-4 shadow m-2'>                   
                    <h5>Portfolio — Personal Developer Showcase Web App</h5>
                    <p className='small py-3'>Portfolio is a modern and responsive React.js-based personal portfolio application designed to highlight professional projects, technical skills, and work experience in a clean, visually engaging layout. Developed entirely with React, the application features an interactive hero section, dynamic navigation, project showcases, a skills overview, and a contact form for direct outreach. It utilizes modular React components for efficient UI updates and code management, ensuring a seamless, mobile-friendly experience across all devices. Portfolio serves as a personal digital space to present development work, technical expertise, and career achievements to potential employers, collaborators, and clients.                    </p>
                    <button type="button" className='btn btn-outline-light border btn-sm '><a className=' btn-sm text-decoration-none text-black' target="_blank" href="https://github.com/Allusion001/Portfolio/tree/master"> Github</a></button>
                    <button type="button" className='btn btn-outline-light border btn-sm ' ><a className=' btn-sm text-decoration-none text-black' target="_blank" href="https://portfolioak001.netlify.app/"> Live</a></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects