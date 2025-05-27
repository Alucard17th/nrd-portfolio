const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container text-center">
        <p className="mb-2">
          &copy; 2025 Noureddine Eddallal. All rights reserved.
        </p>
        <p className="text-white small" style={{ opacity: 0.7 }}>
          Made with <span className="text-danger">❤️</span> and
          <span className="mx-1" title="Coffee">
            ☕
          </span>{" "}
          •
          <span className="mx-1" title="React">
            ⚛️
          </span>{" "}
          •
          <span className="mx-1" title="Terminal">
            ⌨️
          </span>{" "}
          •
          <span className="mx-1" title="Bug fixing">
            🐛➡️✨
          </span>
        </p>
        <p
          className="text-white small mt-1"
          style={{ opacity: 0.5, fontSize: "0.8rem" }}
        >
          while(true) &#123; innovate(); build(); &#125;
        </p>
      </div>
    </footer>
  );
};

export default Footer;
