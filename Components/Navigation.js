import Link from "next/link";

const  Navigation = () => {
  return ( <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

<Link legacyBehavior href="/"> 
<a className="navbar-brand">Home</a>
</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              
              <li className="nav-item">
              <Link  legacyBehavior href="/about">
                <a className="nav-link">About</a>
                </Link>
              </li>
<li className="nav-item">
<Link legacyBehavior href="/services">
<a className="nav-link">Services</a> 
</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>   
  </div>
  )   
};
export default Navigation;
  
  
    
  

  
/*<ul>
  
  <li>
<Link legacyBehavior href="/"> 
<a>Index</a>
</Link> </li>
<li><Link  legacyBehavior href="/about"> 
<a>About</a>
</Link> </li>

<li>
<Link legacyBehavior href="/services"> 
<a>Services</a>
</Link>
</li>  
</ul>*/