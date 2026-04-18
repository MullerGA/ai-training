// Shared UI primitives
const Button = ({
  variant = "primary",
  size,
  icon,
  iconRight,
  children,
  onClick,
  className = "",
  ...rest
}) => {
  const cls = `btn btn-${variant}${size ? " btn-" + size : ""} ${className}`;
  return (
    <button className={cls} onClick={onClick} {...rest}>
      {icon}
      {children}
      {iconRight}
    </button>
  );
};

const Badge = ({ variant = "secondary", dot, children }) => (
  <span className={`badge badge-${variant}`}>
    {dot && <span className="dot" />}
    {children}
  </span>
);

const Card = ({ children, className = "", onClick }) => (
  <div className={`card ${className}`} onClick={onClick}>
    {children}
  </div>
);
const CardHeader = ({ title, desc, action }) => (
  <div
    className="card-header"
    style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}
  >
    <div>
      <div className="title">{title}</div>
      {desc && <div className="desc">{desc}</div>}
    </div>
    {action}
  </div>
);
const CardBody = ({ children, style }) => (
  <div className="card-body" style={style}>
    {children}
  </div>
);
const CardFooter = ({ children }) => <div className="card-footer">{children}</div>;

const Progress = ({ value = 0, gradient, thin }) => (
  <div className={`progress ${thin ? "progress-thin" : ""}`}>
    <div className={`fill ${gradient ? "fill-grad" : ""}`} style={{ width: `${value}%` }} />
  </div>
);

const IconFrame = ({ tone = "blue", children }) => (
  <div className={`icon-frame icon-${tone}`}>{children}</div>
);

const Navbar = () => (
  <div className="navbar">
    <div className="brand">
      <div className="brand-badge">AI</div>
      <img className="brand-logo" src="../../assets/ai-training-logo-white.svg" alt="AI TRAINING" />
    </div>
    <div className="actions">
      <Button variant="ghost-light" icon={<Icon.bookOpen />}>
        Support de formation
      </Button>
      <Button variant="gradient" icon={<Icon.messageQ />}>
        Questions ?
      </Button>
    </div>
  </div>
);

Object.assign(window, {
  Button,
  Badge,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Progress,
  IconFrame,
  Navbar,
});
