# GitHub Actions Setup — Deploy Automático

Este projeto usa GitHub Actions para:
1. **Deploy automático** ao fazer push em `main`
2. **Atualização automática** a cada 4-6 horas (busca novos repositórios)

## Pré-requisitos

1. **Repositório GitHub** com este código
2. **Conta Vercel** (grátis em [vercel.com](https://vercel.com))

## Setup Rápido (5 minutos)

### 1. Gerar Token Vercel

```bash
# No Vercel:
# Settings → Tokens → Create Token
# Copie o token gerado
```

### 2. Obter IDs do Projeto Vercel

```bash
# Terminal local (depois de fazer login no Vercel CLI):
npm i -g vercel
vercel login
vercel link  # Escolha: "Link to existing project" e selecione seu projeto

# Isso cria .vercel/project.json com org-id e project-id
```

Ou abra o Dashboard do Vercel e copie os IDs da URL:
- URL: `vercel.com/{ORG_ID}/{PROJECT_NAME}?id={PROJECT_ID}`

### 3. Adicionar Secrets no GitHub

Vá para: **GitHub Repo → Settings → Secrets and variables → Actions**

Clique "New repository secret" e adicione:

| Nome | Valor |
|------|-------|
| `VERCEL_TOKEN` | Token gerado no passo 1 |
| `VERCEL_ORG_ID` | Seu org ID do Vercel |
| `VERCEL_PROJECT_ID` | Seu project ID do Vercel |

### 4. Deploy Automático

Agora toda vez que você fizer push em `main`, o site atualiza automaticamente em Vercel! 🚀

### 5. Atualização de Repositórios

O workflow `refresh-repos.yml` roda a cada 4 horas e:
- Busca novos repositórios públicos no GitHub
- Reconstrói o site
- Faz deploy automático

**Para triggerar manualmente:**
- GitHub Repo → Actions → "Refresh on New Repository" → "Run workflow"

## Fluxo de Trabalho

```
Você cria um novo repositório
        ↓
GitHub Actions detecta (a cada 4h)
        ↓
Build automático
        ↓
Deploy no Vercel
        ↓
Site atualizado com novo repositório! ✨
```

## Troubleshooting

**Deploy falha com erro de token?**
- Verifique se os secrets estão corretos em Settings → Secrets
- Regenere o token Vercel e atualize o secret

**Site não atualiza?**
- Verifique a aba "Actions" no GitHub para ver logs
- Veja se o repositório está público (API do GitHub requer isso)

## Mais Informações

- [Vercel + GitHub Actions](https://vercel.com/docs/deployments/git/vercel-for-github)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
