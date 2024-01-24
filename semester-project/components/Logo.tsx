import { cn } from "@/lib/utils";
import logo1 from "@/public/logo-2.svg";

const Logo = ({ dark = false }) => (
  <div className="flex items-center justify-between max-w-min gap-2">
    <img
      src={logo1} // ne radi
      alt="logo-2"
      style={{ width: "42px", height: "42px" }}
    />
    <span
      className={cn(
        "font-roboto-condensed font-bold text-3xl whitespace-nowrap",
        { "text-brand-blue-50": !dark, "text-brand-grey-600": dark }
      )}
    >
      hajduk story.
    </span>
  </div>
);

export default Logo;
