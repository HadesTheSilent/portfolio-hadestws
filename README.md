# Portfolio Hadestws

Portfolio pessoal com tema cyberpunk listando repositórios do GitHub.

## 🎨 Características

- **Framework**: Vite + React + TypeScript
- **Tema**: Cyberpunk com gradientes neon (magenta, purple, blue)
- **API**: Integração com GitHub API para listar repositórios
- **Deploy**: Vercel com CI/CD via GitHub Actions
- **Responsivo**: Otimizado para mobile, tablet e desktop

## 🚀 Deploy

Site online em: [https://portfolio-hadestws.vercel.app](https://portfolio-hadestws.vercel.app)

Deployment automático via GitHub Actions a cada push para `main`.

## 📦 Instalação Local

```bash
cd site
npm install
npm run dev
```

## 🔨 Build para Produção

```bash
cd site
npm run build
npm run preview
```

## 📁 Estrutura do Projeto

```
portfolio-hadestws/
├── site/                          # Aplicação React/Vite
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx          # Página principal
│   │   ├── components/
│   │   │   ├── ProfileHeader.tsx # Header com perfil e LinkedIn
│   │   │   └── RepoCard.tsx      # Card de repositório
│   │   ├── lib/
│   │   │   └── github.ts         # Client da GitHub API
│   │   ├── styles/
│   │   │   └── index.css         # Tema cyberpunk
│   │   └── main.tsx
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── vercel.json
│   └── index.html
├── .github/
│   └── workflows/
│       ├── deploy.yml            # Workflow de deployment Vercel
│       └── refresh-repos.yml     # Workflow para refresh de repositórios
└── README.md
```

## 🔐 Segurança

Este repositório usa **GitLeaks** para detectar e prevenir vazamento de secrets.

### GitLeaks em Desenvolvimento

Para verificar secrets localmente antes de fazer commit:

```bash
# Instalar gitleaks (via chocolatey no Windows)
choco install gitleaks

# Verificar todo o repositório
gitleaks detect --source . --verbose

# Verificar apenas uncommitted changes
gitleaks detect --source . --verbose --log-level debug
```

### GitLeaks em CI/CD

O repositório está configurado com GitHub Actions para detectar secrets:

- Verificação automática em cada push
- Bloqueia commits com secrets detectados
- Relatórios detalhados de vulnerabilidades

## 🌐 GitHub API

A aplicação fetcha repositórios do usuário `HadesTheSilent`:

- Endpoint: `https://api.github.com/users/HadesTheSilent/repos`
- Método: GET (públicos)
- Paginação: 100 repositórios por página
- Ordenação: por data de atualização

## 🔗 Links

- **GitHub**: [HadesTheSilent](https://github.com/HadesTheSilent)
- **LinkedIn**: [Perfil LinkedIn](https://www.linkedin.com/in/your-profile/)
- **Portfolio**: [portfolio-hadestws.vercel.app](https://portfolio-hadestws.vercel.app)

## 📝 Licença

Este projeto é de código aberto. Sinta-se livre para usar como referência.

## ⚙️ Variáveis de Ambiente

Para deployment no Vercel, configure as seguintes secrets no GitHub:

- `VERCEL_TOKEN`: Token de autenticação do Vercel
- `VERCEL_ORG_ID`: ID da organização/usuário no Vercel
- `VERCEL_PROJECT_ID`: ID do projeto no Vercel

---

Desenvolvido com ❤️ por HadesTheSilent
