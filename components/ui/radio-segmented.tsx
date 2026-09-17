'use client';

import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { HelperText } from './field';

interface RadioSegmentedOption {
  value: string;
  label: string;
}

interface RadioSegmentedProps {
  label?: string;
  options: RadioSegmentedOption[];
  defaultValue?: string;
  value?: string;
  helper?: string;
  name?: string;
  onChange?: (value: string) => void;
}

export function RadioSegmented({ label, options, defaultValue, value, helper, name, onChange }: RadioSegmentedProps) {
  const groupId = useId();
  const [internal, setInternal] = useState(defaultValue ?? options[0]?.value);
  const current = value ?? internal;
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  function select(next: string) {
    setInternal(next);
    onChange?.(next);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const dir = e.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (index + dir + options.length) % options.length;
    const nextOption = options[nextIndex];
    if (!nextOption) return;
    select(nextOption.value);
    refs.current[nextIndex]?.focus();
  }

  return (
    <div className="ds-field">
      {label && (
        <span className="label ds-label" id={groupId}>
          {label}
        </span>
      )}
      <input type="hidden" name={name} value={current} />
      <div className="ds-segmented" role="radiogroup" aria-labelledby={label ? groupId : undefined} aria-label={label ? undefined : 'Options'}>
        {options.map((o, i) => {
          const checked = current === o.value;
          return (
            <button
              key={o.value}
              ref={(el) => {
                refs.current[i] = el;
              }}
              type="button"
              role="radio"
              aria-checked={checked}
              tabIndex={checked ? 0 : -1}
              className="ds-segmented__opt"
              onClick={() => select(o.value)}
              onKeyDown={(e) => handleKeyDown(e, i)}
            >
              {o.label}
            </button>
          );
        })}
      </div>
      {helper && <HelperText>{helper}</HelperText>}
    </div>
  );
}
