import { forwardRef, type SelectHTMLAttributes } from 'react';
import { FieldLabel, HelperText, ErrorText, fieldIds } from './field';
import { Icon } from './icon';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id'> {
  id: string;
  label?: string;
  required?: boolean;
  helper?: string;
  error?: string;
  options: SelectOption[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { id, label, required, helper, error, options, className, ...rest },
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
      <div className="ds-select-wrap">
        <select
          {...rest}
          ref={ref}
          id={id}
          className={`ds-control ${className ?? ''}`}
          aria-invalid={!!error}
          aria-describedby={error ? errId : helpId}
          required={required}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <Icon name="chevron-down" size={18} className="ds-chevron" />
      </div>
      {error ? <ErrorText id={errId}>{error}</ErrorText> : helper ? <HelperText id={helpId}>{helper}</HelperText> : null}
    </div>
  );
});
