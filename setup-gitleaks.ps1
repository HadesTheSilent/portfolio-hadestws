# Setup script para GitLeaks security (Windows PowerShell)
# Usage: .\setup-gitleaks.ps1

Write-Host "🔐 Configurando GitLeaks para o repositório..." -ForegroundColor Cyan

# Verificar se gitleaks está instalado
$gitleaksCheck = gitleaks --version 2>$null
if ($null -eq $gitleaksCheck) {
    Write-Host "❌ GitLeaks não está instalado" -ForegroundColor Red
    Write-Host ""
    Write-Host "📦 Para instalar:" -ForegroundColor Yellow
    Write-Host "   choco install gitleaks" -ForegroundColor White
    Write-Host ""
    Write-Host "💡 Se não tem Chocolatey: https://chocolatey.org/install" -ForegroundColor Gray
    exit 1
}

Write-Host "✅ GitLeaks encontrado: $gitleaksCheck" -ForegroundColor Green

# Configurar pre-commit hook
Write-Host ""
Write-Host "🪝 Configurando pre-commit hook..." -ForegroundColor Cyan
git config core.hooksPath .githooks
Write-Host "✅ Pre-commit hook configurado!" -ForegroundColor Green

# Executar verificação inicial
Write-Host ""
Write-Host "🔍 Executando verificação inicial de secrets..." -ForegroundColor Cyan
gitleaks detect --source . --verbose --exit-code 0

Write-Host ""
Write-Host "✅ GitLeaks configurado com sucesso!" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Próximas verificações:" -ForegroundColor Yellow
Write-Host "   - Os secrets serão verificados automaticamente antes de cada commit" -ForegroundColor White
Write-Host "   - Para verificar manualmente: gitleaks detect --source . --verbose" -ForegroundColor White
Write-Host "   - Para mais opções: gitleaks --help" -ForegroundColor White
