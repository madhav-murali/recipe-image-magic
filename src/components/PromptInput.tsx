
import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
}

const PromptInput: React.FC<PromptInputProps> = ({ onSubmit, isLoading }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && !isLoading) {
      onSubmit(prompt);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <div className="relative w-full overflow-hidden rounded-2xl neo-morphism p-1">
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe a dish or ingredient..."
            className="flex-1 py-4 px-6 bg-transparent border-0 focus:ring-0 text-base focus:outline-none"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mr-2 transition-transform hover:scale-105 focus:outline-none disabled:opacity-50"
            disabled={isLoading || !prompt.trim()}
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </button>
        </form>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-2">
        Try "A rustic sourdough bread with rosemary" or "Spicy Thai noodle bowl"
      </p>
    </div>
  );
};

export default PromptInput;
