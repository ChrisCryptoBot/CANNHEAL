import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text-primary mb-2">
            {label}
            {props.required && <span className="text-error ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={`input ${error ? 'input-error' : ''} ${className}`.trim()}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-error animate-slide-down">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-text-tertiary">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
