# 💪 Fit & Love ❤️

Um aplicativo web PWA (Progressive Web App) para gerenciamento de perfis de treino e acompanhamento de planos alimentares.

Este projeto foi criado como uma versão pública e simplificada de um app pessoal, com o objetivo de demonstrar minhas habilidades em desenvolvimento front-end com JavaScript puro e integração com backend (Firebase).

Acesse a demo aqui: [https://fit-love-demo.netlify.app/](https://fit-love-demo.netlify.app/)
**(Use o código de acesso "123" para o perfil "Diogo" para testar)**

## 📷 Demo Visual
![Image](https://github.com/user-attachments/assets/633a0e14-8d90-47b8-adf5-4dcbd0a76af9)

## ✨ Funcionalidades Principais

* **Múltiplos Perfis:** O app permite o login em diferentes perfis (Diogo, Tiago) usando um código de acesso.
* **Planos de Treino:** Visualização de diferentes rotinas de treino (ABC, ABCD, Hipertrofia) com exercícios detalhados.
* **Acompanhamento de Dieta:** Exibição do plano alimentar e metas de macronutrientes para o perfil logado.
* **Dados do Firebase:** Todos os dados de perfis, treinos e dietas são lidos em tempo real do Cloud Firestore.
* **Cronômetro:** Um cronômetro integrado para marcar o tempo de descanso entre as séries.
* **Design Responsivo:** Interface adaptada para uso em dispositivos móveis.
* **PWA:** O app pode ser "instalado" no celular ou desktop, pois segue os padrões de Progressive Web App (possui Manifest e Service Worker).

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído do zero (sem frameworks JS) para focar nos fundamentos do desenvolvimento web:

* **Front-end:**
    * HTML5 (Estrutura semântica)
    * CSS3 (Estilização e design responsivo)
    * JavaScript (Vanilla JS): Usado para toda a manipulação do DOM, lógica de login, navegação por abas e chamadas de API.
* **Back-end (BaaS):**
    * Firebase Authentication: (Utilizado na lógica de login por código).
    * Cloud Firestore: Banco de dados NoSQL para armazenar todos os dados de usuários, treinos e exercícios.
* **Hospedagem:**
    * Netlify: Usado para deploy contínuo e hospedagem do front-end.

## 🚀 Como Executar o Projeto Localmente

1.  **Clone o repositório:**
    ```bash
    git clone [URL-DO-SEU-REPOSITÓRIO-AQUI]
    ```
2.  **Navegue até a pasta:**
    ```bash
    cd fit-love-demo
    ```
3.  **Abra o `index.html`:**
    * Basta abrir o arquivo `index.html` no seu navegador de preferência.

4.  **Para conectar seu próprio Firebase (Opcional):**
    * Crie um projeto no Firebase.
    * Ative o Cloud Firestore e o Firebase Authentication.
    * Adicione a estrutura de dados (collections e documents) conforme visto no projeto.
    * Crie um arquivo `firebase-config.js` (ou similar) e insira suas chaves de API do Firebase.

    > **Nota:** O repositório atual aponta para o meu banco de dados de demonstração.

## 👨‍💻 Autor

Criado e desenvolvido por Diogo Nascimento.

* [LinkedIn](https://www.linkedin.com/in/SEU-LINKEDIN-AQUI)
* [GitHub](https://www.linkedin.com/in/diogo-nascimento-da-silva-diogocoding?utm_source=share_via&utm_content=profile&utm_medium=member_android)
* [Portfólio](https://diogonascimentoportifolio.netlify.app/)

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

