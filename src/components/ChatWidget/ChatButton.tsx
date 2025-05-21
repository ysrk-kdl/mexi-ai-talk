
import { useState, useEffect } from 'react';
import { CircuitBoard } from 'lucide-react';
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
      <div className="text-xl font-bold mb-3 text-white drop-shadow-lg flex items-center gap-2">
        <CircuitBoard className="h-5 w-5 text-blue-400" />
        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">MEXI AI</span>
      </div>
      
      <button
        onClick={onClick}
        className={cn(
          "flex items-center justify-center p-4 rounded-lg shadow-lg transition-all duration-300",
          "bg-[#1A1F2C] text-white border border-blue-500 relative",
          "ai-circuit-pattern ai-circuit-border ai-circuit-nodes ai-data-particles",
          "ai-widget-shadow",
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        )}
        aria-label="Open chat"
      >
        {/* Technical node elements */}
        <div className="absolute top-0 right-0 w-3 h-3 bg-blue-400 rounded-full opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-blue-400 rounded-full opacity-70"></div>
        
        {/* Icon with pulse effect */}
        <div className="relative mr-2 ai-pulse-node">
          <CircuitBoard className="w-6 h-6 text-blue-400" />
        </div>
        
        <span className="font-medium text-blue-100">Mesaj yazın...</span>
      </button>
    </div>
  );
};

export default ChatButton;
