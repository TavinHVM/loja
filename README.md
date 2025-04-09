# 🏪Loja Virtual - "GynTech"

Este projeto é uma aplicação completa de e-commerce desenvolvida com tecnologias modernas e escaláveis. Ele foi projetado para oferecer uma experiência de compra intuitiva e eficiente, tanto para os usuários finais quanto para os administradores da loja.

## Tecnologias Utilizadas

### Frontend
- **Framework:** [Next.js](https://nextjs.org) - Utilizado para criar uma interface de usuário dinâmica e responsiva.
- **Linguagem:** TypeScript - Para maior segurança e produtividade no desenvolvimento.
- **Bibliotecas:** 
  - `@tabler/icons-react` - Ícones modernos e personalizáveis.
  - `next/image` - Para otimização de imagens.
- **Estilização:** TailwindCSS - Para um design moderno e responsivo.

### Backend
- **Framework:** [NestJS](https://nestjs.com) - Um framework progressivo para construção de APIs robustas e escaláveis.
- **Banco de Dados:** Prisma ORM - Para manipulação eficiente do banco de dados.
- **Linguagem:** TypeScript - Para consistência com o frontend.

### Comunicação entre Frontend e Backend
- **API REST:** O backend expõe endpoints REST para o frontend consumir, como a listagem de produtos, detalhes de produtos e gerenciamento de carrinho.

## Funcionalidades

### Frontend
- **Página Inicial:** Exibe uma grade de produtos com informações básicas, como nome, preço e avaliação.
- **Página de Produto:** Detalhes completos do produto, incluindo especificações, avaliações de usuários e análises especializadas.
- **Carrinho de Compras:** Botão para adicionar produtos ao carrinho diretamente na página inicial ou na página de detalhes.
- **Design Responsivo:** Interface otimizada para dispositivos móveis e desktops.

### Backend
- **Gerenciamento de Produtos:** CRUD completo para produtos, incluindo criação, leitura, atualização e exclusão.
- **Integração com Banco de Dados:** Utiliza Prisma para interagir com o banco de dados de forma eficiente.
- **Endpoints REST:** 
  - `GET /produtos` - Lista todos os produtos.
  - `GET /produtos/:id` - Obtém detalhes de um produto específico.
  - `POST /produtos` - Salva um novo produto.
  - `DELETE /produtos/:id` - Remove um produto.

## Como Executar o Projeto

### Pré-requisitos
- Node.js (v16 ou superior)
- Gerenciador de pacotes (npm ou yarn)
- Banco de dados configurado (ex.: PostgreSQL)

### Passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

2. Instale as dependências: <br />
npm install

3. Configure as variáveis de ambiente:
Crie um arquivo .env no diretório do backend e configure as credenciais do banco de dados.

4. Inicie o backend e o frontend: <br />
cd essencial/gyntech/ <br />
npm run dev

5. Acesse a aplicação: <br />
http://localhost:3000

## Diferenciais do Projeto
Código Modular: Estrutura organizada para facilitar a manutenção e escalabilidade.
Reutilização de Componentes: Componentes de UI reutilizáveis para consistência visual.
Boas Práticas: Uso de TypeScript, ESLint e Prettier para garantir qualidade no código.
Foco em Performance: Otimização de imagens e carregamento eficiente de dados.

## Conclusão
Este projeto foi desenvolvido com foco em boas práticas de desenvolvimento e escalabilidade. Ele demonstra habilidades em frontend, backend e integração de sistemas, sendo uma excelente vitrine para recrutadores interessados em profissionais com experiência em desenvolvimento full-stack.

Desenvolvido por: [@TavinHVM](https://github.com/TavinHVM) e [@GabrielSL1](https://github.com/GabrielSL1).
