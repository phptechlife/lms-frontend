import React from 'react'
import Header from './Header'
import Footer from './Footer'
import UserSidebar from './UserSidebar'
import CourseEdit from './CourseEdit'
import { Link } from 'react-router-dom'

const MyCourses = () => {
  return (
    <>
        <Header/>
            <section className='section-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mt-5 mb-3'>
                            <div className='d-flex justify-content-between'>
                                <h2 className='h4 mb-0 pb-0'>My Courses</h2>
                                <Link to="/account/my-courses/create" className='btn btn-primary'>Create</Link>
                            </div>
                        </div>
                        <div className='col-lg-3 account-sidebar'>
                            <UserSidebar/>
                        </div>
                        <div className='col-lg-9'>
                            <div className='row gy-4'>
                                <CourseEdit/>                     
                                <CourseEdit/>                     
                                <CourseEdit/>                     
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <Footer/>
    </>
  )
}

export default MyCourses
