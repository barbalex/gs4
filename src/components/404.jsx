import React from 'react'
import Navbar from '../components/Navbar.astro'
import 'bootstrap/dist/css/bootstrap.min.css'

const NotFoundPage = () => (
  <Navbar>
    <h1>NICHT GEFUNDEN</h1>
    <p>Sorry, diese URL existiert nicht :-(</p>
  </Navbar>
)

export default NotFoundPage

export { Head } from '../components/Head'
