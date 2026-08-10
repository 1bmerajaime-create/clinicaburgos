import { Link } from "react-router-dom";

type LogoProps = {
  className?: string;
};

/** Logo Linear oficial — CLÍNICA BURGOS */
export function Logo({ className = "" }: LogoProps) {
  return (
    <Link to="/" className={`logo logo-linear ${className}`} aria-label="Clínica Burgos">
      <img
        src="/brand/linear-header.png"
        alt="Clínica Burgos"
        width={198}
        height={25}
      />
    </Link>
  );
}
