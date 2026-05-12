import { cn } from '../../utils/cn';

export function Button({ className, variant = 'primary', size = 'md', children, isLoading, ...props }) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    primary: 'bg-brand-red text-white hover:bg-red-700 shadow-sm',
    secondary: 'bg-brand-soft-red text-brand-red hover:bg-red-200',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-900',
    ghost: 'hover:bg-gray-100 hover:text-gray-900 text-gray-700',
  };

  const sizes = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 py-2 text-sm',
    lg: 'h-12 px-8 text-base',
    icon: 'h-10 w-10',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      {children}
    </button>
  );
}
