import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Icon } from './index';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to Little York Smoke Shop. How can we help you today?",
      sender: 'support',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);
    setInputValue('');

    // Simulate support response
    setTimeout(() => {
      const supportMessage = {
        id: messages.length + 2,
        text: "Thanks for your message! Our team will get back to you shortly. In the meantime, feel free to check out our FAQ or call us at (713) 555-0123.",
        sender: 'support',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, supportMessage]);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-accent text-white rounded-full shadow-lg shadow-accent/30 flex items-center justify-center hover:bg-accent-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-base"
        aria-label={isOpen ? 'Close live chat' : 'Open live chat'}
        aria-expanded={isOpen}
      >
        <Icon name={isOpen ? 'close' : 'mail'} className="w-6 h-6" ariaLabel={isOpen ? 'Close' : 'Chat'} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-40 right-6 z-50 w-80 md:w-96 bg-surface-base border border-border rounded-2xl shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="live-chat-title"
          >
            {/* Header */}
            <div className="bg-accent p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <Icon name="mail" className="text-white w-5 h-5" ariaLabel="Chat" />
                </div>
                <div>
                  <h3 id="live-chat-title" className="text-white font-semibold">
                    Live Chat
                  </h3>
                  <p className="text-white/80 text-sm">We typically reply within minutes</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent rounded"
                aria-label="Close live chat"
              >
                <Icon name="close" className="w-5 h-5" ariaLabel="Close" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4" aria-live="polite" aria-atomic="false">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-accent text-white'
                        : 'bg-surface-card text-text'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-white/70' : 'text-text-dim'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-border">
              <div className="flex gap-2">
                <label htmlFor="chat-input" className="sr-only">
                  Type your message
                </label>
                <input
                  type="text"
                  id="chat-input"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-surface-card border border-border rounded-lg text-text placeholder-text-dim focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  disabled={!inputValue.trim()}
                  ariaLabel="Send message"
                >
                  <Icon name="arrowRight" className="w-4 h-4" ariaLabel="Send" />
                </Button>
              </div>
            </form>

            {/* Footer */}
            <div className="px-4 py-2 bg-surface-card border-t border-border">
              <p className="text-xs text-text-dim text-center">
                Or call us at{' '}
                <a href="tel:+17135550123" className="text-accent hover:underline">
                  (713) 555-0123
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
