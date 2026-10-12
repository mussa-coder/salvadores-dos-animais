# Salvadores dos Animais

Site institucional para a ONG ficticia Salvadores dos Animais, desenvolvido para apresentar projetos de protecao animal, divulgar frentes de atuacao e cadastrar pessoas interessadas em colaborar como voluntarias.

## Tecnologias

- React 19
- Vinext
- TypeScript
- Tailwind CSS
- Componentes shadcn/Base UI
- Lucide React
- Vite
- Wrangler e Cloudflare

O projeto requer Node.js 22.13 ou superior.

## Estrutura

- `app/`: paginas, layout, cabecalho e estilos globais da aplicacao.
- `app/cadastro/`: formulario de cadastro, mascaras, validacoes e armazenamento local de preferencias.
- `app/feedback/`: demonstracao de componentes e estados de interface.
- `components/`: componentes reutilizaveis de UI.
- `hooks/`: hooks compartilhados.
- `lib/`: funcoes utilitarias.
- `public/`: arquivos publicos, como o favicon.
- `legacy-static/`: versao estatica anterior preservada como historico do projeto.

## Instalacao e execucao

Instale as dependencias:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Gere a versao de producao:

```bash
npm run build
```

Execute a versao gerada com Wrangler:

```bash
npm run start
```

Verifique padronizacao e qualidade do codigo:

```bash
npm run lint
```

## Acessibilidade

A aplicacao utiliza estrutura semantica com `main`, `section`, `article`, `aside`, `nav` e `footer`. O idioma principal esta definido como `pt-BR`, a navegacao possui rotulos acessiveis, a pagina ativa usa `aria-current` e o menu mobile informa estado com `aria-expanded` e `aria-controls`.

O formulario de cadastro usa `label`, `fieldset`, `legend`, validacoes nativas, mascaras de entrada e mensagens de erro associadas aos campos quando necessario.

## Versionamento

A estrategia adotada segue o padrao GitFlow:

- `main` ou `master`: versao estavel e pronta para publicacao.
- `develop`: integracao das melhorias antes da entrega final.
- `feature/*`: desenvolvimento isolado de novas funcionalidades e correcoes.

As mensagens de commit seguem o estilo Conventional Commits, como `feat:`, `fix:`, `docs:` e `chore:`.

## Deploy

O projeto esta preparado para build de producao com Vinext e execucao via Wrangler. Antes da publicacao, recomenda-se rodar `npm run build`, revisar as paginas em desktop e mobile, validar acessibilidade basica por teclado e confirmar os dados de compartilhamento da versao publicada.
