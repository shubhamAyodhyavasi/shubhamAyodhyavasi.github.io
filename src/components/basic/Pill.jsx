import clsx from "clsx";

const variants = {
  indigo: "bg-indigo-500/10 text-indigo-500 dark:text-indigo-300 border-indigo-500/20 hover:bg-indigo-500/20",
  red: "bg-red-500/10 text-red-500 dark:text-red-300 border-red-500/20 hover:bg-red-500/20",
  green: "bg-green-500/10 text-green-500 dark:text-green-300 border-green-500/20 hover:bg-green-500/20",
  slate: "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700",

};
const Pill = ({ children, rounded, variant = "indigo" }) => {
  return (
    <span
      className={clsx(
        "px-3 py-1 text-xs font-mono border transition-colors",
        variants[variant],
        rounded ? "rounded-full" : "rounded-md"
      )}
    >
      {children}
    </span>
  );
};

export default Pill;
