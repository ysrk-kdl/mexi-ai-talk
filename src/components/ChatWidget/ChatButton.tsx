
import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatButton = ({ onClick, isOpen }: ChatButtonProps) => {
  const [borderPosition, setBorderPosition] = useState(0);
  
  // Animation for flowing border
  useEffect(() => {
    if (isOpen) return;
    
    const interval = setInterval(() => {
      setBorderPosition(prev => (prev + 1) % 400); // 400 is the total perimeter values
    }, 50); // Speed of animation
    
    return () => clearInterval(interval);
  }, [isOpen]);
  
  // Calculate border gradient position
  const getBorderStyle = () => {
    return {
      background: `linear-gradient(90deg, 
        rgba(59, 130, 246, 0.1) ${borderPosition}%, 
        rgba(59, 130, 246, 0.8) ${borderPosition + 10}%, 
        rgba(59, 130, 246, 0.1) ${borderPosition + 20}%)`,
      backgroundSize: '400% 100%'
    };
  };
  
  return (
    <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center">
      <div className="text-xl font-semibold mb-3">MEXI AI</div>
      
      <button
        onClick={onClick}
        className={cn(
          "flex items-center justify-center p-4 rounded-full shadow-lg transition-all duration-300",
          "bg-blue-600 hover:bg-blue-700 text-white",
          "border-4 overflow-hidden",
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        )}
        style={getBorderStyle()}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="ml-2 font-medium">Mesaj yazın...</span>
      </button>
    </div>
  );
};

export default ChatButton;
