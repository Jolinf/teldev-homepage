import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'children'> {
  children: ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox({ children, className, ...rest }, ref) {
  return (
    <label className="ds-checkbox-row">
      <input {...rest} ref={ref} type="checkbox" className={`ds-checkbox ${className ?? ''}`} />
      <span className="body">{children}</span>
    </label>
  );
});
