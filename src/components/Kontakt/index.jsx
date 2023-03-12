import React from 'react'
import { MapContainer, ScaleControl, TileLayer, Marker } from 'react-leaflet'
import styled from '@emotion/styled'
import { window, exists } from 'browser-monads'

import alexImg from '/alex.jpg'
import Layout from '../Layout'
import iconsvg from './_icon.svg'

const Page = styled.div`
  padding: 15px;
`
const Row = styled.div`
  a {
    color: #145f00;
    border-bottom: 1px dashed #333;
    text-decoration: none;
    &:hover {
      border-bottom: 1px solid #145f00;
      text-decoration: none;
    }
  }
  ul {
    padding-left: 20px;
  }
`
const Col = styled.div`
  /* side spacing for mobile first views */
  padding: 10px !important;
`
const StyledImg = styled.img`
  margin-bottom: 10px;
`

let icon = null
if (exists(window)) {
  icon = new window.L.Icon({
    iconUrl: iconsvg,
    iconRetinaUrl: iconsvg,
    iconAnchor: [10, 10],
    iconSize: [100, 100],
  })
}
const mapCenter = {
  lat: 47.289563,
  lng: 8.56644,
}
const mapStyle = { height: 400, width: '100%' }

const KontaktPage = () => {
  return (
    <Layout>
      <Page className="page kontakt">
        <Row className="row marketing">
          <Col className="col-lg-3">
            <StyledImg
              alt="Alexander Gabriel"
              src={alexImg}
              className="js-alexImage"
            />
            <address className="js-address">
              <strong>Gabriel Software</strong>
              <br />
              Alexander Gabriel
              <br />
              Dipl. Umwelt-Naturwissenschafter ETH
              <br />
              Wiesenstrasse 22
              <br />
              8800 Thalwil
              <br />
              079 372 51 64
              <br />
              <a href="mailto:#">alex@gabriel-software.ch</a>
            </address>
          </Col>
          <Col className="col-lg-9">
            <MapContainer center={mapCenter} zoom={10} style={mapStyle}>
              <ScaleControl imperial={false} />
              <TileLayer
                url="//wmts20.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg"
                attribution='&copy; <a href="//swisstopo.ch">Swisstopo</a>'
                maxNativeZoom={19}
                minZoom={0}
                maxZoom={22}
              />
              <Marker position={mapCenter} icon={icon} />
            </MapContainer>
            <div>
              <small>
                <a
                  href="https://www.google.ch/maps/place/47.289563,8.56644"
                  style={{
                    color: '#145f00',
                    textAlign: 'left',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  in Google Maps öffnen
                </a>
              </small>
            </div>
          </Col>
        </Row>
        <Row>
          <h3>Über mich</h3>
          <h5>Naturwissenschaften</h5>
          <ul>
            <li>Studium der Umwelt-Naturwissenschaften an der ETH Zürich</li>
            <li>
              Aufbau und Co-Leitung der{' '}
              <a
                href="http://geos-gmbh.ch/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GeOs GmbH
              </a>{' '}
              (1995 - 2002)
            </li>
            <li>
              Entwicklung von Methoden zur Renaturierung von Mooren, am
              Geobotanischen Institut der ETH Zürich (1996 - 2001, 30%)
            </li>
            <li>
              Mitarbeit im Amt für Natur und Umwelt Graubünden (1996 - 2005,
              zuerst 20%, später 80%) und
            </li>
            <li>
              ...in der Fachstelle Naturschutz des Kantons Zürich (2005 - 2013)
            </li>
          </ul>

          <h5>Software nebenbei</h5>
          <p>
            Von Beginn weg war ich neben meiner Haupttätigkeit als
            Naturschutz-Fachperson oft zuständig für Hard- und Software.
            Mehrmals auch die Schnittstelle zwischen Naturschutz-Projekten und
            externen Software-Entwicklern.
          </p>
          <p>
            Die Spanne reichte inhaltlich von wissenschaftlichen Erhebungen,
            naturschutz-relevanten Feld-Daten bis zur Berechnung und Optimierung
            von (Direkt-)Zahlungen an der Schnittstelle zwischen Landwirtschaft
            und Naturschutz.
          </p>
          <p>
            Technisch: Von anspruchsvollen Excel-Formularen bis zu
            Access-Applikationen. Höhepunkt: Verwaltung von Verträgen und
            Auszahlung von Direktzahlungen für hunderte von
            Landwirtschafts-Betrieben auf zehntausenden Flächen, mit einem
            komplexen und dynamischen Beitragssystem.
          </p>

          <h5>Software professionell</h5>
          <p>
            2012 hat ein Unfall mein Leben verändert. In mehreren Monaten im
            Bett begann ich, Software zu entwickeln. Das ersetzte die bisherigen
            Herausforderungen in Sport und Beruf.
          </p>
          <p>
            Nach > 10 Jahren professioneller Software-Entwicklung bin ich stolz,
            Anwendungen bauen zu können, die on- oder offline, gleichzeitig von
            einem ganzen Team benutzt werden können und auf jedem Gerät
            funktionieren.
          </p>
          <p>
            Brauchen Sie Software mit einem Bezug zu Natur(-schutz)? Das
            interessiert mich besonders. Und Sie könnten dabei von meinem
            naturwissenschaftlichen Hintergrund profitieren: Je besser ich Ihre
            Arbeit verstehe, desto besser das Ergebnis!
          </p>
        </Row>
      </Page>
    </Layout>
  )
}

export default KontaktPage
