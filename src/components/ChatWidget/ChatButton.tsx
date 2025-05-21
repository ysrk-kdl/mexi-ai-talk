
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatButton = ({ onClick, isOpen }: ChatButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed left-1/2 bottom-6 transform -translate-x-1/2 z-50 flex items-center justify-center p-4 rounded-full shadow-lg transition-all duration-300",
        "bg-blue-600 hover:bg-blue-700 text-white",
        "border-4 border-blue-400 animate-pulse",
        isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
      )}
      aria-label="Open chat"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="ml-2 font-medium">Mesaj yazın...</span>
    </button>
  );
};

export default ChatButton;
