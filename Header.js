//Still have to import React for components



export default function Header() {
    return (
      <header>
        <nav className="nav">
          <img src="react-logo.png" className="main-logo" />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }

  