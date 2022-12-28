import styled from 'styled-components'
import WelcomePage from '../src/components/WelcomePage'
import Info from '../src/components/Info'
import SpecificInfo from '../src/components/SpecificInfo'
import AccountNumber from '../src/components/AccountNumber'
import InvitationMessage from '../src/components/InvitationMessage'
import Carousel from '../src/Carousel'
import { NextSeo } from 'next-seo'
import path from 'path';
import { promises as fs } from 'fs';
import type {IData} from '../types/interface'
const Home = (props : IData) => {
  console.log(props)
  return (
    <Layout>
      <NextSeo 
      title={props.seo.title}
      description={props.seo.description}
      canonical={props.seo.url}
      openGraph={{
        type: "website",
        url: `${props.seo.url}`,
        title: `${props.seo.title}`,
        description: `${props.seo.description}`,
        images: [{ url:`${props.img[0].url}` }],
        site_name: "wedding",
      }}
      />
      <WelcomePage />
      <Info date={props.weddingDate} time={props.time} place={props.place} hall_name={props.hall_name} />
      <InvitationMessage brid_dad={props.parents_info.brid_parents.dad.name} brid_mom={props.parents_info.brid_parents.mom.name} groom_dad={props.parents_info.groom_parents.dad.name} groom_mom={props.parents_info.groom_parents.mom.name} brid_name={props.client.brid.name} groom_name={props.client.groom.name} brid_rank={props.client.brid.rank} groom_rank={props.client.groom.rank} />
      <Carousel img={props.img} />
      <SpecificInfo date={props.weddingDate} time={props.time} address={props.address} bus={props.bus} subway={props.subway} parking={props.parkingLot} place={props.place} hall_name={props.hall_name} brid_name={props.client.brid.name} groom_name={props.client.groom.name} />
      <AccountNumber
        brid_dad={props.parents_info.brid_parents.dad.name}
        brid_dad_bank={props.parents_info.brid_parents.dad.bank}
        brid_dad_accountNumber={props.parents_info.brid_parents.dad.accountNumber}
        brid_mom={props.parents_info.brid_parents.mom.name}
        brid_mom_bank={props.parents_info.brid_parents.mom.bank}
        brid_mom_accountNumber={props.parents_info.brid_parents.mom.accountNumber}
        groom_dad={props.parents_info.groom_parents.dad.name}
        groom_dad_bank={props.parents_info.groom_parents.dad.bank}
        groom_dad_accountNumber={props.parents_info.groom_parents.dad.accountNumber}
        groom_mom={props.parents_info.groom_parents.mom.name}
        groom_mom_bank={props.parents_info.groom_parents.mom.bank}
        groom_mom_accountNumber={props.parents_info.groom_parents.mom.accountNumber}
        brid_name={props.client.brid.name}
        brid_bank={props.client.brid.bank}
        brid_accountNumber={props.client.brid.accountNumber}
        groom_name={props.client.groom.name}
        groom_bank={props.client.groom.bank}
        groom_accountNumber={props.client.groom.accountNumber}
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


export const getStaticProps = async() => {
  const jsonDirectory = path.join(process.cwd(), 'json');
  const fileContents = await fs.readFile(jsonDirectory + '/invitationData.json', 'utf8');
  const objectData = JSON.parse(fileContents)
  return {
    props : objectData
  }
}


export default Home
