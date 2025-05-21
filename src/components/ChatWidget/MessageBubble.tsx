
import React from 'react';
import { cn } from '@/lib/utils';

interface MessageBubbleProps {
  message: string;
  isUser: boolean;
}

const MessageBubble = ({ message, isUser }: MessageBubbleProps) => {
  // Parse message for formatting (bold text)
  const formatMessage = (text: string) => {
    // First identify URLs for later processing
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const textWithPlaceholders = text.replace(urlRegex, '{{URL_PLACEHOLDER_$&}}');
    
    // Process bold formatting
    const processedText = textWithPlaceholders
      .split(/(\*\*.*?\*\*|#.*?#)/g)
      .map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('#') && part.endsWith('#')) {
          return <strong key={index}>{part.slice(1, -1)}</strong>;
        }
        
        // Replace URL placeholders back with actual clickable links
        if (part.includes('{{URL_PLACEHOLDER_')) {
          const segments = part.split(/(\{\{URL_PLACEHOLDER_https?:\/\/[^\}]+\}\})/g);
          
          return segments.map((segment, segmentIndex) => {
            if (segment.startsWith('{{URL_PLACEHOLDER_')) {
              const url = segment.replace('{{URL_PLACEHOLDER_', '').replace('}}', '');
              return (
                <a 
                  key={`${index}-${segmentIndex}`} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {url}
                </a>
              );
            }
            return segment;
          });
        }
        
        return part;
      });

    return processedText;
  };

  return (
    <div
      className={cn(
        "mb-3 max-w-[85%]",
        isUser ? "ml-auto" : "mr-auto"
      )}
    >
      <div
        className={cn(
          "p-3 rounded-lg whitespace-pre-wrap",
          isUser 
            ? "bg-blue-600 text-white rounded-br-none" 
            : "bg-gray-100 text-gray-800 rounded-bl-none"
        )}
      >
        {formatMessage(message)}
      </div>
    </div>
  );
};

export default MessageBubble;
