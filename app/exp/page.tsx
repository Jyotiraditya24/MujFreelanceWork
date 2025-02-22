import Image from 'next/image';
import React from 'react'

const page = () => {
  return (
    <div className="mt-24">
      page
      <Image
        src="https://b.zmtcdn.com/data/pictures/2/101212/18a8a6d5a56434d02ef5915da77b19b8.jpg"
        alt=""
        width={500}
        height={500}
      />
    </div>
  );
 }

export default page