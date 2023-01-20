const comandos = [
  { id: 1, tecnologia: "nextjs",   
    comando: "npx create-next-app@latest",  obs: "Instala o Nextjs"},
  { id: 2, tecnologia: "nexts",    
    comando: "npx create-next-app my-project",  obs: "Instala o Nextjs"},
  { id: 2, tecnologia: "nexts",    
    comando: "npx create-next-app@latest --typescript",  obs: "Instala o Nextjs com Typescript"},
  { id: 3, tecnologia: "react",    
    comando: "npx create-react-app my-app",  obs: "Instala o React"},
  { id: 4, tecnologia: "typescript",    
    comando: "npm install --save-dev typescript", obs: "Instala o Typescript"},
  { id: 5, tecnologia: "tailwind", 
    comando: "npm install -D tailwindcss postcss autoprefixer", obs: "Instala o Tailwind"},
  { id: 6, tecnologia: "tailwind", 
    comando: "npx tailwindcss init -p",  obs: "Cria arquivos tailwind"},
  { id: 7, tecnologia: "diversos", 
    comando: "npm run dev",  obs: "Inicia o App"},
  { id: 8, tecnologia: "diversos", 
    comando: "npm start",  obs: "Inicia o App"},
  { id: 9, tecnologia: "diversos", 
    comando: "npm run build",  obs: "Inicia o App"},
]

export default comandos