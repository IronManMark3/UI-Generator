// lib/manifest.ts
export const MANIFEST = [
    {
      name: "Button",
      description: "A clickable button. Use for actions, not navigation.",
      props: [
        { name: "children", type: "string", description: "Button text" },
        { name: "variant", type: "string", allowedValues: ["default", "destructive", "outline", "ghost"] },
        { name: "onClick", type: "function", description: "Click handler" }
      ],
    },
    {
      name: "Card",
      description: "A container for content with a header and footer.",
      props: [
        { name: "title", type: "string" },
        { name: "description", type: "string" },
        { name: "children", type: "ReactNode" },
        { name: "footer", type: "ReactNode" },
      ],
    },
    {
      name: "Input",
      description: "A text input field.",
      props: [
        { name: "label", type: "string" },
        { name: "placeholder", type: "string" },
        { name: "type", type: "string", allowedValues: ["text", "email", "password"] },
      ],
    },
    {
      name: "Table",
      description: "A simple data table.",
      props: [
        { name: "headers", type: "Array<string>", description: "Column headers" },
        { name: "data", type: "Array<Array<string>>", description: "Rows of data matching headers" },
      ],
    },
    {
      name: "Navbar",
      description: "Top navigation bar.",
      props: [
        { name: "logo", type: "string", description: "Brand text" },
        { name: "links", type: "Array<{label: string, href: string}>" },
      ],
    },
    {
      name: "Sidebar",
      description: "Side navigation menu.",
      props: [
        { name: "items", type: "Array<{icon: string, label: string}>" },
      ],
    },
    {
      name: "Modal",
      description: "An overlay dialog.",
      props: [
        { name: "isOpen", type: "boolean" },
        { name: "title", type: "string" },
        { name: "children", type: "ReactNode" },
        { name: "onClose", type: "function" },
      ],
    },
    {
      name: "Chart",
      description: "A visual mock chart (Bar type).",
      props: [
        { name: "title", type: "string" },
        { name: "data", type: "Array<{label: string, value: number}>" },
      ],
    },
    {
      name: "VStack",
      description: "Vertical layout stack.",
      props: [
        { name: "children", type: "ReactNode" },
        { name: "gap", type: "number", allowedValues: [2, 4, 8] },
      ],
    },
    {
      name: "HStack",
      description: "Horizontal layout stack.",
      props: [
        { name: "children", type: "ReactNode" },
        { name: "gap", type: "number", allowedValues: [2, 4, 8] },
      ],
    },
  ];