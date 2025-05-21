
import React from 'react';
import { cn } from '@/lib/utils';

interface MessageBubbleProps {
  message: string;
  isUser: boolean;
}

const MessageBubble = ({ message, isUser }: MessageBubbleProps) => {
  // Parse message for formatting (bold text)
  const formatMessage = (text: string) => {
    // Replace **text** or #text# with bold tags
    const formattedText = text
      .split(/(\*\*.*?\*\*|#.*?#)/g)
      .map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('#') && part.endsWith('#')) {
          return <strong key={index}>{part.slice(1, -1)}</strong>;
        }
        return part;
      });

    return formattedText;
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
