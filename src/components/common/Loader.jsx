import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

export function Loader({ className, size = 24 }) {
  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <Loader2 
        size={size} 
        className={cn("animate-spin text-brand-red", className)} 
      />
    </div>
  );
}
