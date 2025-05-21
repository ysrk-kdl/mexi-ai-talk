
import { useState, useEffect } from 'react';
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
      <div className="bg-white px-4 py-3 rounded-lg shadow-md flex flex-col items-center">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-medium text-gray-800">MEXI AI</span>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        
        <button
          onClick={onClick}
          className={cn(
            "flex items-center justify-center py-3 px-6 rounded-lg shadow-md transition-all duration-300",
            "bg-blue-600 text-white w-64",
            isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
          )}
          aria-label="Open chat"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="font-medium">Mesaj yazın...</span>
        </button>
      </div>
    </div>
  );
};

export default ChatButton;
