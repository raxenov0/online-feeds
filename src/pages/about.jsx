import React from "react";
import about from './../components/pagesCssModule/about.module.css'
import photo from './../image/photo.jpg'
import { Navigation } from "../components/navigation/navigation";
import react from './../image/react.png'
import html from './../image/html.png'
import css from './../image/css-3.png'
import bootstrap from './../image/bootstrap.png'
import js from './../image/js.png'
import ts from './../image/typescript.png'
import angular from './../image/angular.png'
import inst from './../image/inst.png'
import vk from './../image/vk.png'
import telegram from './../image/telegram.png'
import github from './../image/github.png'

import { Link, useNavigate } from "react-router-dom";

export const About = () => {
    const posts = useNavigate()
    return(
        <div className={about.wrapper} onClick={()=>posts(-1)}>
            <div className={about.main_content} onClick={(event)=> event.stopPropagation()}>
                <div className={about.info}>
                    <div className={about.main_info}>
                        <div className={about.fio}>
                            <span>Roman Axenov,</span>
                            <span style={{marginBottom:'20px'}}>19 years</span>
                            <span style={{fontSize:'24px', fontWeight:'400'}}>
                            Student of the Nizhny Novgorod State Technical University named after R.E. Alekseev.
                            Faculty of "Information Systems and Technologies", 2nd year.
                            </span>
                            <div className={about.technology}>
                                <p>Technology:</p>
                                <div>
                                    <img className={about.icons} src={html}/>
                                <img className={about.icons} src={css}/>
                                <img className={about.icons} src={bootstrap}/>
                                <img className={about.icons} src={js}/>
                                <img className={about.icons} src={ts}/>
                                <img className={about.icons} src={react}/>
                                <img className={about.icons} src={angular}/>
                                </div>
                                
                            </div>
                        </div>
                        <div className={about.photo}>
                            <img className={about.img} src={photo}/>
                        </div>
                    </div>

                    <div className={about.main_info}>
                        <div className={about.additional}>
                            <p>About myself:</p>
                            <span>
                            I am a web developer, I live in Nizhny Novgorod, Russia. 
                            I am currently working on my projects and in project activities.
                            I want to take on more work and improve my skills as a web developer.
                            </span>
                        </div>
                        
                        <div className={about.contact}>
                            <div className={about.wrapper_contact}>
                                <div className={about.email}>
                                    <span className={about.title}>Email</span>
                                    <span className={about.value}> aksenov2389_z@mail.ru</span>
                                </div>

                                <div className={about.number}>
                                    <span>Phone</span>
                                    <span className={about.value}> +7-(952)-781-50-96</span>
                                </div>

                                <div className={about.address}>
                                    <span>Address</span>
                                    <span className={about.value}> Russia, Nizhiny Novgorod</span>
                                </div>

                                <div className={about.social}>
                                    <span>Social</span>
                                    <div className={about.links}>
                                        <a target="_blank" href="https://vk.com/raxenov0">
                                            <img src={vk} alt="" className={about.icons_contact} />
                                        </a>

                                        <a target="_blank" href="https://instagram.com/raxenov0">
                                            <img src={inst} alt="" className={about.icons_contact} />
                                        </a>

                                        <a target="_blank" href="https://t.me/raxenov0">
                                            <img src={telegram} alt="" className={about.icons_contact} />
                                        </a>

                                        <a target="_blank" href="https://github.com/raxenov0">
                                            <img src={github} alt="" className={about.icons_contact} />
                                        </a>
                                    </div>

                                </div>
                            </div>
                           
                        </div>
                    </div>




                    
                </div>
               
            </div>
        </div>
    )
}