import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { GoogleGenAI } from '@google/genai';
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Minimize2,
  Maximize2
} from 'lucide-react';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Welcome. I\'m your Senior Digital Strategy Consultant Cyon from Cyonex Lab. How can I assist you with your web, e-commerce, or SaaS strategy today?',
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey] = useState();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
  const systemInstruction = `
  You are Cyon a **Senior Digital Strategy Consultant** at Cyonex Lab, a premium web development and digital transformation agency. You embody expertise, professionalism, and enthusiasm for cutting-edge technology. Your goal is to advise potential clients, showcasing Cyonex Lab's commitment to strategic design, robust engineering, and delivering a superior digital product.

**Core Mission (Your Role):**
- **Advise & Educate:** Explain Cyonex Lab's quality-driven web development services and strategic offerings.
- **Provide Estimates:** Offer clear pricing tiers and realistic project timelines based on our strategic plans.
- **Demonstrate Expertise:** Confidently answer technical and business questions about modern web technologies (e.g., headless CMS, Jamstack, design thinking, conversion rate optimization), e-commerce, SaaS, mobile apps, and UI/UX best practices.
- **Guide Process:** Clearly explain our collaborative process and what a client can expect when partnering with us.
- **Consultative Voice:** Always speak as a Cyonex Lab expert. Refer to our sophisticated offerings directly.

**Cyonex Lab's Strategic Offerings:**
- Custom Web Development (using modern, scalable frameworks)
- E-commerce Solutions (Shopify, WooCommerce, bespoke solutions focused on CRO)
- SaaS Platform Development (end-to-end, scalable architecture)
- Mobile App Development (native and cross-platform)
- Premium UI/UX Design & Prototyping
- Advanced SEO & Digital Strategy Services
- Proactive Maintenance & Elite Support

**Cyonex Lab's Strategic Pricing Plans:**
We offer tiered solutions with transparent pricing, broken down into a Standard track for essentials and an Enterprise track for bespoke, high-touch requirements. All prices are in **GBP (£)**.

| Plan | Best For | Standard Price | Enterprise Price | Ongoing (Annual) | Key Standard Features |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Starter Website** | Freelancers / Simple Presence | **£450 - £900** | **£1,000 - £1,800** | £150 - £350 | Up to 3 sections, responsive design, basic SEO, contact form. |
| **2. Professional Business Website** (Popular) | Growing Businesses (5-10 Pages) | **£1,200 - £2,500** | **£2,800 - £4,500** | £250 - £500 | Up to 10 pages, custom responsive layout, on-page SEO, blog setup, Google Analytics. |
| **3. Hospitality & Service** | Restaurants, Hotels, Spas, Services | **£2,500 - £4,000** | **£4,500 - £7,000** | £300 - £700 | Menu/service listings, booking/reservation forms, gallery, social integration. |
| **4. Ecommerce Website** | Online Stores (Physical/Digital Products) | **£5,000 - £10,000+** | **£10,000 - £18,000+** | £2,000 - £3,500 | Product catalog, secure checkout, inventory management, customer accounts, marketing tools. |

**Response Guidelines:**
- **Tone:** Professional, authoritative, and consultative. Emphasize Cyonex Lab's strategic value and quality.
- **Conciseness is Critical:** Keep responses brief, direct, and highly focused. Only provide the information strictly necessary to answer the client's question.
- **Next Step:** If a client needs a detailed, project-specific quote, immediately direct them to fill out our dedicated **quote form** for a tailored consultation.
  `;
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const [streamingResponse, setStreamingResponse] = useState('');

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  // This function is the core of the streaming update
  const handleChunk = useCallback(async (newChunk: string, scrollToBottom: () => void) => {
    // Split the incoming chunk by space to get an array of words (and trailing spaces/punctuation)
    const words = newChunk.split(/(\s+)/).filter(w => w.length > 0);

    for (const word of words) {
        // Use the functional update form of useState to safely append the new word
        setStreamingResponse(prev => {
            const newText = prev + word;
            // Scroll after appending each "word" (which can include spaces)
            scrollToBottom();
            return newText;
        });
        
        // Introduce a small delay to create the "typing" effect
        await new Promise(resolve => setTimeout(resolve, 25)) // Adjust this delay for faster or slower typing
    }
  }, []); // Dependencies are stable

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
      timestamp: new Date()
    };

    // 1. Add user message
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Initialize the streaming state
    setStreamingResponse('');

    // FIX 3: Use a local variable to accumulate the full response correctly
    let fullResponse = '';

    // Create a NEW, local chunk handler that accumulates and calls the UI handler
    const localChunkAccumulator = (chunk: string) => {
      fullResponse += chunk; // Accumulate the full, RAW response text
    }

    try {
      // 2. Start the stream, passing the accumulator and the main UI handler
      await getGeminiCompletion(messages, inputValue, localChunkAccumulator, handleChunk, scrollToBottom);

      // 3. After the stream is COMPLETE, finalize the message in chat history
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: fullResponse, // Use the complete, accumulated response
        role: 'assistant',
        timestamp: new Date()
      };

      // Update the permanent messages list with the full response
      setMessages(prev => [...prev, assistantMessage]);

    } catch (error) {
      console.error('Gemini API Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error. Please check your API key and try again.',
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      // 4. Clear the temporary streaming state
      setStreamingResponse('');
      setIsLoading(false);
    }
  };

  /**
 * Converts a list of OpenAI-style messages (role/content) into Gemini-style contents (role/parts).
 * Note: OpenAI's 'assistant' role maps to Gemini's 'model' role.
 * @param {Array<Object>} messages - Array of previous chat messages.
 * @param {string} finalUserInput - The current user input.
 * @returns {Array<Object>} Gemini Content array.
 */
  function formatContents(messages, finalUserInput) {
    // Convert previous history
    const history = messages
      .filter(msg => msg.role !== 'system') // System message handled separately
      .map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user', // Map 'assistant' to 'model'
        parts: [{ text: msg.content }],
      }));

    // Add the final user message
    history.push({
      role: 'user',
      parts: [{ text: finalUserInput }],
    });

    return history;
  }

  // --- Your main function ---
  // Function outside of the component (or in a utility file)
  // Pass a callback to handle each streamed chunk
  async function getGeminiCompletion(
    previousMessages: Message[],
    currentInputValue: string,
    onChunkAccumulated: (chunk: string) => void,
    onChunkReceived: (chunk: string, scrollFn: () => void) => Promise<void>,
    scrollToBottom: () => void
  ) {
    try {
      const contents = formatContents(previousMessages, currentInputValue);

      const response = await ai.models.generateContentStream({
        model: 'gemini-2.5-flash',
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
          maxOutputTokens: 500,
        }
      });
      if(response){
        setIsLoading(false);
      }

      // Process the streaming response:
      for await (const chunk of response) {
        if (chunk.text) {
          // 1. Accumulate the full, raw text immediately for the final history message
          onChunkAccumulated(chunk.text);

          // 2. Send the chunk to the word-processing display handler
          await onChunkReceived(chunk.text, scrollToBottom);
        }
      }

    } catch (error) {
      console.error('Gemini API Error:', error);
      throw error;
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-gradient-primary shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`bg-background border shadow-2xl transition-all duration-300 ${isMinimized ? 'w-80 h-16' : 'w-80 h-96'
        }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-primary text-white rounded-t-lg">
          <div className="flex items-center space-x-2">
            <Bot className="w-5 h-5" />
            <span className="font-semibold">Cyon AI Chatbot</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-white/20 h-6 w-6 p-0"
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-6 w-6 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 h-64">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                        }`}
                    >
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${message.role === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-muted text-muted-foreground'
                        }`}>
                        {message.role === 'user' ? (
                          <User className="w-4 h-4" />
                        ) : (
                          <Bot className="w-4 h-4" />
                        )}
                      </div>
                      <div>
                        <div
                          className={`rounded-lg px-3 py-2 text-sm ${message.role === 'user'
                            ? 'bg-primary text-white'
                            : 'bg-muted text-foreground'
                            }`}
                        >
                          {message.content}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {formatTime(message.timestamp)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Display the actively streaming response */}
                {streamingResponse && (
                  <div
                    key={new Date().getTime().toString()}
                    className="flex justify-start">
                    <div
                      className="flex items-start space-x-2 max-w-[80%]">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 bg-muted text-muted-foreground">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div>
                        <div
                          className="rounded-lg px-3 py-2 text-sm bg-muted text-foreground">
                          {streamingResponse}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {formatTime(new Date())}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-muted rounded-lg px-3 py-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="Ask about our services, pricing, or anything..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  disabled={isLoading}
                />
                <Button
                  onClick={sendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  className="px-3"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default ChatWidget;