import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/globalStyles.module.css';
// Icons
import { FaPlay, FaBuildingCircleCheck, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { GiWoodBeam, GiDrill } from "react-icons/gi";
import { FaTools, FaCheckCircle, FaPinterestP,  } from "react-icons/fa";
import { IoIosSearch, IoLogoWhatsapp } from "react-icons/io";
import { TbTrees } from "react-icons/tb";

export const Home = () => {
    const [scrolled, setScrolled] = useState(false);
    const homeRef = useRef();

    const aboutWood = [
        {
            tittle: "Hardwood",
            text: "Cum sociis natoque penatibus et magnis dis parturient.",
            icon: <GoArrowUpRight className={styles.buttonIcon} />,
        },
        {
            tittle: "Lumber",
            text: "Cum sociis natoque penatibus et magnis dis parturient.",
            icon: <GoArrowRight className={styles.buttonIcon} />,
        },
        {
            tittle: "Teak Wood",
            text: "Cum sociis natoque penatibus et magnis dis parturient.",
            icon: <GoArrowUpRight className={styles.buttonIcon} />,
        },
    ];

    const services = [
        {
            icon: <GiWoodBeam className={styles.buttonIcon} />,
            tittle: "Custom Woods",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere",
            onClick: () => {},
        },
        {
            icon: <GiDrill className={styles.buttonIcon} />,
            tittle: "Exterior Furniture",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere",
            onClick: () => {},
        },
        {
            icon: <TbTrees className={styles.buttonIcon} />,
            tittle: "Timber Supplies",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere",
            onClick: () => {},
        },
        {
            icon: <FaTools className={styles.buttonIcon} />,
            tittle: "House Renovation",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere",
            onClick: () => {},
        },
        {
            icon: <FaBuildingCircleCheck className={styles.buttonIcon} />,
            tittle: "Place Renovation",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere",
            onClick: () => {},
        },
    ]

    const cards = [
        {
            tittle: "100% Guarantee",
            text: "Lorem ipsum dolor sit amet conset atetur adipiscing seddo eiusmod tempor incididunt labore.",
            onClick: () => {},
        },
        {
            tittle: "Expert Team",
            text: "Lorem ipsum dolor sit amet conset atetur adipiscing seddo eiusmod tempor incididunt labore.",
            onClick: () => {},
        },
        {
            tittle: "Easy Returns",
            text: "Lorem ipsum dolor sit amet conset atetur adipiscing seddo eiusmod tempor incididunt labore.",
            onClick: () => {},
        },
        {
            tittle: "Friendly Price",
            text: "Lorem ipsum dolor sit amet conset atetur adipiscing seddo eiusmod tempor incididunt labore.",
            onClick: () => {},
        },
    ]

    const bestProjects = [
        {
            image: "/bp1.png",
            tittle: "Kitchen Furniture",
            initPrice: 36,
            onClick: () => {},
        },
        {
            image: "/bp2.png",
            tittle: "House Furniture",
            initPrice: 48,
            onClick: () => {},
        },
        {
            image: "/bp3.png",
            tittle: "Crafted Furniture",
            initPrice: 62,
            onClick: () => {},
        },
        {
            image: "/bp4.png",
            tittle: "Bathroom Furniture",
            initPrice: 76,
            onClick: () => {},
        },
    ]

    useEffect(() => {
        const homeElement = homeRef.current;

        const handleScroll = () => {
            if (homeElement) {
                const scrollTop = homeElement.scrollTop; // Desplazamiento vertical
                console.log("ScrollTop del Home:", scrollTop);
                setScrolled(scrollTop > 0); // Cambia el estado según el scroll
            }
        };

        // Agrega el listener al contenedor referenciado
        homeElement?.addEventListener("scroll", handleScroll);

        // Limpia el listener al desmontar
        return () => {
            homeElement?.removeEventListener("scroll", handleScroll);
        };
    }, []);


  return (
    <div ref={homeRef} className={ styles.mainContainer }>
        <div id='Home' className={ styles.homeSection }>
            <div className={`${styles.header} ${scrolled ? styles.scrolled : ""}`.trim()}>
                <div>
                    <img src=""  />
                </div>
                <div className={ styles.middleSpace }></div>
                <div className={styles.rightSection}>
                    <ul className={styles.tabs}>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Services">Services</a></li>
                        <li><a href="#Pages">Pages</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                    <button className={styles.headerButton}><IoIosSearch className={styles.buttonIcon} /></button>
                </div>
            </div>
            <div className={styles.homeContainer}>
                <div className={styles.homeSectionLeft}>
                    <div>
                        <p className={styles.aboveTittle}>WOODLAND CARPENTER</p>
                        <h1 className={styles.homeTittle}>Every Piece of Wood</h1>
                        <h1 className={styles.homeTabTittle}>For Luxury Results</h1>
                        <p className={styles.underTittleCardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className={styles.buttonsContainer}>
                            <button className={styles.squareButton}>GET STARTED</button>
                            <div className={styles.playButtonContainer}>
                                <button className={styles.playButton}><FaPlay className={styles.buttonIcon} /></button>
                                <span>WATCH VIDEO</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottomSections}>
                        <span className={styles.journeySigns}>Our Journey</span>
                        <div className={styles.row}>
                            <div className={styles.bottomSection}>
                                <span className={styles.journey}>97</span>
                                <span className={styles.journeySigns}>%</span>
                                <p>Successful Projects</p>
                            </div>
                            <div className={styles.bottomSection}>
                                <span className={styles.journey}>31</span>
                                <span className={styles.journeySigns}>+</span>
                                <p>Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.homeSectionRight}>
                    <div className={styles.homeImage}></div>
                </div>
            </div>
        </div>

        <div id='About' className={styles.aboutSection}>
            <div className={styles.homeContainer}>
                <div className={styles.aboutSectionLeft}>
                    <div className={styles.cardsContainer}>
                    {aboutWood.map(({ tittle, text, icon }, index) => {
                        return (
                            <React.Fragment key={index}>
                            <div className={`${styles.aboutCard} ${index === 1 ? styles.middle : ''}`.trim()}>
                                <div className={styles.cardText}>
                                    <span className={styles.cardTittle}>{tittle}</span>
                                    <span className={styles.underTittleCardText}>{text}</span>
                                </div>
                                <div className={styles.cardButton}>
                                    <button className={` ${index == 1 ? styles.headerButton : styles.whiteButton} `}>{icon}</button>
                                </div>
                            </div>
                            </React.Fragment>
                        );
                    })}
                    </div>
                </div>
                <div className={styles.aboutSectionRight}>
                    <div className={styles.aboutInfoContainer}>
                        <p className={styles.aboveTittle}>ABOUT WOODLAND</p>
                        <h1 className={styles.aboutTittle}>Providing Premium Quality</h1>
                        <h1 className={styles.aboutSecTittle}>Wood Products</h1>
                        <p style={{width: "90%"}} className={styles.underTittleText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum repellendus eos aut quasi laboriosam itaque minima sunt eaque ab natus veniam doloremque repellat</p>
                        <div className={styles.aboutProducts}>
                            <div className={styles.tableSection}>
                                <span style={{color: "#fefefe"}} className={styles.tableTittle}>Professional & Quality <br/> Carpenter Service</span>
                                <div className={styles.middleSpace} />
                                <button className={styles.squareAboutButton}>READ MORE</button>
                            </div>
                            <div className={styles.tableSection}>
                                <div className={styles.aboutRow}>
                                    <span className={styles.tableText}>Harvesting</span>
                                    <span className={styles.tableText}>42k</span>
                                </div>
                                <div className={styles.aboutRow}>
                                    <span className={styles.tableText}>Manufacturing</span>
                                    <span className={styles.tableText}>182k</span>
                                </div>
                                <div className={styles.aboutRow}>
                                    <span className={styles.tableText}>Logging</span>
                                    <span className={styles.tableText}>87k</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id='Services' className={styles.servicesSection}>
            <div className={styles.homeContainer}>
                <div className={styles.servicesCardsContainer}>
                    {services.map(({ tittle, text, icon, onClick }, index) => {
                        return (
                            <React.Fragment key={index}>
                                {index == 0 && (
                                    <div className={styles.servicesCardInfo}>
                                        <span className={styles.aboveTittle}>OUR SERVICES</span>
                                        <span className={styles.serviceTittle}>We Provide The Best Services</span>
                                        <span className={styles.underTittleServiceText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, in ut maiores</span>
                                    </div>
                                )}
                                <div className={styles.servicesCard}>
                                    <div className={styles.cardButton}>
                                        <button className={`${styles.headerButton} ${styles.service}`.trim()}>{icon}</button>
                                    </div>
                                    <div className={styles.cardServiceText}>
                                        <span className={styles.cardTittle}>{tittle}</span>
                                        <span className={styles.underTittleServiceText}>{text}</span>
                                        <a onClick={onClick}><span>READ MORE</span></a>
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </div>

        <div id='Pages' className={styles.aboutSection}>
            <div className={styles.homeContainer}>
                <div className={styles.aboutSectionLeft}>
                    <div className={styles.chooseImage}></div>
                </div>
                <div className={styles.aboutSectionRight}>
                    <div className={styles.chooseInfoContainer}>
                        <p className={styles.aboveTittle}>WHY CHOOSE WOODLAND</p>
                        <h1 className={styles.aboutTittle}>Giving Quality Workmanship</h1>
                        <h1 className={styles.aboutSecTittle}>With Professional Skills</h1>
                        <p className={styles.underTittleText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        <div className={styles.listContainer}>
                            <div className={styles.listSection}>
                                <ul>
                                    <li><FaCheckCircle className={styles.checkLeft} /> Quality Control System</li>
                                    <li><FaCheckCircle className={styles.checkLeft} /> Commitment to Customers</li>
                                    <li><FaCheckCircle className={styles.checkLeft} /> Highly Professional Carpentry</li>
                                    <li><FaCheckCircle className={styles.checkLeft} /> 100% Satisfaction Guarantee</li>
                                </ul>
                            </div>
                            <div className={styles.listSection}>
                                <ul>
                                    <li><FaCheckCircle className={styles.checkRinght} /> Commitment to Customers</li>
                                    <li><FaCheckCircle className={styles.checkRinght} /> Quality Control System</li>
                                    <li><FaCheckCircle className={styles.checkRinght} /> 100% Satisfaction Guarantee</li>
                                    <li><FaCheckCircle className={styles.checkRinght} /> Highly Professional Carpentry</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.chooseBottomSection}>
                            <div>
                                <span className={styles.progressTittle}>Transparency Services</span>
                                <div className={styles.progress}>
                                    <div className={styles.progressBar} role="progressbar" style={{width: "82%"}} aria-valuenow="82" aria-valuemin="0" aria-valuemax="100">
                                        <span className={styles.progressBarLabel}>82%</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className={styles.progressTittle}>Commitment & Responsibility</span>
                                <div className={styles.progress}>
                                    <div className={styles.progressBar} role="progressbar" style={{width: "92%", backgroundColor: "#42413F"}} aria-valuenow="92" aria-valuemin="0" aria-valuemax="100">
                                        <span className={styles.progressBarLabel}>92%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.cards}>
            <div className={styles.homeContainer}>
                <div className={styles.containerCards}>
                    {cards.map(({ tittle, text, onClick }, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className={` ${index == 0 ? styles.externalCardShadow : styles.externalCard} `}>
                                    <span className={styles.cardTittle}>{tittle}</span>
                                    <span className={styles.underTittleCardText}>{text}</span>
                                    <a onClick={onClick}><span>READ MORE</span></a>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </div>

        <div id='BestPro' className={styles.servicesSection}>
            <div className={styles.homeContainer}>
                <div className={styles.servicesCardsContainer}>
                    {bestProjects.map(({ tittle, initPrice, image, onClick }, index) => {
                        return (
                            <React.Fragment key={index}>
                                {index == 0 && (
                                    <div className={styles.bpCardSection}>
                                        <span className={styles.aboveTittle}>OUR BEST PROJECT</span>
                                        <span className={styles.bpCardSectionTittle}>Check This Out</span>
                                        <span className={styles.bpCardSectionTittle}>Our Project</span>
                                        <span className={styles.underTittleCardText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor.</span>
                                    </div>
                                )}
                                <div className={styles.bpCard}>
                                    <div className={styles.bpImage}><img className={styles.bpImageBP} src={image} alt="Best Projects" /></div>
                                    <div className={styles.bpBottomContainer}>
                                        <div className={styles.bpText}>
                                            <span className={styles.cardTittle}>{tittle}</span>
                                            <span className={styles.underTittleBPCardText}>Start From ${initPrice}</span>
                                        </div>
                                        <div className={styles.cardBP}>
                                            <button onClick={onClick} className={`${styles.headerButton} ${styles.bp}`.trim()}><GoArrowUpRight className={styles.buttonIcon} /></button>
                                        </div>
                                    </div>
                                </div>
                                {index == bestProjects.length-1 && (
                                    <div className={styles.bpCardInfo}>
                                        <span className={styles.bpAboveTittle}>LET'S OFFER</span>
                                        <span className={styles.bpTittle}>We Have Many More</span>
                                        <span className={styles.bpUnderTittle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar.</span>
                                        <button style={{marginTop: "35px"}} className={styles.squareButton}>ORDER NOW</button>
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </div>

        <div id='Footer' className={ styles.footerSection }>
            <div className={styles.homeContainer} style={{display: "flex", flexDirection: "column"}}>
                <div className={styles.topSection}>
                    <span style={{color: "#42413f"}}>Logo</span>
                    <div className={styles.bpText}>
                        <span className={styles.cardTittle}>Subscribe Our Newsletter</span>
                        <div className={styles.rowFooter}>
                            <input type="email" placeholder='Email Address' className={styles.input} />
                            <button className={styles.squareButton}>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottomSection}>
                    <div className={styles.footerColumn}>
                        <span className={styles.footerTittle}>Our Office</span>
                        <span className={styles.footerText}>Jl. Raya Kuta No.70, Denpasar</span>
                        <span className={styles.footerText}>Kuta - Bali, DPS 94111</span>
                        <div className={styles.row} style={{marginTop: "15px"}}>
                            <button className={styles.footerButtonDark}>
                                <FaFacebookF className={styles.buttonIcon} style={{color: "#DCCCAD"}}/>
                            </button>
                            <button className={styles.footerButton}><FaTwitter className={styles.buttonIcon} /></button>
                            <button className={styles.footerButton}><IoLogoWhatsapp className={styles.buttonIcon} /></button>
                            <button className={styles.footerButton}><FaPinterestP className={styles.buttonIcon} /></button>
                        </div>
                    </div>
                    <div className={styles.footerColumn}>
                        <span className={styles.footerTittle}>Explore</span>
                        <span className={styles.footerText}>About</span>
                        <span className={styles.footerText}>Services</span>
                        <span className={styles.footerText}>Pricing</span>
                        <span className={styles.footerText}>Team</span>
                    </div>
                    <div className={styles.footerColumn}>
                        <span className={styles.footerTittle}>Quick Links</span>
                        <span className={styles.footerText}>Privacy Policy</span>
                        <span className={styles.footerText}>Terms Of Service</span>
                        <span className={styles.footerText}>Disclaimer</span>
                        <span className={styles.footerText}>FAQ</span>
                    </div>
                    <div className={styles.footerColumn}>
                        <span className={styles.footerTittle}>More Info</span>
                        <span className={styles.footerText}>support@woodland.com</span>
                        <span className={styles.footerText}>Everyday 8 AM - 5 PM</span>
                        <span className={styles.footerText}>(+021) 2336 278</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
