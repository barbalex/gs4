import React from 'react'
import {
  FaWrench,
  FaDatabase,
  FaLinux,
  FaApple,
  FaWindows,
  FaIndustry,
} from 'react-icons/fa'
import { MdArchitecture, MdRealEstateAgent } from 'react-icons/md'
import styled from '@emotion/styled'

import Layout from './Layout'

const Page = styled.div`
  padding: 15px;
  > p {
    /* side spacing for mobile first views */
    padding-left: 15px;
    padding-right: 15px;
  }
`
const Row = styled.div`
  /* side spacing for mobile first views */
  padding-left: 15px;
  padding-right: 15px;
`
const Ul = styled.ul`
  padding-bottom: 15px;
  padding-left: 20px;
`
const H2 = styled.h2`
  margin-top: 5px !important;
  margin-bottom: 8px !important;
  font-weight: bold;
  font-size: 24px;
  font-weight: 700;
`
const A = styled.a`
  color: #145f00;
  border-bottom: 1px dashed #333;
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid #145f00;
    text-decoration: none;
  }
`
const P = styled.p`
  margin-bottom: -2px;
`
const Li = styled.li`
  margin-bottom: 0;
`
const Lead = styled.p`
  margin-bottom: 16px;
`
const Spacer = styled.div`
  height: 10px;
`

const TechnologienPage = () => (
  <Layout>
    <Page className="page technologien">
      <Lead className="lead">Mit diesen Technologien kenne ich mich aus:</Lead>
      <Row className="row marketing">
        <div className="col-lg-4">
          <MdArchitecture style={{ fontSize: 33 }} />
          <H2>App-Architekturen</H2>
          <Ul>
            <Li>
              <A
                href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
                target="_blank"
                rel="noopener noreferrer"
              >
                Progressive Web Apps
              </A>
              <P>
                Web-Apps auf Augenhöhe mit nativen Apps, mit allen Vorteilen des
                Webs
              </P>
            </Li>
            <Li>
              <A
                href="https://www.electronjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Electron
              </A>{' '}
              und{' '}
              <A
                href="https://tauri.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tauri
              </A>
              <P>
                JavaScript-Apps auf PC/Mac/Linux installieren. Mit Tauri bald
                auch auf Android/iOS
              </P>
            </Li>
            <Li>
              <A
                href="https://flutter.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flutter
              </A>
              <P>Apps für mobile und desktop mit nativer Leistung</P>
            </Li>
          </Ul>
          <FaDatabase style={{ fontSize: 30 }} />
          <H2 style={{ marginTop: 5 }}>Datenbanken</H2>
          <Ul>
            <Li>
              <A
                href="http://www.postgresql.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                PostgreSQL
              </A>
              <P>Der Klassenprimus</P>
            </Li>
            <Li>
              <A
                href="https://de.wikipedia.org/wiki/PostGIS"
                target="_blank"
                rel="noopener noreferrer"
              >
                PostGIS
              </A>
              <P>Erweitert PostgreSQL zur mächtigen Geo-Datenbank</P>
            </Li>
            <Li>
              <A
                href="http://www.sqlite.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                SQLite
              </A>
              <P>{`Simpler geht's nimmer`}</P>
            </Li>
            <Li>
              <A
                href="http://couchdb.apache.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                CouchDB
              </A>
              <P>Der Synchronisations-Meister</P>
            </Li>
          </Ul>
        </div>
        <div className="col-lg-4">
          <div
            style={{
              fontStyle: 'oblique',
              fontSize: 16,
              fontWeight: 600,
              marginTop: 9,
              color: 'grey',
            }}
          >
            {'if ( ... ) then \u007B ... \u007D'}
          </div>
          <H2 style={{ marginTop: 3 }}>Programmiersprachen</H2>
          <Ul>
            <Li>
              <A
                href="https://de.wikipedia.org/wiki/Hypertext_Markup_Language"
                target="_blank"
                rel="noopener noreferrer"
              >
                HTML
              </A>
              <P>Dokumente fürs Web</P>
            </Li>
            <Li>
              <A
                href="https://de.wikipedia.org/wiki/Cascading_Style_Sheets"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS
              </A>
              <P>Layouten für HTML</P>
            </Li>
            <Li>
              <A
                href="http://en.wikipedia.org/wiki/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
              >
                JavaScript
              </A>
              <P>
                Die verbreitetste Programmiersprache. Vermutlich auch die
                vielfältigste und sich am schnellsten weiter entwickelnde
              </P>
            </Li>
            <Li>
              <A
                href="https://nodejs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Node.js
              </A>
              <P>JavaScript auf PC und Server</P>
            </Li>
            <Li>
              <A
                href="https://de.wikipedia.org/wiki/JavaScript_Object_Notation"
                target="_blank"
                rel="noopener noreferrer"
              >
                JSON
              </A>
              <P>Hierarchische Datenstrukturen</P>
            </Li>
            <Li>
              <A
                href="https://de.wikipedia.org/wiki/SQL"
                target="_blank"
                rel="noopener noreferrer"
              >
                SQL
              </A>
              <P>Daten in der Datenbank abfragen und manipulieren</P>
            </Li>
            <Li>
              <A
                href="//graphql.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GraphQL
              </A>
              <P>Daten flexibel von der API abfragen</P>
            </Li>
            <Li>
              <A
                href="https://dart.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dart
              </A>
              <P>Die Sprache hinter Flutter</P>
            </Li>
          </Ul>
        </div>
        <div className="col-lg-4">
          <FaWrench style={{ fontSize: 30 }} />
          <H2 style={{ marginTop: 0 }}>
            Werkzeuge <small>(Auswahl)</small>
          </H2>
          <Ul>
            <Li>
              <A
                href="https://en.wikipedia.org/wiki/Docker_(software)"
                target="_blank"
                rel="noopener noreferrer"
              >
                Docker
              </A>
              <P>Container für Apps und Server</P>
            </Li>
            <Li>
              <A
                href="http://hapijs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hapi
              </A>
              <P>Meister Server</P>
            </Li>
            <Li>
              <A
                href="https://www.graphile.org/postgraphile"
                target="_blank"
                rel="noopener noreferrer"
              >
                PostGraphile
              </A>{' '}
              und{' '}
              <A
                href="https://hasura.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hasura
              </A>
              <P>{`GraphQL-Schnittstellen`}</P>
            </Li>
            <Li>
              <A
                href="https://vitejs.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vite
              </A>
              <P>Entwicklungswerkzeug für Web-Apps</P>
            </Li>
            <Li>
              <A
                href="https://facebook.github.io/react"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </A>
              {' und '}
              <A
                href="https://github.com/mobxjs/mobx-state-tree"
                target="_blank"
                rel="noopener noreferrer"
              >
                MobX-State-Tree
              </A>
              <P>
                Die Benutzeroberfläche ist eine Funktion von Anwendungsdaten und
                Benutzereingaben
              </P>
            </Li>
            <Li>
              <A
                href="http://getbootstrap.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bootstrap
              </A>
              &nbsp;und&nbsp;
              <A
                href="http://www.material-ui.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Material UI
              </A>
              <P>Layouten nach Google und Microsoft</P>
            </Li>
            <Li>
              <A
                href="http://leafletjs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leaflet
              </A>
              &nbsp;und&nbsp;
              <A
                href="https://developers.google.com/maps/?hl=de"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps API
              </A>
              <P>Karten einbinden</P>
            </Li>
          </Ul>
          <FaWindows style={{ fontSize: 30 }} alt="Windows" />
          <FaLinux style={{ fontSize: 30 }} alt="Linux" />
          <FaApple style={{ fontSize: 30 }} alt="MaxOs" />
          <H2>Betriebssysteme</H2>
          <Ul>
            <Li>
              <A
                href="http://de.wikipedia.org/wiki/Microsoft_Windows"
                target="_blank"
                rel="noopener noreferrer"
              >
                Windows
              </A>
              <P>Der Benutzerfreundliche</P>
            </Li>
            <Li>
              <A
                href="http://de.wikipedia.org/wiki/Ubuntu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ubuntu Linux
              </A>
              <P>Der Server-Meister</P>
            </Li>
            <Li>
              <A
                href="http://de.wikipedia.org/wiki/Mac_OS_X"
                target="_blank"
                rel="noopener noreferrer"
              >
                MacOS
              </A>
              <P>Entwickler fliegen drauf</P>
            </Li>
          </Ul>
        </div>
      </Row>
    </Page>
  </Layout>
)

export default TechnologienPage
