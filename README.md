# Cypress + Cucumber (Swag Labs)

![Cypress](https://img.shields.io/badge/Cypress-15.11.0-17202C?logo=cypress&logoColor=white)
![Cucumber](https://img.shields.io/badge/Cucumber-BDD-23D96C?logo=cucumber&logoColor=white)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-blue)

Projeto de automação de testes E2E com **Cypress** e **Cucumber (Gherkin)**, validando fluxos de login na aplicação [Sauce Demo](https://www.saucedemo.com/).

## Demonstração

> Substitua os links abaixo pelos seus arquivos reais (GIF ou vídeo curto) para deixar seu portfólio visual.

![Demo dos testes](https://via.placeholder.com/1200x600?text=Adicione+seu+GIF+de+execucao+aqui)

- 🎥 Vídeo/GIF da execução: `LINK_DO_SEU_GIF_OU_VIDEO`
- 📦 Pipeline (opcional): `LINK_DO_GITHUB_ACTIONS`

## Objetivo

Garantir a qualidade do fluxo de autenticação por meio de cenários BDD, cobrindo:

- Login com credenciais válidas
- Login com credenciais inválidas
- Campos obrigatórios ausentes (usuário ou senha)

## Tecnologias

- Cypress
- cypress-cucumber-preprocessor
- cypress-dark
- JavaScript (CommonJS)

## Estrutura do projeto

```text
cypress/
  e2e/
    step_definitions/
      login.feature
      invalidlogin.feature
      missinglogin.feature
      login/login.js
      invalidlogin/invalidlogin.js
      missinglogin/missinglogin.js
  support/
  fixtures/
cypress.config.js
package.json
```

## Cobertura de testes

Este projeto valida os principais comportamentos do login:

- ✅ Autenticação com credenciais válidas
- ✅ Bloqueio de autenticação com credenciais inválidas
- ✅ Mensagens de validação para campos obrigatórios

## Cenários BDD implementados

### 1) Login com sucesso
- Acessa a página de login
- Preenche `standard_user` e `secret_sauce`
- Valida redirecionamento para `/inventory.html`

### 2) Login inválido
- Acessa a página de login
- Preenche credenciais inválidas
- Valida exibição da mensagem de erro

### 3) Campos obrigatórios
- Tenta login sem usuário e valida mensagem de usuário obrigatório
- Tenta login sem senha e valida mensagem de senha obrigatória

## Pré-requisitos

- Node.js 18+ (recomendado)
- npm

## Como executar

1. Instalar dependências:

```bash
npm install
```

2. Executar com interface do Cypress:

```bash
npx cypress open
```

3. Executar em modo headless:

```bash
npx cypress run
```

## Resultado esperado (exemplo)

```bash
====================================================================================================

  (Run Starting)

  Running:  login.feature                (1 of 3)
  Running:  invalidlogin.feature         (2 of 3)
  Running:  missinglogin.feature         (3 of 3)

  3 passing

  (Run Finished)
====================================================================================================
```

## Evidências (Screenshots)

> Você pode salvar screenshots em `cypress/screenshots/` e referenciar aqui.

- Login com sucesso: `CAMINHO_DA_IMAGEM_1`
- Login inválido: `CAMINHO_DA_IMAGEM_2`
- Validação de campos obrigatórios: `CAMINHO_DA_IMAGEM_3`

## Configuração relevante

- `specPattern`: `cypress/e2e/**/*.feature`
- `excludeSpecPattern`: `*.js`
- `nonGlobalStepDefinitions`: `true`

Isso mantém os arquivos `.feature` como specs e os arquivos de steps (`.js`) como suporte dos cenários.

## Observações

Este projeto segue o padrão de organização por feature, com cada arquivo `.feature` tendo seus steps em uma pasta correspondente.

---

## Autor

**Gustavo Lins**

- GitHub: [@gustavlins](https://github.com/gustavlins)
