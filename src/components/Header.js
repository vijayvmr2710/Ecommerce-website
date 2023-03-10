import React from 'react'

export default function Header() {
    return (
        <div className='p-3 bg-secondary'>
            <h3>VMR SITE</h3>
            <div className='row justify-content-center pt-2 pb-1'>
                <div className='col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex'>
                    <button className='btn btn-success me-4'>Home</button>
                    <input className='form-control ' type='search...' placeholder='search' />
                    <button className='btn btn-success ms-3'>Cart</button>
                </div>
            </div>

        </div>
    )
}
