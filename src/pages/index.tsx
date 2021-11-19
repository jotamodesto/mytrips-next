import type { GetStaticProps } from 'next'
import type { GetPlacesQuery } from 'graphql/generated/graphql'
import type { MapProps } from 'components/Map'

import client from 'graphql/client'

import { GET_PLACES } from 'graphql/queries'
import HomeTemplate from 'templates/Home'

const Home = ({ places }: MapProps) => {
  return <HomeTemplate places={places} />
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    revalidate: 5,
    props: { places }
  }
}
