import React from "react";
import './css/index.css';
// import { Carousel } from "react-responsive-carousel";
import { Helmet } from "react-helmet";
import Typewriter from "typewriter-effect";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Importing Images for the Carousel
// import image1 from './../assets/img/imgSlider/image1.jpg'
// import image2 from './../assets/img/imgSlider/image2.jpeg'
// import image3 from './../assets/img/imgSlider/image3.jpeg'
// import image4 from './../assets/img/imgSlider/image4.jpeg'

// Importing Images for the Team
import rishiImg from './../assets/personIMG/rishi.jpeg'
import samratImg from './../assets/personIMG/samrat.jpeg'
import pranavImg from './../assets/personIMG/pranav.jpg'
import arghyaImg from './../assets/personIMG/arghya.jpg'
import maneeshImg from './../assets/personIMG/maneesh.jpeg'

const Home = () => {
    return (
        <div>
            <Helmet>
                <script async src="https://tally.so/widgets/embed.js" type="text/javascript"></script>
            </Helmet>
            <div class="navbar">
            <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#team">Meet the Team</a></li>
            {/* <li><a href="#gallery">Gallery</a></li> */}
        </ul>
    </nav>
    </div>

    <section id = "home">
            <div class="hero">
                <div class="heroOverlay">
                    <h1><b>
                        <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Welcome to E-KARMA")
                                .start();
                            }}
                        />
                    </b></h1>
                    <p>A revolutionary initiative for handling electronic waste responsibly.</p>
                    <button data-tally-open="mBBWN1" data-tally-overlay="1" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" class="pickupButton">Schedule a Pickup</button>
                </div>
            </div>
            
    </section>

        <section id = "about">
            <div class="about" style = {{font: "Times new roman"}}>
                <h1><b>About Us</b></h1>
                    <p class="AP1">
                    E-karma is a revolutionary initiative aimed at revolutionising the way we handle electronic waste (e-waste). With the increasing concern for environmental sustainability and the proliferation of electronic devices, E-karma provides a convenient solution for users to responsibly dispose of their e-waste while also being rewarded for their efforts.
                    </p>
                    <p class = "AP2">
                    The app works on a simple yet effective model: users schedule pickups for their e-waste through the E-karma platform. Our team then collects the e-waste and delivers it to partnering electronic recycling companies. In return for their contribution, users receive discount coupons and vouchers from these companies, directly proportional to the amount of e-waste they have recycled. This not only incentivises users to participate actively in e-waste management but also promotes a circular economy by encouraging the reuse and recycling of electronic materials.
                    </p>
                    <p class = "AP3">
                    E-karma is more than just a service; it's a movement towards a greener, more sustainable future. By harnessing the power of technology and collaboration, we aim to make a significant impact on reducing e-waste while simultaneously rewarding environmentally conscious behaviour. Join us in our mission to make every contribution count towards a cleaner planet with E-karma!
                </p>
            </div>

            <div class ="stars">
                
            </div>

        </section>

            <section id = "team">
            <div class="team">
                <h1><b>Meet the Team</b></h1>
            </div>
            <div class="teamRow">
                <div class="person">
                    <div class="container">
                        <img class="personImg" src={rishiImg} alt="Rishi"></img>
                        <div class="teamOverlay">
                            Rishi Bagri is a 17-year-old IBDP Year 2 student at Sarala Birla Academy. Being Head Boy, Rishi is actively involved in  various projects and initiatives. Passionate about technology and innovation, he is actively involved in various projects and initiatives. A Marvel enthusiast and tech aficionado, Rishi enjoys coding, developing web applications, playing the guitar and exploring sustainability solutions.
                        </div>
                    </div>
                    <h3>Rishi Bagri</h3>
                    <p>CEO</p>
                </div>
                <div class="person">
                    <div class="container">
                        <img class="personImg" src={arghyaImg} alt="Arghya"></img>
                        <div class="teamOverlay">
                            Arghya Saha, the 17-year-old COO of E-Karma, is committed to our mission of reducing electronic waste. As a student at Sarala Birla Academy pursuing the International Baccalaureate Diploma Programme, Arghya merges academic rigor with a strong dedication to environmental sustainability. He manages the overall operations and logistics of E-Karma, ensuring the efficient collection and recycling of e-waste from households
                        </div>
                    </div>
                    <h3>Arghya Saha</h3>
                    <p>COO</p>
                </div>
                <div class="person">
                    <div class="container">
                        <img class="personImg" src={maneeshImg} alt="Maneesh"></img>
                        <div class="teamOverlay">
                            Maneesh, the marketing lead at E-karma, brings innovative strategies and a fresh perspective to our brand. Currently studying at Sarala Birla Academy, he combines academic knowledge with a keen interest in marketing. Outside of work, Maneesh enjoys playing squash, running, gymming, gaming, and exploring new marketing trends.
                        </div>
                    </div>
                    <h3>Maneesh Reddy Rasam</h3>
                    <p>CMO</p>
                </div>
                <div class="person">
                    <div class="container">
                        <img class="personImg" src={samratImg} alt="Samrat"></img>
                        <div class="teamOverlay">
                            Samrat Rabara is a 17-year-old IBDP Year 2 student at Sarala Birla Academy, a renowned boarding school. Passionate about learning and personal growth, he is actively involved in various school activities and projects. He enjoys playing sports and seeks opportunities to expand his knowledge and make a positive impact on his community.
                        </div>
                    </div>
                    <h3>Samrat Rabara</h3>
                    <p>CFO</p>
                </div>
                <div class="person">
                    <div class="container">
                        <img class="personImg" src={pranavImg} alt="Pranav"></img>
                        <div class="teamOverlay">
                            Pranav is a high school student from Kathmandu, Nepal, studying in Bangalore. Passionate about design and coding, he has directed a school play, designed the school magazine, and created various Python and Discord bot projects. Always seeking new challenges, Pranav takes on short-term projects and uses Monkeytype for relaxation and motivation.
                        </div>
                    </div>
                    <h3>Pranav Khemka</h3>
                    <p>CTO</p>
                </div>
            </div>
            </section>
            
           {/* <section id = "gallery">
                <div class="gallery">
                    <h1><b>Gallery</b></h1>
                </div>
                <div class="galleryRow">
                    <Carousel>
                        <div>
                            <img src={image1} alt="Carousel IMG"></img>
                        </div>
                        <div>
                            <img src={image2} alt="Carousel IMG"></img>
                        </div>
                        <div>
                            <img src={image3} alt="Carousel IMG"></img>
                        </div>
                        <div>
                            <img src={image4} alt="Carousel IMG"></img>
                        </div>
                    </Carousel>
                </div>
        </section> */}

        </div>
    );
};

export default Home;
