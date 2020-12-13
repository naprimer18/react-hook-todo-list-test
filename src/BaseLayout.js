
import React from 'react';
import { Link,Route } from 'react-router-dom'
import Parent from './components/parent'
import About from './components/about'
 
export const BaseLayout = () => (
  <>
    <header>
        <nav>
          <ul>
            <li><Link to='/'>Parent</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </nav>
    </header>
    <>
      <Route path="/" exact component={Parent} />
      <Route path="/about" component={About} />     
    </>
  </>
)
