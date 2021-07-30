import React from 'react';

const BookmarkFilled = ({ buttonClick }) => {
  return (
    // credit: https://icons8.com/icon/83134/bookmark
    <button
      className='bookmark-btn'
      aria-label='Article currently saved to Reading List; click to remove from your list.'
      onClick={buttonClick}
    >
      <svg
        fill='#C9302C'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='36px'
        height='36px'
      >
        <path d='M20,22l-8-3l-8,3V4c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V22z' />
        <path d='M18,2H6C4.9,2,4.01,2.9,4.01,4L4,22l8-3l8,3V4C20,2.9,19.1,2,18,2z' />
      </svg>
    </button>
  );
};

export default BookmarkFilled;
