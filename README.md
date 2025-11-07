# Meu App de Treino Pessoal

Um aplicativo web simples para acompanhar treinos e progresso de cargas, usando Firebase Firestore como banco de dados. Este é um Progressive Web App (PWA) que pode ser instalado na tela inicial e acessado offline.

## Funcionalidades

* Visualização de diferentes rotinas de treino (ABC, ABCD, Hipertrofia) carregadas do Firebase.
* Acompanhamento e edição da carga utilizada em cada exercício.
* Salvamento automático das cargas atualizadas no Firebase Firestore.
* Visualização de metas de macronutrientes e link para planilha pessoal (aba Perfil).
* Navegação por abas para diferentes treinos e perfil.
* **Progressive Web App (PWA):** Pode ser instalado na tela inicial do dispositivo e possui funcionalidade offline básica para os arquivos principais.

## Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Firebase Firestore (SDK v9 Compat) como banco de dados
* Node.js (apenas para o script de setup inicial do banco de dados)

## Como Rodar Localmente

Siga estes passos para configurar e rodar o projeto na sua máquina.

### Pré-requisitos

* **Node.js:** Necessário apenas para rodar o script `setup.js` que popula o banco de dados pela primeira vez. Baixe em [nodejs.org](https://nodejs.org/).
* **Web Server Local:** Para visualizar o `index.html`, é recomendado usar um servidor local devido às funcionalidades do PWA (Service Worker). Uma opção fácil é a extensão "Live Server" no VS Code.

### Configuração

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    cd seu-repositorio
    ```

2.  **Crie seu Próprio Projeto Firebase:**
    * Vá para o [Console do Firebase](https://console.firebase.google.com/) e crie um novo projeto.
    * No seu projeto Firebase, vá em **Build > Firestore Database** e crie um banco de dados (iniciar em **modo de produção**).
    * Vá para as **Configurações do Projeto** (ícone de engrenagem) e, na aba "Geral", crie um **App da Web**.
    * Copie o objeto de configuração `firebaseConfig` que será exibido.

3.  **Substitua as Credenciais do Firebase:**
    * **⚠️ IMPORTANTE:** Abra os arquivos `main.js` e `setup.js` no seu editor de código.
    * Localize a constante `firebaseConfig` no topo de cada um desses arquivos.
    * **Substitua** o objeto de configuração existente pelo **SEU PRÓPRIO** `firebaseConfig` que você copiou do seu projeto Firebase.

4.  **Popule o Banco de Dados (Primeira Vez):**
    * Abra um terminal na pasta do projeto.
    * Instale as dependências necessárias para o script de setup:
        ```bash
        # Se você ainda não tem o package.json, crie um com: npm init -y
        # Instale a dependência do Firebase para o script Node.js
        npm install firebase@compat
        ```
        *(Nota: O `@compat` é usado porque o `setup.js` parece usar a sintaxe v8/compat)*
    * Execute o script para cadastrar os treinos no SEU Firebase:
        ```bash
        node setup.js
        ```
    * Verifique no seu Console do Firebase se a coleção "perfil" e a coleção "treinos" (com as subcoleções de exercícios) foram criadas.

### Rodando o App

1.  Abra a pasta do projeto no VS Code (ou seu editor preferido).
2.  Se estiver usando o VS Code com a extensão Live Server: clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server".
3.  Seu navegador abrirá o aplicativo.

## ⚠️ Aviso Importante Sobre as Credenciais do Firebase ⚠️

Os arquivos `main.js` e `setup.js` neste repositório **contêm as credenciais de um projeto Firebase de desenvolvimento/demonstração**.

**NÃO UTILIZE ESTAS CREDENCIAIS DIRETAMENTE.**

Para rodar este projeto corretamente e ter sua própria base de dados isolada, você **DEVE** seguir os passos da seção "Configuração" para:

1.  Criar seu **próprio projeto** no Firebase.
2.  **Substituir** o objeto `firebaseConfig` nos arquivos `main.js` e `setup.js` pelas **suas próprias credenciais**.

Isso garante que você possa experimentar o aplicativo com um banco de dados limpo e que a base de dados original não seja alterada.

---

