import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'} transition`}>
        <div className="container">
          <a className={`navbar-brand fw-bold fs-4 ${scrolled ? 'text-dark' : 'text-white'} animate__animated animate__fadeInDown`} href="#hero">
            Noureddine<span className="text-primary">.</span>
          </a>
          <button
            className="navbar-toggler bg-warning"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end p-3" id="navbarNav">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <a className={`nav-link fw-medium ${scrolled ? 'text-dark' : 'text-dark'}`} href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link fw-medium ${scrolled ? 'text-dark' : 'text-dark'}`} href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link fw-medium ${scrolled ? 'text-dark' : 'text-dark'}`} href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link fw-medium ${scrolled ? 'text-dark' : 'text-dark'}`} href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style>
        {`
          .transition {
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
          }

          .nav-link:hover {
            color: #0d6efd !important;
          }
            @media (max-width: 992px) {
              #navbarNav {
                background-color: #ffc107 !important;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                border-radius: 5px;
              }
            }
        `}
      </style>
    </header>
  );
};

export default Navbar;
