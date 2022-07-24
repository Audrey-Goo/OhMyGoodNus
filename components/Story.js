/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Stories from 'react-insta-stories'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import 'bootstrap/dist/css/bootstrap.min.css';



function Story({ img, username }) {
  // <link
  // rel="stylesheet"
  // href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  // integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  // crossorigin="anonymous" />

  const [showModal, setShowModal] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const story = [
    "https://www.nme.com/wp-content/uploads/2022/05/iu-broker-cannes-2022-Getty-Images-300522-696x442.jpg"
  ]
  
  return (
    <div>
      
      <button onClick={() => setShowModal(true)} >
        <img className='h-14 w-14 rounded-full p-[1.5px]
          border-red-500 border-2 object-contain cursor-pointer
          hover:scale-110 transition transform duration-200 ease-out' 
          src={img} 
          alt="" 
          />
        <p className="text-xs w-14 truncate text-center">{username}</p>
      </button>


      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                
                {/*body*/}
                <div className="relative p-0 flex-auto">
                  <section>
                    <Stories stories={story} />
                  </section>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      
    </div>
  );
}

export default Story