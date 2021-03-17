import React from "react"
import styles from './Projects.module.scss';
import test from "../../imgs/territories.png";
import pokemon from "../../imgs/pokemon.png";
import mars from "../../imgs/marsrealty.png";
import blog from "../../imgs/blog.png";
import chatApp from "../../imgs/chatApp.png";
import shooter from "../../imgs/shooter.jpg";
// import {Button, OverlayTrigger, render, Tooltip } from 'react'


export default function Projects() {


  return (
    <div id="projects" className={styles.Projects}>
        <h3>Projects</h3>
        <ul class="card-columns">
          <li class="card bg-dark">
            <a target="_blank" rel="noreferrer" href="https://github.com/Mheckmann7/Chat-App">
              <img class="card-img-top" src={chatApp} alt="chat app" /></a>
            <div class="card-body bg-secondary">
              <h5 class="card-title text-white d-inline">Chat App</h5>
              <p class="card-text text-white">Chat app for real time messaging using React Native and AWS Amplify</p>
            </div>
          </li >
 
          <li class="card bg-dark">
          <a target="_blank" rel="noreferrer" href="https://github.com/Mheckmann7/Territories-client">
                <img class="card-img-top" src={test} alt="territories" /></a>
            <div class="card-body bg-secondary">
              <h5 class="card-title text-white d-inline">Territories</h5>
              <p class="card-text text-white">Created with React and Google MapsAPI</p>
            </div>
          </li >
          <li class="card bg-dark">
            <a target="_blank" rel="noreferrer" href="https://github.com/Mheckmann7/Pokemon-Team-Builder" >
              <img class="card-img-top" src={pokemon} alt="territories" /></a>
              <div class="card-body bg-secondary">
              <h5 class="card-title text-white d-inline">Pokemon Team Builder</h5>
              <p class="card-text text-white">Created with HTML and JS</p>
            </div>
          </li>
          <li class="card bg-dark">
            <a target="_blank" rel="noreferrer" href="https://github.com/Mheckmann7/Mars-Real-Estate">
              <img class="card-img-top" src={mars} alt="mars real estate" /></a>
              <div class="card-body bg-secondary">
              <h5 class="card-title text-white d-inline">Mars Real Estate</h5>
                <p class="card-text text-white">MCV Architecture with Node.js MongoDB and Express</p> 
              </div>
              
        </li>
        <li class="card bg-dark"> 
            <a target="_blank" rel="noreferrer" href="https://github.com/Mheckmann7/blog-python">
              <img class="card-img-top" src={blog} alt="territories" />
            
            </a>
              <div class="card-body bg-secondary">
              <h5 class="card-title text-white d-inline">Blog Site</h5>
              <p class="card-text text-white">Full CRUD blog site created with Python and Django</p>
            </div>
          </li>
          <li class="card bg-dark">
            <a target="_blank" rel="noreferrer" href="https://github.com/Mheckmann7/Unity-3rd-Person-Shooter-Game">
            <img class="card-img-top" src={shooter} alt="territories" /></a>
              <div class="card-body bg-secondary">
              <h5 class="card-title text-white d-inline">Unity 3rd Person Controller</h5>
              <p class="card-text text-white">A project to manually create a 3rd person controller in Unity using C#</p>
            </div>
          </li>
          </ul>

      </div>
  )
}