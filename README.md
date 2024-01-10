# The Wild Oasis

Uma aplicação para gerenciamento de hóspedes e quartos de um hotel, onde é possivel realizar chekin e chekout de hóspedes, editar as cabanas (quartos do hotel) criar novas cabanas...

## Home
A aplicação conta com um dashboard onde podemos ver as principais métricas como taxa de ocupação e valor faturado, podendo ser filtrado por 7, 30 ou 90 dias.
![the-wild-oasis-lb netlify app_dashboard (3)](https://github.com/laurabristot/the-wild-oasis/assets/107277969/a9ed2ca1-3ee4-477f-854a-8e69141a5272)

A aplicação também conta com um darkMode
![image](https://github.com/laurabristot/the-wild-oasis/assets/107277969/40ee65c2-7e85-4879-8e4a-1add13008c1b)

## Bookings
Na sessão de 'Bookings' podemos filtrar por 'All' 'Checked out' 'Checked in' ou 'unconfirmed'
Os guests que estão unconfirmed podem realizar checkin e os guests que ja fizeram seu checkin podem realizar o checkout.

Para realizar o checkin é necessário confirmar o pagamento da estadia pelo hóspede, podendo ele no momento do checkin adicionar o serviço de breakfast caso não tenha optado por isso no momento da reserva.

![image](https://github.com/laurabristot/the-wild-oasis/assets/107277969/603d87a6-fc56-4683-9375-56cac6f29780)


### Tela de Checkin:
![image](https://github.com/laurabristot/the-wild-oasis/assets/107277969/e72c674c-96b0-48e4-84ed-b9bcb444ebe5)
### Tela de Checkin sem compra antecipada de breakfast:
![video 3](https://github.com/laurabristot/the-wild-oasis/assets/107277969/f551675c-0790-4473-a88c-37d80b85bf97)

## Cabins
Na sessão de cabanas, podemos filtra-las por 'with discount' ou 'no discount'
![image](https://github.com/laurabristot/the-wild-oasis/assets/107277969/1f4dfd31-42b4-405f-9f6a-45306e47032e)

### Create Cabin
Para criar uma cabana nova precisamos inserir as informações: nome, capacidade máxima, preço, desconto (se houver), descrição e imagem.
![image](https://github.com/laurabristot/the-wild-oasis/assets/107277969/036f8c76-9de7-4f26-806c-1d47e5887138)

## Users
Novos usuários somente poderão ser criados dentro da aplicação, para evitar que usuários externos à gerencia tenham acesso aos dados.
Após criado, o usuário deve receber um email de confirmação devendo aceita-lo para que o cadastro seja concluido.

![image](https://github.com/laurabristot/the-wild-oasis/assets/107277969/75724f45-7745-47eb-a44e-161676801817)

### Edit User
Podemos atualizar o usuário atual, alterando foto de perfil, nome e senha. O email deve permanecer o mesmo do cadastro.

![image](https://github.com/laurabristot/the-wild-oasis/assets/107277969/8dc593a9-f23b-47b9-9275-e51ba4ec02f4)


## Settings
Nas configurações podemos definir regras básicas como numero minimo de noites, numero máximo de noites, numero máximo de hospedes, e o preço do café da manhã.

Todas essas informações serão usadas na hora de realizar uma nova reserva para definir o preço total da estadia.

![image](https://github.com/laurabristot/the-wild-oasis/assets/107277969/e8630cf2-effe-426b-8999-0a38d868ee7b)

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [React](<https://pt-br.reactjs.org/>)
- [Styled Components]
- [React Query]
- [React hot toast]
- [Recharts]
- [date-fns]
- [Supabase]
- [React Hook Form]

# Clone este repositório
$ git clone <https://github.com/laurabristot/the-wild-oasis>

# Acesse a pasta do projeto no terminal/cmd
$ cd the-wild-oasis

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

