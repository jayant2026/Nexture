
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormFieldProps {
  type: 'text' | 'email' | 'tel' | 'textarea';
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  className?: string;
}

const FormField = ({
  type,
  id,
  name,
  label,
  value,
  onChange,
  required = false,
  className = "",
}: FormFieldProps) => {
  return (
    <div className={`form-group ${className}`}>
      <label htmlFor={id} className="form-label">
        {label} {required && '*'}
      </label>
      
      {type === 'textarea' ? (
        <Textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="form-input min-h-[120px]"
          rows={4}
          required={required}
        />
      ) : (
        <Input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="form-input"
          required={required}
        />
      )}
    </div>
  );
};

export default FormField;
