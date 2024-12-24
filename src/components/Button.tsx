type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

const Button = ({
  label,
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-500 text-white rounded-full w-24 h-14 flex justify-center items-center mx-auto ${className} ${
        disabled && "cursor-not-allowed"
      }`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
