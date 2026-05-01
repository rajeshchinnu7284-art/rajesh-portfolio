import { scrollToSection } from "./utils";

export interface CommandOutput {
  text: string;
  type: "default" | "primary" | "accent" | "error" | "dim" | "success";
}

export type CommandMap = Record<
  string,
  (args: string[], scrollFn: (id: string) => void) => CommandOutput[]
>;

const COMMANDS: CommandMap = {
  help: () => [
    { text: "Available commands:", type: "primary" },
    { text: "  help         — show this message", type: "default" },
    { text: "  about        — display profile info", type: "default" },
    { text: "  skills       — list technical skills", type: "default" },
    { text: "  projects     — view projects", type: "default" },
    { text: "  contact      — contact information", type: "default" },
    { text: "  education    — academic background", type: "default" },
    { text: "  ls           — list directory contents", type: "default" },
    { text: "  ls skills/   — list skill categories", type: "default" },
    { text: "  ls projects/ — list projects", type: "default" },
    { text: "  cd <section> — navigate to section", type: "default" },
    { text: "  clear        — clear terminal", type: "default" },
  ],

  about: (_args, scrollFn) => {
    scrollFn("about");
    return [
      { text: "// whoami", type: "dim" },
      { text: "Name:     Bomalleeni Rajesh Kumar", type: "accent" },
      {
        text: "Role:     ECE Student & Aspiring Web Developer",
        type: "default",
      },
      {
        text: "College:  B.Tech Electronics & Communication Engineering",
        type: "default",
      },
      { text: "Year:     2nd Year", type: "default" },
      { text: "CGPA:     9.58", type: "primary" },
      {
        text: "Focus:    Combining electronics + programming for real-world solutions",
        type: "dim",
      },
      { text: "", type: "default" },
      { text: "→ Navigating to About section...", type: "success" },
    ];
  },

  skills: (_args, scrollFn) => {
    scrollFn("skills");
    return [
      { text: "// ls skills/ -la", type: "dim" },
      { text: "total 12 entries", type: "default" },
      {
        text: "drwxr-xr-x  Languages  C, C++, Python, JavaScript, TypeScript",
        type: "accent",
      },
      {
        text: "drwxr-xr-x  Frontend   HTML, CSS, React, Tailwind CSS",
        type: "primary",
      },
      {
        text: "drwxr-xr-x  Backend    Node.js, Express, REST APIs",
        type: "accent",
      },
      { text: "drwxr-xr-x  Database   MySQL, MongoDB basics", type: "primary" },
      {
        text: "drwxr-xr-x  Tools      Git, GitHub, VS Code, Linux",
        type: "accent",
      },
      {
        text: "drwxr-xr-x  Hardware   Arduino, Raspberry Pi, Circuit Design",
        type: "dim",
      },
      { text: "", type: "default" },
      { text: "→ Navigating to Skills section...", type: "success" },
    ];
  },

  projects: (_args, scrollFn) => {
    scrollFn("projects");
    return [
      { text: "// ls projects/ -la", type: "dim" },
      { text: "total 3 entries", type: "default" },
      {
        text: "[1] Smart Home Automation    — IoT + Arduino + React Dashboard",
        type: "primary",
      },
      {
        text: "[2] Student Portal System    — MERN Stack, Auth, REST API",
        type: "accent",
      },
      {
        text: "[3] Circuit Simulator Web App — React + Canvas + Electronics Logic",
        type: "primary",
      },
      { text: "", type: "default" },
      { text: "→ Navigating to Projects section...", type: "success" },
    ];
  },

  contact: (_args, scrollFn) => {
    scrollFn("contact");
    return [
      { text: "// cat contact.json", type: "dim" },
      { text: "{", type: "default" },
      {
        text: '  "email":    "bomalleenirajeshkumar@gmail.com",',
        type: "accent",
      },
      { text: '  "phone":    "+91 9391134330",', type: "accent" },
      {
        text: '  "linkedin": "linkedin.com/in/rajesh-kumar-bomalleeni-b03341366"',
        type: "primary",
      },
      { text: "}", type: "default" },
      { text: "", type: "default" },
      { text: "→ Navigating to Contact section...", type: "success" },
    ];
  },

  education: (_args, scrollFn) => {
    scrollFn("education");
    return [
      { text: "// cat education.log", type: "dim" },
      { text: "B.Tech ECE — 2nd Year — CGPA: 9.58", type: "primary" },
      {
        text: "Subjects: DSA, Embedded Systems, Signals & Systems, VLSI",
        type: "default",
      },
      { text: "", type: "default" },
      { text: "→ Navigating to Education section...", type: "success" },
    ];
  },

  ls: (args) => {
    const path = args[0] ?? ".";
    if (path === "skills/" || path === "skills") {
      return [
        { text: "total 6 skill directories", type: "default" },
        { text: "drwxr-xr-x  languages/", type: "accent" },
        { text: "drwxr-xr-x  frontend/", type: "primary" },
        { text: "drwxr-xr-x  backend/", type: "accent" },
        { text: "drwxr-xr-x  database/", type: "primary" },
        { text: "drwxr-xr-x  tools/", type: "accent" },
        { text: "drwxr-xr-x  hardware/", type: "dim" },
      ];
    }
    if (path === "projects/" || path === "projects") {
      return [
        { text: "total 3 project files", type: "default" },
        { text: "-rw-r--r--  smart-home-automation.md", type: "primary" },
        { text: "-rw-r--r--  student-portal-system.md", type: "accent" },
        { text: "-rw-r--r--  circuit-simulator.md", type: "primary" },
      ];
    }
    return [
      { text: "total 8", type: "default" },
      { text: "drwxr-xr-x  about/", type: "accent" },
      { text: "drwxr-xr-x  skills/", type: "accent" },
      { text: "drwxr-xr-x  projects/", type: "accent" },
      { text: "drwxr-xr-x  education/", type: "accent" },
      { text: "drwxr-xr-x  contact/", type: "accent" },
      { text: "-rw-r--r--  resume.pdf", type: "primary" },
    ];
  },

  cd: (args, scrollFn) => {
    const target = args[0];
    const validSections = [
      "about",
      "skills",
      "projects",
      "contact",
      "education",
      "achievements",
      "experience",
      "certificates",
    ];
    if (!target) {
      return [{ text: "cd: missing operand", type: "error" }];
    }
    const clean = target.replace(/\/$/, "");
    if (validSections.includes(clean)) {
      scrollFn(clean);
      return [{ text: `→ Navigating to ${clean}/`, type: "success" }];
    }
    return [{ text: `cd: ${target}: No such directory`, type: "error" }];
  },

  clear: () => [],
};

export function executeCommand(
  raw: string,
  scrollFn: (id: string) => void,
): { outputs: CommandOutput[]; clear: boolean } {
  const trimmed = raw.trim();
  if (!trimmed) return { outputs: [], clear: false };

  const [cmd, ...args] = trimmed.split(/\s+/);
  const name = cmd.toLowerCase();

  if (name === "clear") {
    return { outputs: [], clear: true };
  }

  const handler = COMMANDS[name];
  if (!handler) {
    return {
      outputs: [
        {
          text: `bash: command not found: ${cmd}`,
          type: "error",
        },
        {
          text: "Type 'help' to see available commands.",
          type: "dim",
        },
      ],
      clear: false,
    };
  }

  return { outputs: handler(args, scrollFn), clear: false };
}
