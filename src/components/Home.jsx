import React from 'react'
import { BsCloud } from 'react-icons/bs'
import { AiOutlineMobile, AiOutlineDesktop } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from '@emotion/styled'

import Layout from './Layout'

const Page = styled.div`
  padding: 15px;
`
const StyledJumbotron = styled.div`
  margin-top: 15px;
  margin-bottom: 32px;
  padding: 60px;
  border-radius: 5px;
  background-color: #e0f6da;
  font-size: 21px;
  font-weight: 500;
  ul {
    padding-left: 05px;
  }
`
const Row = styled.div`
  /* side spacing for mobile first views */
  padding-left: 15px;
  padding-right: 15px;
  ul {
    padding-left: 0;
  }
`
const H4 = styled.h2`
  margin-bottom: 8px !important;
  font-weight: bold;
  font-size: 24px;
`
const H4Cloud = styled.h2`
  margin-bottom: 8px !important;
  font-weight: bold;
  font-size: 24px;
`
const H1 = styled.h1`
  font-size: 63px;
  margin-bottom: 0.5rem;
`
const Li = styled.li`
  margin-bottom: 0;
`

const IndexPage = () => (
  <Layout>
    <Page>
      <StyledJumbotron>
        <H1>Gabriel Software</H1>
        <ul>
          <Li>einfach</Li>
          <Li>individuell</Li>
          <Li>zuverlässig</Li>
        </ul>
        <p>...damit Sie sich auf Ihre Arbeit konzen­trieren können</p>
      </StyledJumbotron>

      <p
        style={{
          fontSize: 24,
          marginLeft: 15,
          fontWeight: 700,
        }}
      >
        Apps für:
      </p>

      <Row className="row marketing">
        <div className="col-md">
          <BsCloud
            style={{
              fontSize: 90,
              maxHeight: 78,
              marginLeft: '-5px',
              marginTop: 4,
            }}
          />
          <H4Cloud>Web</H4Cloud>
          <ul>
            <Li>{`Im Browser / als Progressive Web App`}</Li>
            <Li>Im Inter- oder Intranet</Li>
            <Li>Installieren und Aktualisieren sind simpel</Li>
          </ul>
        </div>
        <div className="col-md">
          <AiOutlineDesktop
            style={{ fontSize: 78, minHeight: 78, maxHeight: 78, marginTop: 4 }}
          />
          <H4>Desktop</H4>
          <ul>
            <Li>Lokal installiert</Li>
            <Li>Windows, Mac, Linux</Li>
            <Li>Lösungen mit beinahe null Unterhalt möglich</Li>
          </ul>
        </div>
        <div className="w-100 d-lg-none"></div>
        <div className="col-md-2 col-lg-2">
          <AiOutlineMobile
            style={{
              fontSize: 65,
              minHeight: 78,
              maxHeight: 78,
              marginLeft: '-12px',
              marginTop: 4,
            }}
          />
          <H4>Mobile</H4>
          <ul>
            <Li>Im App-Store</Li>
            <Li>Android und iOS</Li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-3">
          <BsCloud
            style={{
              fontSize: 60,
              minHeight: 78,
              maxHeight: 78,
              marginBottom: '-8px',
              marginTop: 4,
            }}
          />
          <span>{` `}</span>
          <AiOutlineDesktop
            style={{
              fontSize: 55,
              minHeight: 78,
              maxHeight: 78,
              marginLeft: '-7px',
              marginTop: 5,
            }}
          />
          <AiOutlineMobile
            style={{
              fontSize: 46,
              minHeight: 78,
              maxHeight: 78,
              marginLeft: '-10px',
              marginTop: 4,
            }}
          />
          <H4>Alle Geräte-Klassen</H4>
          <ul>
            <Li>Basierend auf einer einzigen Code-Basis</Li>
            <Li>Am PC vorbereiten, mobil erfassen</Li>
          </ul>
        </div>
        <div className="col-md">
          <MdDone
            style={{
              fontSize: 65,
              minHeight: 78,
              maxHeight: 78,
              marginLeft: '-5px',
              marginTop: 6,
            }}
          />
          <H4>Hohe Ansprüche</H4>
          <ul>
            <Li>Live synchronisiert</Li>
            <Li>Offline-first mit leistungsfähiger Konflikt-Lösung</Li>
            <Li>Adaptives Benutzer-Erlebnis</Li>
          </ul>
        </div>
      </Row>
    </Page>
  </Layout>
)

export default IndexPage
