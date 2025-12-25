# 📄 PDF Editor

A modern, web-based PDF reader and editor built with React, TypeScript, and Tailwind CSS. This application provides a clean, intuitive interface for viewing, editing, and managing PDF documents.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.2-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-38B2AC?logo=tailwind-css)

## ✨ Features

- 📊 **PDF Dashboard** - View and manage your PDF files with a clean, organized interface
- ✏️ **PDF Editing Interface** - Annotate, highlight, and edit PDFs with a comprehensive toolset
- 💾 **Export Options** - Export PDFs in different formats (PDF, Word) with customizable settings
- 🔀 **Merge PDFs** - Combine multiple PDF files into one document
- 🌓 **Dark Mode** - Beautiful dark theme support
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn (or npm)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pdf-editor.git
   cd pdf-editor
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:3000`

### Build for Production

```bash
yarn build
# or
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
yarn preview
# or
npm run preview
```

## 📁 Project Structure

```
pdf-editor/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx       # Application header
│   │   └── Icon.tsx         # Material Icons wrapper
│   ├── pages/               # Page components
│   │   ├── Dashboard.tsx           # Main dashboard
│   │   ├── PDFEditingInterface.tsx # PDF editing interface
│   │   ├── ExportOptionsScreen.tsx # Export configuration
│   │   └── MergePDFsScreen.tsx     # PDF merging tool
│   ├── App.tsx              # Main app component with routing
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles and Tailwind imports
├── public/                  # Static assets
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## 🛣️ Available Routes

- `/` - Dashboard (home page with file list)
- `/edit` - PDF Editing Interface
- `/export` - Export Options Screen
- `/merge` - Merge PDFs Screen

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Material Symbols** - Icon library

## 📝 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint errors automatically

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Material Symbols for the icon library
- Tailwind CSS for the utility-first CSS framework
- React team for the amazing framework

## 🔮 Future Plans

- [ ] Integrate PDF.js for PDF rendering
- [ ] Add pdf-lib for PDF manipulation
- [ ] Implement file upload functionality
- [ ] Add annotation tools (highlight, comment, draw)
- [ ] Support for form filling
- [ ] Page manipulation (rotate, delete, reorder)
- [ ] Search functionality
- [ ] Keyboard shortcuts

---

Made with ❤️ using React, TypeScript, and Tailwind CSS
