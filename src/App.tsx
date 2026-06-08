import { useRef } from "react";
// import ForceGraph3D from "react-force-graph-3d";
import ForceGraph2D from "react-force-graph-2d";
// import SpriteText from "three-spritetext";
// import "./App.css";

const meta_graph = {
  nodes: [
    { id: "Chris Slater", group: 0 },
    { id: "Clinton Campbell", group: 0 },
    { id: "Clinton Lohr", group: 0 },
    { id: "Max Smith", group: 0 },
    { id: "Payton Cain", group: 0 },
    { id: "Peemin Chen", group: 0 },
    { id: "Quincy Cantu", group: 0 },
    { id: "Rachel Peterson", group: 0 },
    { id: "Vidhyadhari Gondle", group: 0 },
    //
    { id: "Alexander Hoelzemann", group: 44 },
    { id: "Qin Lv", group: 44 },
    { id: "Sonar AI", group: 44 },
    //
    { id: "Carrie Wall Bell", group: 2 },
    { id: "Nic Arcos", group: 2 },
    { id: "Aaron Sweeny", group: 0 },
    { id: "Lindsey Wright", group: 0 },
    { id: "Jennifer Jencks", group: 2 },
    { id: "Bryan Meyer", group: 0 },
    { id: "Jordan Schweizer", group: 0 },
    { id: "Teodora Mitroi", group: 0 },
    { id: "Michael Richtsmeier", group: 33 },
    { id: "Logan Ejupi", group: 33 },
    { id: "Zoe Anderson", group: 33 },
    { id: "Luke Pitstick", group: 33 },
    { id: "Bary Eakins", group: 0 },
    { id: "Rob Redmon", group: 2 },
    // {"id": "", "group": 0},
    // {"id": "", "group": 0},
    // {"id": "", "group": 0},
    // {"id": "", "group": 0},
    //
    { id: "Jeffrey Duda", group: 1 },
    { id: "Elysia Lucas", group: 1 },
    { id: "Anne Sledd", group: 1 },
    { id: "Aleya Kaushik", group: 1 },
    { id: "Jianhao Zhang", group: 1 },
    { id: "Nathan Malarich", group: 1 },
    { id: "Aly Krimmer", group: 1 },
    { id: "Alison Post", group: 1 },
    { id: "Nels Bjarke", group: 1 },
    { id: "Scott Clingan", group: 1 },
    { id: "Mara Coe", group: 1 },
    { id: "Agnieszka Gautier", group: 1 },
    { id: "Guoqing Ge", group: 1 },
    { id: "Marty Heath", group: 1 },
    { id: "Rudy Klucik", group: 1 },
    { id: "Corey Krimmer", group: 1 },
    { id: "Scott Lewis", group: 1 },
    { id: "Kim Moreland", group: 1 },
    { id: "Adam Schneider", group: 1 },
    //
    { id: "NCAI", longName: "NOAA Center for AI", group: 5 },
    { id: "GSL", longName: "Global Systems Laboratory (GSL)", group: 2 },
    { id: "PSL", longName: "Physical Sciences Laboratory (PSL)", group: 2 },
    { id: "GML", longName: "Global Monitoring Laboratory (GML)", group: 2 },
    { id: "CSL", longName: "Chemical Sciences Laboratory (CSL)", group: 2 },
    { id: "CIRES ADMIN", group: 2 },
    {
      id: "SEEC",
      longName: "Sustainability, Energy and Environment Community (SEEC)",
      group: 2,
    },
    { id: "Earth Lab", longName: "Earth Lab", group: 2 },
    { id: "Main Campus Research", longName: "", group: 2 },
    {
      id: "CEEE",
      longName: "Center for Education, Engagement and Evaluation (CEEE)",
      group: 2,
    },
    {
      id: "NSIDC",
      longName: "National Snow and Ice Data Center (NSIDC)",
      group: 2,
    },
    {
      id: "SWPC",
      longName: "Space Weather Prediction Center (SWPC)",
      group: 2,
    },
    { id: "CMC", longName: "CIRES Members Council (CMC)", group: 3 },
    ////////////////////////////////////////////
    // NCEI Groups // https://docs.google.com/spreadsheets/d/1wYRAvP02BrueU2KhbVbleqBQgeNxy5PnJfb_F9uFX38/edit?gid=585617807#gid=585617807
    { id: "NCEI", group: 2 },
    {
      id: "Directors Office",
      longName: "NCEI Directors Office (DO)",
      group: 2,
    },
    { id: "Derek Arndt", group: 0 },
    { id: "Joseph Pica", group: 0 },
    //
    {
      id: "CSSD",
      longName: "Climate Science and Services Division (CSSD)",
      group: 2,
    },
    // { id: "CSB", longName: "Climate Science Branch (CSB)", group: 2 },
    {
      id: "CISB",
      longName: "Climate Information Services Branch (CISB)",
      group: 2,
    },
    { id: "MAB", longName: "Monitoring & Assessment Branch (MAB)", group: 2 },
    //
    {
      id: "COGS",
      longName: "Coasts, Oceans, and Geophysics Science Division (COGS)",
      group: 2,
    },
    { id: "STPS", longName: "", group: 2 },
    { id: "MGGS", longName: "", group: 2 },
    { id: "OSB", longName: "Oceanographic Science Branch (OSB)", group: 2 },
    { id: "Patrick Hogan", group: 0 },
    { id: "Kirsten Larsen", group: 0 },
    { id: "GSB", longName: "Geophysical Science Branch (GSB)", group: 2 },
    { id: "Stephanie Herring", group: 0 },
    { id: "Karen Grissom", group: 2 },
    { id: "Kelly Stroker", group: 0 },
    { id: "Laurel Rachmeler", group: 0 },
    { id: "CSB", longName: "Coastal Science Branch (CSB)", group: 2 },
    { id: "Jennifer Bowers", group: 0 },
    //
    { id: "DSD", longName: "Data Stewardship Division (DSD)", group: 2 },
    { id: "Ken Casey", group: 0 },
    { id: "DOB", longName: "Data Operations Branch (DOB)", group: 2 },
    { id: "Steven Rutz", group: 0 },
    { id: "AB", longName: "Archive Branch (AB)", group: 2 },
    { id: "Nancy Ritchey", group: 0 },
    { id: "SDB", longName: "Software Development Branch (SDB)", group: 2 },
    { id: "Daniel Lloyd", group: 0 },
    { id: "James Primrose", group: 0 },
    { id: "John Relph", group: 0 },
    { id: "Ken Tanaka", group: 0 },
    { id: "DAB", longName: "Data Access Branch (DAB)", group: 2 },
    { id: "Richard Baldwin", group: 0 },
    { id: "Ryan Berkheimer", group: 0 },
    { id: "Jesse Varner", group: 0 },
    { id: "Jessica Nation", group: 0 },
    { id: "Kevin Lally", group: 0 },
    //
    { id: "RMD", longName: "Resource Management Division (RMD)", group: 2 },
    { id: "Aric Whatley", group: 0 },
    { id: "Jennifer Thatcher", group: 0 },
    {
      id: "FAB",
      longName: "Finance and Administrative Branch (FAB)",
      group: 2,
    },
    { id: "Ming-Wai Merschat", group: 0 }, // Mindful NOAA
    { id: "SEB", longName: "Standards and Evaluation Branch (SEB)", group: 2 },
    // {"id": "", "group": 0},
    {
      id: "COB",
      longName: "Communications and Outreach Branch (COB)",
      group: 2,
    },
    { id: "Jake Fortune", group: 0 },
    //
    { id: "MSD", longName: "Mission Support Division (MSD)", group: 2 },
    { id: "Scott Hausman", group: 0 },
    { id: "ITOB", longName: "IT Operations Branch (ITOB)", group: 2 },
    { id: "Preston Carter", group: 0 },
    { id: "David Hernandez", group: 0 },
    { id: "Max Layer", group: 0 },
    { id: "Jefferson Ogata", group: 0 },
    { id: "Jason Symonds", group: 0 },
    { id: "LSB", longName: "Logistics Support Branch (LSB)", group: 2 },
    { id: "Shane Wise", group: 0 },
    //
    // {"id": "", "longName": "", "group": 2},
    // {"id": "", "longName": "", "group": 2},
    //
    { id: "GSB Dev Team", group: 4 },
    {
      id: "CIRES",
      longName: "Cooperative Institute for Research in Environmental Sciences",
      group: 5,
    },
    {
      id: "National Environmental Satellite, Data, and Information Service",
      longName:
        "National Environmental Satellite, Data, and Information Service (NESDIS)",
      group: 5,
    },
    {
      id: "NOAA",
      longName: "National Oceanic and Atmospheric Administration",
      group: 5,
    },
    {
      id: "Office of Ocean and Atmospheric Research",
      longName: "Office of Ocean and Atmospheric Research (OAR)",
      group: 5,
    },
    { id: "CU", longName: "University of Colorado Boulder", group: 5 },
    { id: "Computer Science Department", group: 5 },
    {
      id: "NCEP",
      longName: "National Centers for Environmental Prediction (NCEP)",
      group: 5,
    },
    { id: "US Air Force", group: 5 },
    // groups for dev team
    { id: "Hazel", group: 5 },
    { id: "Team Fish", group: 5 },
    { id: "Gazetteer", group: 5 },
    { id: "EchoFish", group: 5 },
    { id: "Trackline", group: 5 },
    { id: "Mable", group: 5 },
    { id: "Crowbar", group: 5 },
    { id: "STP DPMF", group: 5 },
    { id: "FishFlicks", group: 5 },
    { id: "Pace", group: 5 },
    { id: "Tharp", group: 5 },
    { id: "WOD", group: 5 },
    { id: "TugBoat", group: 5 },
    { id: "Argonaut", group: 5 },
    { id: "OASIS", group: 5 },
    { id: "Environmental Data Science Innovation & Inclusion Lab", group: 7},
  ],
  links: [
    { source: "Rudy Klucik", target: "NCEI", predicate: "memberOf" },
    // {"source": "Rudy Klucik", "target": "CIRES", "predicate": "memberOf"},
    { source: "Rudy Klucik", target: "CMC", predicate: "memberOf" },
    { source: "Rudy Klucik", target: "GSB Dev Team", predicate: "memberOf", color: 'green' },
    { source: "Rudy Klucik", target: "Hazel", predicate: "worksOn" },
    { source: "Rudy Klucik", target: "Gazetteer", predicate: "worksOn" },
    { source: "Rudy Klucik", target: "EchoFish", predicate: "worksOn" },
    { source: "Rudy Klucik", target: "Trackline", predicate: "worksOn" },
    { source: "Rudy Klucik", target: "Mable", predicate: "worksOn" },
    { source: "Rudy Klucik", target: "Crowbar", predicate: "worksOn" },
    { source: "Rudy Klucik", target: "STP DPMF", predicate: "worksOn" },
    { source: "Rudy Klucik", target: "Tharp", predicate: "worksOn" },
    { source: "Bary Eakins", target: "Tharp", predicate: "worksOn" },
    { source: "Peemin Chen", target: "Hazel", predicate: "worksOn" },
    { source: "Peemin Chen", target: "FishFlicks", predicate: "worksOn" },
    { source: "Kelly Stroker", target: "Hazel", predicate: "worksOn" },
    { source: "Payton Cain", target: "Gazetteer", predicate: "worksOn" },
    { source: "Payton Cain", target: "Trackline", predicate: "worksOn" },
    { source: "Payton Cain", target: "Mable", predicate: "worksOn" },
    { source: "Payton Cain", target: "Crowbar", predicate: "worksOn" },
    { source: "Payton Cain", target: "Tharp", predicate: "worksOn" },
    { source: "Carrie Wall Bell", target: "EchoFish", predicate: "worksOn" },
    { source: "Carrie Wall Bell", target: "TugBoat", predicate: "worksOn" },
    { source: "Carrie Wall Bell", target: "Team Fish", predicate: "worksOn" },
    { source: "Quincy Cantu", target: "TugBoat", predicate: "worksOn", value: 1 },
    { source: "Bryan Meyer", target: "Tharp", predicate: "worksOn", value: 1 },
    { source: "Bryan Meyer", target: "Trackline", predicate: "worksOn", value: 1 },
    { source: "Clinton Lohr", target: "TugBoat", predicate: "worksOn", value: 1 },
    // {"source": "Rudy Klucik", "target": "", "predicate": "worksOn"},
    { source: "Rachel Peterson", target: "Trackline", predicate: "worksOn" },
    { source: "Jordan Schweizer", target: "Trackline", predicate: "worksOn" },
    { source: "Teodora Mitroi", target: "Trackline", predicate: "worksOn" },
    { source: "Michael Richtsmeier", target: "Trackline", predicate: "juniorDataManager" },
    { source: "Logan Ejupi", target: "Team Fish", predicate: "juniorDataManager" },
    { source: "Zoe Anderson", target: "Team Fish", predicate: "juniorDataManager" },
    // { source: "Luke Pitstick", target: "Team Fish", predicate: "juniorDataManager" },
    // { source: "", target: "Team Fish", predicate: "juniorDataManager" },
    { source: "Rachel Peterson", target: "Tharp", predicate: "worksOn" },
    { source: "Max Smith", target: "Mable", predicate: "worksOn" },
    { source: "Clinton Campbell", target: "Crowbar", predicate: "worksOn" },
    { source: "Jennifer Jencks", target: "Crowbar", predicate: "worksOn", value: 1 },
    { source: "Jennifer Jencks", target: "Gazetteer", predicate: "worksOn", value: 1 },
    { source: "Jennifer Jencks", target: "Mable", predicate: "worksOn", value: 1 },
    { source: "Jennifer Jencks", target: "Crowbar", predicate: "worksOn", value: 1 },
    { source: "Jessica Nation", target: "Mable", predicate: "worksOn", value: 1 },
    { source: "Kevin Lally", target: "Mable", predicate: "worksOn", value: 1 },
    {
      source: "Vidhyadhari Gondle",
      target: "FishFlicks",
      predicate: "worksOn",
    },
    { source: "Lindsey Wright", target: "Hazel", predicate: "worksOn" },
    { source: "Nic Arcos", target: "Hazel", predicate: "worksOn" },
    // {"source": "Rudy Klucik", "target": "", "predicate": "worksOn"},
    // {"source": "Rudy Klucik", "target": "", "predicate": "worksOn"},
    // {"source": "Rudy Klucik", "target": "", "predicate": "worksOn"},
    // cmc
    { source: "Jeffrey Duda", target: "CIRES", predicate: "memberOf" },
    { source: "Jeffrey Duda", target: "CMC", predicate: "memberOf" },
    { source: "Jeffrey Duda", target: "GSL", predicate: "memberOf" },
    // {"source": "Elysia Lucas", "target": "CIRES", "predicate": "memberOf"},
    { source: "Elysia Lucas", target: "CMC", predicate: "memberOf", value: 1 },
    { source: "Elysia Lucas", target: "NCEI", predicate: "memberOf", value: 1 },
    // {"source": "Anne Sledd", "target": "CIRES", "predicate": "memberOf"},
    { source: "Anne Sledd", target: "CMC", predicate: "memberOf", value: 1 },
    { source: "Anne Sledd", target: "PSL", predicate: "memberOf", value: 1 },
    // {"source": "Aleya Kaushik", "target": "CIRES", "predicate": "memberOf"},
    { source: "Aleya Kaushik", target: "CMC", predicate: "memberOf", value: 1 },
    { source: "Aleya Kaushik", target: "GML", predicate: "memberOf", value: 1 },
    // {"source": "Jianhao Zhang", "target": "CIRES", "predicate": "memberOf"},
    { source: "Jianhao Zhang", target: "CMC", predicate: "memberOf", value: 1  },
    { source: "Jianhao Zhang", target: "CSL", predicate: "memberOf", value: 1  },
    // {"source": "Nathan Malarich", "target": "CIRES", "predicate": "memberOf"},
    { source: "Nathan Malarich", target: "CMC", predicate: "memberOf", value: 1  },
    { source: "Nathan Malarich", target: "CSL", predicate: "memberOf", value: 1  },
    // {"source": "Aly Krimmer", "target": "CIRES", "predicate": "memberOf"},
    { source: "Aly Krimmer", target: "CMC", predicate: "memberOf", value: 1  },
    { source: "Aly Krimmer", target: "CIRES ADMIN", predicate: "memberOf", value: 1  },
    // {"source": "Alison Post", "target": "CIRES", "predicate": "memberOf"},
    { source: "Alison Post", target: "CMC", predicate: "memberOf", value: 1  },
    { source: "Alison Post", target: "SEEC", predicate: "memberOf", value: 1  },
    { source: "Alison Post", target: "Earth Lab", predicate: "memberOf", value: 1 },
    // {"source": "Nels Bjarke", "target": "CIRES", "predicate": "memberOf"},
    { source: "Nels Bjarke", target: "CMC", predicate: "memberOf", value: 1  },
    {
      source: "Nels Bjarke",
      target: "Main Campus Research",
      predicate: "memberOf",
      value: 1 
    },
    // {"source": "Scott Clingan", "target": "CIRES", "predicate": "memberOf"},
    { source: "Scott Clingan", target: "CMC", predicate: "memberOf", value: 1  },
    { source: "Scott Clingan", target: "GML", predicate: "memberOf", value: 1  },
    // {"source": "Mara Coe", "target": "CIRES", "predicate": "memberOf"},
    { source: "Mara Coe", target: "CMC", predicate: "memberOf", value: 1  },
    { source: "Mara Coe", target: "CEEE", predicate: "memberOf", value: 1  },
    // {"source": "Agnieszka Gautier", "target": "CIRES", "predicate": "memberOf"},
    { source: "Agnieszka Gautier", target: "CMC", predicate: "memberOf", value: 1  },
    { source: "Agnieszka Gautier", target: "NSIDC", predicate: "memberOf", value: 1  },
    // {"source": "Guoqing Ge", "target": "CIRES", "predicate": "memberOf"},
    { source: "Guoqing Ge", target: "CMC", predicate: "memberOf", value: 1  },
    { source: "Guoqing Ge", target: "GSL", predicate: "memberOf", value: 1  },
    // {"source": "Marty Heath", "target": "CIRES", "predicate": "memberOf"},
    { source: "Marty Heath", target: "CMC", predicate: "memberOf", value: 1  },
    { source: "Marty Heath", target: "NSIDC", predicate: "memberOf", value: 1  },
    // {"source": "Corey Krimmer", "target": "CIRES", "predicate": "memberOf"},
    { source: "Corey Krimmer", target: "CMC", predicate: "memberOf", value: 1  },
    { source: "Corey Krimmer", target: "CIRES ADMIN", predicate: "memberOf", value: 1  },
    // {"source": "Scott Lewis", "target": "CIRES", "predicate": "memberOf"},
    { source: "Scott Lewis", target: "CMC", predicate: "memberOf", value: 1  },
    { source: "Scott Lewis", target: "NSIDC", predicate: "memberOf", value: 1  },
    // {"source": "Kim Moreland", "target": "CIRES", "predicate": "memberOf"},
    { source: "Kim Moreland", target: "CMC", predicate: "memberOf", value: 1  },
    { source: "Kim Moreland", target: "SWPC", predicate: "memberOf", value: 1  },
    // {"source": "Adam Schneider", "target": "CIRES", "predicate": "memberOf"},
    { source: "Adam Schneider", target: "CMC", predicate: "memberOf", value: 1  },
    { source: "Adam Schneider", target: "PSL", predicate: "memberOf", value: 1  },
    // cires
    // {"source": "Chris Slater", "target": "CIRES", "predicate": "memberOf"},
    { source: "Chris Slater", target: "GSB Dev Team", predicate: "memberOf", value: 1  },
    // { source: "Chris Slater", target: "NCEI", predicate: "memberOf", value: 1  },
    // {"source": "Clinton Campbell", "target": "CIRES", "predicate": "memberOf"},
    {
      source: "Clinton Campbell",
      target: "GSB Dev Team",
      predicate: "memberOf",
      value: 1 
    },
    // { source: "Clinton Campbell", target: "NCEI", predicate: "memberOf", value: 1  },
    // {"source": "Clinton Lohr", "target": "CIRES", "predicate": "memberOf"},
    { source: "Clinton Lohr", target: "GSB Dev Team", predicate: "memberOf", value: 1  },
    // { source: "Clinton Lohr", target: "NCEI", predicate: "memberOf", value: 1  },
    // {"source": "Max Smith", "target": "CIRES", "predicate": "memberOf"},
    { source: "Max Smith", target: "GSB Dev Team", predicate: "memberOf", value: 1  },
    // { source: "Max Smith", target: "NCEI", predicate: "memberOf", value: 1  },
    // {"source": "Payton Cain", "target": "CIRES", "predicate": "memberOf"},
    { source: "Payton Cain", target: "GSB Dev Team", predicate: "memberOf", value: 1  },
    // { source: "Payton Cain", target: "NCEI", predicate: "memberOf", value: 1  },
    // {"source": "Peemin Chen", "target": "CIRES", "predicate": "memberOf"},
    { source: "Peemin Chen", target: "GSB Dev Team", predicate: "memberOf", value: 1  },
    // { source: "Peemin Chen", target: "NCEI", predicate: "memberOf", value: 1  },
    // {"source": "Quincy Cantu", "target": "CIRES", "predicate": "memberOf"},
    { source: "Quincy Cantu", target: "GSB Dev Team", predicate: "memberOf", value: 1  },
    // { source: "Quincy Cantu", target: "NCEI", predicate: "memberOf", value: 1  },
    // {"source": "Rachel Peterson", "target": "CIRES", "predicate": "memberOf"},
    {
      source: "Rachel Peterson",
      target: "GSB Dev Team",
      predicate: "memberOf",
      value: 1 
    },
    // { source: "Rachel Peterson", target: "NCEI", predicate: "memberOf", value: 1  },
    // {"source": "Vidhyadhari Gondle", "target": "CIRES", "predicate": "memberOf"},
    {
      source: "Vidhyadhari Gondle",
      target: "GSB Dev Team",
      predicate: "memberOf",
      value: 1 
    },
    // { source: "Vidhyadhari Gondle", target: "NCEI", predicate: "memberOf", value: 1 },
    // { source: "Vidhyadhari Gondle", target: "NCEI", predicate: "memberOf", value: 1 },
    // admin
    // https://research.noaa.gov/about-us/
    {
      source: "NCEI",
      target: "National Environmental Satellite, Data, and Information Service",
      predicate: "memberOf",
      value: 1 
    },
    {
      source: "National Environmental Satellite, Data, and Information Service",
      target: "NOAA",
      predicate: "memberOf",
      value: 1
    },
    {
      source: "CSL",
      target: "Office of Ocean and Atmospheric Research",
      predicate: "memberOf",
      value: 1 
    },
    {
      source: "GML",
      target: "Office of Ocean and Atmospheric Research",
      predicate: "memberOf",
      value: 1 
    },
    {
      source: "GSL",
      target: "Office of Ocean and Atmospheric Research",
      predicate: "memberOf",
      value: 1
    },
    {
      source: "PSL",
      target: "Office of Ocean and Atmospheric Research",
      predicate: "memberOf",
      value: 1 
    },
    {
      source: "Office of Ocean and Atmospheric Research",
      target: "NOAA",
      predicate: "memberOf",
      value: 1 
    },
    // cu
    { source: "NSIDC", target: "CU", predicate: "memberOf", value: 1  },
    { source: "CEEE", target: "CIRES", predicate: "memberOf", value: 1  },
    { source: "SEEC", target: "CU", predicate: "memberOf", value: 1  },
    { source: "CIRES", target: "CU", predicate: "memberOf", value: 1  },
    { source: "SWPC", target: "NCEP", predicate: "memberOf", value: 1  },
    { source: "SWPC", target: "US Air Force", predicate: "memberOf", value: 1  },
    { source: "NCEP", target: "NOAA", predicate: "memberOf", value: 1  },
    { source: "Rob Redmon", target: "NCAI", predicate: "memberOf", value: 1 },
    { source: "Stephanie Herring", target: "NCAI", predicate: "memberOf", value: 1 },
    { source: "Bryan Meyer", target: "NCAI", predicate: "memberOf", value: 1 },
    { source: "EchoFish", target: "NCAI", predicate: "contributesTo", value: 1 },
    { source: "TugBoat", target: "NCAI", predicate: "contributesTo", value: 1 },
    //
    { source: "Alexander Hoelzemann", target: "Sonar AI", predicate: "contributesTo", value: 2 },
    { source: "Alexander Hoelzemann", target: "Computer Science Department", predicate: "postdocFor", value: 2 },
    { source: "Clinton Lohr", target: "Computer Science Department", predicate: "studentOf", value: 2 },
    { source: "Rachel Peterson", target: "Computer Science Department", predicate: "studentOf", value: 2 },
    { source: "Quincy Cantu", target: "Computer Science Department", predicate: "studentOf", value: 2 },
    { source: "Rudy Klucik", target: "Sonar AI", predicate: "contributesTo", value: 1 },
    { source: "Qin Lv", target: "Sonar AI", predicate: "contributesTo", value: 1 },
    { source: "Carrie Wall Bell", target: "Sonar AI", predicate: "contributesTo", value: 1 },
    { source: "EchoFish", target: "Sonar AI", predicate: "contributesTo", value: 1 },
    { source: "Computer Science Department", target: "CU", predicate: "contributesTo", value: 1 },
    { source: "Qin Lv", target: "Computer Science Department", predicate: "contributesTo", value: 1 },
    /////////////////////////////////
    // bigger org
    /////////////////////////////////
    { source: "Directors Office", target: "NCEI", predicate: "memberOf", value: 1 },
    { source: "Derek Arndt", target: "Directors Office", predicate: "memberOf", value: 1 },
    { source: "Joseph Pica", target: "Directors Office", predicate: "memberOf", value: 1 },
    //
    { source: "CSSD", target: "NCEI", predicate: "memberOf", value: 1 },
    // { source: "CSB", target: "NCEI", predicate: "memberOf", value: 1 },
    { source: "CISB", target: "NCEI", predicate: "memberOf", value: 1 },
    { source: "MAB", target: "NCEI", predicate: "memberOf", value: 1 },
    { source: "COGS", target: "NCEI", predicate: "memberOf", value: 1 },
    { source: "STPS", target: "GSB", predicate: "memberOf", value: 1 },
    { source: "STP DPMF", target: "STPS", predicate: "memberOf", value: 1 },
    { source: "MGGS", target: "GSB", predicate: "memberOf", value: 1 },
    { source: "CSB", target: "COGS", predicate: "memberOf", value: 1 },
    { source: "OSB", target: "NCEI", predicate: "memberOf", value: 1 },
    { source: "Patrick Hogan", target: "OSB", predicate: "memberOf", value: 1 },
    { source: "Kirsten Larsen", target: "OSB", predicate: "memberOf", value: 1 },
    { source: "GSB", target: "COGS", predicate: "memberOf", value: 1 },
    { source: "Karen Grissom", target: "COGS", predicate: "deputyDivisionChief", value: 3, color: 'green' },
    { source: "Rob Redmon", target: "COGS", predicate: "memberOf", value: 3, color: 'green' },
    { source: "Stephanie Herring", target: "GSB", predicate: "federalSupervisor", value: 3, color: 'blue' },
    { source: "Kelly Stroker", target: "MGGS", predicate: "memberOf", value: 1 },
    { source: "GSB Dev Team", target: "MGGS", predicate: "memberOf", value: 1 },
    { source: "Laurel Rachmeler", target: "STPS", predicate: "memberOf", value: 1 },
    { source: "Jennifer Bowers", target: "CSB", predicate: "memberOf", value: 1 },
    { source: "DSD", target: "NCEI", predicate: "memberOf", value: 1 },
    { source: "Ken Casey", target: "DSD", predicate: "memberOf", value: 1 },
    { source: "DOB", target: "DSD", predicate: "memberOf", value: 1 },
    { source: "Steven Rutz", target: "DOB", predicate: "memberOf", value: 1 },
    { source: "AB", target: "DSD", predicate: "memberOf", value: 1 },
    { source: "Nancy Ritchey", target: "AB", predicate: "memberOf", value: 1 },
    { source: "SDB", target: "DSD", predicate: "memberOf", value: 1 },
    { source: "Daniel Lloyd", target: "SDB", predicate: "memberOf", value: 1 },
    { source: "James Primrose", target: "SDB", predicate: "memberOf", value: 1 },
    { source: "John Relph", target: "SDB", predicate: "memberOf", value: 1 },
    { source: "Ken Tanaka", target: "SDB", predicate: "memberOf", value: 1 },
    { source: "DAB", target: "DSD", predicate: "memberOf", value: 1 },
    { source: "Richard Baldwin", target: "DAB", predicate: "memberOf", value: 1 },
    { source: "Ryan Berkheimer", target: "DAB", predicate: "memberOf", value: 1 },
    { source: "Jesse Varner", target: "DAB", predicate: "memberOf", value: 1 },
    { source: "RMD", target: "NCEI", predicate: "memberOf", value: 1 },
    { source: "Aric Whatley", target: "RMD", predicate: "memberOf", value: 1 },
    { source: "Jennifer Thatcher", target: "RMD", predicate: "memberOf", value: 1 },
    { source: "FAB", target: "RMD", predicate: "memberOf", value: 1 },
    { source: "Ming-Wai Merschat", target: "FAB", predicate: "memberOf", value: 1 },
    { source: "SEB", target: "RMD", predicate: "memberOf", value: 1 },
    { source: "COB", target: "RMD", predicate: "memberOf", value: 1 },
    { source: "Jake Fortune", target: "COB", predicate: "memberOf", value: 1 },
    { source: "MSD", target: "NCEI", predicate: "memberOf", value: 1 },
    { source: "Scott Hausman", target: "MSD", predicate: "memberOf", value: 1 },
    { source: "ITOB", target: "MSD", predicate: "memberOf", value: 1 },
    { source: "Preston Carter", target: "ITOB", predicate: "memberOf", value: 1 },
    { source: "David Hernandez", target: "ITOB", predicate: "memberOf", value: 1 },
    { source: "Max Layer", target: "ITOB", predicate: "memberOf", value: 1 },
    { source: "Jefferson Ogata", target: "ITOB", predicate: "memberOf", value: 1 },
    { source: "Jason Symonds", target: "ITOB", predicate: "memberOf", value: 1 },
    { source: "LSB", target: "MSD", predicate: "memberOf", value: 1 },
    { source: "Shane Wise", target: "LSB", predicate: "memberOf", value: 1 },
    // { source: "", target: "", predicate: "memberOf", value: 1 },
    // //
    // { id: "ITOB", longName: "IT Operations Branch (ITOB)", group: 2 },
    // { id: "Preston Carter", group: 0 },
    // { id: "David Hernandez", group: 0 },
    // { id: "Max Layer", group: 0 },
    // { id: "Jefferson Ogata", group: 0 },
    // { id: "Jason Symonds", group: 0 },
    // { id: "LSB", longName: "Logistics Support Branch (LSB)", group: 2 },
    // { id: "Shane Wise", group: 0 },
  ],
};

// TODO: add
//  CIRES Fellows
//  Student Relationships to CU
//  Pathfinders project
//  DOC/NOAA/NESDIS/NCEI(Deke & Joe)/COGS(Karen)/GSB(Stephanie)/MGG(Kelly)-STP(Laurel)/
//  OMB
//  NCAR/CISL

function App() {
  const containerRef = useRef(null);

  const parentDiv = document.getElementById("parentDiv");
  const width = parentDiv?.clientWidth;
  const height = parentDiv?.clientHeight;

  return (
    <div className="App" id="parentDiv">
      <div ref={containerRef}>
        {/* <ForceGraph3D
          graphData={meta_graph}
          nodeThreeObjectExtend={true}
          width={width}
          height={height}
          backgroundColor={"rgb(11,11,11)"}
          // backgroundColor={"white"}
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
        /> */}
        <ForceGraph2D
          graphData={meta_graph}
          nodeAutoColorBy="group"
          linkDirectionalParticles="value"
          linkDirectionalParticleSpeed={d => d.value * 0.001}
          linkColor={(node) => {
            if( 'color' in node ) {
              return node.color;
            }
            return 'lightGrey';
          }}
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.id;
            const fontSize = 12 / globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            const textWidth = ctx.measureText(label).width;
            const bckgDimensions = [textWidth, fontSize].map(
              (n) => n + fontSize * 0.2,
            ); // some padding

            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            // ctx.fillRect(
            //   node.x - bckgDimensions[0] / 2,
            //   node.y - bckgDimensions[1] / 2,
            //   ...bckgDimensions,
            // );

            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = node.color;
            ctx.fillText(label, node.x, node.y);

            node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
          }}
        />
      </div>

      {/* <section id="spacer"></section> */}
    </div>
  );
}

export default App;
