import React from 'react'
import "../Styling/SwipeButton.css";
import Button from 'react-bootstrap/Button';


function SwipeButton() {


    
  return (
    <div className='swipeButtons'>

        <Button className="swipeButtons_left" variant="light">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ec5e6f" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
        </svg>
        </Button>


        <Button className="swipeButtons_right" variant="light">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#915dd1" class="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
        </Button>
        
    </div>
  )
}

export default SwipeButton