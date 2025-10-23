#!/bin/bash
# Setup script para GitLeaks security

echo "🔐 Configurando GitLeaks para o repositório..."

# Verificar se gitleaks está instalado
if ! command -v gitleaks &> /dev/null; then
    echo "❌ GitLeaks não está instalado"
    echo ""
    echo "📦 Para instalar:"
    echo "   Windows (Chocolatey): choco install gitleaks"
    echo "   macOS (Homebrew): brew install gitleaks"
    echo "   Linux: https://github.com/gitleaks/gitleaks"
    exit 1
fi

echo "✅ GitLeaks encontrado: $(gitleaks version)"

# Configurar pre-commit hook
echo ""
echo "🪝 Configurando pre-commit hook..."
git config core.hooksPath .githooks
chmod +x .githooks/pre-commit

echo "✅ Pre-commit hook configurado!"

# Executar verificação inicial
echo ""
echo "🔍 Executando verificação inicial de secrets..."
gitleaks detect --source . --verbose --exit-code 0

echo ""
echo "✅ GitLeaks configurado com sucesso!"
echo ""
echo "📝 Próximas verificações:"
echo "   - Os secrets serão verificados automaticamente antes de cada commit"
echo "   - Para verificar manualmente: gitleaks detect --source . --verbose"
echo "   - Para mais opções: gitleaks --help"
