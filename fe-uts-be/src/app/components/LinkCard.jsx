import Link from 'next/link';
import React from 'react'

const LinkCard = ({path, title, description}) => {
  return (
   

        <Link
          href={path}
          className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-gray-50 transition-all">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">{title}</h2>
          <p className="text-gray-500">{description}</p>
        </Link>

  );
}

export default LinkCard