/*import './App.css';
import imk from './logo11.jpeg';
import trq from './home1.png';
import trq1 from './shorts1.jpg';
import trq2 from './sub1.jpg';
import h from './history.png';
import c from './coding.png';
import i1 from './information.png';
import i2 from './interactive.png';
import k from './sbar.png';
import m from './add-user.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';



function Sidebar() {
  return (
      <>
      <div className='col-md-3' >
        <div className='top-bar'>
          <div>
            <img className='menu' src={imk} alt='menu' />
          </div>
          <div className='logo'>
            <img width="30px" height="10px" src={trq} alt='Youtube Logo' /><sup> IN</sup>
          </div>
        </div>
        <br />
        <br />
        <div className='options'>
          <ul>
          <Link to="Home">  <li>
              <div className='highlight'>
                <img src={trq1} alt='home' width="15px" />
               <p className='logo-name'>Home</p> 
              </div>
            </li></Link>
            <Link to="Shorts"><li>
              <div className='highlight'>
                <img src={trq2} alt='shorts' width="18px" />
                <p className='logo-name'>Shorts</p>
              </div>
            </li></Link>
           <Link to="Products"> <li>
              <div className='highlight'>
                <img src={k} alt='subscriptions' width="15px" />
                <p className='logo-name'>Subscriptions</p>
              </div>
            </li></Link>
            <hr />
            <li>
              <div className='highlight'>
                <img src={i1} alt='home' width="15px" />
                <p className='logo-name'>Library</p>
              </div>
            </li>
            <li>
              <div className='highlight'>
                <img src={h} alt='home' width="15px" />
                <p className='logo-name'>History</p>
              </div>
            </li>
            <li>
              <div className='highlight'>
                <img src={c} alt='home' width="15px" />
                <p className='logo-name'>Your videos</p>
              </div>
            </li>
            <li>
              <div className='highlight'>
                <img src={m} alt='home' width="15px" />
                <p className='logo-name'>Watch Later</p>
              </div>
            </li>
            <li>
              <div className='highlight'>
                <img src={i2} alt='home' width="15px" />
                <p className='logo-name'>Liked Videos</p>
              </div>
            </li>
            <hr />
            <li>
              <div className='highlight'>
                <img src={k} alt='home' width="15px" />
                <p className='logo-name'>Trending</p>
              </div>
            </li>
            <li>
              <div className='highlight'>
                <img src={m} alt='home' width="15px" />
                <p className='logo-name'>Shopping</p>
              </div>
            </li>
            <li>
              <div className='highlight'>
                <img src={i2} alt='home' width="15px" />
                <p className='logo-name'>Music</p>
              </div>
            </li>
            <li>
              <div className='highlight'>
                <img src={m} alt='home' width="15px" />
                <p className='logo-name'>Films</p>
              </div>
            </li>
            <li>
              <div className='highlight'>
                <img src={m} alt='home' width="15px" />
                <p className='logo-name'>Live</p>
              </div>
            </li>
            <li>
              <div className='highlight'>
                <img src={m} alt='home' width="15px" />
                <p className='logo-name'>Gaming</p>
              </div>
            </li>

            <li>
              <div className='highlight'>
                <img src={m} alt='home' width="15px" />
                <p className='logo-name'>News</p>
              </div>
            </li>

            <li>
              <div className='highlight'>
                <img src={m} alt='home' width="15px" />
                <p className='logo-name'>Sport</p>
              </div>
            </li>
            <li>
              <div className='highlight'>
                <img src={i2} alt='home' width="15px" />
                <p className='logo-name'>Learning</p>
              </div>
            </li>
            <li>
              <div className='highlight'>
                <img src={m} alt='home' width="15px" />
                <p className='logo-name'>Fashion &amp; Beauty</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </>
      )
     
  }
      export default Sidebar;*/
      import React from 'react'
import logo from './flipkartlogo.jpg';
import search from './search.png';
import store from './store.png';
import user from './user.png';
import cart from './shopping.png';
import menu from './menu.png';

import z from './banner.png'
export default function Sidebar() {
    return (
      <>
      <div className='col-md-2'>
          <img className='logo' width='140px' src={logo} alt='flogo' />
      </div>
      <div className='col-md-5'>
        <div className='search-div'>
        <img height='20px' src={search} alt='search' style={{marginBottom:'4px'}} />
        <input className='input' type='text' placeholder='  Search for Products, Brands and More'/>
        </div>
      </div>
      <div className='col-md-5 row'>
          <div className='col-md-5'>
            <div className='logo-div'>
              <img className='icon' height='20px' src={store} alt='seller' />
              <span className='logo-text'>Become best seller</span>
              </div>
          </div>
          <div className='col-md-3'>
            <div className='logo-div'>
              <img className='icon' height='20px' src={user} alt='seller' />
              <span className='logo-text'>Sign in</span>
              </div>
          </div>
          <div className='col-md-3'>
            <div className='logo-div'>
              <img className='icon' height='20px' src={cart} alt='seller' />
              <span className='logo-text'>Cart</span>
              </div>
          </div>
          <div className='col-md-1'>
          <div className='logo-div'>
              <img height='20px' src={menu} alt='menu' />
              </div>
          </div>
      </div>
      </>
    )
}