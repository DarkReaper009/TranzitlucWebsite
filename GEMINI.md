# Project Context: Tranzitluc Website

## Tech Stack

- **Framework:** React 19 (Vite 7)
- **Language:** TypeScript (Strict)
- **Styling:** Tailwind CSS 4 (using `@tailwindcss/vite`)
- **Slider Library:** Swiper.js
- **Testing:** Jest & React Testing Library
- **Routing:** None (Single Page Application / Component-based switching)

## Architecture Rules

- **Component Pattern:** Use functional components with arrow functions. Prefer clean, modular code.
- **Styling:** Use Tailwind utility classes. Use `tailwind-scrollbar-hide` for custom scroll containers when specified.
- **Testing:** Always consider testability. If asked to write a component, include a `.test.tsx` file using Jest patterns found in the project.

## Agent Instructions

1. **Context Awareness:** Before asking for code, use your internal tools to search the `/src` directory.
2. **TypeScript:** Always provide full type definitions for props and state. Avoid `any`.
3. **Tailwind v4:** Note that we use the Vite plugin for Tailwind 4; ensure class logic follows modern Tailwind standards.
4. **Project Exploration:** You have permission to list files and read any file in the repository to understand the logic.
