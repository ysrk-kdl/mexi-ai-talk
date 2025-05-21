
import { useState, useEffect } from 'react';
import { CircleDotDashed } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatButton = ({ onClick, isOpen }: ChatButtonProps) => {
  const [animationState, setAnimationState] = useState(0);
  
  // Animation for AI-inspired effect
  useEffect(() => {
    if (isOpen) return;
    
    const interval = setInterval(() => {
      setAnimationState(prev => (prev + 1) % 100);
    }, 50);
    
    return () => clearInterval(interval);
  }, [isOpen]);
  
  return (
    <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center">
      <div className="text-xl font-semibold mb-3 text-white drop-shadow-lg">MEXI AI</div>
      
      <button
        onClick={onClick}
        className={cn(
          "flex items-center justify-center p-4 rounded-full shadow-lg transition-all duration-300",
          "bg-blue-700 hover:bg-blue-800 text-white",
          "border-2 border-blue-500 relative",
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        )}
        style={{
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 2px rgba(59, 130, 246, 0.5)'
        }}
        aria-label="Open chat"
      >
        {/* AI-inspired animation overlay */}
        <div 
          className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${50 + Math.sin(animationState / 15) * 30}% ${50 + Math.cos(animationState / 15) * 30}%, rgba(99, 102, 241, 0.7) 0%, rgba(99, 102, 241, 0) 70%)`
          }}
        />
        
        {/* Icon with pulse effect */}
        <div className="relative mr-2">
          <CircleDotDashed className="w-6 h-6" />
          <div className="absolute inset-0 rounded-full animate-pulse opacity-70 bg-blue-300 z-[-1]"></div>
        </div>
        
        <span className="font-medium">Mesaj yazın...</span>
      </button>
    </div>
  );
};

export default ChatButton;
