
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ChatButton from './ChatButton';
import ChatHeader from './ChatHeader';
import TopicSelection from './TopicSelection';
import ChatConversation from './ChatConversation';
import { cn } from '@/lib/utils';

// Interface for topic sessions
interface TopicSession {
  topic: string;
  sessionId: string;
}

// Interface for message storage
interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

const ChatWidget = () => {
  // States
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'topics' | 'conversation'>('topics');
  const [activeTopic, setActiveTopic] = useState<TopicSession | null>(null);
  const [topicSessions, setTopicSessions] = useState<Record<string, string>>({});
  const [topicMessages, setTopicMessages] = useState<Record<string, Message[]>>({});
  
  // Close widget on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEscapeKey);
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);
  
  // Toggle chat widget
  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };
  
  // Close chat widget
  const closeWidget = () => {
    setIsOpen(false);
  };
  
  // Handle topic selection
  const handleSelectTopic = (topicName: string) => {
    // Check if session exists for this topic
    let sessionId = topicSessions[topicName];
    
    // If no session exists, create a new one
    if (!sessionId) {
      sessionId = uuidv4();
      setTopicSessions(prev => ({
        ...prev,
        [topicName]: sessionId
      }));
    }
    
    // Initialize messages for this topic if they don't exist
    if (!topicMessages[topicName]) {
      setTopicMessages(prev => ({
        ...prev,
        [topicName]: [
          {
            id: 'welcome',
            text: `Yatırım ve finans dünyasında size rehberlik etmek için buradayım. Başlamak için bir soru sorun:`,
            isUser: false,
          }
        ]
      }));
    }
    
    setActiveTopic({
      topic: topicName,
      sessionId
    });
    setCurrentView('conversation');
  };
  
  // Handle going back to topics
  const handleBackToTopics = () => {
    setCurrentView('topics');
  };
  
  // Reset session for current topic
  const handleResetSession = () => {
    if (activeTopic) {
      const newSessionId = uuidv4();
      setTopicSessions(prev => ({
        ...prev,
        [activeTopic.topic]: newSessionId
      }));
      
      // Clear messages for this topic
      setTopicMessages(prev => ({
        ...prev,
        [activeTopic.topic]: [
          {
            id: 'welcome',
            text: `Yatırım ve finans dünyasında size rehberlik etmek için buradayım. Başlamak için bir soru sorun:`,
            isUser: false,
          }
        ]
      }));
      
      setActiveTopic({
        ...activeTopic,
        sessionId: newSessionId
      });
      
      // Go back to topics view
      setCurrentView('topics');
    }
  };

  return (
    <>
      {/* Chat toggle button */}
      <ChatButton onClick={toggleWidget} isOpen={isOpen} />
      
      {/* Chat widget */}
      <div 
        className={cn(
          "fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-lg shadow-xl transition-all duration-300",
          "flex flex-col border border-gray-200",
          isOpen ? "w-[80%] h-[600px] max-h-[80vh] opacity-100" : "h-0 opacity-0 invisible"
        )}
      >
        {/* Header */}
        <ChatHeader 
          onClose={closeWidget}
          onBack={currentView === 'conversation' ? handleBackToTopics : undefined}
          showBackButton={currentView === 'conversation'}
          title="MEXI AI"
          subtitle={currentView === 'conversation' ? activeTopic?.topic : undefined}
        />
        
        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {currentView === 'topics' ? (
            <TopicSelection onSelectTopic={handleSelectTopic} />
          ) : currentView === 'conversation' && activeTopic ? (
            <ChatConversation 
              topic={activeTopic.topic}
              sessionId={activeTopic.sessionId}
              onResetSession={handleResetSession}
              messages={topicMessages[activeTopic.topic] || []}
              onMessagesUpdate={(messages) => {
                setTopicMessages(prev => ({
                  ...prev,
                  [activeTopic.topic]: messages
                }));
              }}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
