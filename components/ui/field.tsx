import type { ReactNode } from 'react';
import { Icon } from './icon';

export function FieldLabel({ htmlFor, required, children }: { htmlFor: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="label ds-label" htmlFor={htmlFor}>
      {children}
      {required && (
        <span className="ds-required" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}

export function HelperText({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <p className="small ds-helper" id={id}>
      {children}
    </p>
  );
}

export function ErrorText({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <p className="small ds-error-text" id={id} role="alert">
      <Icon name="alert-circle" size={14} />
      {children}
    </p>
  );
}

export function SuccessText({ children }: { children: ReactNode }) {
  return (
    <p className="small ds-success-text">
      <Icon name="check-circle" size={14} />
      {children}
    </p>
  );
}

export function fieldIds(base: string) {
  return { helpId: `${base}-help`, errId: `${base}-err` };
}
