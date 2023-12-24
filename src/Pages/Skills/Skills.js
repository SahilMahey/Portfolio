import React from 'react'
import './Skills.css'
import C_image from './c++.png'
import PythonImage from './Python.png'
import JavaImage from './Java.png';
import PandasImage from './Pandas.png';
import ScikitLearnImage from './Scikit-learn.png';
import HTML5Image from './HTML.jpg';
import CSS3Image from './CSS.png';
import JavaScriptImage from './JavaScript.png';
import ReactImage from './React.png';
import TypeScriptImage from './TypeScript.png';
import NodeJSImage from './Node.png';
import JQueryImage from './jQuery.png';
import BootstrapImage from './Bootstrap.jpg';
import ChakraUIImage from './Chakra UI.png';
import MongoDBImage from './MongoDB.png';
import PostgreSQLImage from './p.png';
import SQLImage from './SQL.png';
import DockerImage from './Docker.png';
import GitImage from './Git.png';

const Skills = () => {
  return (
    <section class="my-skills" id="skills" data-aos="fade-up">
    <div class="container">
      <article>
        <p class="subtitle">My Skills</p>
        <h2 class="title">Technologies I Work With</h2>
      </article>
      <ul>
        <li><img src={C_image} alt="C++" />C++</li>
        <li><img src={PythonImage} alt="Python" />Python</li>
        <li><img src={JavaImage} alt="Java" />Java</li>
        <li><img src={PandasImage} alt="Pandas" />Pandas</li>
        <li><img src={ScikitLearnImage} alt="scikit-learn" />scikit-learn</li>
        <li><img src={HTML5Image} alt="HTML5" />HTML5</li>
        <li><img src={CSS3Image} alt="CSS3" />CSS3</li>
        <li><img src={JavaScriptImage} alt="Javascript (ES6+)" />Javascript (ES6+)</li>
        <li><img src={ReactImage} alt="React.js" />React.js</li>
        <li><img src={TypeScriptImage} alt="Typescript" />Typescript</li>
        <li><img src={NodeJSImage} alt="Node.js" />Node.js</li>
        <li><img src={JQueryImage} alt="jQuery" />jQuery</li>
        <li><img src={BootstrapImage} alt="Bootstrap" />Bootstrap</li>
        <li><img src={ChakraUIImage} alt="Chakra UI" />Chakra UI</li>
        <li><img src={MongoDBImage} alt="MongoDB" />MongoDB</li>
        <li><img src={PostgreSQLImage} alt="PostgreSQL" />PostgreSQL</li>
        <li><img src={SQLImage} alt="SQL" />SQL</li>
        <li><img src={DockerImage} alt="Docker" />Docker</li>
        <li><img src={GitImage} alt="Git" />Git</li>
      </ul>
    </div>
  </section>
  )
}

export default Skills