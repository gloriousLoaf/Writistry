import React from 'react';

const Bookmark = ({ buttonClick }) => {
  return (
    // credit: https://icons8.com/icon/82461/bookmark
    <button
      className='bookmark-btn'
      aria-label='Save article to Reading List'
      onClick={buttonClick}
    >
      <svg
        fill='#000000'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='36px'
        height='36px'
      >
        <path
          fill='none'
          stroke='#000000'
          strokeMiterlimit='10'
          strokeWidth='2'
          d='M19,20.557l-7-2.625l-6.999,2.625L5.01,3.999C5.01,3.45,5.46,3,6.01,3H18c0.552,0,1,0.448,1,1V20.557z'
        />
      </svg>
    </button>
  );
};

export default Bookmark;
