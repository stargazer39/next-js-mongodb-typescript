import React from "react";

interface HelloProps {
    isConnected :boolean
  }

export default function Hello({ isConnected } : HelloProps ) {
    return (
        <main className='text-center'>
        {isConnected ? (
            <h2 className="subtitle">You are connected to MongoDB</h2>
          ) : (
            <h2 className="subtitle">
              You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
              for instructions.
            </h2>
          )}
      </main>
    )
}