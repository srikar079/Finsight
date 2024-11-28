import { twMerge } from "tailwind-merge";

const Spinner = ({ className }) => {
  return (
    <div
      className={twMerge(
        "flex h-screen w-full items-center justify-center",
        className,
      )}
    >
      <div
        className="inline-block size-20 animate-spin rounded-full border-[4px] border-current border-t-transparent text-primary"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
