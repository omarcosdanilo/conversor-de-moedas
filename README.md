<div style="display:inline_block" align="center">

  <h1><strong>Conversor de Moedas</strong></h1>
</div>
 
## Ideia do Projeto

Este projeto foi desenvolvido por [Marcos Danilo](https://www.linkedin.com/in/marcos-danilo/).

A idéia do projeto era construir uma API onde fosse possível realizar a conversão entre duas moedas a partir de taxas de conversão obtidas de um [serviço externo](https://apilayer.com/marketplace/exchangerates_data-api).

A arquitetura MSC (Model, Service, Controller) foi utilizada visando as boas práticas e organização do projeto.

---


## **Técnologias usadas**

**Back-end:**
<ul>
  <li>
    <a href="https://nodejs.org/en/">NodeJS</a>
  </li>
  
   <li>
    <a href="https://www.typescriptlang.org/">Typescript</a>
   </li>
  
  <li>
    <a href="https://sequelize.org/">Sequelize</a>
   </li>
   <li>
    <a href="https://expressjs.com/pt-br/">Express</a>
   </li>
</ul>

**Banco de dados:**
<ul>
  <li>
    <a href="https://www.mysql.com/">MySQL</a>
  </li>
</ul>

**Containers:**
<ul>
  <li>
    <a href="https://www.docker.com/">Docker</a>
  </li>
</ul>
**Testes:**
<ul>
  <li>
    <a href="https://mochajs.org/">MochaJS</a>
  </li>
  
  <li>
    <a href="https://www.chaijs.com/">ChaiJS</a>
  </li>
  
  <li>
    <a href="https://www.chaijs.com/plugins/chai-http/">Chai-HTTP</a>
  </li>
  
   <li>
    <a href="https://sinonjs.org/">Sinon</a>
  </li>
</ul>

---

## **Como rodar o projeto localmente:**

**1. Abra o terminal utlizando ("**ctrl+alt+t**") e crie um diretório no local de sua preferência com o comando **mkdir**, aqui neste exemplo usaremos o nome "**projetos**":**
```
  mkdir projetos
```

**2. Entre no diretório criado:**
```
  cd projetos
```

**3. Faça o clone do projeto:**
```
  git clone https://marcosdanilo@bitbucket.org/recrutamento_jya_nodejs/recrutamento-conversor-nodejs-marcosdanilo94_gmail.com.git
```
**Obs: esse comando irá criar um novo diretório contendo todos os arquivos da aplicação!**

**4. Utilize o comando **"ls"** para verificar o nome do diretório criado:**
```
  ls
```

**5. Entre no diretório listado, usando o comando abaixo:**
```
  cd "destino do diretório"
```
**OBS: Ao digitar as primeiras letras do nome do diretório pressione a tecla "TAB" para autocompletar**

**6. Faça a instalação das dependências:**
```
  npm install
```

**6. Inicie os containers da API e do Banco de dados:**
```
  docker-compose up -d
```
**OBS: Caso não possua o Docker a instalação pode ser feita através da [documentação do Docker](https://www.docker.com/) e [documentação do Docker-compose](https://docs.docker.com/compose/install/#install-compose)**

**7. Crie o banco de dados:**
```
  npm run db:create
```
---

# Endpoints

## 1 - Endpoint POST `/exchange`

- O endpoint é acessível através da URL /exchange;
- O enpoint é capaz de adicionar uma nova transação na tabela exchanges do banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
```json
{
	"userId": 1,
	"sourceCurrency": "BRL",
	"sourceValue": 20,
	"targetCurrency": "USD"
}
```

- A resposta da requisição será no formato abaixo:
```json
{
	"userId": 1,
	"sourceCurrency": "BRL",
	"sourceValue": 20,
	"targetCurrency": "USD",
	"conversionRate": 0.192808,
	"targetValue": 3.85616,
	"transactionId": 1,
	"createdAt": "2022-10-9, 20:13"
}
```

---

## 2 - Endpoint GET `/exchange`

- O endpoint é acessível através da URL /exchange;
- O endpoint é capaz de buscar todas as transações registradas no banco de dados filtradas pelo id do usuário;
- O corpo da requisição deverá seguir o formato abaixo:
```json
{
	"userId": 1
}
```
- A resposta da requisição será no formato abaixo:
```json
[
	{
		"id": 1,
		"userId": 1,
		"sourceCurrency": "BRL",
		"sourceValue": "20.00",
		"targetCurrency": "USD",
		"conversionRate": "0.192808",
		"createdAt": "2022-11-09T23:13:56.000Z",
		"updatedAt": "2022-11-09T23:13:56.000Z"
	},
	{
		"id": 2,
		"userId": 1,
		"sourceCurrency": "BRL",
		"sourceValue": "20.00",
		"targetCurrency": "CAD",
		"conversionRate": "0.260831",
		"createdAt": "2022-11-09T23:21:48.000Z",
		"updatedAt": "2022-11-09T23:21:48.000Z"
	},
	{
		"id": 3,
		"userId": 1,
		"sourceCurrency": "USD",
		"sourceValue": "1000000.00",
		"targetCurrency": "BTC",
		"conversionRate": "0.000063",
		"createdAt": "2022-11-09T23:22:29.000Z",
		"updatedAt": "2022-11-09T23:22:29.000Z"
	}
]
```
---

# Lista de moedas permitidas para conversão
```json
	{
	"AED": "United Arab Emirates Dirham",
	"AFN": "Afghan Afghani",
	"ALL": "Albanian Lek",
	"AMD": "Armenian Dram",
	"ANG": "Netherlands Antillean Guilder",
	"AOA": "Angolan Kwanza",
	"ARS": "Argentine Peso",
	"AUD": "Australian Dollar",
	"AWG": "Aruban Florin",
	"AZN": "Azerbaijani Manat",
	"BAM": "Bosnia-Herzegovina Convertible Mark",
	"BBD": "Barbadian Dollar",
	"BDT": "Bangladeshi Taka",
	"BGN": "Bulgarian Lev",
	"BHD": "Bahraini Dinar",
	"BIF": "Burundian Franc",
	"BMD": "Bermudan Dollar",
	"BND": "Brunei Dollar",
	"BOB": "Bolivian Boliviano",
	"BRL": "Brazilian Real",
	"BSD": "Bahamian Dollar",
	"BTC": "Bitcoin",
	"BTN": "Bhutanese Ngultrum",
	"BWP": "Botswanan Pula",
	"BYN": "New Belarusian Ruble",
	"BYR": "Belarusian Ruble",
	"BZD": "Belize Dollar",
	"CAD": "Canadian Dollar",
	"CDF": "Congolese Franc",
	"CHF": "Swiss Franc",
	"CLF": "Chilean Unit of Account (UF)",
	"CLP": "Chilean Peso",
	"CNY": "Chinese Yuan",
	"COP": "Colombian Peso",
	"CRC": "Costa Rican Col\u00f3n",
	"CUC": "Cuban Convertible Peso",
	"CUP": "Cuban Peso",
	"CVE": "Cape Verdean Escudo",
	"CZK": "Czech Republic Koruna",
	"DJF": "Djiboutian Franc",
	"DKK": "Danish Krone",
	"DOP": "Dominican Peso",
	"DZD": "Algerian Dinar",
	"EGP": "Egyptian Pound",
	"ERN": "Eritrean Nakfa",
	"ETB": "Ethiopian Birr",
	"EUR": "Euro",
	"FJD": "Fijian Dollar",
	"FKP": "Falkland Islands Pound",
	"GBP": "British Pound Sterling",
	"GEL": "Georgian Lari",
	"GGP": "Guernsey Pound",
	"GHS": "Ghanaian Cedi",
	"GIP": "Gibraltar Pound",
	"GMD": "Gambian Dalasi",
	"GNF": "Guinean Franc",
	"GTQ": "Guatemalan Quetzal",
	"GYD": "Guyanaese Dollar",
	"HKD": "Hong Kong Dollar",
	"HNL": "Honduran Lempira",
	"HRK": "Croatian Kuna",
	"HTG": "Haitian Gourde",
	"HUF": "Hungarian Forint",
	"IDR": "Indonesian Rupiah",
	"ILS": "Israeli New Sheqel",
	"IMP": "Manx pound",
	"INR": "Indian Rupee",
	"IQD": "Iraqi Dinar",
	"IRR": "Iranian Rial",
	"ISK": "Icelandic Kr\u00f3na",
	"JEP": "Jersey Pound",
	"JMD": "Jamaican Dollar",
	"JOD": "Jordanian Dinar",
	"JPY": "Japanese Yen",
	"KES": "Kenyan Shilling",
	"KGS": "Kyrgystani Som",
	"KHR": "Cambodian Riel",
	"KMF": "Comorian Franc",
	"KPW": "North Korean Won",
	"KRW": "South Korean Won",
	"KWD": "Kuwaiti Dinar",
	"KYD": "Cayman Islands Dollar",
	"KZT": "Kazakhstani Tenge",
	"LAK": "Laotian Kip",
	"LBP": "Lebanese Pound",
	"LKR": "Sri Lankan Rupee",
	"LRD": "Liberian Dollar",
	"LSL": "Lesotho Loti",
	"LTL": "Lithuanian Litas",
	"LVL": "Latvian Lats",
	"LYD": "Libyan Dinar",
	"MAD": "Moroccan Dirham",
	"MDL": "Moldovan Leu",
	"MGA": "Malagasy Ariary",
	"MKD": "Macedonian Denar",
	"MMK": "Myanma Kyat",
	"MNT": "Mongolian Tugrik",
	"MOP": "Macanese Pataca",
	"MRO": "Mauritanian Ouguiya",
	"MUR": "Mauritian Rupee",
	"MVR": "Maldivian Rufiyaa",
	"MWK": "Malawian Kwacha",
	"MXN": "Mexican Peso",
	"MYR": "Malaysian Ringgit",
	"MZN": "Mozambican Metical",
	"NAD": "Namibian Dollar",
	"NGN": "Nigerian Naira",
	"NIO": "Nicaraguan C\u00f3rdoba",
	"NOK": "Norwegian Krone",
	"NPR": "Nepalese Rupee",
	"NZD": "New Zealand Dollar",
	"OMR": "Omani Rial",
	"PAB": "Panamanian Balboa",
	"PEN": "Peruvian Nuevo Sol",
	"PGK": "Papua New Guinean Kina",
	"PHP": "Philippine Peso",
	"PKR": "Pakistani Rupee",
	"PLN": "Polish Zloty",
	"PYG": "Paraguayan Guarani",
	"QAR": "Qatari Rial",
	"RON": "Romanian Leu",
	"RSD": "Serbian Dinar",
	"RUB": "Russian Ruble",
	"RWF": "Rwandan Franc",
	"SAR": "Saudi Riyal",
	"SBD": "Solomon Islands Dollar",
	"SCR": "Seychellois Rupee",
	"SDG": "Sudanese Pound",
	"SEK": "Swedish Krona",
	"SGD": "Singapore Dollar",
	"SHP": "Saint Helena Pound",
	"SLE": "Sierra Leonean Leone",
	"SLL": "Sierra Leonean Leone",
	"SOS": "Somali Shilling",
	"SRD": "Surinamese Dollar",
	"STD": "S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra",
	"SVC": "Salvadoran Col\u00f3n",
	"SYP": "Syrian Pound",
	"SZL": "Swazi Lilangeni",
	"THB": "Thai Baht",
	"TJS": "Tajikistani Somoni",
	"TMT": "Turkmenistani Manat",
	"TND": "Tunisian Dinar",
	"TOP": "Tongan Pa\u02bbanga",
	"TRY": "Turkish Lira",
	"TTD": "Trinidad and Tobago Dollar",
	"TWD": "New Taiwan Dollar",
	"TZS": "Tanzanian Shilling",
	"UAH": "Ukrainian Hryvnia",
	"UGX": "Ugandan Shilling",
	"USD": "United States Dollar",
	"UYU": "Uruguayan Peso",
	"UZS": "Uzbekistan Som",
	"VEF": "Venezuelan Bol\u00edvar Fuerte",
	"VND": "Vietnamese Dong",
	"VUV": "Vanuatu Vatu",
	"WST": "Samoan Tala",
	"XAF": "CFA Franc BEAC",
	"XAG": "Silver (troy ounce)",
	"XAU": "Gold (troy ounce)",
	"XCD": "East Caribbean Dollar",
	"XDR": "Special Drawing Rights",
	"XOF": "CFA Franc BCEAO",
	"XPF": "CFP Franc",
	"YER": "Yemeni Rial",
	"ZAR": "South African Rand",
	"ZMK": "Zambian Kwacha (pre-2013)",
	"ZMW": "Zambian Kwacha",
	"ZWL": "Zimbabwean Dollar"
	}
```