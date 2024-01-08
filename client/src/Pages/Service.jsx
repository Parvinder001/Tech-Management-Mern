import { useAuth } from '../storage/auth';
const Service = () => {
   const { Services } = useAuth();
    return (
      <section className="section-services">
        <div className="main-heading">
          <h1>Our Services</h1>
        </div>
        <div className="container">
          <div className="row service-card-main">
            {Services &&
              Services.map((serviceValue, index) => {
                const { service, description, price, provider } = serviceValue;

                return (
                  <div className="col-4 card-main" key={index}>
                    <div className="card-img">
                      <img
                        src="/images/login.png"
                        alt="services image"
                        width={250}
                      />
                    </div>
                    <div className="card-deatils">
                      <div className="row">
                        <div className="col-6">
                          <p>{price}</p>
                        </div>
                        <div className="col-6">
                          <p>{provider}</p>
                        </div>
                        <div className="col-12">
                          <h5>{service}</h5>
                        </div>
                        <div className="col-12 description">{description}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    );
}
export default Service;