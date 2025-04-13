import React from 'react'
import Header from './Header'
import Footer from './Footer'

import CourseEnrolled from './CourseEnrolled';
import UserSidebar from './UserSidebar';
const MyLearning = () => {
  return (
    <>
        <Header/>
            <section className='section-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='d-flex justify-content-between  mt-5 mb-3'>
                            <h2 className='h4 mb-0 pb-0'>My Learning</h2>
                            {/* <a href="#" className='btn btn-primary'>Create</a> */}
                        </div>
                        <div className='col-lg-3 account-sidebar'>
                           <UserSidebar/>
                        </div>
                        <div className='col-lg-9'>
                            <div className='row gy-4'>
                                <CourseEnrolled/>
                                <CourseEnrolled/>
                                <CourseEnrolled/>
                                <CourseEnrolled/>
                                <CourseEnrolled/>                                
                                <CourseEnrolled/>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <Footer/>
    </>
  )
}

export default MyLearning
