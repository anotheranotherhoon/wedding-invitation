import Layout from '../src/components/Layout'
import Introduce from '../src/components/Introduce'
import SpecificInfo from '../src/components/SpecificInfo'
import AccountNumber from '../src/components/AccountNumber'
import InvitationMessage from '../src/components/InvitationMessage'
import Carousel from '../src/components/Carousel'
import GusetBook from '../src/components/GuestBook'
import { NextSeo } from 'next-seo'
import path from 'path';
import { promises as fs } from 'fs';
import type {IData} from '../types/interface'
import Head from 'next/head'
import SNS from '../src/components/SNS'
import React, { useEffect, useState } from 'react'
const Home = (props : IData) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(()=>{
    setIsLoading(true)
  },[])
  return (
    <Layout>
      <Head>
        <title>{props.weddingData.seo.title}</title>
      </Head>
      <NextSeo 
      title={props.weddingData.seo.title}
      description={props.weddingData.seo.description}
      canonical={props.weddingData.seo.url}
      openGraph={{
        type: "website",
        url: `${props.weddingData.seo.url}`,
        title: `${props.weddingData.seo.title}`,
        description: `${props.weddingData.seo.description}`,
        images: [{ url:`${props.weddingData.img[0].url}` }],
        site_name: "wedding",
      }}
      />
      {isLoading &&
        <React.Fragment>
          <Introduce date={props.weddingData.weddingDate} time={props.weddingData.time} place={props.weddingData.place} hall_name={props.weddingData.hall_name} thumbNail={props.weddingData.img[0].url} />
          <InvitationMessage brid_dad={props.weddingData.parents_info.brid_parents.dad.name} brid_mom={props.weddingData.parents_info.brid_parents.mom.name} groom_dad={props.weddingData.parents_info.groom_parents.dad.name} groom_mom={props.weddingData.parents_info.groom_parents.mom.name} brid_name={props.weddingData.client.brid.name} groom_name={props.weddingData.client.groom.name} brid_rank={props.weddingData.client.brid.rank} groom_rank={props.weddingData.client.groom.rank} img={props.weddingData.img[1].url} />
          <Carousel img={props.weddingData.img} />
          <SpecificInfo date={props.weddingData.weddingDate} time={props.weddingData.time} address={props.weddingData.address} bus={props.weddingData.bus} subway={props.weddingData.subway} parking={props.weddingData.parkingLot} place={props.weddingData.place} hall_name={props.weddingData.hall_name} brid_name={props.weddingData.client.brid.name} groom_name={props.weddingData.client.groom.name} lat={props.weddingData.lat} lng={props.weddingData.lng} />
          <GusetBook />
          <AccountNumber
            brid_dad={props.weddingData.parents_info.brid_parents.dad.name}
            brid_dad_bank={props.weddingData.parents_info.brid_parents.dad.bank}
            brid_dad_accountNumber={props.weddingData.parents_info.brid_parents.dad.accountNumber}
            brid_mom={props.weddingData.parents_info.brid_parents.mom.name}
            brid_mom_bank={props.weddingData.parents_info.brid_parents.mom.bank}
            brid_mom_accountNumber={props.weddingData.parents_info.brid_parents.mom.accountNumber}
            groom_dad={props.weddingData.parents_info.groom_parents.dad.name}
            groom_dad_bank={props.weddingData.parents_info.groom_parents.dad.bank}
            groom_dad_accountNumber={props.weddingData.parents_info.groom_parents.dad.accountNumber}
            groom_mom={props.weddingData.parents_info.groom_parents.mom.name}
            brid_name={props.weddingData.client.brid.name}
            brid_bank={props.weddingData.client.brid.bank}
            brid_accountNumber={props.weddingData.client.brid.accountNumber}
            brid_kakaoPay={props.weddingData.client.brid.kakaoPay}
            groom_name={props.weddingData.client.groom.name}
            groom_bank={props.weddingData.client.groom.bank}
            groom_accountNumber={props.weddingData.client.groom.accountNumber}
            groom_kakaoPay={props.weddingData.client.groom.kakaoPay}
            img={props.weddingData.img[2].url}
          />
          <SNS title={props.weddingData.seo.title} description={props.weddingData.seo.description} img={props.weddingData.img[0].url} />
          </React.Fragment>
          }
    </Layout>
  )
}




export const getStaticProps = async() => {
  const jsonDirectory = path.join(process.cwd(), 'json');
  const fileContents = await fs.readFile(jsonDirectory + '/invitationData.json', 'utf8');
  const weddingData = JSON.parse(fileContents)
  return {
    props : {
      weddingData
    }
  }
}


export default Home
