type FormFieldProps = {
  label: string;
  required?: boolean;
  children: React.ReactNode;
};

const FormField = ({ label, required = true, children }: FormFieldProps) => {
  return (
    <div>
      <p className="body-large-m text-gray-80 mb-[10px]">
        {label}
        {required && <em className="text-accent-error">*</em>}
      </p>
      {children}
    </div>
  );
};

export default FormField;
