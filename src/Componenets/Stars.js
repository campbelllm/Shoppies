import React from 'react';
import Sky from 'react-sky';
import star from '../star.png'



const Stars = () => {

  return (
    <div>
      <Sky
        images={{
          0: star,
        }}
        how={150} /* Pass the number of images Sky will render chosing randomly */
        time={50} /* time of animation */
        size={'30px'} /* size of the rendered images */
        background= {'white'}
      />
    </div>
  );

}

export default Stars;
