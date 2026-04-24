type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  type?: string;
  placeholder?: string;
};

const Input = ({
  label,
  name,
  value,
  onChange,
  icon,
  type = "text",
  placeholder = "",
}: InputProps) => {
  return (
    <div className="flex-1/5 ">
      <label className="mb-2 block text-sm font-medium text-gray-700 py-1">
        {label}
      </label>

      <div className="flex items-center rounded border border-gray-300 bg-white px-3 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
        {icon && <span className="text-gray-400 text-[16px]">{icon}</span>}

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder || `Enter ${label}`}
          className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
        />
      </div>
    </div>
  );
};

export default Input;