import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { FieldLabel, HelperText, ErrorText, fieldIds } from './field';

interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> {
  id: string;
  label?: string;
  required?: boolean;
  helper?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { id, label, required, helper, error, className, rows = 5, ...rest },
  ref
) {
  const { helpId, errId } = fieldIds(id);
  return (
    <div className="ds-field">
      {label && (
        <FieldLabel htmlFor={id} required={required}>
          {label}
        </FieldLabel>
      )}
      <textarea
        {...rest}
        ref={ref}
        id={id}
        rows={rows}
        className={`ds-control ${className ?? ''}`}
        aria-invalid={!!error}
        aria-describedby={error ? errId : helpId}
        required={required}
      />
      {error ? <ErrorText id={errId}>{error}</ErrorText> : helper ? <HelperText id={helpId}>{helper}</HelperText> : null}
    </div>
  );
});
