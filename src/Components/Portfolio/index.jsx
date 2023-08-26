import './Portfolio.scss'

function Portfolio() {
    return (
      <section id="portfolio">
        <h1>portfolio</h1>

        <div class="portfolio-projects-container" >	
            <div class="portfolio-card">
              <div class="portfolio-card-img">	
                  <img src="img/ndz_portfolio.png" alt="page d'accueil de verre-&-image" />	
              </div>	
              <div class="portfolio-card-text">
                <h2>portfolio nadjim</h2>		
                <p>Ce Portfolio à été réalisé après avoir étudié ReactJs en auto-didacte</p>	
                <div className="card-frameworks">Wordpress Photoshop</div>
                <div className="card-links">
                  <a href="https://github.com/gynsora" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                  <a href="https://github.com/gynsora" target="_blank" rel="noopener noreferrer"><i className="fa-regular fa-eye"></i></a>
                  
                </div>	
              </div>
            </div>

            <div class="portfolio-card">
              <div class="portfolio-card-img">	
                 <img src="img/verreEtImage.png" alt="page d'accueil de verre-&-image" />	
              </div>	
              <div class="portfolio-card-text">
                <h2>verre & image</h2>		
                <p>Verre&Image est un site internet permettant aux professionnels d'obtenir des plaques funéraires entièrement personnalisée en couleur.</p>	
                <div className="card-frameworks">Wordpress Photoshop</div>
                <div className="card-links">
                  <a href="https://github.com/gynsora" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                  <a href="https://github.com/gynsora" target="_blank" rel="noopener noreferrer"><i className="fa-regular fa-eye"></i></a>
                </div>	
              </div>
            </div>


          
           
            
        </div>
      </section>
    );
  }
  
export default Portfolio;