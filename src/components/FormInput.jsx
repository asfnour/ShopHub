function FormInput({ label, type, name, value, required, onChange}) {
  return (
    <div>
      <label  className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default FormInput;
