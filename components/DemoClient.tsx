'use client'

import { Button } from '@/components/ui/Button'
import { ArrowRight, Send, Bot } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function DemoClient() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI employee. I can help with scheduling, answering questions, and handling tasks. What would you like to try?",
      sender: 'ai',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const predefinedResponses = {
    'schedule': "I'd be happy to help you schedule an appointment! What type of service are you looking for?",
    'pricing': "Our pricing starts at $500/month for basic automation. Would you like me to connect you with our team for a custom quote?",
    'hours': "We're available 24/7! Our AI employee never sleeps and can handle inquiries at any time.",
    'support': "I can help with most common questions. For complex issues, I'll connect you with our human support team.",
    'demo': "Great! I can show you how I handle different types of requests. Try asking me about scheduling, pricing, or support."
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const lowerInput = inputValue.toLowerCase()
      let response = "I understand you're asking about that. Let me help you with that request. Would you like me to connect you with our team for more detailed assistance?"

      if (lowerInput.includes('schedule') || lowerInput.includes('appointment')) {
        response = predefinedResponses.schedule
      } else if (lowerInput.includes('price') || lowerInput.includes('cost')) {
        response = predefinedResponses.pricing
      } else if (lowerInput.includes('hour') || lowerInput.includes('time')) {
        response = predefinedResponses.hours
      } else if (lowerInput.includes('support') || lowerInput.includes('help')) {
        response = predefinedResponses.support
      } else if (lowerInput.includes('demo') || lowerInput.includes('try')) {
        response = predefinedResponses.demo
      }

      const aiMessage = {
        id: messages.length + 2,
        text: response,
        sender: 'ai',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Demo Interface */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-light rounded-lgx overflow-hidden">
            {/* Chat Header */}
            <div className="bg-brand-lime/10 p-4 border-b border-brand-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-lime/20 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-brand-lime" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-ink">AI Employee</h3>
                  <p className="text-xs text-brand-gray">Online • Ready to help</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-brand-lime text-brand-ink'
                          : 'bg-brand-light/50 text-brand-ink'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-brand-light/50 text-brand-ink px-4 py-2 rounded-lg">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-brand-gray rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-brand-gray rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-brand-gray rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-brand-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Try asking about scheduling, pricing, or support..."
                  className="flex-1 px-3 py-2 border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-lime focus:border-transparent"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  variant="primary"
                  size="sm"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Demo Tips */}
          <div className="mt-8 text-center">
            <p className="text-sm text-brand-gray mb-4">Try these example questions:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['Schedule an appointment', 'What are your prices?', 'What are your hours?', 'I need support'].map((example, index) => (
                <button
                  key={index}
                  onClick={() => setInputValue(example)}
                  className="px-3 py-1 bg-brand-light/50 text-brand-ink rounded-full text-sm hover:bg-brand-lime/20 transition-colors"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
