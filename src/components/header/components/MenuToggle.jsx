export const MenuToggle = ({ setOverlay }) => (
    <span
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={() => setOverlay(true)}
      style={{ color: "white" }}
    >
      MENÚ
    </span>
  );
  
  