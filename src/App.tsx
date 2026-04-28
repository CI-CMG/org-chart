import {
  useRef,
} from "react";
import ForceGraph3D from "react-force-graph-3d";
import SpriteText from 'three-spritetext';
import './App.css'

const meta_graph = {
  "nodes": [
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
    {"id": "GSL", "group": 2},
    {"id": "SWPC", "group": 2},
    {"id": "CIRES Members Council", "group": 3},
  ],
  "links": [
    {"source": "Rudy Klucik", "target": "NCEI", "value": 3, "predicate": "memberOf"},
    {"source": "Rudy Klucik", "target": "CIRES Members Council", "value": 3, "predicate": "memberOf"},
    {"source": "Jeffrey Duda", "target": "GSL", "value": 3, "predicate": "memberOf"},
    {"source": "Jeffrey Duda", "target": "CIRES Members Council", "value": 3, "predicate": "memberOf"},
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
          width={800}
          height={800}
          backgroundColor={"rgb(11,11,11)"}
          nodeColor={"pink"}
          nodeAutoColorBy="id"
          nodeLabel="id"
          linkDirectionalParticles={"value"}
          linkDirectionalParticleSpeed={(d) => d.value * 0.001}
          nodeRelSize={3}
          linkDirectionalArrowLength={5}
          linkDirectionalArrowRelPos={1}
          linkWidth={1.1}
          linkCurvature={0.025}
          nodeThreeObject={
              (node) => {
              const sprite = new SpriteText(node.id);
              sprite.color = "white";
              sprite.textHeight = 15;
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