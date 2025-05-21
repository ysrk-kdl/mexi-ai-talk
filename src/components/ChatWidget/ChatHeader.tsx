
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatHeaderProps {
  onClose: () => void;
  onBack?: () => void;
  showBackButton?: boolean;
  title: string;
  subtitle?: string;
}

const ChatHeader = ({ 
  onClose, 
  onBack, 
  showBackButton = false, 
  title, 
  subtitle 
}: ChatHeaderProps) => {
  return (
    <div className="flex flex-col border-b border-gray-200">
      <div className="flex items-center justify-between p-4 bg-white">
        <div className="flex items-center">
          {showBackButton && (
            <button 
              onClick={onBack} 
              className="mr-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
          )}
          <div>
            <h3 className="font-semibold text-gray-900 flex items-center">
              MEXI AI
              <span className="ml-2 w-2 h-2 bg-green-500 rounded-full"></span>
            </h3>
            {subtitle && (
              <p className="text-xs text-gray-500">{subtitle}</p>
            )}
          </div>
        </div>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close chat"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
