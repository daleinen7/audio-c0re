import React from 'react';
import { Link } from 'gatsby';
import {} from "@chakra-ui/core";

export default function Layout({children}) {
  return(
    <div>
      <header>
        <h1>AudioC0RE</h1>
        <Link to={`/`}>Home</Link>
        <Link to={`/about`}>About</Link>
        <Link to={`/location`}>Location</Link>
        <Link to={`/contact`}>Contact</Link>
      </header>
      {children}
      <footer>
        copyright 2021
      </footer>
    </div>
  )
}