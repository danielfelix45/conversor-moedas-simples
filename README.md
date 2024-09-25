# 💱 Conversor de Moedas Simples

📄 Descrição
O **O Conversor de moedas simples** é uma aplicação simples e intuitiva para conversão de moedas em tempo real, utilizando a **API AwesomeAPI.** Com foco em converter **dólares americanos (USD)** para **reais brasileiros (BRL)** e vice-versa, o projeto foi desenvolvido com **JavaScript, HTML e CSS,** proporcionando uma interface amigável e uma experiência fluida para o usuário.

## 🚀 Funcionalidades

- Conversão de valores em **tempo real** entre USD e BRL.
- Formatação de valores conforme o padrão brasileiro (R$ 1.000,00).
- Tratamento de erros em requisições de API.
- Design responsivo e minimalista para garantir uma boa experiência em dispositivos móveis.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura da aplicação.
- **CSS3:** Estilos e layout responsivo.
- **JavaScript (ES6+):** Lógica de conversão, manipulação de DOM e consumo da API.
- **AwesomeAPI:** API para taxas de câmbio em tempo real.

## 📦 Como Utilizar

1. Clone este repositório:

```bash
git clone https://github.com/seuusuario/currency-converter-app.git
```

2. Navegue até o diretório do projeto:

```bash
cd currency-converter-app
```

3. Abra o arquivo index.html no seu navegador.

> **Dica**: Certifique-se de que você está conectado à internet para que as taxas de câmbio possam ser carregadas a partir da API.

## 📝 Exemplo de Uso

1. Insira um valor no campo **USD** para converter o valor automaticamente para **BRL**.
2. Insira um valor no campo **BRL** para converter o valor automaticamente para **USD**.
   Os valores serão atualizados em tempo real e formatados conforme o padrão monetário.

# 🔄 Como Funciona

A aplicação utiliza a **API AwesomeAPI** para buscar a taxa de câmbio atual entre USD e BRL. Quando o usuário insere um valor em um dos campos de entrada, a conversão é feita automaticamente com base nessa taxa e o resultado é exibido no campo de saída.

## Exemplo de Requisição à API

```Javascript
async function getExchangeRate() {
  const url = 'https://economia.awesomeapi.com.br/last/USD-BRL';
  const response = await fetch(url);
  const data = await response.json();
  return data.USDBRL.bid;  // Taxa de câmbio atual USD/BRL
}
```

## ⚠️ Tratamento de Erros

O aplicativo inclui um tratamento básico de erros usando `try-catch` nas requisições à API, garantindo que, caso a API esteja offline ou a conexão falhe, o usuário seja notificado.

```

```
