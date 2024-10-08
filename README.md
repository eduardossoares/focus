# Focus - Frontend

## Visão Geral
Este projeto frontend foi desenvolvido utilizando:
- **React.js**
- **TypeScript**
- **Tailwind CSS**
- **React-Hook-Form**
- **Zod**
- **Firebase para autenticação**
- **Figma para Interface**

## Estrutura de Pastas
```
├── src
│   ├── assets
│   │   ├── #Arquivos usados na aplicação
│   ├── components
│   │   ├── #Componentes usados na aplicação
│   ├── routes
│   │   ├── Private.tsx #Componente para privar as rotas
│   ├── services
│   │   ├── taskService.ts #Importa do Backend as funções de CRUD via Firebase Firestore
│   │   ├── authService.ts #Lógica de Autenticação com o Firebase
│   │   ├── firebaseConnection.ts #Conexão com Firebase
│   ├── contexts 
│   │   ├── #Contexts utilizados na aplicação
│   ├── pages
│   │   ├── authPage
│   │   │   ├── authPage.tsx #Página de autenticação
│   │   ├── dashboad
│   │   │   ├── dashboard.tsx #Página de Dashboard
│   ├── App.tsx #Contém as rotas da aplicação
│   ├── main.tsx #Ponto de entrada do React
│   ├── index.css #Estilização principal da aplicação, contém importado as configurações do Tailwind CSS
├── .env                     # Necessário para configurar as variáveis de ambiente
├── package.json              # Dependências do projeto
```

## Configuração Inicial

1. **Instalar Dependências:**
   
Antes de iniciar o projeto, certifique-se de instalar todas as dependências:

```
npm install
```

2. **Configuração do Firebase:**
Este frontend se conecta ao Firebase para autenticação. Certifique-se de ter um projeto Firebase configurado e adicione as credenciais no arquivo .env:
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

3. **Iniciando o Projeto:**
Após configurar o ambiente, execute o seguinte comando para iniciar o servidor de desenvolvimento:
```
npm run dev
```
