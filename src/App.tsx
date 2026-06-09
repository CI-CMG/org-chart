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
    { id: "Esther Rolf", group: 44 },
    { id: "VeeVee Cai", group: 44 },
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
    { id: "NCAI", longName: "NOAA Center for AI (NCAI)", group: 5 },
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
    { id: "Main Campus Research", longName: "CU Main Campus Research", group: 2 },
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
    { id: "NCEI", longName: "National Centers for Environmental Information (NCEI)", group: 2 },
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
    { id: "Jeffrey Privette", group: 1 },
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
    { id: "STPS", longName: "Solar Terrestrial Physics Section (STPS)", group: 3 },
    { id: "MGGS", longName: "Marine Geology and Geophysics Section (MGGS)", group: 2 },
    { id: "OSB", longName: "Oceanographic Science Branch (OSB)", group: 2 },
    { id: "Patrick Hogan", group: 0 },
    { id: "Kirsten Larsen", group: 0 },
    { id: "Tobey Kegley", group: 0 },
    { id: "Anna Lienesch", group: 0 },
    { id: "Kate Rose", group: 0 },
    { id: "Boyin Huang", group: 0 },
    { id: "GSB", longName: "Geophysical Science Branch (GSB)", group: 2 },
    { id: "Stephanie Herring", group: 0 },
    { id: "Karen Grissom", group: 2 },
    { id: "Kelly Stroker", group: 0 },
    { id: "Laurel Rachmeler", group: 0 },
    { id: "Josh Riley", group: 0 },
    { id: "CSB", longName: "Coastal Science Branch (CSB)", group: 2 },
    { id: "Jennifer Bowers", group: 0 },
    //
    { id: "DSD", longName: "Data Stewardship Division (DSD)", group: 2 },
    { id: "Ken Casey", group: 0 },
    { id: "DOB", longName: "Data Operations Branch (DOB)", group: 2 },
    { id: "Steven Rutz", group: 0 },
    { id: "AB", longName: "Archive Branch (AB)", group: 2 },
    { id: "Nancy Ritchey", group: 0 },
    { id: "Sarah Menassian", group: 0 },
    { id: "CoMET", longName: "Collection Metadata Editing Tool (CoMET)", group: 12 },
    { id: "SDB", longName: "Software Development Branch (SDB)", group: 2 },
    { id: "Daniel Lloyd", group: 0 },
    { id: "James Primrose", group: 0 },
    { id: "Charles Burris", group: 0 },
    { id: "John Relph", group: 0 },
    { id: "Ken Tanaka", group: 0 },
    { id: "DAB", longName: "Data Access Branch (DAB)", group: 2 },
    { id: "Richard Baldwin", group: 0 },
    { id: "Ryan Berkheimer", group: 0 },
    { id: "Jesse Varner", group: 0 },
    { id: "Jessica Nation", group: 0 },
    { id: "Kevin Lally", group: 0 },
    { id: "Daniel Alemayehu", group: 0 },
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
    { id: "Jon Kidder", group: 1 },
    { id: "Denise Sylvester", group: 1 },
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
    //
    { id: "Caleb Dorsett", group: 0 },
    { id: "Ernie Joynt", group: 0 },
    { id: "Gary Osowski", group: 0 },
    { id: "Issa Perry", group: 0 }, // DB Admin
    { id: "Rontgen Isaac", group: 0 },
    { id: "Database Administrators", group: 0 },
    { id: "Eric Porter", group: 0 },
    { id: "James Pritchitt", group: 0 },
    { id: "Joel Rodriguez Chacon", group: 0 },
    { id: "Jesse Williams", group: 0 },
    { id: "Linux System Administrators", group: 0 },
    //
    { id: "LSB", longName: "Logistics Support Branch (LSB)", group: 2 },
    { id: "Shane Wise", group: 0 },
    { id: "Abraham Cabazos", group: 0 },
    //
    // {"id": "", "longName": "", "group": 2},
    // {"id": "", "longName": "", "group": 2},
    //
    { id: "GSB Dev Team", group: 4 },
    {
      id: "CIRES",
      longName: "Cooperative Institute for Research in Environmental Sciences (CIRES)",
      group: 5,
    },
    {
      id: "National Environmental Satellite, Data, and Information Service",
      longName:
        "National Environmental Satellite, Data, and Information Service (NESDIS)",
      group: 5,
    },
    {
      id: "NESDIS Common Cloud Framework",
      longName: "NESDIS Common Cloud Framework (NCCF)",
      description: "NCCF (NESDIS Common Cloud Framework) is the cloud-based data architecture and infrastructure built by NOAA to securely ingest, process, and distribute environmental satellite data.",
      group: 5,
    },
    {
      id: "Consolidated Storage Service",
      longName: "Consolidated Storage Service (CSS)",
      description: "",
      group: 5,
    },
    // OISS (Open Information Stewardship Service)
    {
      id: "Open Information Stewardship Service",
      longName: "Open Information Stewardship Service (OISS)",
      description: "The OISS (Open Information Stewardship Service) is a semantic knowledge graph framework developed by the National Centers for Environmental Information (NCEI) within NOAA.",
      group: 5,
    },
    {
      id: "NOAA",
      longName: "National Oceanic and Atmospheric Administration (NOAA)",
      group: 5,
    },
    {
      id: "Office of Ocean and Atmospheric Research",
      longName: "Office of Ocean and Atmospheric Research (OAR)",
      group: 5,
    },
    {
      id: "CIAO", // OAR -> CIAO -> CIRES
      longName: "Cooperative Institute Administration Office (CIAO)",
      description: "The NOAA Cooperative Institute Administration Office (CIAO) oversees NOAA's Cooperative Institute (CI) portfolio.",
      group: 5,
    },
    { id: "CU", longName: "University of Colorado Boulder (CU)", group: 5 },
    { id: "Computer Science Department", group: 5 },
    {
      id: "NCEP",
      longName: "National Centers for Environmental Prediction (NCEP)",
      group: 5,
    },
    { id: "US Air Force", group: 5 },
    // groups for dev team
    { id: "Hazel", group: 5 },
    { id: "Marigrams", group: 5 },
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
    { id: "WOD", longName: "World Ocean Database (WOD)", group: 5 },
    { id: "TugBoat", group: 5 },
    { id: "Argonaut", group: 5 },
    // { id: "OASIS", group: 5 },
    {
      id: "ESIIL",
      longName: "Environmental Data Science Innovation & Impact Lab (ESIIL)",
      description: "https://cires.colorado.edu/news/esiil-aims-foster-revolution-environmental-data-science",
      group: 7,
    },
    // { id: "Ocean Acoustics Team", group: 4 },
  ],
  links: [
    { source: "Rudy Klucik", target: "NCEI", predicate: "memberOf" },
    // {"source": "Rudy Klucik", "target": "CIRES", "predicate": "memberOf"},
    { source: "Rudy Klucik", target: "CMC", predicate: "memberOf" },
    { source: "Rudy Klucik", target: "GSB Dev Team", predicate: "memberOf", color: 'grey' },
    { source: "Rudy Klucik", target: "Hazel", predicate: "worksOn" },
    // { source: "Rudy Klucik", target: "Gazetteer", predicate: "worksOn" },
    { source: "Rudy Klucik", target: "EchoFish", predicate: "worksOn" },
    // { source: "Rudy Klucik", target: "Trackline", predicate: "worksOn" },
    // { source: "Rudy Klucik", target: "Mable", predicate: "worksOn" },
    // { source: "Rudy Klucik", target: "Crowbar", predicate: "worksOn" },
    // { source: "Rudy Klucik", target: "STP DPMF", predicate: "worksOn" },
    // { source: "Rudy Klucik", target: "Tharp", predicate: "worksOn" },
    { source: "Bary Eakins", target: "Tharp", predicate: "worksOn" },
    { source: "Peemin Chen", target: "Hazel", predicate: "worksOn" },
    { source: "Peemin Chen", target: "FishFlicks", predicate: "worksOn" },
    // { source: "Kelly Stroker", target: "Hazel", predicate: "worksOn" },
    // { source: "Payton Cain", target: "Gazetteer", predicate: "worksOn" },
    // { source: "Payton Cain", target: "Trackline", predicate: "worksOn" },
    // { source: "Payton Cain", target: "Mable", predicate: "worksOn" },
    { source: "Payton Cain", target: "Crowbar", predicate: "worksOn" },
    { source: "Payton Cain", target: "TugBoat", predicate: "worksOn" },
    // { source: "Payton Cain", target: "Tharp", predicate: "worksOn" },
    { source: "Carrie Wall Bell", target: "EchoFish", predicate: "worksOn" },
    { source: "Carrie Wall Bell", target: "TugBoat", predicate: "worksOn" },
    { source: "Carrie Wall Bell", target: "Team Fish", predicate: "worksOn" },
    { source: "Carrie Wall Bell", target: "Pace", predicate: "worksOn" },
    { source: "Quincy Cantu", target: "TugBoat", predicate: "worksOn", value: 1 },
    { source: "Quincy Cantu", target: "Team Fish", predicate: "worksOn", value: 1 },
    { source: "Quincy Cantu", target: "Pace", predicate: "worksOn", value: 1 },
    { source: "Bryan Meyer", target: "Tharp", predicate: "worksOn", value: 1 },
    { source: "Bryan Meyer", target: "Trackline", predicate: "worksOn", value: 1 },
    { source: "Clinton Lohr", target: "TugBoat", predicate: "worksOn", value: 1 },
    { source: "Clinton Lohr", target: "Team Fish", predicate: "worksOn", value: 1 },
    { source: "Clinton Lohr", target: "Pace", predicate: "worksOn", value: 1 },
    // {"source": "Rudy Klucik", "target": "", "predicate": "worksOn"},
    { source: "Rachel Peterson", target: "Trackline", predicate: "worksOn" },
    { source: "Rachel Peterson", target: "Open Information Stewardship Service", predicate: "worksOn" },
    { source: "Jordan Schweizer", target: "Trackline", predicate: "worksOn" },
    { source: "Teodora Mitroi", target: "Trackline", predicate: "worksOn" },
    { source: "Michael Richtsmeier", target: "Trackline", predicate: "juniorDataManager" },
    { source: "Logan Ejupi", target: "Team Fish", predicate: "juniorDataManager" },
    { source: "Zoe Anderson", target: "Team Fish", predicate: "juniorDataManager" },
    { source: "Luke Pitstick", target: "Team Fish", predicate: "juniorDataManager" },
    // { source: "", target: "Team Fish", predicate: "juniorDataManager" },
    { source: "Rachel Peterson", target: "Tharp", predicate: "worksOn" },
    { source: "Max Smith", target: "Mable", predicate: "worksOn" },
    { source: "Max Smith", target: "Open Information Stewardship Service", predicate: "worksOn" },
    { source: "Clinton Campbell", target: "Crowbar", predicate: "worksOn" },
    { source: "Jennifer Jencks", target: "Crowbar", predicate: "worksOn", value: 1 },
    { source: "Jennifer Jencks", target: "Gazetteer", predicate: "worksOn", value: 1 },
    { source: "Jennifer Jencks", target: "Mable", predicate: "worksOn", value: 1 },
    { source: "Jennifer Jencks", target: "Crowbar", predicate: "worksOn", value: 1 },
    { source: "Jessica Nation", target: "Mable", predicate: "worksOn", value: 1 },
    { source: "Kevin Lally", target: "Mable", predicate: "worksOn", value: 1 },
    { source: "Daniel Alemayehu", target: "Mable", predicate: "worksOn", value: 1 },
    {
      source: "Vidhyadhari Gondle",
      target: "FishFlicks",
      predicate: "worksOn",
    },
    { source: "Lindsey Wright", target: "Hazel", predicate: "worksOn" },
    { source: "Nic Arcos", target: "Hazel", predicate: "worksOn" },
    { source: "Marigrams", target: "Hazel", predicate: "partOf" },
    { source: "Aaron Sweeny", target: "Marigrams", predicate: "partOf" },
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
    { source: "Chris Slater", target: "Gazetteer", predicate: "memberOf", value: 1  },
    { source: "Chris Slater", target: "Argonaut", predicate: "memberOf", value: 1  },
    { source: "Chris Slater", target: "WOD", predicate: "memberOf", value: 1  },
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
      source: "NESDIS Common Cloud Framework",
      target: "National Environmental Satellite, Data, and Information Service",
      predicate: "memberOf",
      value: 1 
    },
    { source: "Consolidated Storage Service", target: "NESDIS Common Cloud Framework", predicate: "associatedWith" },
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
    { source: "ESIIL", target: "CIRES", predicate: "memberOf", value: 1  },
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
    // { source: "Rudy Klucik", target: "Sonar AI", predicate: "contributesTo", value: 1 },
    { source: "Qin Lv", target: "Sonar AI", predicate: "contributesTo", value: 1 },
    { source: "Esther Rolf", target: "ESIIL", predicate: "contributesTo", value: 1 },
    { source: "VeeVee Cai", target: "ESIIL", predicate: "contributesTo", value: 1 },
    { source: "Carrie Wall Bell", target: "Sonar AI", predicate: "contributesTo", value: 1 },
    { source: "Sonar AI", target: "EchoFish", predicate: "contributesTo", value: 1 },
    { source: "Computer Science Department", target: "CU", predicate: "contributesTo", value: 1 },
    { source: "Qin Lv", target: "Computer Science Department", predicate: "contributesTo", value: 1 },
    { source: "Esther Rolf", target: "Computer Science Department", predicate: "contributesTo", value: 1 },
    { source: "VeeVee Cai", target: "Computer Science Department", predicate: "contributesTo", value: 1 },
    /////////////////////////////////
    // bigger org
    /////////////////////////////////
    { source: "Directors Office", target: "NCEI", predicate: "memberOf", value: 1 },
    { source: "Derek Arndt", target: "Directors Office", predicate: "memberOf", value: 1 },
    { source: "Joseph Pica", target: "Directors Office", predicate: "memberOf", value: 1 },
    //
    { source: "CSSD", target: "NCEI", predicate: "memberOf", value: 1 },
    { source: "Jeffrey Privette", target: "CSSD", predicate: "memberOf" },
    // { source: "CSB", target: "NCEI", predicate: "memberOf", value: 1 },
    { source: "CISB", target: "NCEI", predicate: "memberOf", value: 1 },
    { source: "MAB", target: "NCEI", predicate: "memberOf", value: 1 },
    { source: "COGS", target: "NCEI", predicate: "memberOf", value: 1 },
    { source: "STPS", target: "GSB", predicate: "memberOf", value: 1 },
    { source: "STP DPMF", target: "STPS", predicate: "memberOf", value: 1 },
    { source: "Josh Riley", target: "STP DPMF", predicate: "memberOf", value: 1 },
    { source: "Josh Riley", target: "STPS", predicate: "memberOf", value: 1 },
    { source: "MGGS", target: "GSB", predicate: "memberOf", value: 1 },
    { source: "CSB", target: "COGS", predicate: "memberOf", value: 1 },
    { source: "OSB", target: "COGS", predicate: "memberOf", value: 1 },
    { source: "Patrick Hogan", target: "OSB", predicate: "memberOf", value: 1 },
    { source: "Kirsten Larsen", target: "OSB", predicate: "memberOf", value: 1 },
    { source: "Tobey Kegley", target: "OSB", predicate: "memberOf", value: 1 },
    { source: "Tobey Kegley", target: "FishFlicks", predicate: "memberOf", value: 1 },
    { source: "Bary Eakins", target: "FishFlicks", predicate: "memberOf", value: 1 },
    { source: "Anna Lienesch", target: "OSB", predicate: "memberOf", value: 1 },
    { source: "Kate Rose", target: "OSB", predicate: "memberOf", value: 1 },
    { source: "Boyin Huang", target: "OSB", predicate: "memberOf", value: 1 },
    { source: "GSB", target: "COGS", predicate: "memberOf", value: 1 },
    { source: "Karen Grissom", target: "COGS", predicate: "deputyDivisionChief", value: 3, color: 'black' },
    { source: "Rob Redmon", target: "COGS", predicate: "memberOf", value: 1, color: 'black' },
    { source: "Stephanie Herring", target: "GSB", predicate: "federalSupervisor", value: 3, color: 'black' },
    { source: "Kelly Stroker", target: "MGGS", predicate: "memberOf", value: 1, color: 'black' },
    { source: "GSB Dev Team", target: "MGGS", predicate: "memberOf", value: 1 },
    { source: "Laurel Rachmeler", target: "STPS", predicate: "memberOf", value: 1, color: 'black' },
    // { source: "Josh Riley", target: "STPS", predicate: "memberOf", value: 1 },
    { source: "Jennifer Bowers", target: "CSB", predicate: "memberOf", value: 1 },
    { source: "DSD", target: "NCEI", predicate: "memberOf", value: 1 },
    { source: "Ken Casey", target: "DSD", predicate: "memberOf", value: 1 },
    { source: "DOB", target: "DSD", predicate: "memberOf", value: 1 },
    { source: "Steven Rutz", target: "DOB", predicate: "memberOf", value: 1 },
    { source: "AB", target: "DSD", predicate: "memberOf", value: 1 },
    { source: "Nancy Ritchey", target: "AB", predicate: "memberOf", value: 1 },
    { source: "Sarah Menassian", target: "AB", predicate: "memberOf", value: 1 },
    { source: "Sarah Menassian", target: "CoMET", predicate: "memberOf", value: 1 },
    { source: "SDB", target: "DSD", predicate: "memberOf", value: 1 },
    { source: "Daniel Lloyd", target: "SDB", predicate: "memberOf", value: 1 },
    { source: "Charles Burris", target: "SDB", predicate: "memberOf", value: 1 },
    { source: "Charles Burris", target: "CoMET", predicate: "memberOf", value: 1 },
    { source: "James Primrose", target: "SDB", predicate: "memberOf", value: 1 },
    { source: "James Primrose", target: "CoMET", predicate: "memberOf", value: 1 },
    { source: "John Relph", target: "SDB", predicate: "memberOf", value: 1 },
    { source: "Ken Tanaka", target: "SDB", predicate: "memberOf", value: 1 },
    { source: "DAB", target: "DSD", predicate: "memberOf", value: 1 },
    { source: "Richard Baldwin", target: "DAB", predicate: "memberOf", value: 1 },
    { source: "Ryan Berkheimer", target: "DAB", predicate: "memberOf", value: 1 },
    { source: "Ryan Berkheimer", target: "Open Information Stewardship Service", predicate: "memberOf", value: 1 },
    { source: "Jesse Varner", target: "DAB", predicate: "memberOf", value: 1 },
    { source: "RMD", target: "NCEI", predicate: "memberOf", value: 1 },
    { source: "Aric Whatley", target: "RMD", predicate: "memberOf", value: 1 },
    { source: "Jennifer Thatcher", target: "RMD", predicate: "memberOf", value: 1 },
    { source: "FAB", target: "RMD", predicate: "memberOf", value: 1 },
    { source: "Ming-Wai Merschat", target: "FAB", predicate: "memberOf", value: 1 },
    { source: "SEB", target: "RMD", predicate: "memberOf", value: 1 },
    { source: "Jon Kidder", target: "SEB", predicate: "memberOf", value: 1 },
    { source: "Denise Sylvester", target: "SEB", predicate: "memberOf", value: 1 },
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

    { source: "Caleb Dorsett", target: "ITOB", predicate: "memberOf", value: 1 },
    { source: "Ernie Joynt", target: "ITOB", predicate: "memberOf", value: 1 },
    { source: "Gary Osowski", target: "ITOB", predicate: "memberOf", value: 1 },
    { source: "Issa Perry", target: "ITOB", predicate: "memberOf", value: 1 },
    { source: "Rontgen Isaac", target: "ITOB", predicate: "memberOf", value: 1 },
    { source: "Issa Perry", target: "Database Administrators", predicate: "memberOf", value: 1 },
    { source: "Rontgen Isaac", target: "Database Administrators", predicate: "memberOf", value: 1 },
    { source: "Eric Porter", target: "ITOB", predicate: "memberOf", value: 1 },
    { source: "James Pritchitt", target: "ITOB", predicate: "memberOf", value: 1 },
    { source: "Joel Rodriguez Chacon", target: "ITOB", predicate: "memberOf", value: 1 },
    { source: "Jesse Williams", target: "ITOB", predicate: "memberOf", value: 1 },

    { source: "Caleb Dorsett", target: "Linux System Administrators", predicate: "memberOf", value: 1 },    
    { source: "Gary Osowski", target: "Linux System Administrators", predicate: "memberOf", value: 1 },
    { source: "Joel Rodriguez Chacon", target: "Linux System Administrators", predicate: "memberOf", value: 1 },
    { source: "Jesse Williams", target: "Linux System Administrators", predicate: "memberOf", value: 1 },

    { source: "LSB", target: "MSD", predicate: "memberOf", value: 1 },
    { source: "Abraham Cabazos", target: "LSB", predicate: "memberOf", value: 1 },
    { source: "Shane Wise", target: "LSB", predicate: "memberOf", value: 1 },
    // { source: "", target: "", predicate: "memberOf", value: 1 },
    //
    { source: "Office of Ocean and Atmospheric Research", target: "CIAO", predicate: "memberOf", value: 1 },
    { source: "CIAO", target: "CIRES", predicate: "memberOf", value: 1 },
    // { source: "", target: "", predicate: "memberOf", value: 1 },
    // TODO: NOAA CORE
    // TODO: Mason & James
    // TODO: NCCF
    // TODO: AASI
    // TODO: https://www.fisheries.noaa.gov/about-us/who-we-are
    //

    // TODO: for people, start-end dates, name, short name, email, fed/contractor/affiliate?
  ],
};

// TODO: add
//  CIRES Fellows
//  Student Relationships to CU
//  Pathfinders project
//  OMB
//  NCAR/CISL

function App() {
  const containerRef = useRef(null);

  const parentDiv = document.getElementById("parentDiv");
  const width = parentDiv?.clientWidth;
  const height = parentDiv?.clientHeight;

  return (
    <div className="App" id="parentDiv">
      <div id="title">
        <h1>NOAA MGGS & CIRES Organizational Structure</h1>
      </div>
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
          // linkDirectionalParticles="value"
          linkDirectionalParticles={2}
          linkDirectionalParticleSpeed={() => {
            return 1 * 0.0006;
          }}
          linkColor={(node) => {
            // if( 'color' in node ) {
            //   return node.color;
            // }
            return 'lightGrey';
          }}
          nodeCanvasObject={(node, ctx, globalScale) => {
            let label = node.id;
            if ('longName' in node) {
              label = node.longName;
            } else {
              label = node.id;
            }
            const fontSize = 12 / globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            const textWidth = ctx.measureText(label).width;
            const bckgDimensions = [textWidth, fontSize].map(
              (n) => n + fontSize * 0.2,
            );
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = node.color;
            ctx.fillText(label, node.x, node.y);

            // node.__bckgDimensions = bckgDimensions;
          }}
        />
      </div>

      {/* <section id="spacer"></section> */}
    </div>
  );
}

export default App;
