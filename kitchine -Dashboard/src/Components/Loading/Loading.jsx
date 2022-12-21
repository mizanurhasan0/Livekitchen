import React from 'react'

export default function Loading() {
  return (
    <div class="flex flex-col justify-center items-center  h-screen">
        <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-primary" role="status">
          <span class=" text-4xl">.</span>
        </div>
        <p className="text-primary text-2xl pl-10 uppercase">Loading..........</p>
      </div>
  )
}
