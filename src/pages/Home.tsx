import {
  AvatarsList,
  CardComponent,
  CustomChart,
  CustomTable,
  Header,
} from '@/components'
import { Container } from '@mui/system'
import { currencyConverter } from '@/utils'

function Home() {
  const mockListData = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(1234.774),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(87421.4536),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConverter(349063.3456),
    },
  ]

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [
        <span>Bruno Amaral</span>,
        <span>brunoamara0705@gmail.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Bruno Rafael</span>,
        <span>rafaelamara0705@gmail.com</span>,
        <button>ACTION</button>,
      ],
      [
        <span>Rafael Amaral</span>,
        <span>rafael.amaral0705@gmail.com</span>,
        <button>ACTION</button>,
      ],
    ],
  }
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarsList listData={mockListData} />
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
        <CardComponent>
          <CustomChart
            labels={['Jan', 'Fev', 'Mar', 'Abr', 'Mai']}
            data={[1000.12, 23412.456, 135.646, 6333.12, 546.234]}
            type="bar"
          />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
