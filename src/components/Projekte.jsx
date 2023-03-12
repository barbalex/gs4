import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'
import Scrollspy from 'react-scrollspy'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from '@emotion/styled'

import Layout from './Layout'
import apfImg from '/apflora.png'
import aeImg from '/ae.png'
import bbImg from '/bb.png'
import vmImg from '/seedling.svg'
import zhLoeweImg from '/zhLoewe.png'
import kaplaImg from '/kapla.png'
import apImg from '/ap.png'
import apfloraCarouselItems from '../modules/apfloraCarouselItems'
import aeCarouselItems from '../modules/aeCarouselItems'
import vmCarouselItems from '../modules/vmCarouselItems'
import bbCarouselItems from '../modules/bbCarouselItems'
import kaplaCarouselItems from '../modules/kaplaCarouselItems'
import aiCarouselItems from '../modules/aiCarouselItems'

const Page = styled.div`
  padding: 15px;
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 180px 1fr;
    grid-column-gap: 30px;
  }
  .carousel-caption {
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
  .carousel-control-next-icon {
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjYuMDYyIDI2LjA2MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjYuMDYyIDI2LjA2MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAxMDAwMjsiIGQ9Ik0yMC43MDcsMTAuMDI4bC04LjgzNS04LjgzNUMxMS4xMDMsMC40MjQsMTAuMDc4LDAsOC45ODUsMEM3Ljg5MywwLDYuODY4LDAuNDI0LDYuMDk5LDEuMTkzDQoJCUw1LjM2MSwxLjkzMUM0LjU5MiwyLjY5OCw0LjE2OCwzLjcyNCw0LjE2OCw0LjgxNnMwLjQyNCwyLjExNywxLjE5MywyLjg4N2w1LjMyOCw1LjMyOGwtNS4zMjgsNS4zMjgNCgkJYy0wLjc2OSwwLjc3LTEuMTkzLDEuNzk0LTEuMTkzLDIuODg3czAuNDI0LDIuMTE4LDEuMTk0LDIuODg3bDAuNzM2LDAuNzM2YzAuNzcsMC43NzEsMS43OTQsMS4xOTMsMi44ODcsMS4xOTMNCgkJczIuMTE3LTAuNDI0LDIuODg3LTEuMTkzbDguODM1LTguODM2YzAuNzg3LTAuNzg1LDEuMjE2LTEuODc1LDEuMTg2LTMuMDAyQzIxLjkyMywxMS45MDUsMjEuNDk2LDEwLjgxNiwyMC43MDcsMTAuMDI4eg0KCQkgTTE5LjI5MywxNC42MTlsLTguODM1LDguODM2Yy0wLjQwMywwLjQwNC0wLjkzOCwwLjYwNy0xLjQ3MywwLjYwN3MtMS4wNjgtMC4yMDMtMS40NzQtMC42MDdsLTAuNzM2LTAuNzM3DQoJCWMtMC44MTEtMC44MDktMC44MTEtMi4xMzUsMC0yLjk0M2w2Ljc0Mi02Ljc0Mkw2Ljc3NSw2LjI4OWMtMC44MTEtMC44MS0wLjgxMS0yLjEzNiwwLTIuOTQzbDAuNzM2LTAuNzM3DQoJCUM3LjkxNywyLjIwMyw4LjQ1MSwyLDguOTg1LDJjMC41MzUsMCwxLjA2OSwwLjIwMywxLjQ3MywwLjYwN2w4LjgzNSw4LjgzNWMwLjQzNiwwLjQzNSwwLjYyOCwxLjAxOCwwLjU5OCwxLjU4OQ0KCQlDMTkuOTIxLDEzLjYwMiwxOS43MjgsMTQuMTg1LDE5LjI5MywxNC42MTl6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==);
  }
  .carousel-control-prev-icon {
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjI2LjA2MnB4IiBoZWlnaHQ9IjI2LjA2MnB4IiB2aWV3Qm94PSIwIDAgMjYuMDYyIDI2LjA2MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjYuMDYyIDI2LjA2MjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTE1LjM3MywxMy4wMzFsNS4zMjgtNS4zMjhjMC43NzEtMC43NywxLjE5My0xLjc5NCwxLjE5My0yLjg4N2MwLTEuMDkzLTAuNDI2LTIuMTE4LTEuMTk0LTIuODg3bC0wLjczNi0wLjczNg0KCQlDMTkuMTk0LDAuNDI0LDE4LjE3LDAsMTcuMDc3LDBTMTQuOTYsMC40MjQsMTQuMTksMS4xOTNsLTguODM1LDguODM1Yy0wLjc4OCwwLjc4OC0xLjIxNiwxLjg3Ny0xLjE4NiwzLjAwMw0KCQljLTAuMDMsMS4xMjcsMC4zOTcsMi4yMTcsMS4xODcsMy4wMDRsOC44MzQsOC44MzRjMC43NywwLjc3MSwxLjc5NCwxLjE5MywyLjg4NywxLjE5M3MyLjExNy0wLjQyNCwyLjg4Ny0xLjE5M2wwLjczNy0wLjczNw0KCQljMC43Ny0wLjc2OCwxLjE5My0xLjc5MywxLjE5My0yLjg4NmMwLTEuMDk0LTAuNDI2LTIuMTE3LTEuMTkzLTIuODg3TDE1LjM3MywxMy4wMzF6IE0xOS4yODcsMjIuNzE2bC0wLjczNywwLjczNw0KCQljLTAuNDAyLDAuNDA0LTAuOTM4LDAuNjA3LTEuNDczLDAuNjA3cy0xLjA2OC0wLjIwMy0xLjQ3My0wLjYwN0w2Ljc3LDE0LjYxN2MtMC40MzYtMC40MzQtMC42MjgtMS4wMTgtMC41OTgtMS41ODgNCgkJYy0wLjAzLTAuNTcxLDAuMTYyLTEuMTU0LDAuNTk4LTEuNTg5bDguODM1LTguODM1QzE2LjAwOSwyLjIwMywxNi41NDMsMiwxNy4wNzcsMnMxLjA2OCwwLjIwMywxLjQ3MywwLjYwN2wwLjczNywwLjczNg0KCQljMC44MTIsMC44MSwwLjgxMiwyLjEzNiwwLDIuOTQ0bC02Ljc0Miw2Ljc0M2w2Ljc0Miw2Ljc0MUMyMC4wOTgsMjAuNTgyLDIwLjA5OCwyMS45MDgsMTkuMjg3LDIyLjcxNnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K);
  }
  .carousel-indicators > li {
    border: 1px solid #80808073;
  }
`
const Column = styled.div``
const MainColumn = styled.div`
  scroll-snap-type: y mandatory;
  scroll-padding: 56px;
`
const Ul = styled.ul`
  padding-left: 0;
`
const Li = styled.li`
  margin-bottom: 0;
`
const H2 = styled.h2`
  margin-top: 5px !important;
  margin-bottom: 8px !important;
  font-weight: bold;
  font-size: 24px;
`
const H3 = styled.h3`
  margin-bottom: 8px !important;
  font-size: 1.2rem !important;
  font-weight: 500 !important;
`
const StyledScrollspy = styled(Scrollspy)`
  background-color: transparent;
  border: 1px solid #d8d8d8;
  margin-bottom: 15px !important;
  margin-left: 0 !important;
  padding-left: 0;
  border-radius: 5px;
  list-style: none;
  @media (min-width: 800px) {
    position: fixed;
    margin-bottom: unset;
  }
  li a {
    display: block;
    color: #716b7a;
    font-weight: bold;
    padding: 10px 15px;
  }
  li a:hover {
    text-decoration: none !important;
  }
  .active {
    background-color: #f5f5f5;
  }
`
const A = styled.a`
  padding: 10px 15px !important;
  &:hover {
    background-color: #145f00;
  }
`
const Section = styled.section`
  margin-bottom: 60px;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  /**
   * make klick on nav link scroll far enough
   * that image is not hidden by navbar
   */
  margin-top: -60px;
  padding-top: 60px;
`
const P = styled.p`
  margin-bottom: 0;
  a {
    color: #145f00;
    border-bottom: 1px dashed #333;
    text-decoration: none;
    &:hover {
      border-bottom: 1px solid #145f00;
      text-decoration: none;
    }
  }
`
const Lead = styled.p`
  margin-bottom: 16px;
`
const Img = styled.img`
  margin-bottom: 0;
`

const ProjektPage = () => (
  <Layout>
    <Page>
      <Column>
        <StyledScrollspy
          items={[
            'apflora',
            'arteigenschaften',
            'vermehrung',
            'kapla',
            'awel-personal',
            'awel-indikatoren',
            'mediterranean-migration',
          ]}
          currentClassName="active"
          offset={-50}
        >
          <Li>
            <A href="#apflora">apflora.ch</A>
          </Li>
          <Li>
            <A href="#arteigenschaften">arteigenschaften.ch</A>
          </Li>
          <Li>
            <A href="#vermehrung">vermehrung.ch</A>
          </Li>
          <Li>
            <A href="#kapla">Kapla</A>
          </Li>
          <Li>
            <A href="#awel-personal">AWEL-Personal</A>
          </Li>
          <Li>
            <A href="#awel-indikatoren">AWEL-Indikatoren</A>
          </Li>
          <Li>
            <A href="#mediterranean-migration">
              mediterranean-
              <br />
              migration.com
            </A>
          </Li>
        </StyledScrollspy>
      </Column>
      <MainColumn>
        <Lead className="lead">Eine Auswahl von aktuellen Projekten:</Lead>
        <Section id="apflora">
          <Img src={apfImg} alt="apflora" height={51} />
          <H2>apflora.ch</H2>
          <H3>
            Aktionsplan Flora der Fachstelle Naturschutz des Kantons Zürich
          </H3>
          <div>
            Grösste Stärken:
            <Ul>
              <Li>komplexe Projektstruktur im Strukturbaum darstellen</Li>
              <Li>aufwändige Jahresberichte auf Knopfdruck produzieren</Li>
              <Li>
                Erfolgskontrollen werden in einem leistungsfähigen Formular
                Excel-ähnlich geplant
              </Li>
              <Li>differenzierte Benutzerrechte</Li>
              <Li>
                Profis und Freiwillige erfassen ihre Daten selber, mit Hilfe von
                massgeschneiderten Zugängen
              </Li>
            </Ul>
          </div>
          <UncontrolledCarousel
            items={apfloraCarouselItems}
            autoPlay={false}
            interval={false}
          />
          <P>Im produktiven Einsatz seit 2013.</P>
          <P>
            Mehr Informationen&nbsp;
            <a
              href="https://apflora.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              auf der Startseite
            </a>
            &nbsp;und&nbsp;
            <a
              href="https://apflora.ch/Dokumentation/Benutzer/Was-kann-man-mit-apflora-machen"
              target="_blank"
              rel="noopener noreferrer"
            >
              in der Dokumentation
            </a>
            .
          </P>
        </Section>
        <Section id="arteigenschaften">
          <Img src={aeImg} alt="arteigenschaften.ch" height={51} />
          <H2>arteigenschaften.ch</H2>
          <H3>
            Naturschutzrelevante Informationen über Arten aus den Gruppen Fauna,
            Flora, Moose, Pilze und von Lebensräumen:
          </H3>
          <Ul>
            <Li>anzeigen</Li>
            <Li>importieren</Li>
            <Li>kombinieren</Li>
            <Li>Informationen von Synonymen verbinden</Li>
            <Li>exportieren</Li>
            <Li>über Artengruppen hinweg zusammenfassen</Li>
            <Li>in eigener Anwendung einbinden</Li>
          </Ul>
          <P>
            Grösste Stärke ist der einfache Import und Export von Daten. Die
            Absicht dahinter: Alle benötigten Daten können, sofern nicht schon
            enthalten, rasch ergänzt und für Auswertungen kombiniert werden.
          </P>
          <UncontrolledCarousel
            items={aeCarouselItems}
            autoPlay={false}
            interval={false}
          />
          <P>Im produktiven Einsatz seit 2013.</P>
          <P>
            Mehr Informationen&nbsp;
            <a
              href="https://artdaten.ch/Dokumentation/Projektbeschreibung"
              target="_blank"
              rel="noopener noreferrer"
            >
              in der Dokumentation
            </a>
            .
          </P>
        </Section>
        <Section id="vermehrung">
          <Img src={vmImg} alt="vermehrung.ch" height={51} />
          <H2>vermehrung.ch</H2>
          <H3>Bedrohte Pflanzen vermehren</H3>
          <Ul>
            <Li>mobile first</Li>
            <Li>offline first</Li>
            <Li>live aktualisierte Daten</Li>
            <Li>differenzierte Benutzerrechte</Li>
          </Ul>
          <P>
            Grösste Stärke ist die Fähigkeit, ohne Internet-Anschluss und mit
            jedem beliebigen Gerät arbeiten zu können.
          </P>
          <UncontrolledCarousel
            items={vmCarouselItems}
            autoPlay={false}
            interval={false}
          />
          <P>Im produktiven Einsatz seit 2020.</P>
          <P>
            Mehr Informationen&nbsp;
            <a
              href="https://vermehrung.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              auf der Startseite
            </a>
            {' und '}
            <a
              href="https://vermehrung.ch/Dokumentation/Ziele"
              target="_blank"
              rel="noopener noreferrer"
            >
              in der Dokumentation
            </a>
            .
          </P>
        </Section>
        <Section id="kapla">
          <Img src={kaplaImg} alt="Kapla" height={51} />
          <H2>Kapla</H2>
          <P>
            Mit Kapla verwaltet die Abteilung Recht des AWEL (Amt für Abfall,
            Wasser, Energie und Luft) des Kantons Zürich ihre Geschäfte.
          </P>
          <br />
          <div>
            Grösste Stärken:
            <Ul>
              <Li>massgeschneidert für die Aufgabe</Li>
              <Li>benutzerfreundlich</Li>
              <Li>beinahe null Unterhalt</Li>
            </Ul>
          </div>
          <UncontrolledCarousel
            items={kaplaCarouselItems}
            autoPlay={false}
            interval={false}
          />
          <P>Im produktiven Einsatz seit 2016.</P>
          <P>
            Mehr Informationen&nbsp;
            <a
              href="https://github.com/barbalex/kapla3"
              target="_blank"
              rel="noopener noreferrer"
            >
              auf GitHub
            </a>
            .
          </P>
        </Section>
        <Section id="awel-personal">
          <Img src={apImg} alt="AWEL-Personal" height={51} />
          <H2>AWEL-Personal</H2>
          <P>
            Damit verwaltet das AWEL (Amt für Abfall, Wasser, Energie und Luft)
            des Kantons Zürich Personal-Daten.
          </P>
          <br />
          <div>
            Grösste Stärken:
            <Ul>
              <Li>massgeschneidert für die Aufgabe</Li>
              <Li>benutzerfreundlich</Li>
              <Li>beinahe null Unterhalt</Li>
            </Ul>
          </div>
          <P>Sorry, keine Bilder: Personaldaten sind sensibel...</P>
          <br />
          <P>Im produktiven Einsatz seit 2019.</P>
          <P>
            Mehr Informationen&nbsp;
            <a
              href="https://github.com/barbalex/awel-personal"
              target="_blank"
              rel="noopener noreferrer"
            >
              auf GitHub
            </a>
            .
          </P>
        </Section>
        <Section id="awel-indikatoren">
          <Img src={zhLoeweImg} alt="AWEL-Indikatoren" height={51} />
          <H2>AWEL-Indikatoren</H2>
          <P>
            Das AWEL (Amt für Abfall, Wasser, Energie und Luft) des Kantons
            Zürich verwaltet mit dieser Access-Anwendung Indikatoren.
          </P>
          <div>
            Grösste Stärken:
            <Ul>
              <Li>massgeschneidert für die Aufgabe</Li>
              <Li>bisher null Unterhaltsbedarf</Li>
            </Ul>
          </div>
          <UncontrolledCarousel
            items={aiCarouselItems}
            autoPlay={false}
            interval={false}
          />
          <P>Im produktiven Einsatz seit 2014.</P>
        </Section>
        <Section id="mediterranean-migration">
          <Img src={bbImg} alt="mediterranean-migration" height={51} />
          <H2>mediterranean-migration.com</H2>
          <P>
            Übersicht über die Migration durch das zentrale und östliche
            Mittelmeer.
          </P>
          <div>
            Grösste Stärken:
            <Ul>
              <Li>
                rasche Übersicht über Migrationsströme und dazugehörige
                politische Ereignisse
              </Li>
              <Li>
                der Autor kann Ereignisse und Artikel direkt bearbeiten - wie
                bei einem{' '}
                <a
                  href="https://de.wikipedia.org/wiki/Content-Management-System"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CMS
                </a>
              </Li>
            </Ul>
          </div>
          <UncontrolledCarousel
            items={bbCarouselItems}
            autoPlay={false}
            interval={false}
          />
          <P>Im produktiven Einsatz seit 2015.</P>
          <P>
            Schauen Sie selber:&nbsp;
            <a
              href="https://mediterranean-migration.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              mediterranean-migration.com
            </a>
            .
          </P>
          <P>&nbsp;</P>
          <P>&nbsp;</P>
          <P>&nbsp;</P>
          <P>&nbsp;</P>
          <P>&nbsp;</P>
          <P>&nbsp;</P>
          <P>&nbsp;</P>
          <P>&nbsp;</P>
          <P>&nbsp;</P>
          <P>&nbsp;</P>
          <P>&nbsp;</P>
          <P>&nbsp;</P>
          <P>&nbsp;</P>
          <P>&nbsp;</P>
          <P>&nbsp;</P>
          <P>&nbsp;</P>
        </Section>
      </MainColumn>
    </Page>
  </Layout>
)

ProjektPage.displayName = 'ProjektPage'

export default ProjektPage

export { Head } from '../components/Head'
