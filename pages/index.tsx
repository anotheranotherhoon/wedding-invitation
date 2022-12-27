import styled from 'styled-components'
import WelcomePage from '../src/components/WelcomePage'
import Info from '../src/components/Info'
import SpecificInfo from '../src/components/SpecificInfo'
import AccountNumber from '../src/components/AccountNumber'
import InvitationMessage from '../src/components/InvitationMessage'
import useSWR from 'swr';
import Carousel from '../src/Carousel'
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data, error } = useSWR('/api/staticdata', fetcher);
  if (error) return <Layout>Failed to load</Layout>
  if (!data) return <Layout>Loading...</Layout>
  const weddingData = JSON.parse(data)
  return (
    <Layout>
      <WelcomePage />
      <Info date={weddingData.weddingDate} time={weddingData.time} place={weddingData.place} hall_name={weddingData.hall_name} />
      <InvitationMessage brid_dad={weddingData.parents_info.brid_parents.dad.name} brid_mom={weddingData.parents_info.brid_parents.mom.name} groom_dad={weddingData.parents_info.groom_parents.dad.name} groom_mom={weddingData.parents_info.groom_parents.mom.name} brid_name={weddingData.client.brid.name} groom_name={weddingData.client.groom.name} brid_rank={weddingData.client.brid.rank} groom_rank={weddingData.client.groom.rank} />
      <Carousel img={weddingData.img} />
      <SpecificInfo date={weddingData.weddingDate} time={weddingData.time} address={weddingData.address} bus={weddingData.bus} subway={weddingData.subway} parking={weddingData.parkingLot} place={weddingData.place} hall_name={weddingData.hall_name} brid_name={weddingData.client.brid.name} groom_name={weddingData.client.groom.name} />
      <AccountNumber
        brid_dad={weddingData.parents_info.brid_parents.dad.name}
        brid_dad_bank={weddingData.parents_info.brid_parents.dad.bank}
        brid_dad_accountNumber={weddingData.parents_info.brid_parents.dad.accountNumber}
        brid_mom={weddingData.parents_info.brid_parents.mom.name}
        brid_mom_bank={weddingData.parents_info.brid_parents.mom.bank}
        brid_mom_accountNumber={weddingData.parents_info.brid_parents.mom.accountNumber}
        groom_dad={weddingData.parents_info.groom_parents.dad.name}
        groom_dad_bank={weddingData.parents_info.groom_parents.dad.bank}
        groom_dad_accountNumber={weddingData.parents_info.groom_parents.dad.accountNumber}
        groom_mom={weddingData.parents_info.groom_parents.mom.name}
        groom_mom_bank={weddingData.parents_info.groom_parents.mom.bank}
        groom_mom_accountNumber={weddingData.parents_info.groom_parents.mom.accountNumber}
        brid_name={weddingData.client.brid.name}
        brid_bank={weddingData.client.brid.bank}
        brid_accountNumber={weddingData.client.brid.accountNumber}
        groom_name={weddingData.client.groom.name}
        groom_bank={weddingData.client.groom.bank}
        groom_accountNumber={weddingData.client.groom.accountNumber}
      />
    </Layout>
  )
}

const Layout = styled.div`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        `



export default Home
