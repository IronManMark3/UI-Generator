// lib/manifest.ts

export const MANIFEST = [
    {
      name: "Button",
      description: "A clickable button used for actions. Do not use for navigation.",
      props: [
        { name: "children", type: "string", description: "The text inside the button" },
        { 
          name: "variant", 
          type: "string", 
          allowedValues: ["default", "destructive", "outline", "secondary", "ghost", "link"],
          description: "The visual style of the button"
        },
        { name: "size", type: "string", allowedValues: ["default", "sm", "lg", "icon"] },
      ],
    },
    {
      name: "Card",
      description: "A container for grouping related content.",
      props: [
        { name: "title", type: "string", description: "The heading of the card" },
        { name: "description", type: "string", description: "Sub-heading or explanatory text" },
        { name: "children", type: "ReactNode", description: "The content inside the card" },
        { name: "footer", type: "ReactNode", description: "Actions or text at the bottom of the card" },
      ],
    },
    {
      name: "Input",
      description: "A text field for user input.",
      props: [
        { name: "placeholder", type: "string", description: "Placeholder text" },
        { name: "label", type: "string", description: "Label text above the input" },
        { name: "type", type: "string", allowedValues: ["text", "email", "password", "number"] },
      ],
    },
    {
      name: "VStack",
      description: "Vertical stack layout. Renders a flex column with gap.",
      props: [
        { name: "children", type: "ReactNode" },
        { name: "gap", type: "number", allowedValues: [0, 2, 4, 6, 8], description: "Gap between items (tailwind units)" },
        { name: "align", type: "string", allowedValues: ["start", "center", "end", "stretch"] },
      ],
    },
    {
      name: "HStack",
      description: "Horizontal stack layout. Renders a flex row with gap.",
      props: [
        { name: "children", type: "ReactNode" },
        { name: "gap", type: "number", allowedValues: [0, 2, 4, 6, 8] },
        { name: "justify", type: "string", allowedValues: ["start", "center", "end", "between"] },
      ],
    },
    {
      name: "Grid",
      description: "Grid layout.",
      props: [
        { name: "children", type: "ReactNode" },
        { name: "cols", type: "number", allowedValues: [1, 2, 3, 4], description: "Number of columns" },
        { name: "gap", type: "number", allowedValues: [0, 2, 4, 6, 8] },
      ],
    },
  ];