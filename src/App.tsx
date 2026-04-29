import {
  useRef,
} from "react";
import ForceGraph3D from "react-force-graph-3d";
import SpriteText from 'three-spritetext';
import './App.css'

const meta_graph = {
  "nodes": [
    {"id": "Chris Slater", "group": 0},
    {"id": "Clinton Campbell", "group": 0},
    {"id": "Clinton Lohr", "group": 0},
    {"id": "Max Smith", "group": 0},
    {"id": "Payton Cain", "group": 0},
    {"id": "Peemin Chen", "group": 0},
    {"id": "Quincy Cantu", "group": 0},
    {"id": "Rachel Peterson", "group": 0},
    {"id": "Vidhyadhari Gondle", "group": 0},
    //
    {"id": "Kelly Stroker", "group": 0},
    {"id": "Carrie Wall Bell", "group": 0},
    {"id": "Nic Arcos", "group": 0},
    {"id": "Aaron Sweeny", "group": 0},
    {"id": "Lindsey Wright", "group": 0},
    {"id": "Jennifer Jencks", "group": 0},
    {"id": "Bryan Meyer", "group": 0},
    {"id": "Jordan Schweizer", "group": 0},
    {"id": "Bary Eakins", "group": 0},
    {"id": "Stephanie Herring", "group": 0},
    // {"id": "", "group": 0},
    // {"id": "", "group": 0},
    // {"id": "", "group": 0},
    // {"id": "", "group": 0},
    //
    {"id": "Jeffrey Duda", "group": 1},
    {"id": "Elysia Lucas", "group": 1},
    {"id": "Anne Sledd", "group": 1},
    {"id": "Aleya Kaushik", "group": 1},
    {"id": "Jianhao Zhang", "group": 1},
    {"id": "Nathan Malarich", "group": 1},
    {"id": "Aly Krimmer", "group": 1},
    {"id": "Alison Post", "group": 1},
    {"id": "Nels Bjarke", "group": 1},
    {"id": "Scott Clingan", "group": 1},
    {"id": "Mara Coe", "group": 1},
    {"id": "Agnieszka Gautier", "group": 1},
    {"id": "Guoqing Ge", "group": 1},
    {"id": "Marty Heath", "group": 1},
    {"id": "Rudy Klucik", "group": 1},
    {"id": "Corey Krimmer", "group": 1},
    {"id": "Scott Lewis", "group": 1},
    {"id": "Kim Moreland", "group": 1},
    {"id": "Adam Schneider", "group": 1},
    //
    {"id": "GSL", "group": 2},
    {"id": "NCEI", "group": 2},
    {"id": "PSL", "group": 2},
    {"id": "GML", "group": 2},
    {"id": "CSL", "group": 2},
    {"id": "CIRES ADMIN", "group": 2},
    {"id": "SEEC", "group": 2},
    {"id": "Main Campus Research", "group": 2},
    {"id": "CEEE", "group": 2},
    {"id": "NSIDC", "group": 2},
    {"id": "SWPC", "group": 2},
    {"id": "CMC", "group": 3},
    //
    {"id": "GSB Dev Team", "group": 4},
    {"id": "CIRES", "group": 5},
    {"id": "NESDIS", "group": 5},
    {"id": "NOAA", "group": 5},
    {"id": "OAR", "group": 5},
    {"id": "CU", "group": 5},
  ],
  "links": [
    {"source": "Rudy Klucik", "target": "NCEI", "predicate": "memberOf"},
    {"source": "Rudy Klucik", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Rudy Klucik", "target": "CMC", "predicate": "memberOf"},
    {"source": "Rudy Klucik", "target": "GSB Dev Team", "predicate": "memberOf"},
    // cmc
    {"source": "Jeffrey Duda", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Jeffrey Duda", "target": "CMC", "predicate": "memberOf"},
    {"source": "Jeffrey Duda", "target": "GSL", "predicate": "memberOf"},
    {"source": "Elysia Lucas", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Elysia Lucas", "target": "CMC", "predicate": "memberOf"},
    {"source": "Elysia Lucas", "target": "NCEI", "predicate": "memberOf"},
    {"source": "Anne Sledd", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Anne Sledd", "target": "CMC", "predicate": "memberOf"},
    {"source": "Anne Sledd", "target": "PSL", "predicate": "memberOf"},
    {"source": "Aleya Kaushik", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Aleya Kaushik", "target": "CMC", "predicate": "memberOf"},
    {"source": "Aleya Kaushik", "target": "GML", "predicate": "memberOf"},
    {"source": "Jianhao Zhang", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Jianhao Zhang", "target": "CMC", "predicate": "memberOf"},
    {"source": "Jianhao Zhang", "target": "CSL", "predicate": "memberOf"},
    {"source": "Nathan Malarich", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Nathan Malarich", "target": "CMC", "predicate": "memberOf"},
    {"source": "Nathan Malarich", "target": "CSL", "predicate": "memberOf"},
    {"source": "Aly Krimmer", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Aly Krimmer", "target": "CMC", "predicate": "memberOf"},
    {"source": "Aly Krimmer", "target": "CIRES ADMIN", "predicate": "memberOf"},
    {"source": "Alison Post", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Alison Post", "target": "CMC", "predicate": "memberOf"},
    {"source": "Alison Post", "target": "SEEC", "predicate": "memberOf"},
    {"source": "Nels Bjarke", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Nels Bjarke", "target": "CMC", "predicate": "memberOf"},
    {"source": "Nels Bjarke", "target": "Main Campus Research", "predicate": "memberOf"},
    {"source": "Scott Clingan", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Scott Clingan", "target": "CMC", "predicate": "memberOf"},
    {"source": "Scott Clingan", "target": "GML", "predicate": "memberOf"},
    {"source": "Mara Coe", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Mara Coe", "target": "CMC", "predicate": "memberOf"},
    {"source": "Mara Coe", "target": "CEEE", "predicate": "memberOf"},
    {"source": "Agnieszka Gautier", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Agnieszka Gautier", "target": "CMC", "predicate": "memberOf"},
    {"source": "Agnieszka Gautier", "target": "NSIDC", "predicate": "memberOf"},
    {"source": "Guoqing Ge", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Guoqing Ge", "target": "CMC", "predicate": "memberOf"},
    {"source": "Guoqing Ge", "target": "GSL", "predicate": "memberOf"},
    {"source": "Marty Heath", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Marty Heath", "target": "CMC", "predicate": "memberOf"},
    {"source": "Marty Heath", "target": "NSIDC", "predicate": "memberOf"},
    {"source": "Corey Krimmer", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Corey Krimmer", "target": "CMC", "predicate": "memberOf"},
    {"source": "Corey Krimmer", "target": "CIRES ADMIN", "predicate": "memberOf"},
    {"source": "Scott Lewis", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Scott Lewis", "target": "CMC", "predicate": "memberOf"},
    {"source": "Scott Lewis", "target": "NSIDC", "predicate": "memberOf"},
    {"source": "Kim Moreland", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Kim Moreland", "target": "CMC", "predicate": "memberOf"},
    {"source": "Kim Moreland", "target": "SWPC", "predicate": "memberOf"},
    {"source": "Adam Schneider", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Adam Schneider", "target": "CMC", "predicate": "memberOf"},
    {"source": "Adam Schneider", "target": "PSL", "predicate": "memberOf"},
    // cires
    {"source": "Chris Slater", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Chris Slater", "target": "GSB Dev Team", "predicate": "memberOf"},
    {"source": "Chris Slater", "target": "NCEI", "predicate": "memberOf"},
    {"source": "Clinton Campbell", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Clinton Campbell", "target": "GSB Dev Team", "predicate": "memberOf"},
    {"source": "Clinton Campbell", "target": "NCEI", "predicate": "memberOf"},
    {"source": "Clinton Lohr", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Clinton Lohr", "target": "GSB Dev Team", "predicate": "memberOf"},
    {"source": "Clinton Lohr", "target": "NCEI", "predicate": "memberOf"},
    {"source": "Max Smith", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Max Smith", "target": "GSB Dev Team", "predicate": "memberOf"},
    {"source": "Max Smith", "target": "NCEI", "predicate": "memberOf"},
    {"source": "Payton Cain", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Payton Cain", "target": "GSB Dev Team", "predicate": "memberOf"},
    {"source": "Payton Cain", "target": "NCEI", "predicate": "memberOf"},
    {"source": "Peemin Chen", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Peemin Chen", "target": "GSB Dev Team", "predicate": "memberOf"},
    {"source": "Peemin Chen", "target": "NCEI", "predicate": "memberOf"},
    {"source": "Quincy Cantu", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Quincy Cantu", "target": "GSB Dev Team", "predicate": "memberOf"},
    {"source": "Quincy Cantu", "target": "NCEI", "predicate": "memberOf"},
    {"source": "Rachel Peterson", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Rachel Peterson", "target": "GSB Dev Team", "predicate": "memberOf"},
    {"source": "Rachel Peterson", "target": "NCEI", "predicate": "memberOf"},
    {"source": "Vidhyadhari Gondle", "target": "CIRES", "predicate": "memberOf"},
    {"source": "Vidhyadhari Gondle", "target": "GSB Dev Team", "predicate": "memberOf"},
    {"source": "Vidhyadhari Gondle", "target": "NCEI", "predicate": "memberOf"},
    // admin
    // https://research.noaa.gov/about-us/
    {"source": "NCEI", "target": "NESDIS", "predicate": "memberOf"},
    {"source": "NESDIS", "target": "NOAA", "predicate": "memberOf"},
    {"source": "CSL", "target": "OAR", "predicate": "memberOf"},
    {"source": "GML", "target": "OAR", "predicate": "memberOf"},
    {"source": "GSL", "target": "OAR", "predicate": "memberOf"},
    {"source": "PSL", "target": "OAR", "predicate": "memberOf"},
    {"source": "OAR", "target": "NOAA", "predicate": "memberOf"},
    // cu
    {"source": "NSIDC", "target": "CU", "predicate": "memberOf"},
    {"source": "CEEE", "target": "CU", "predicate": "memberOf"},
    {"source": "SEEC", "target": "CU", "predicate": "memberOf"},
  ]
};

function App() {
  const containerRef = useRef(null);

  return (
    <>
      <section id="center">
        <p>Organizational Chart for CIRES NCEI</p>
      </section>

      <section ref={containerRef}>
        <ForceGraph3D
          graphData={meta_graph}
          nodeThreeObjectExtend={true}
          width={1100}
          height={800}
          backgroundColor={"rgb(11,11,11)"}
          nodeColor={"pink"}
          nodeAutoColorBy="id"
          nodeLabel="id"
          // linkDirectionalParticles={"value"}
          // linkDirectionalParticleSpeed={(d) => d.value * 0.001}
          nodeRelSize={2}
          linkDirectionalArrowLength={5}
          linkDirectionalArrowRelPos={1}
          linkWidth={1.1}
          linkCurvature={0.025}
          nodeThreeObject={
              (node) => {
              const sprite = new SpriteText(node.id);
              sprite.color = "white";
              sprite.textHeight = 6;
              return sprite;
            }
          }
          threeObjectExtend={true}
          //
          linkThreeObjectExtend={true}
          linkThreeObject={(link) => {
            const sprite = new SpriteText(`${link.predicate}`);
            sprite.color = 'grey';
            sprite.textHeight = 3;
            return sprite;
          }}
        />
      </section>

      <section id="spacer"></section>
    </>
  )
}

export default App;