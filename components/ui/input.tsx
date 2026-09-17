import { forwardRef, type InputHTMLAttributes } from 'react';
import { FieldLabel, HelperText, ErrorText, SuccessText, fieldIds } from './field';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  id: string;
  label?: string;
  required?: boolean;
  helper?: string;
  error?: string;
  success?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, required, helper, error, success, className, ...rest },
  ref
) {
  const { helpId, errId } = fieldIds(id);
  const describedBy = error ? errId : helper ? helpId : undefined;
  return (
    <div className="ds-field">
      {label && (
        <FieldLabel htmlFor={id} required={required}>
          {label}
        </FieldLabel>
      )}
      <input
        {...rest}
        ref={ref}
        id={id}
        className={`ds-control ${className ?? ''}`}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        required={required}
      />
      {error ? <ErrorText id={errId}>{error}</ErrorText> : success ? <SuccessText>{success}</SuccessText> : helper ? <HelperText id={helpId}>{helper}</HelperText> : null}
    </div>
  );
});
