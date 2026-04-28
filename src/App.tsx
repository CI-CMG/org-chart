import {
  useRef,
} from "react";
import ForceGraph3D from "react-force-graph-3d";
import SpriteText from 'three-spritetext';
import './App.css'

const meta_graph = {
  "nodes": [
    {"id": "Ship", "group": 1},
    {"id": "Cruise", "group": 2},
    {"id": "Instrument", "group": 3},
    {"id": "Annotation", "group": 4},
    {"id": "Project", "group": 5},
    {"id": "Person", "group": 6},
    {"id": "Classification", "group": 7}
  ],
  "links": [
    {"source": "Cruise", "target": "Ship", "value": 3, "predicate": "COLLECTED_DATA_FOR"},
    {"source": "Instrument", "target": "Cruise", "value": 3, "predicate": "COLLECTED_DATA_FOR"},
    {"source": "Annotation", "target": "Cruise", "value": 3, "predicate": "COLLECTED_BY"},
    {"source": "Annotation", "target": "Instrument", "value": 4, "predicate": "COLLECTED_BY"},
    {"source": "Person", "target": "Project", "value": 2, "predicate": "ADVISOR_TO"},
    {"source": "Person", "target": "Annotation", "value": 4, "predicate": "CREATED"},
    {"source": "Classification", "target": "Annotation", "value": 4, "predicate": "DEFINES"}
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
          width={1000}
          height={400}
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
              sprite.textHeight = 5;
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