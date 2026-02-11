// lib/component-source.ts

export const COMPONENT_FILES = {
    "components/Button.tsx": `
  import React from 'react';
  import { cn } from '../utils';
  
  export const Button = ({ children, variant = "default", onClick }) => {
    const styles = {
      default: "bg-black text-white hover:bg-gray-800",
      destructive: "bg-red-500 text-white hover:bg-red-600",
      outline: "border border-gray-300 hover:bg-gray-100",
      ghost: "hover:bg-gray-100",
    };
    return (
      <button 
        onClick={onClick}
        className={cn("px-4 py-2 rounded-md text-sm font-medium transition-colors", styles[variant])}
      >
        {children}
      </button>
    );
  };
  `,
  
    "components/Card.tsx": `
  import React from 'react';
  
  export const Card = ({ title, description, children, footer }) => (
    <div className="border rounded-lg shadow-sm bg-white p-6">
      {(title || description) && (
        <div className="mb-4">
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
      )}
      <div className="mb-4">{children}</div>
      {footer && <div className="mt-4 pt-4 border-t">{footer}</div>}
    </div>
  );
  `,
  
    "components/Input.tsx": `
  import React from 'react';
  
  export const Input = ({ label, placeholder, type = "text" }) => (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input 
        type={type} 
        placeholder={placeholder}
        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
  `,
  
    "components/Table.tsx": `
  import React from 'react';
  
  export const Table = ({ headers, data }) => (
    <div className="w-full overflow-auto border rounded-md">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((h, i) => <th key={i} className="px-4 py-3 font-medium">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-t">
              {row.map((cell, j) => <td key={j} className="px-4 py-3">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  `,
  
    "components/Navbar.tsx": `
  import React from 'react';
  
  export const Navbar = ({ logo, links }) => (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-white">
      <div className="font-bold text-xl">{logo}</div>
      <div className="flex gap-6">
        {links.map((link, i) => (
          <a key={i} href={link.href} className="text-sm font-medium hover:underline">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
  `,
  
    "components/Sidebar.tsx": `
  import React from 'react';
  
  export const Sidebar = ({ items }) => (
    <div className="w-64 h-full border-r bg-gray-50 p-4 flex flex-col gap-2">
      {items.map((item, i) => (
        <button key={i} className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-200 text-left">
          <span>{item.icon === 'home' ? '🏠' : item.icon === 'settings' ? '⚙️' : '📄'}</span>
          {item.label}
        </button>
      ))}
    </div>
  );
  `,
  
    "components/Chart.tsx": `
  import React from 'react';
  
  export const Chart = ({ title, data }) => (
    <div className="p-4 border rounded-lg bg-white">
      <h4 className="mb-4 text-sm font-medium text-gray-900">{title}</h4>
      <div className="flex items-end gap-2 h-32">
        {data.map((d, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
            <div 
              className="w-full bg-blue-500 rounded-t-sm opacity-80 group-hover:opacity-100 transition-all"
              style={{ height: \`\${Math.min(d.value, 100)}%\` }}
            />
            <span className="text-xs text-gray-500">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
  `,
  
    "components/Modal.tsx": `
  import React from 'react';
  
  export const Modal = ({ isOpen, title, children, onClose }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">✕</button>
          <h2 className="text-lg font-bold mb-4">{title}</h2>
          <div>{children}</div>
        </div>
      </div>
    );
  };
  `,
  
    "components/Layout.tsx": `
  import React from 'react';
  
  export const VStack = ({ children, gap = 4 }) => (
    <div className={\`flex flex-col gap-\${gap}\`}>{children}</div>
  );
  
  export const HStack = ({ children, gap = 4 }) => (
    <div className={\`flex flex-row items-center gap-\${gap}\`}>{children}</div>
  );
  `,
  
    "utils.ts": `
  import { clsx, type ClassValue } from "clsx";
  import { twMerge } from "tailwind-merge";
  
  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
  `,
  };