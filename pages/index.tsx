import Layout from '../src/components/Layout'
import Introduce from '../src/components/Introduce'
import SpecificInfo from '../src/components/SpecificInfo'
import AccountNumber from '../src/components/AccountNumber'
import InvitationMessage from '../src/components/InvitationMessage'
import Carousel from '../src/Carousel'
import { NextSeo } from 'next-seo'
import path from 'path';
import { promises as fs } from 'fs';
import type {IData} from '../types/interface'
import Head from 'next/head'
import SNS from '../src/components/SNS'
const Home = (props : IData) => {
  
  return (
    <Layout>
      <Head>
        <title>{props.seo.title}</title>
      </Head>
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
      <Introduce date={props.weddingDate} time={props.time} place={props.place} hall_name={props.hall_name} thumbNail={props.img[0].url}/>
      <InvitationMessage brid_dad={props.parents_info.brid_parents.dad.name} brid_mom={props.parents_info.brid_parents.mom.name} groom_dad={props.parents_info.groom_parents.dad.name} groom_mom={props.parents_info.groom_parents.mom.name} brid_name={props.client.brid.name} groom_name={props.client.groom.name} brid_rank={props.client.brid.rank} groom_rank={props.client.groom.rank} img={props.img[1].url}/>
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
        brid_name={props.client.brid.name}
        brid_bank={props.client.brid.bank}
        brid_accountNumber={props.client.brid.accountNumber}
        brid_kakaoPay={props.client.brid.kakaoPay}
        groom_name={props.client.groom.name}
        groom_bank={props.client.groom.bank}
        groom_accountNumber={props.client.groom.accountNumber}
        groom_kakaoPay={props.client.groom.kakaoPay}
        img={props.img[2].url}
      />
      <SNS title={props.seo.title} description={props.seo.description} canonical={props.seo.url} img={props.img[0].url}/>
    </Layout>
  )
}




export const getStaticProps = async() => {
  const jsonDirectory = path.join(process.cwd(), 'json');
  const fileContents = await fs.readFile(jsonDirectory + '/invitationData.json', 'utf8');
  const objectData = JSON.parse(fileContents)
  return {
    props : objectData
  }
}


export default Home
