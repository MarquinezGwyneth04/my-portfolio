
import { useState } from "react";
import "./style.css";

function App() {
    const [page, setPage] = useState("Home");

    return (
        <div className="portfolio">
            <header>
                <h2>My Portfolio</h2>

                <nav>
                    <button onClick={() => setPage("Home")}>Home</button>
                    <button onClick={() => setPage("About")}>About</button>
                    <button onClick={() => setPage("Projects")}>Projects</button>
                    <button onClick={() => setPage("Connect")}>Connect</button>
                </nav>
            </header>

            <main>
                {page === "Home" && (
                    <section className="home">
                        <div className="home-text">
                            <p className="welcome">WELCOME TO MY PORTFOLIO</p>

                            <h1>Hi there, I'm Gwyneth!</h1>

                            <h3>Student & Future Web Developer</h3>

                            <p className="intro">
                                I enjoy learning new things, exploring
                                technology, and creating simple and
                                beautiful websites.
                            </p>

         <button
             className="pink-button"
             onClick={() => setPage("About")}
>
             About Me
         </button>

                        </div>

                        <div className="photo-area">
                            <div className="photo-frame">
                                <img
                                    src="src/871dc8cf-389c-4219-9cc9-624fbc1cd89a.jpg"
                                    alt="Gwyneth's photo"
                                />
                            </div>
                        </div>
                    </section>
                )}

                {page === "About" && (
                    <section>
                        <div className="cartoon">🐱</div>

                        <h1>About Me</h1>

                        <p>
                            Hello! I'm Gwyneth, a student interested
                            in technology and web design.
                        </p>

                        <p>
                            I enjoy learning, being creative, and
                            improving my skills through projects.
                        </p>

                        <h3>My Interests</h3>

                        <p>
                            Web Design · Music · Technology · Creativity
                        </p>
                    </section>
                )}

                {page === "Projects" && (
                    <section>
                        <h1>My Projects</h1>

                        <div className="project">
                            <div className="cartoon">💻</div>
                            <h3>Personal Website</h3>
                            <p>A simple website about myself.</p>
                        </div>

                        <div className="project">
                            <div className="cartoon">🎵</div>
                            <h3>Music Playlist</h3>
                            <p>A page featuring my favorite songs.</p>
                        </div>

                        <div className="project">
                            <div className="cartoon">📚</div>
                            <h3>Student Directory</h3>
                            <p>A project for student information.</p>
                        </div>
                    </section>
                )}

                {page === "Connect" && (
                    <section>
                        <div className="cartoon">💌</div>

                        <h1>Connect With Me</h1>

                        <p>Thank you for visiting my website!</p>

                        <p>You can find me on these platforms.</p>

                        <div className="socials">
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Facebook
                            </a>

                        
                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </section>
                )}
            </main>

            <footer>
                <p>My Portfolio © 2026</p>
            </footer>
        </div>
    );
}

export default App;
