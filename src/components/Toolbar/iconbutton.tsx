export default function IconButton({
  onClick,
  children,
  isActive,
  disabled,
}: {
  onClick: () => void;
  children: React.ReactNode;
  isActive?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${isActive ? "bg-gray-100 text-blue-600 hover:enabled: text-blue-600 focus:enabled: text-blue-600 active:enabled: text-blue-600" : ""} focus:enabled active:enabled: disabled:cursor-default disabled: flex min-h-[128px] min-w-[28px] items-center justify-center rounded-md text-gray-500 text-gray-700 text-gray-900 opacity-60 hover:enabled:text-gray-700`}
    >
      {children}
    </button>
  );
}
