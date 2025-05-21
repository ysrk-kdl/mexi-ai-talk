
import React, { useEffect, useRef, useState } from 'react';
import { Send } from 'lucide-react';
import MessageBubble from './MessageBubble';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

interface ChatConversationProps {
  topic: string;
  sessionId: string;
  onResetSession: () => void;
  messages: Message[];
  onMessagesUpdate: (messages: Message[]) => void;
}

const ChatConversation = ({ 
  topic, 
  sessionId, 
  onResetSession,
  messages,
  onMessagesUpdate
}: ChatConversationProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Display welcome message initially if there are no messages
  useEffect(() => {
    if (messages.length === 0) {
      onMessagesUpdate([
        {
          id: 'welcome',
          text: `Yatırım ve finans dünyasında size rehberlik etmek için buradayım. Başlamak için bir soru sorun:`,
          isUser: false,
        }
      ]);
    }
    
    // Focus the input field
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [topic]);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;
    
    const userMessage = inputValue.trim();
    setInputValue('');
    
    const newUserMessage = {
      id: `user-${Date.now()}`,
      text: userMessage,
      isUser: true,
    };
    
    const updatedMessages = [...messages, newUserMessage];
    onMessagesUpdate(updatedMessages);
    
    setIsLoading(true);
    
    try {
      const payload = {
        message: userMessage,
        session_id: sessionId,
        title: topic
      };
      
      const response = await fetch('https://mexiai.app.n8n.cloud/webhook/v1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response');
      }
      
      const data = await response.json();
      
      // Updated response handling for array format
      if (Array.isArray(data) && data.length > 0 && data[0].output) {
        const botMessage = {
          id: `bot-${Date.now()}`,
          text: data[0].output,
          isUser: false,
        };
        
        onMessagesUpdate([...updatedMessages, botMessage]);
      } else if (data && data.output) {
        // Fallback for previous format
        const botMessage = {
          id: `bot-${Date.now()}`,
          text: data.output,
          isUser: false,
        };
        
        onMessagesUpdate([...updatedMessages, botMessage]);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage = {
        id: `error-${Date.now()}`,
        text: 'Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.',
        isUser: false,
      };
      
      onMessagesUpdate([...updatedMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = async () => {
    // Find the last user message
    const lastUserMessage = [...messages].reverse().find(msg => msg.isUser);
    
    if (lastUserMessage && !isLoading) {
      setInputValue(lastUserMessage.text);
      // Send the last user message again without clearing the conversation
      const payload = {
        message: lastUserMessage.text,
        session_id: sessionId,
        title: topic
      };
      
      setIsLoading(true);
      
      try {
        const response = await fetch('https://mexiai.app.n8n.cloud/webhook/v1', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        
        if (!response.ok) {
          throw new Error('Failed to get response');
        }
        
        const data = await response.json();
        
        if (Array.isArray(data) && data.length > 0 && data[0].output) {
          const botMessage = {
            id: `bot-${Date.now()}`,
            text: data[0].output,
            isUser: false,
          };
          
          onMessagesUpdate([...messages, botMessage]);
        } else if (data && data.output) {
          // Fallback for previous format
          const botMessage = {
            id: `bot-${Date.now()}`,
            text: data.output,
            isUser: false,
          };
          
          onMessagesUpdate([...messages, botMessage]);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error('Error sending message:', error);
        
        const errorMessage = {
          id: `error-${Date.now()}`,
          text: 'Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.',
          isUser: false,
        };
        
        onMessagesUpdate([...messages, errorMessage]);
      } finally {
        setIsLoading(false);
        setInputValue('');
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <MessageBubble 
            key={message.id} 
            message={message.text} 
            isUser={message.isUser} 
          />
        ))}
        
        {isLoading && (
          <div className="flex items-center mb-3">
            <div className="bg-gray-100 text-gray-500 p-3 rounded-lg rounded-bl-none">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {messages.length > 1 && (
        <div className="flex justify-center pb-3">
          <button 
            onClick={handleRetry}
            className="mr-2 px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
          >
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 9V3M21 3H15M21 3L13 11M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Tekrar Dene
            </span>
          </button>
          <button 
            onClick={onResetSession}
            className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
          >
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H5M5 6H21M5 6V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V6M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6M10 11V16M14 11V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Sohbeti Temizle
            </span>
          </button>
        </div>
      )}
      
      <div className="p-3 border-t border-gray-200">
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <input
            ref={inputRef}
            type="text"
            placeholder="Mesaj yazın..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-500"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || !inputValue.trim()}
            className={cn(
              "p-2 rounded-full ml-2 transition-colors",
              inputValue.trim() && !isLoading
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            )}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatConversation;
