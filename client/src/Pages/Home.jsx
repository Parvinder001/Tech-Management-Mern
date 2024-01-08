import { Link } from "react-router-dom";

const Home = () => {

    return (
        <main>
            <section  className="section-main">
                <div className="homePageMain">
                    <div className="hero-content">
                        <p>We are the world best IT company</p>
                        <h1>Welcome to Mern Stack Series</h1>
                        <p>
                            Are you ready to take your business to the next level with cutting-edge
                            IT solutions? Look the future! At Parvinder Singh Technical , We specialize
                            in providing innovation IT services and solutions tailored to meet your unique needs
                        </p>
                        <div className="homePageButtons">
                            <Link to="/contact"><button>Contact Us</button></Link>
                            <Link to="service"><button>Our Services</button></Link>
                        </div>
                    </div>
                    <div className="home-page-mainImage">
                        <img src="/public/images/home_page.png" width={400} height={400}/>
                    </div>
                </div>
            </section>

            <section className="section-analytics">
                <div className="container grid gird-four-cols">
                    <div className="countDiv">
                        <h3>50+</h3>
                        <p>Registered Companies</p>
                    </div>
                    <div className="countDiv">
                        <h3>10,000+</h3>
                        <p>Happy Clients</p>
                    </div>
                    <div className="countDiv">
                        <h3>50+</h3>
                        <p>registered companies</p>
                    </div>
                    <div className="countDiv">
                        <h3>24/7</h3>
                        <p>Services</p>
                    </div>
                 </div>
            </section>

            <section  className="section-second">
                <div className="homePageMain">
                     <div className="home-page-mainImage">
                        <img src="/public/images/home2.png" width={400} height={400}/>
                    </div>
                    <div className="hero-content">
                        <p>We are here to help you</p>
                        <h1>Get Started Today</h1>
                        <p>
                            Are you ready to take your business to the next level with cutting-edge
                            IT solutions? Look the future! At Parvinder Singh Technical , We specialize
                            in providing innovation IT services and solutions tailored to meet your unique needs
                        </p>
                        <div className="homePageButtons">
                            <Link to="/contact"><button>Contact Us</button></Link>
                            <Link to="service"><button>Our Services</button></Link>
                        </div>
                    </div>
                   
                </div>
            </section>
       </main>
   )


}

export default Home;