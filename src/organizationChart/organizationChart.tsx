// https://d3-graph-gallery.com/graph/donut_label.html
// import {
//   useEffect,
//   useRef,
//   useId,
// } from "react";
// import * as d3 from "d3";
// import { sum } from "d3";
// import PropTypes from "prop-types";

/*
  
*/

function OrganizationChart({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  // const id = useId();
  // const ref = useRef(null);

  return (
    <div className="OrganizationChart">
      <h3 className="text-center">{title}</h3>
      <p className="text-center">{subtitle}</p>
    </div>
  );
}

// OrganizationChart.propTypes = {
//   title: PropTypes.string.isRequired,
//   subtitle: PropTypes.string,
// };

export default OrganizationChart;
