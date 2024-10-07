import Link from 'next/link';
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link href="./">Home</Link>
            </li>
          <li>
            <Link href="./features">Features</Link>
          </li>
          <li>
            <Link href="./about">About</Link>
          </li>
          <li>
            <Link href="./contact">Contact</Link>
          </li>
          <li>
            <Link href="./services">Services</Link>
          </li>
        </ul>
      </div>
      <p>This is Home page.</p>
      </div>
  )
}

export default HomePage;