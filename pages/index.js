import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
// const sizeOf = require('image-size');
// console.log(sizeOf('logoAnimation'));
import ReactSVG from 'react-svg';
import mySvg from './neotevaTeaserAnimation.svg';

console.log('svg', { mySvg });

const drawerWidth = 240;
const headerHeight = 64;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    //    flexDirection: 'row'
    //    flexWrap: 'wrap'
  },
  contentWrapper: {},
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  toolbar: theme.mixins.toolbar,
}));

function getWindowDimensions() {
  let width = 0;
  let height = 0;
  if (typeof window !== 'undefined') {
    width = window.innerWidth;
    height = window.innerHeight;
  }

  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function Index(props) {
  const { container } = props;

  const classes = useStyles();
  const theme = useTheme();

  const { height, width } = useWindowDimensions();
  const ratio = (width - drawerWidth) / (height - headerHeight);

  console.log(container, height, width, mySvg);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <ReactSVG
        src={mySvg}
        beforeInjection={svg => {
          ratio < 1
            ? svg.setAttribute('style', 'width: 100%')
            : svg.setAttribute('style', `height:${height - headerHeight}px`);
          // Height is 190 here to account for `stroke-width: 5`.
          // svg.querySelector('rect').setAttribute('style', 'height: 190px');
        }}
      />

      <Typography paragraph align="left">
        Le métier du « Management de Transition » est né aux Etats-Unis et aux
        Pays-Bas dans les années 1970. En France, l’activité est apparue à la
        fin des années 1980, et connaît à présent un succès croissant. Le marché
        français est actuellement estimé à environ 300 à 350 millions d’€ et a
        un taux de croissance annuel de 20% à 25%. Les missions de management de
        transition sont effectuées dans le Top Management, au niveau du comité
        de direction.. Plus précisément, 70%-80% des missions concernent les
        fonctions de direction générale, financière, ressources humaines et
        industrielle. L’industrie reste le secteur le plus consommateur de
        management de transition. 60% des projets s’y déroulent. Les 40% restant
        sont partagés entre les services et la distribution. Définition du
        Management de Transition Le Management de Transition est le recours à
        des compétences opérationnelles externes de haut niveau pour une durée
        limitée afin d’accomplir une mission spécifique. Les raisons pour
        lesquelles une entreprise a recours à un manager de transition sont très
        variées :
        <ul>
          <li>redéploiement et restructuration</li>
          <li>redressement de situations critiques</li>
          <li>cessions d’activités, externalisation d’un service</li>
          <li>gestion de crise</li>
          <li>management relais (i.e. remplacement)</li>
          <li>
            développement des activités: implantation à l’étranger,
            développement d’un nouveau produit, accompagnement de la croissance…
          </li>
          <li>fusion et acquisition</li>
          <li>
            améliorations des processus: adoption d’une nouvelle technologie,
            mise en place d’un nouveau système comptable ou informatique…
          </li>
          <li>
            projets spécifiques : changement de stratégie du groupe,
            accompagnement d’une entrée en bourse, mise en place d’un reporting
            ou d’un procès budgétaire
          </li>
          <li>création de société (start-up)</li>
        </ul>
        Ces situations sont exceptionnelles et urgentes. Ainsi, l’objectif même
        du management de transition repose dans la rapidité de la mise en œuvre
        de cette solution. Le Manager de Transition : un homme d’action Le
        management de transition est bien plus que de l’intérim, puisqu’il ne
        s’agit pas uniquement de renforcer le personnel de l’entreprise pour une
        durée convenue. L’aboutissement des missions ainsi que le profil du
        manager, sont différents. Le manager est « surdimensionné » par rapport
        à la mission. La réalisation de son objectif se fait grâce à une
        méthodologie définie avec l’Entreprise de Management de Transition. « Le
        cadre en intérim gère la continuité, le manager de transition gère le
        changement » Le management de transition n’est pas du conseil. Ce sont
        des hommes de terrain. Du conseil, ils passent à l’action lors de leurs
        missions, et s’intègrent au personnel de l’entreprise, contrairement au
        consultant qui reste un acteur externe. « Ils relèvent leurs manches et
        se mettent au travail »
        <Typography paragraph align="left" variant="h6">
          Compétences professionnelles
        </Typography>
      </Typography>
      <Typography paragraph align="left">
        Plusieurs compétences clés sont requises pour un manager de transition :
        Expérience solide: Les expériences professionnelles sont un facteur clé
        dans le métier du management de transition. En effet, le profil
        recherché démontre au moins 15 – 25 années d’expérience professionnelle
        dans des postes à forte responsabilité, et, si possible, à
        l’international. Mobilité : Les missions peuvent s’effectuer partout en
        France, ou à l’international. Par conséquent, une mobilité et une
        disponibilité totale sont indispensables. Adaptabilité : les entreprises
        qui ont recours au management de transition se trouvent dans des
        situations d’urgence et nécessitent un manager qui est opérationnel à
        100% très rapidement. Leadership : Un manager de transition doit être
        capable de mobiliser les équipes dans des situations tendues. Par
        conséquent, une autorité naturelle est demandée. Orientation vers les
        objectifs et résultats : Le manager de transition est un opérationnel et
        doit ainsi être capable de rapidement choisir la solution générant le
        plus de résultats. Il s’oriente clairement dans une logique de
        contribution et non plus une logique de pouvoir.
      </Typography>
    </main>
  );
}

export default Index;
