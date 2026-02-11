"use client";

import { useChat } from "ai/react";
import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview } from "@codesandbox/sandpack-react";
import { COMPONENT_FILES } from "@/lib/component-source";
import { useState } from "react";

const INITIAL_CODE = `import React from 'react';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { VStack } from './components/Layout';

export default function App() {
  return (
    <div className="p-8 font-sans">
      <Card title="Welcome to Ryze UI" description="This is your deterministic preview.">
        <VStack gap={4}>
          <p>Describe a UI in the chat to generate it here.</p>
          <Button>Click Me</Button>
        </VStack>
      </Card>
    </div>
  );
}
`;

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const [code, setCode] = useState(INITIAL_CODE);

  // Merge the dynamic code (App.js) with our fixed component library
  const sandpackFiles = {
    "App.js": code,
    ...COMPONENT_FILES
  };

  return (
    <main className="flex h-screen flex-col md:flex-row bg-neutral-900 text-white overflow-hidden">
      
      {/* LEFT PANEL: Chat Interface */}
      <section className="flex flex-col w-full md:w-1/3 border-r border-neutral-800 bg-neutral-950">
        <header className="p-4 border-b border-neutral-800 font-bold text-lg flex items-center gap-2">
           Ryze AI Agent
        </header>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="text-neutral-500 text-sm mt-10 text-center">
              Describe a UI (e.g., "A login card with email and password")
            </div>
          )}
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-lg px-4 py-2 text-sm ${
                m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-neutral-800 text-neutral-200'
              }`}>
                {m.content}
              </div>
            </div>
          ))}
          {isLoading && <div className="text-neutral-500 text-xs animate-pulse">Thinking...</div>}
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-neutral-800">
          <input
            className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={input}
            onChange={handleInputChange}
            placeholder="Describe your UI..."
          />
        </form>
      </section>

      {/* RIGHT PANEL: Live Preview & Code */}
      <section className="flex-1 flex flex-col h-full">
        <SandpackProvider
          template="react"
          theme="dark"
          files={sandpackFiles}
          options={{
            externalResources: ["https://cdn.tailwindcss.com"],
          }}
        >
          <SandpackLayout className="h-full !rounded-none !border-none">
            <SandpackCodeEditor 
              showTabs 
              showLineNumbers={true} 
              showInlineErrors 
              wrapContent 
              closableTabs 
              className="h-full hidden xl:block border-r border-neutral-800" 
              style={{ flex: 1 }}
            />
            <SandpackPreview 
              className="h-full" 
              showNavigator={true} 
              showRefreshButton={true}
              style={{ flex: 1.5 }}
            />
          </SandpackLayout>
        </SandpackProvider>
      </section>
    </main>
  );
}