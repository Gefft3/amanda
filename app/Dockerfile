FROM node:20-alpine

# Cria diretório da app
WORKDIR /app

# Copia os arquivos
COPY package*.json ./
COPY . .

# Instala dependências
RUN npm install

# Expõe porta padrão do Vite
EXPOSE 5173

# Inicia o Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]
