import React from 'react'

type Props = {}

const CarNotFound = (props: Props) => {
    return (
        <div className="p-6  bg-[#F6F7F9] h-[350px] text-black text-center">
          <h2 className="text-3xl font-bold mb-2">Car Not Found</h2>
          <p>We couldn't find that model in our inventory.</p>
          <a href="/explore" className="mt-4 inline-block text-blue-600 hover:underline">
            ← Back to Explore
          </a>
        </div>
      )
}

export default CarNotFound