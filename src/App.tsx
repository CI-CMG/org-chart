import { useRef } from "react";
import ForceGraph2D from "react-force-graph-2d";
import { FaGithub } from "react-icons/fa";

// Entity Types: [0] Person, [1] Group, [2] Project
const meta_graph = {
  nodes: [
    { id: "Chris Slater", group: 0 },
    { id: "Clinton Campbell", group: 0 },
    { id: "Clinton Lohr", group: 0 },
    { id: "Max Smith", group: 0 },
    { id: "Payton Cain", group: 0 },
    { id: "Quincy Cantu", group: 0 },
    { id: "Rachel Peterson", group: 0 },
    { id: "Vidhyadhari Gondle", group: 0 },
    //
    { id: "Alexander Hoelzemann", group: 0 },
    { id: "Qin Lv", group: 0 },
    { id: "Esther Rolf", group: 0 },
    { id: "VeeVee Cai", group: 0 },
    { id: "Sonar AI", group: 2 },
    //
    { id: "Carrie Wall Bell", longName: "Carrie Wall Bell", group: 0 },
    { id: "Nic Arcos", group: 0 },
    { id: "Aaron Sweeny", group: 0 },
    { id: "Lindsey Wright", group: 0 },
    { id: "Jennifer Jencks", group: 0 },
    { id: "Brian Meyer", group: 0 },
    { id: "Jordan Schweizer", group: 0 },
    { id: "Teodora Mitroi", group: 0 },
    { id: "Michael Richtsmeier", group: 0 },
    { id: "Logan Ejupi", group: 0 },
    { id: "Zoe Anderson", group: 0 },
    { id: "Luke Pitstick", group: 0 },
    { id: "Rory OFlynn", group: 0 },
    { id: "Michelle", group: 0 }, // B-team
    { id: "Tate Voeller", description: "Hello! I am Tate Voeller. I'm excited to join CIRES as a junior data manager on the Multibeam Bathymetry team. I am at CU Boulder studying Atmosphere and Oceanic Science with a minor in Geography. I am looking forward to getting some valuable experience in the industry. I have passions to pursue a PhD in Oceanography or Climate sciences. I am from Louisville, CO and in my free time I play CU club Ultimate Frisbee, climb, bike, ski, and hike Colorado's 14ers.", group: 0 }, // B-Team
    { id: "Bary Eakins", group: 0 },
    { id: "Rob Redmon", group: 0 },
    { id: "Douglas Rao", group: 0 },
    { id: "Marissa Jones", group: 0 },

    { // https://www.esipfed.org/
      id: "ESIP",
      longName: "Earth Science Information Partners",
      description: "Earth Science Information Partners (ESIP) is a community of data and information technology practitioners that come together to coordinate Earth science interoperability efforts.",
      group: 1,
    },
    { id: "Chuck Anderson", group: 0 },
    // NCEI
    { id: "Arnaud Chulliat", group: 0 },
    { id: "Collin Kadlecek", group: 0 },
    { id: "Nir Boneh", group: 0 },
    { id: "Lily Young", group: 0 },
    { id: "Liam Kilcommons", group: 0 },
    { id: "Manoj Nair", group: 0 },
    { id: "STP Software", group: 1 },

    { id: "Emma Beretta", group: 0 },
    {
      id: "ONMS Soundscapes",
      longName:
        "Office of National Marine Sanctuaries Sound Monitoring (Soundscapes)",
      group: 2,
    },
    // { id: "Finn Dahl", group: 0 },
    // { id: "Janet Machol", group: 0 },
    { id: "John Cartwright", group: 0 },
    // { id: "Juan Rodriguez", group: 0 },
    { id: "Lee Shoemaker", group: 0 },
    // { id: "Li-yin Young", group: 0 },
    // { id: "Matthew Bochain", group: 0 },
    // { id: "Nir Boneh", group: 0 },
    // { id: "Richard Saltus", group: 0 },
    // { id: "Samuel Califf", group: 0 },
    // { id: "Trevor Leonard", group: 0 },
    // DEM Team
    {
      id: "DEM Team",
      longName: "Coastal Digital Elevation Models (DEMs)",
      group: 1,
    },
    { id: "Kelly Carignan", group: 0 },
    { id: "Christopher Amante", group: 0 },
    { id: "Elliot Lim", group: 0 },
    { id: "Matthew Love", group: 0 },
    { id: "Michael MacFerrin", group: 0 },
    //
    { id: "Jeffrey Duda", group: 0 },
    { id: "Elysia Lucas", group: 0 },
    { id: "Anne Sledd", group: 0 },
    { id: "Aleya Kaushik", group: 0 },
    { id: "Jianhao Zhang", group: 0 },
    { id: "Nathan Malarich", group: 0 },
    { id: "Aly Krimmer", group: 0 },
    { id: "Alison Post", group: 0 },
    { id: "Nels Bjarke", group: 0 },
    { id: "Scott Clingan", group: 0 },
    { id: "Mara Coe", group: 0 },
    { id: "Agnieszka Gautier", group: 0 },
    { id: "Guoqing Ge", group: 0 },
    { id: "Marty Heath", group: 0 },
    { id: "Rudy Klucik", longName: "Rudy Klucik", group: 0 },
    { id: "Corey Krimmer", group: 0 },
    { id: "Scott Lewis", group: 0 },
    { id: "Kim Moreland", group: 0 },
    { id: "Adam Schneider", group: 0 },
    //
    { id: "", group: 0 },
    // Waleed Abdalati
    // Lornay Hansen
    // Maggie Tolbert
    //
    { id: "NCAI", longName: "NOAA Center for AI (NCAI)", group: 1 },
    { id: "GSL", longName: "Global Systems Laboratory (GSL)", group: 1 },
    { id: "PSL", longName: "Physical Sciences Laboratory (PSL)", group: 1 },
    { id: "GML", longName: "Global Monitoring Laboratory (GML)", group: 1 },
    { id: "CSL", longName: "Chemical Sciences Laboratory (CSL)", group: 1 },
    { id: "CIRES ADMIN", group: 1 },
    {
      id: "SEEC",
      longName: "Sustainability, Energy and Environment Community (SEEC)",
      group: 1,
    },
    {
      id: "Earth Lab",
      longName: "Earth Lab",
      description:
        "Earth Lab’s mission is to leverage the big data and AI revolutions through education, analytics, research, and domain expertise to help society understand and adapt to environmental change.",
      group: 1,
    },
    {
      id: "Main Campus Research",
      longName: "CU Main Campus Research",
      group: 1,
    },
    {
      id: "CEEE",
      longName: "Center for Education, Engagement and Evaluation (CEEE)",
      group: 1,
    },
    {
      id: "NSIDC",
      longName: "National Snow and Ice Data Center (NSIDC)",
      group: 1,
    },
    {
      id: "SWPC",
      longName: "Space Weather Prediction Center (SWPC)",
      group: 1,
    },
    {
      id: "CMC",
      longName: "CIRES Members Council (CMC)",
      description:
        "The CMC is an information and policy conduit between CIRES' leadership and the institute's scientists and associates",
      group: 1,
    },
    ////////////////////////////////////////////
    // NOAA Line offices
    { id: "NOS", longName: "National Ocean Service (NOS)", group: 1 },
    { id: "NWS", longName: "National Weather Service (NWS)", group: 1 },
    {
      id: "OMAO",
      longName: "Office of Marine and Aviation Operations & NOAA Corps (OMAO)",
      group: 1,
    },
    //////////////////////////
    // NCEI Groups // https://docs.google.com/spreadsheets/d/1wYRAvP02BrueU2KhbVbleqBQgeNxy5PnJfb_F9uFX38/edit?gid=585617807#gid=585617807
    {
      id: "NCEI",
      longName: "National Centers for Environmental Information (NCEI)",
      description:
        "NCEI maintains one of the most significant archives on Earth, with comprehensive oceanic, atmospheric, and geophysical data.",
      group: 1,
    },
    {
      id: "Directors Office",
      longName: "NCEI Directors Office (DO)",
      group: 1,
    },
    { id: "Derek Arndt", group: 0 },
    { id: "Joseph Pica", group: 0 },
    //
    {
      id: "CSSD",
      longName: "Climate Science and Services Division (CSSD)",
      group: 1,
    },
    { id: "Jeffrey Privette", group: 0 },
    // { id: "CSB", longName: "Climate Science Branch (CSB)", group: 2 },
    {
      id: "CISB",
      longName: "Climate Information Services Branch (CISB)",
      group: 1,
    },
    { id: "MAB", longName: "Monitoring & Assessment Branch (MAB)", group: 1 },
    //
    {
      id: "COGS",
      longName: "Coasts, Oceans, and Geophysics Science Division (COGS)",
      group: 1,
    },
    {
      id: "STPS",
      longName: "Solar Terrestrial Physics Section (STPS)",
      group: 1,
    },
    {
      id: "MGGS",
      longName: "Marine Geology and Geophysics Section (MGGS)",
      group: 1,
    },
    { id: "OSB", longName: "Oceanographic Science Branch (OSB)", group: 1 },
    { id: "Patrick Hogan", group: 0 },
    { id: "Kirsten Larsen", group: 0 },
    { id: "Errol Ronje", group: 0 },
    { id: "Tobey Kegley", group: 0 },
    { id: "Anna Lienesch", group: 0 },
    { id: "Kate Rose", group: 0 },
    { id: "Boyin Huang", group: 0 },
    { id: "GSB", longName: "Geophysical Science Branch (GSB)", group: 1 },
    { id: "Stephanie Herring", group: 0 },
    { id: "Karen Grissom", group: 0 },
    { id: "Kelly Stroker", group: 0 },
    { id: "Laurel Rachmeler", group: 0 },
    { id: "Josh Riley", group: 0 },
    { id: "Jack McKinstry", group: 0 },
    { id: "Robert Allsopp", group: 0 },
    { id: "CSB", longName: "Coastal Science Branch (CSB)", group: 1 },
    { id: "Jennifer Bowers", description: "Jennifer Bowers supports NCEI’s Coastal Sciences Branch, leading the management of critical data that fuels marine science, policy, and resource management. A NOAA member since 2021, Jennifer brings 20 years of Naval oceanography experience, spanning tactical environmental support to long-term strategic planning. Today, she is driving NOAA's future-forward data efforts—spearheading the development of Uncrewed Systems (UxS) data management, championing an Enterprise data approach, and enabling the migration of NCEI data to the NESDIS Cloud initiatives. She also represents NESDIS on the NOAA/UxS Executive Oversight Board and oversees key NOAA/Navy data initiatives under the CENOTE Act of 2018. Jennifer holds a master’s degree in Marine Science from the University of Southern Mississippi (specializing in marine bio-optics) and proudly ties a bowline knot in seconds.", group: 0 },
    //
    { id: "DSD", longName: "Data Stewardship Division (DSD)", group: 1 },
    { id: "Ken Casey", group: 0 },
    { id: "DOB", longName: "Data Operations Branch (DOB)", group: 1 },
    { id: "Steven Rutz", group: 0 },
    { id: "AB", longName: "Archive Branch (AB)", group: 1 },
    { id: "Nancy Ritchey", group: 0 },
    { id: "Sarah Menassian", group: 0 },
    { id: "Paul Lemieux", group: 0 },
    { id: "Lori Hager", group: 0 },
    { id: "Ashley Beard", group: 0 },
    {
      id: "CoMET",
      longName: "Collection Metadata Editing Tool (CoMET)",
      group: 2,
    },
    { id: "SDB", longName: "Software Development Branch (SDB)", group: 1 },
    { id: "Daniel Lloyd", group: 0 },
    { id: "James Primrose", group: 0 },
    { id: "Charles Burris", group: 0 },
    { id: "John Relph", group: 0 },
    { id: "Ken Tanaka", group: 0 },
    { id: "DAB", longName: "Data Access Branch (DAB)", group: 1 },
    { id: "Richard Baldwin", group: 0 },
    { id: "Jeremy Hall", group: 0 },
    // { id: "NCEI Search, Discovery, & Data Access", group: 2 },
    { id: "Ryan Berkheimer", group: 0 },
    { id: "Jesse Varner", group: 0 },
    // BTeam
    { id: "Jessica Nation", group: 0 },
    { id: "Kevin Lally", group: 0 },
    { id: "Daniel Alemayehu", group: 0 },
    { id: "BTeam", group: 1 },
    //
    { id: "RMD", longName: "Resource Management Division (RMD)", group: 1 },
    { id: "Aric Whatley", group: 0 },
    { id: "Jennifer Thatcher", group: 0 },
    {
      id: "FAB",
      longName: "Finance and Administrative Branch (FAB)",
      group: 1,
    },
    { id: "Ming-Wai Merschat", group: 0 },
    { id: "Nicole Fernandes", group: 0 },
    { id: "Katrina Combs", group: 0 },
    { id: "Megan Cromwell", group: 0 },
    { id: "Jay Nunenkamp", group: 0 },
    { id: "Mindful NOAA", group: 1 }, // Mindful NOAA
    { id: "SEB", longName: "Standards and Evaluation Branch (SEB)", group: 1 },
    { id: "Jon Kidder", description: "Deputy Program Manager for the NCEI Cloud Migration", group: 0 },
    { id: "Denise Sylvester", group: 0 },
    {
      id: "COB",
      longName: "Communications and Outreach Branch (COB)",
      group: 1,
    },
    { id: "Jake Fortune", group: 0 },
    //
    { id: "MSD", longName: "Mission Support Division (MSD)", group: 1 },
    { id: "Scott Hausman", group: 0 },
    { id: "ITOB", longName: "IT Operations Branch (ITOB)", group: 1 },
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
    { id: "Stephen Cummings", description: "CO Windows Sysadmin", group: 0 }, // Windows admin
    { id: "Database Administrators", group: 1 },
    { id: "Eric Porter", group: 0 },
    { id: "James Pritchitt", group: 0 },
    { id: "Joel Rodriguez Chacon", group: 0 },
    { id: "Jesse Williams", group: 0 },
    { id: "Linux System Administrators", group: 1 },
    { id: "Windows System Administrators", group: 1 },
    //
    { id: "LSB", longName: "Logistics Support Branch (LSB)", group: 1 },
    { id: "Shane Wise", group: 0 },
    { id: "Abraham Cavazos", group: 0 },
    //
    // {"id": "", "longName": "", "group": 2},
    // {"id": "", "longName": "", "group": 2},
    //
    { id: "GSB Dev Team", group: 1 },
    {
      id: "CIRES",
      longName:
        "Cooperative Institute for Research in Environmental Sciences (CIRES)",
      description:
        "At CIRES, the Cooperative Institute for Research In Environmental Sciences, hundreds of scientists work to understand the dynamic Earth system, including people’s relationship with the planet.",
      group: 1,
    },
    {
      id: "CIRES Fellows",
      longName: "CIRES Council of Fellows",
      description:
        "CIRES Council of Fellows includes university faculty, researchers, and NOAA scientists who personify the institute’s cooperative spirit and guide the development of our cross-cutting research program.",
      group: 1,
    },
    {
      id: "National Environmental Satellite, Data, and Information Service",
      longName:
        "National Environmental Satellite, Data, and Information Service (NESDIS)",
      group: 1,
    },
    {
      id: "NESDIS Common Cloud Framework",
      longName: "NESDIS Common Cloud Framework (NCCF)",
      description:
        "NCCF (NESDIS Common Cloud Framework) is the cloud-based data architecture and infrastructure built by NOAA to securely ingest, process, and distribute environmental satellite data.",
      group: 1,
    },
    { id: "Pura Perez", group: 0 },
    // Lift and shift
    // - Data Ingest, Migration IPT (Jason Cooper - lead) & Open Access IPT (Rich Baldwin): Brian Meyer or Kirsten Larsen
    // - Applications IPT (Jen Bowers - lead): Jen Bowers or Jen Webster
    // - Security IPT (Jason Symonds - lead) & Infrastructure IPT (Pura Perez): Stephanie Herring
    // - Workforce Readiness (Jared Rennie - lead): Jared Rennie
    {
      id: "Consolidated Storage Service",
      longName: "Consolidated Storage Service (CSS)",
      description: "",
      group: 2,
    },
    // OISS (Open Information Stewardship Service)
    {
      id: "Open Information Stewardship Service",
      longName: "Open Information Stewardship Service (OISS)",
      description:
        "The OISS (Open Information Stewardship Service) is a semantic knowledge graph framework developed by the National Centers for Environmental Information (NCEI) within NOAA.",
      group: 2,
    },
    {
      id: "NOAA",
      longName: "National Oceanic and Atmospheric Administration (NOAA)",
      group: 1,
    },
    {
      id: "Office of Ocean and Atmospheric Research",
      longName: "Office of Ocean and Atmospheric Research (OAR)",
      group: 1,
    },
    {
      id: "CIAO", // OAR -> CIAO -> CIRES
      longName: "Cooperative Institute Administration Office (CIAO)",
      description:
        "The NOAA Cooperative Institute Administration Office (CIAO) oversees NOAA's Cooperative Institute (CI) portfolio.",
      group: 1,
    },
    { id: "CU", longName: "University of Colorado Boulder (CU)", group: 1 },
    {
      id: "Computer Science Department",
      longName: "CU Computer Science Department",
      group: 1,
    },
    {
      id: "CMDI",
      longName: "CU College of Communication, Media, Design and Information",
      group: 1,
    },
    {
      id: "NCEP",
      longName: "National Centers for Environmental Prediction (NCEP)",
      group: 1,
    },
    { id: "US Air Force", group: 1 },
    // groups for dev team
    {
      id: "Hazel",
      description:
        "NCEI archives and assimilates tsunami, earthquake, and volcano data to support research, planning, response, and mitigation.",
      group: 2,
    },
    { id: "Marigrams", group: 2 },
    { id: "Team Fish", group: 1 },
    {
      id: "Gazetteer",
      description:
        "The NOAA-supported GEBCO Undersea Feature Names Gazetteer provides a comprehensive, searchable database for the official names and geographic locations of features on the seafloor (e.g., seamounts, trenches, and ridges).",
      group: 2,
    },
    {
      id: "IHO DCDB",
      longName: "International Hydrographic Organization (IHO) Data Center for Digital Bathymetry (DCDB)",
      description: "The International Hydrographic Organization (IHO) Data Centre for Digital Bathymetry (DCDB) was established in 1990 to steward the global collection of bathymetric data.",
      group: 2,
    },
    {
      id: "EchoFish",
      description: '<a href="https://echo.fish" target="_blank">EchoFish</a>, Exploring Water Column Sonar Data',
      group: 2,
    },
    { id: "Trackline", group: 2 },
    { id: "Mable", group: 2 },
    { id: "Crowbar", group: 2 },
    { id: "STP DPMF", longName: "Space Weather Portal (SPOT)", group: 2 },
    { id: "FishFlicks", group: 2 },
    { id: "Pace", group: 2 },
    { id: "Tharp", group: 2 },
    { id: "WOD", longName: "World Ocean Database (WOD)", group: 2 },

    { id: "TugBoat", group: 2 },
    { id: "Argonaut", description: "Argo is a fundamental dataset and input for the World Ocean Database. It serves as a critical global observing system, providing essential subsurface ocean measurements that underpin accurate earth-system, weather, and hurricane intensity forecasting.", group: 2 },
    { id: "Zhankun Wang", group: 0 },
    // { id: "OASIS", group: 1 },
    {
      id: "ESIIL",
      longName: "Environmental Data Science Innovation & Impact Lab (ESIIL)",
      description:
        "The Environmental Data Science Innovation & Impact Lab (ESIIL) is a next-generation NSF data synthesis center that enables a global community of environmental data scientists to leverage emerging analytics to develop science-based solutions to pressing environmental challenges.",
      group: 1,
    },
    // Fisheries — https://www.fisheries.noaa.gov/about-us/who-we-are
    // ...is this correct though? https://www.noaa.gov/about/organization/noaa-organization-chart
    {
      id: "NOAA Fisheries",
      longName: "NOAA Fisheries Science Center",
      group: 1,
    },
    // Office of the Chief Information Officer (OCIO) 
    {
      id: "OCIO",
      longName: "Office of the Chief Information Officer (OCIO)",
      description: "The Office of the Chief Information Officer (OCIO) provides leadership to NOAA Fisheries and its Regions and Science Centers in all areas of information management and technology.",
      group: 1,
    },
    {
      id: "Alaska Fisheries Science Center",
      longName: "NOAA Alaska Fisheries Science Center",
      group: 1,
    },
    {
      id: "Northeast Fisheries Science Center",
      longName: "NOAA Northeast Fisheries Science Center",
      group: 1,
    },
    {
      id: "Pacific Islands Fisheries Science Center",
      longName: "NOAA Pacific Fisheries Science Center",
      group: 1,
    },
    {
      id: "Southeast Fisheries Science Center",
      longName: "NOAA Southeast Fisheries Science Center",
      group: 1,
    },
    {
      id: "Southwest Fisheries Science Center",
      longName: "NOAA Southwest Fisheries Science Center",
      group: 1,
    },
    {
      id: "Northwest Fisheries Science Center",
      longName: "NOAA Northwest Fisheries Science Center",
      group: 1,
    },
    {
      id: "Office of Sustainable Fisheries",
      longName: "NOAA Office of Sustainable Fisheries",
      group: 1,
    },
    // AA-SI
    {
      id: "AA-SI",
      longName: "Active Acoustics Strategic Initiative (AA-SI)",
      description:
        "This initiative brings together the NOAA Fisheries with NCEI.",
      group: 1,
    },
    { id: "Mike Jech", group: 0 },
    { id: "Allison White", group: 0 },
    { id: "Brett Layman", group: 0 },
    { id: "Camilo Roa", group: 0 },
    { id: "Josiah Renfree", group: 0 },
    { id: "Derek Bolser", group: 0 },
    { id: "Elias Capriles", group: 0 },
    { id: "Dominic Bashford", group: 0 },
    { id: "Michael Ryan", group: 0 },
    { id: "Reka Domokos", group: 0 },
    { id: "Nikki Dabaghchian", group: 0, location: "virginia" },
    { id: "Dave Demer", group: 0 },
    { id: "Elizabeth Phillips", group: 0 },
    { id: "Rebecca Thomas", group: 0 },
    // Office of Sustainable Fisheries
    { id: "Tim Rowell", group: 0 },
    { id: "Patrick Ressler", group: 0 },
    { id: "Hannan Khan", group: 0 },
    { id: "Robert Levine", group: 0 },
    // { id: "", group: 0 },
    // echopype
    {
      id: "echopype",
      description:
        "Echopype is a package built to enable interoperability and scalability in ocean sonar data processing.",
      group: 2,
    },
    {
      id: "pyEcholab",
      group: 2,
    },
    { id: "Lloyd Izard", group: 0 },
    { id: "Wu-Jung Lee", group: 0 },
    // NCCF AWS
    { id: "Chris Mattioli", group: 0 },
    { id: "Jessica Hung", group: 0 },
    { id: "Mike Friedenthal", description: "Senior Cloud Infrastructure Architect at AWS with over 20 years of IT experience. He's led high-visibility projects across federal agencies including the Census Bureau, NSF, NOAA, SBA, and the FAA — because apparently one agency at a time wasn't stressful enough. Most recently, he secured the Trump Golden Visa application at trumpcard.gov and led the cloud strategy technical deep dive for the Administrator of the FAA, proving that no amount of government acronyms can scare him off.", group: 0 },
    { id: "Michael Royer", group: 0 }, // GAMA-1 Technologies, Greenbelt, United States
    { id: "Mason Carroll", group: 0 },
    // { id: "Ayesha Genz", group: 0 },
    { id: "AWS", longName: "Amazon Web Services (AWS)", group: 1 },
    {
      id: "AWS Solutions Architect",
      longName: "AWS Solutions Architects",
      group: 1,
    },
    { id: "CIRES AWS", group: 1 },
    { id: "Josh Caplan", group: 0 },
    { id: "NIH AWS", longName: "NESDIS Innovation Hub (NIH)", group: 1 },
    { id: "Gian Dilawari", group: 0 },
    // NDC-PATHFINDERS
    {
      id: "NDC-Pathfinders",
      description:
        "Advancing Earth Science and Innovating Data Access and Sharing — An NSF collaboration between 5 projects, working to innovate science-led pathways through the NSF cyberinfrastructure landscape.",
      group: 1,
    },
    {
      id: "NCAR",
      longName: "National Center for Atmospheric Research (NCAR)",
      group: 1,
    },
    // { id: "OSPool", longName: "Open Science Pool", group: 1 },
  ],
  //////////////////////////////////////////////////////////////
  links: [
    { source: "Rudy Klucik", target: "NCEI", predicate: "associatedWith" },
    { source: "Rudy Klucik", target: "CMC", predicate: "associatedWith" },
    {
      source: "Rudy Klucik",
      target: "GSB Dev Team",
      predicate: "associatedWith",
    },
    { source: "Rudy Klucik", target: "Hazel", predicate: "associatedWith" },
    { source: "Rudy Klucik", target: "EchoFish", predicate: "associatedWith" },
    { source: "Bary Eakins", target: "Tharp", predicate: "associatedWith" },
    // { source: "Peemin Chen", target: "Hazel", predicate: "associatedWith" },
    // {
    //   source: "Peemin Chen",
    //   target: "FishFlicks",
    //   predicate: "associatedWith",
    // },
    {
      source: "John Cartwright",
      target: "Crowbar",
      predicate: "associatedWith",
    },
    { source: "Payton Cain", target: "Crowbar", predicate: "associatedWith" },
    { source: "Payton Cain", target: "TugBoat", predicate: "associatedWith" },
    {
      source: "Carrie Wall Bell",
      target: "EchoFish",
      predicate: "associatedWith",
    },
    {
      source: "Carrie Wall Bell",
      target: "TugBoat",
      predicate: "associatedWith",
    },
    {
      source: "Carrie Wall Bell",
      target: "Team Fish",
      predicate: "associatedWith",
    },
    {
      source: "Emma Beretta",
      target: "Team Fish",
      predicate: "associatedWith",
    },
    {
      source: "Emma Beretta",
      target: "ONMS Soundscapes",
      predicate: "associatedWith",
    },
    {
      source: "Quincy Cantu",
      target: "ONMS Soundscapes",
      predicate: "associatedWith",
    },
    { source: "Carrie Wall Bell", target: "Pace", predicate: "associatedWith" },
    { source: "Quincy Cantu", target: "TugBoat", predicate: "associatedWith" },
    {
      source: "Quincy Cantu",
      target: "Team Fish",
      predicate: "associatedWith",
    },
    { source: "Quincy Cantu", target: "Pace", predicate: "associatedWith" },
    { source: "Brian Meyer", target: "Tharp", predicate: "associatedWith" },
    { source: "Brian Meyer", target: "Trackline", predicate: "associatedWith" },
    { source: "Clinton Lohr", target: "TugBoat", predicate: "associatedWith" },
    {
      source: "Clinton Lohr",
      target: "Team Fish",
      predicate: "associatedWith",
    },
    { source: "Clinton Lohr", target: "Pace", predicate: "associatedWith" },
    {
      source: "Rachel Peterson",
      target: "Trackline",
      predicate: "associatedWith",
    },
    {
      source: "Rachel Peterson",
      target: "Open Information Stewardship Service",
      predicate: "associatedWith",
    },
    {
      source: "Jordan Schweizer",
      target: "Trackline",
      predicate: "associatedWith",
    },
    {
      source: "Teodora Mitroi",
      target: "Trackline",
      predicate: "associatedWith",
    },
    {
      source: "Michael Richtsmeier",
      target: "Trackline",
      predicate: "associatedWith",
    },
    { source: "Logan Ejupi", target: "Team Fish", predicate: "associatedWith" },
    {
      source: "Zoe Anderson",
      target: "Team Fish",
      predicate: "associatedWith",
    },
    {
      source: "Luke Pitstick",
      target: "Team Fish",
      predicate: "associatedWith",
    },
    {
      source: "Rory OFlynn",
      target: "Team Fish",
      predicate: "associatedWith",
    },
    {
      source: "Chuck Anderson",
      target: "Team Fish",
      predicate: "associatedWith",
    },
    // DEM Team
    // DEM Team
    {
      source: "Kelly Carignan",
      target: "DEM Team",
      predicate: "associatedWith",
    },
    {
      source: "Christopher Amante",
      target: "DEM Team",
      predicate: "associatedWith",
    },
    { source: "Elliot Lim", target: "DEM Team", predicate: "associatedWith" },
    { source: "Matthew Love", target: "DEM Team", predicate: "associatedWith" },
    {
      source: "Michael MacFerrin",
      target: "DEM Team",
      predicate: "associatedWith",
    },
    { source: "DEM Team", target: "MGGS", predicate: "associatedWith" },
    //
    { source: "Rachel Peterson", target: "Tharp", predicate: "associatedWith" },
    { source: "Max Smith", target: "Mable", predicate: "associatedWith" },
    {
      source: "Max Smith",
      target: "Open Information Stewardship Service",
      predicate: "associatedWith",
    },
    {
      source: "Clinton Campbell",
      target: "Crowbar",
      predicate: "associatedWith",
    },
    {
      source: "Jennifer Jencks",
      target: "Crowbar",
      predicate: "associatedWith",
    },
    {
      source: "Jennifer Jencks",
      target: "Gazetteer",
      predicate: "associatedWith",
    },
    { source: "Jennifer Jencks", target: "Mable", predicate: "associatedWith" },
    {
      source: "Jennifer Jencks",
      target: "Crowbar",
      predicate: "associatedWith",
    },
    { source: "Jessica Nation", target: "Mable", predicate: "associatedWith" },
    { source: "Kevin Lally", target: "Mable", predicate: "associatedWith" },
    {
      source: "Daniel Alemayehu",
      target: "Mable",
      predicate: "associatedWith",
    },
    { source: "Jessica Nation", target: "BTeam", predicate: "associatedWith" },
    { source: "Kevin Lally", target: "BTeam", predicate: "associatedWith" },
    { source: "Jennifer Jencks", target: "BTeam", predicate: "associatedWith" },
    { source: "Michelle", target: "BTeam", predicate: "associatedWith" },
    { source: "Tate Voeller", target: "BTeam", predicate: "associatedWith" },
    {
      source: "Daniel Alemayehu",
      target: "BTeam",
      predicate: "associatedWith",
    },
    { source: "Max Smith", target: "BTeam", predicate: "associatedWith" },
    {
      source: "Clinton Campbell",
      target: "BTeam",
      predicate: "associatedWith",
    },
    { source: "BTeam", target: "Mable", predicate: "associatedWith" },
    {
      source: "Vidhyadhari Gondle",
      target: "FishFlicks",
      predicate: "associatedWith",
    },
    { source: "Lindsey Wright", target: "Hazel", predicate: "associatedWith" },
    { source: "Nic Arcos", target: "Hazel", predicate: "associatedWith" },
    { source: "Marigrams", target: "Hazel", predicate: "associatedWith" },
    {
      source: "Aaron Sweeny",
      target: "Marigrams",
      predicate: "associatedWith",
    },
    // cmc
    // { source: "Jeffrey Duda", target: "CIRES", predicate: "memberOf" },
    { source: "Jeffrey Duda", target: "CMC", predicate: "associatedWith" },
    { source: "Jeffrey Duda", target: "GSL", predicate: "associatedWith" },
    { source: "Elysia Lucas", target: "CMC", predicate: "associatedWith" },
    { source: "Elysia Lucas", target: "NCEI", predicate: "associatedWith" },
    { source: "Anne Sledd", target: "CMC", predicate: "associatedWith" },
    { source: "Anne Sledd", target: "PSL", predicate: "associatedWith" },
    { source: "Aleya Kaushik", target: "CMC", predicate: "associatedWith" },
    { source: "Aleya Kaushik", target: "GML", predicate: "associatedWith" },
    { source: "Jianhao Zhang", target: "CMC", predicate: "associatedWith" },
    { source: "Jianhao Zhang", target: "CSL", predicate: "associatedWith" },
    { source: "Nathan Malarich", target: "CMC", predicate: "associatedWith" },
    { source: "Nathan Malarich", target: "CSL", predicate: "associatedWith" },
    { source: "Aly Krimmer", target: "CMC", predicate: "associatedWith" },
    {
      source: "Aly Krimmer",
      target: "CIRES ADMIN",
      predicate: "associatedWith",
    },
    { source: "Alison Post", target: "CMC", predicate: "associatedWith" },
    { source: "Alison Post", target: "SEEC", predicate: "associatedWith" },
    { source: "Alison Post", target: "Earth Lab", predicate: "associatedWith" },
    { source: "Nels Bjarke", target: "CMC", predicate: "associatedWith" },
    {
      source: "Nels Bjarke",
      target: "Main Campus Research",
      predicate: "associatedWith",
    },
    { source: "Scott Clingan", target: "CMC", predicate: "associatedWith" },
    { source: "Scott Clingan", target: "GML", predicate: "associatedWith" },
    { source: "Mara Coe", target: "CMC", predicate: "associatedWith" },
    { source: "Mara Coe", target: "CEEE", predicate: "associatedWith" },
    {
      source: "Agnieszka Gautier",
      target: "CMC",
      predicate: "associatedWith",
    },
    {
      source: "Agnieszka Gautier",
      target: "NSIDC",
      predicate: "associatedWith",
    },
    { source: "Guoqing Ge", target: "CMC", predicate: "associatedWith" },
    { source: "Guoqing Ge", target: "GSL", predicate: "associatedWith" },
    { source: "Marty Heath", target: "CMC", predicate: "associatedWith" },
    { source: "Marty Heath", target: "NSIDC", predicate: "associatedWith" },
    { source: "Corey Krimmer", target: "CMC", predicate: "associatedWith" },
    {
      source: "Corey Krimmer",
      target: "CIRES ADMIN",
      predicate: "associatedWith",
    },
    {
      source: "CMC",
      target: "CIRES",
      predicate: "associatedWith",
    },
    { source: "Scott Lewis", target: "CMC", predicate: "associatedWith" },
    { source: "Scott Lewis", target: "NSIDC", predicate: "associatedWith" },
    { source: "Kim Moreland", target: "CMC", predicate: "associatedWith" },
    { source: "Kim Moreland", target: "SWPC", predicate: "associatedWith" },
    {
      source: "Adam Schneider",
      target: "CMC",
      predicate: "associatedWith",
    },
    {
      source: "Adam Schneider",
      target: "PSL",
      predicate: "associatedWith",
    },
    // cires
    {
      source: "Chris Slater",
      target: "GSB Dev Team",
      predicate: "associatedWith",
    },
    {
      source: "Chris Slater",
      target: "Gazetteer",
      predicate: "associatedWith",
    },
    {
      source: "Chris Slater",
      target: "Argonaut",
      predicate: "associatedWith",
    },
    { source: "Chris Slater", target: "WOD", predicate: "associatedWith" },
    {
      source: "Clinton Campbell",
      target: "GSB Dev Team",
      predicate: "associatedWith",
    },
    {
      source: "Clinton Lohr",
      target: "GSB Dev Team",
      predicate: "associatedWith",
    },
    {
      source: "Max Smith",
      target: "GSB Dev Team",
      predicate: "associatedWith",
    },
    {
      source: "Payton Cain",
      target: "GSB Dev Team",
      predicate: "associatedWith",
    },
    {
      source: "Quincy Cantu",
      target: "GSB Dev Team",
      predicate: "associatedWith",
    },
    // { source: "Quincy Cantu", target: "NCEI", predicate: "memberOf", value: 1  },
    {
      source: "Rachel Peterson",
      target: "GSB Dev Team",
      predicate: "associatedWith",
    },
    // {"source": "Vidhyadhari Gondle", "target": "CIRES", "predicate": "memberOf"},
    {
      source: "Vidhyadhari Gondle",
      target: "GSB Dev Team",
      predicate: "associatedWith",
    },
    // { source: "Vidhyadhari Gondle", target: "NCEI", predicate: "memberOf", value: 1 },
    // { source: "Vidhyadhari Gondle", target: "NCEI", predicate: "memberOf", value: 1 },
    // admin
    // https://research.noaa.gov/about-us/
    {
      source: "NCEI",
      target: "National Environmental Satellite, Data, and Information Service",
      predicate: "associatedWith",
    },
    {
      source: "Tharp",
      target: "NESDIS Common Cloud Framework",
      predicate: "associatedWith",
    },
    {
      source: "Pura Perez",
      target: "NESDIS Common Cloud Framework",
      predicate: "associatedWith",
    },
    {
      source: "Michael Royer",
      target: "NESDIS Common Cloud Framework",
      predicate: "associatedWith",
    },
    {
      source: "Trackline",
      target: "NESDIS Common Cloud Framework",
      predicate: "associatedWith",
    },
    {
      source: "NESDIS Common Cloud Framework",
      target: "National Environmental Satellite, Data, and Information Service",
      predicate: "associatedWith",
    },
    {
      source: "NESDIS Common Cloud Framework",
      target: "AWS",
      predicate: "associatedWith",
    },
    {
      source: "Consolidated Storage Service",
      target: "NESDIS Common Cloud Framework",
      predicate: "associatedWith",
    },
    {
      source: "Chris Mattioli",
      target: "Consolidated Storage Service",
      predicate: "associatedWith",
    },
    {
      source: "Chris Mattioli",
      target: "NESDIS Common Cloud Framework",
      predicate: "associatedWith",
    },
    {
      source: "Jessica Hung",
      target: "AWS Solutions Architect",
      predicate: "associatedWith",
    },
    {
      source: "Mike Friedenthal",
      target: "AWS Solutions Architect",
      predicate: "associatedWith",
    },
    {
      source: "Jessica Hung",
      target: "NESDIS Common Cloud Framework",
      predicate: "associatedWith",
    },
    {
      source: "Chris Mattioli",
      target: "AWS Solutions Architect",
      predicate: "associatedWith",
    },
    {
      source: "AWS Solutions Architect",
      target: "AWS",
      predicate: "associatedWith",
    },
    {
      source: "CIRES AWS",
      target: "AWS",
      predicate: "associatedWith",
    },
    {
      source: "Josh Caplan",
      target: "CIRES AWS",
      predicate: "associatedWith",
    },
    {
      source: "EchoFish",
      target: "CIRES AWS",
      predicate: "associatedWith",
    },
    {
      source: "TugBoat",
      target: "NIH AWS",
      predicate: "associatedWith",
    },
    {
      source: "NIH AWS",
      target: "AWS",
      predicate: "associatedWith",
    },
    {
      source: "Gian Dilawari",
      target: "NIH AWS",
      predicate: "associatedWith",
    },
    {
      source: "National Environmental Satellite, Data, and Information Service",
      target: "NOAA",
      predicate: "associatedWith",
    },
    {
      source: "CSL",
      target: "Office of Ocean and Atmospheric Research",
      predicate: "associatedWith",
    },
    {
      source: "GML",
      target: "Office of Ocean and Atmospheric Research",
      predicate: "associatedWith",
    },
    {
      source: "GSL",
      target: "Office of Ocean and Atmospheric Research",
      predicate: "associatedWith",
    },
    {
      source: "PSL",
      target: "Office of Ocean and Atmospheric Research",
      predicate: "associatedWith",
    },
    {
      source: "Office of Ocean and Atmospheric Research",
      target: "NOAA",
      predicate: "associatedWith",
    },
    // cu
    { source: "NSIDC", target: "CU", predicate: "associatedWith" },
    { source: "CEEE", target: "CIRES", predicate: "associatedWith" },
    { source: "SEEC", target: "CU", predicate: "associatedWith" },
    { source: "ESIIL", target: "CIRES", predicate: "associatedWith" },
    { source: "CIRES", target: "CU", predicate: "associatedWith" },
    {
      source: "Arnaud Chulliat",
      target: "CIRES Fellows",
      predicate: "ciresFellow",
    },

    {
      source: "Arnaud Chulliat",
      target: "STPS",
      predicate: "ciresFellow",
    },

    {
      source: "Arnaud Chulliat",
      target: "STP Software",
      predicate: "ciresFellow",
    },
    {
      source: "Lily Young",
      target: "STP Software",
      predicate: "associatedWith",
    },
    {
      source: "Collin Kadlecek",
      target: "STP Software",
      predicate: "associatedWith",
    },
    {
      source: "Nir Boneh",
      target: "STP Software",
      predicate: "associatedWith",
    },
    {
      source: "Liam Kilcommons",
      target: "STP Software",
      predicate: "associatedWith",
    },
    {
      source: "Manoj Nair",
      target: "STP Software",
      predicate: "associatedWith",
    },
    {
      source: "STP Software",
      target: "STPS",
      predicate: "associatedWith",
    },

    { source: "CIRES Fellows", target: "CIRES", predicate: "associatedWith" },
    { source: "SWPC", target: "NCEP", predicate: "associatedWith" },
    { source: "SWPC", target: "US Air Force", predicate: "associatedWith" },
    { source: "NCEP", target: "NWS", predicate: "associatedWith" },
    { source: "Rob Redmon", target: "NCAI", predicate: "associatedWith" },
    { source: "Marissa Jones", target: "NCAI", predicate: "associatedWith" },
    { source: "Douglas Rao", target: "NCAI", predicate: "associatedWith" },
    { source: "Douglas Rao", target: "ESIP", predicate: "associatedWith" },
    { source: "NCAI", target: "OCIO", predicate: "associatedWith" },
    { source: "OCIO", target: "NOAA Fisheries", predicate: "associatedWith" },
    {
      source: "Stephanie Herring",
      target: "NCAI",
      predicate: "associatedWith",
    },
    { source: "Brian Meyer", target: "NCAI", predicate: "associatedWith" },
    {
      source: "EchoFish",
      target: "NCAI",
      predicate: "associatedWith",
    },
    { source: "TugBoat", target: "NCAI", predicate: "associatedWith" },
    //
    {
      source: "Alexander Hoelzemann",
      target: "Sonar AI",
      predicate: "associatedWith",
    },
    {
      source: "Alexander Hoelzemann",
      target: "Computer Science Department",
      predicate: "associatedWith",
    },
    {
      source: "Qin Lv",
      target: "Sonar AI",
      predicate: "associatedWith",
    },
    {
      source: "Esther Rolf",
      target: "ESIIL",
      predicate: "associatedWith",
    },
    {
      source: "VeeVee Cai",
      target: "ESIIL",
      predicate: "associatedWith",
    },
    {
      source: "Carrie Wall Bell",
      target: "Sonar AI",
      predicate: "associatedWith",
    },
    {
      source: "Sonar AI",
      target: "EchoFish",
      predicate: "associatedWith",
    },
    {
      source: "Computer Science Department",
      target: "CU",
      predicate: "associatedWith",
    },
    {
      source: "CMDI",
      target: "CU",
      predicate: "associatedWith",
    },
    {
      source: "Qin Lv",
      target: "Computer Science Department",
      predicate: "associatedWith",
    },
    {
      source: "Esther Rolf",
      target: "Computer Science Department",
      predicate: "associatedWith",
    },
    {
      source: "VeeVee Cai",
      target: "Computer Science Department",
      predicate: "associatedWith",
    },
    /////////////////////////////////
    // bigger org
    /////////////////////////////////
    {
      source: "Directors Office",
      target: "NCEI",
      predicate: "associatedWith",
    },
    {
      source: "Derek Arndt",
      target: "Directors Office",
      predicate: "associatedWith",
    },
    {
      source: "Joseph Pica",
      target: "Directors Office",
      predicate: "associatedWith",
    },
    //
    { source: "CSSD", target: "NCEI", predicate: "associatedWith" },
    { source: "Jeffrey Privette", target: "CSSD", predicate: "associatedWith" },
    // { source: "CSB", target: "NCEI", predicate: "associatedWith" },
    { source: "CISB", target: "NCEI", predicate: "associatedWith" },
    { source: "MAB", target: "NCEI", predicate: "associatedWith" },
    { source: "COGS", target: "NCEI", predicate: "associatedWith" },
    { source: "STPS", target: "GSB", predicate: "associatedWith" },
    { source: "STP DPMF", target: "STPS", predicate: "associatedWith" },
    {
      source: "STP DPMF",
      target: "NESDIS Common Cloud Framework",
      predicate: "associatedWith",
    },
    {
      source: "Josh Riley",
      target: "STP DPMF",
      predicate: "associatedWith",
    },
    {
      source: "Robert Allsopp",
      target: "STP DPMF",
      predicate: "associatedWith",
    },
    { source: "Josh Riley", target: "STPS", predicate: "associatedWith" },
    {
      source: "Jack McKinstry",
      target: "STP DPMF",
      predicate: "associatedWith",
    },
    { source: "MGGS", target: "GSB", predicate: "associatedWith" },
    { source: "CSB", target: "COGS", predicate: "associatedWith" },
    { source: "OSB", target: "COGS", predicate: "associatedWith" },
    { source: "Zhankun Wang", target: "OSB", predicate: "associatedWith" },
    { source: "Zhankun Wang", target: "WOD", predicate: "associatedWith" },
    { source: "Zhankun Wang", target: "Argonaut", predicate: "associatedWith" },
    { source: "Patrick Hogan", target: "OSB", predicate: "associatedWith" },
    {
      source: "Kirsten Larsen",
      target: "OSB",
      predicate: "associatedWith",
    },
    { source: "Errol Ronje", target: "OSB", predicate: "associatedWith" },
    { source: "Tobey Kegley", target: "OSB", predicate: "associatedWith" },
    {
      source: "Tobey Kegley",
      target: "FishFlicks",
      predicate: "associatedWith",
    },
    {
      source: "Bary Eakins",
      target: "FishFlicks",
      predicate: "associatedWith",
    },
    { source: "Anna Lienesch", target: "OSB", predicate: "associatedWith" },
    { source: "Kate Rose", target: "OSB", predicate: "associatedWith" },
    { source: "Boyin Huang", target: "OSB", predicate: "associatedWith" },
    { source: "GSB", target: "COGS", predicate: "associatedWith" },
    {
      source: "Karen Grissom",
      target: "COGS",
      predicate: "associatedWith",
    },
    {
      source: "Rob Redmon",
      target: "COGS",
      predicate: "associatedWith",
    },
    {
      source: "Stephanie Herring",
      target: "GSB",
      predicate: "associatedWith",
    },
    {
      source: "Kelly Stroker",
      target: "MGGS",
      predicate: "associatedWith",
    },
    { source: "GSB Dev Team", target: "MGGS", predicate: "associatedWith" },
    {
      source: "Laurel Rachmeler",
      target: "STPS",
      predicate: "associatedWith",
    },
    // { source: "Josh Riley", target: "STPS", predicate: "memberOf", value: 1 },
    {
      source: "Jennifer Bowers",
      target: "CSB",
      predicate: "associatedWith",
    },
    { source: "DSD", target: "NCEI", predicate: "associatedWith" },
    { source: "Ken Casey", target: "DSD", predicate: "associatedWith" },
    { source: "DOB", target: "DSD", predicate: "associatedWith" },
    { source: "Steven Rutz", target: "DOB", predicate: "associatedWith" },
    { source: "AB", target: "DSD", predicate: "associatedWith" },
    { source: "Nancy Ritchey", target: "AB", predicate: "associatedWith" },
    { source: "Paul Lemieux", target: "AB", predicate: "associatedWith" },
    { source: "Paul Lemieux", target: "CoMET", predicate: "associatedWith" },
    {
      source: "Sarah Menassian",
      target: "AB",
      predicate: "associatedWith",
    },
    {
      source: "Sarah Menassian",
      target: "CoMET",
      predicate: "associatedWith",
    },
    { source: "Lori Hager", target: "AB", predicate: "associatedWith" },
    { source: "Lori Hager", target: "CoMET", predicate: "associatedWith" },
    { source: "Ashley Beard", target: "AB", predicate: "associatedWith" },
    { source: "Ashley Beard", target: "CoMET", predicate: "associatedWith" },
    { source: "SDB", target: "DSD", predicate: "associatedWith" },
    { source: "Daniel Lloyd", target: "SDB", predicate: "associatedWith" },
    {
      source: "Charles Burris",
      target: "SDB",
      predicate: "associatedWith",
    },
    {
      source: "Charles Burris",
      target: "CoMET",
      predicate: "associatedWith",
    },
    {
      source: "James Primrose",
      target: "SDB",
      predicate: "associatedWith",
    },
    {
      source: "James Primrose",
      target: "CoMET",
      predicate: "associatedWith",
    },
    { source: "John Relph", target: "SDB", predicate: "associatedWith" },
    { source: "Ken Tanaka", target: "SDB", predicate: "associatedWith" },
    { source: "DAB", target: "DSD", predicate: "associatedWith" },
    {
      source: "Richard Baldwin",
      target: "DAB",
      predicate: "associatedWith",
    },
    {
      source: "Jeremy Hall",
      target: "DAB",
      predicate: "associatedWith",
    },
    {
      source: "Ryan Berkheimer",
      target: "DAB",
      predicate: "associatedWith",
    },
    {
      source: "Ryan Berkheimer",
      target: "Open Information Stewardship Service",
      predicate: "associatedWith",
    },
    { source: "Jesse Varner", target: "DAB", predicate: "associatedWith" },
    { source: "RMD", target: "NCEI", predicate: "associatedWith" },
    { source: "Aric Whatley", target: "RMD", predicate: "associatedWith" },
    {
      source: "Jennifer Thatcher",
      target: "RMD",
      predicate: "associatedWith",
    },
    { source: "FAB", target: "RMD", predicate: "associatedWith" },
    {
      source: "Ming-Wai Merschat",
      target: "FAB",
      predicate: "associatedWith",
    },
    {
      source: "Ming-Wai Merschat",
      target: "Mindful NOAA",
      predicate: "associatedWith",
    },
    {
      source: "Jay Nunenkamp",
      target: "Mindful NOAA",
      predicate: "associatedWith",
    },
    {
      source: "Nicole Fernandes",
      target: "Mindful NOAA",
      predicate: "associatedWith",
    },
    {
      source: "Katrina Combs",
      target: "Mindful NOAA",
      predicate: "associatedWith",
    },
    {
      source: "Katrina Combs",
      target: "NWS",
      predicate: "associatedWith",
    },
    {
      source: "NWS",
      target: "NOAA",
      predicate: "associatedWith",
    },
    {
      source: "Megan Cromwell",
      target: "NOS",
      predicate: "associatedWith",
    },
    {
      source: "Jay Nunenkamp",
      target: "NOS",
      predicate: "associatedWith",
    },
    {
      source: "Lee Shoemaker",
      target: "NOS",
      predicate: "associatedWith",
    },
    {
      source: "NOS",
      target: "NOAA",
      predicate: "associatedWith",
    },
    {
      source: "Lee Shoemaker",
      target: "NOS",
      predicate: "associatedWith",
    },
    {
      source: "Lee Shoemaker",
      target: "IHO DCDB",
      predicate: "associatedWith",
    },
    {
      source: "Rudy Klucik",
      target: "Mindful NOAA",
      predicate: "associatedWith",
    },
    {
      source: "Rudy Klucik",
      target: "NDC-Pathfinders",
      predicate: "associatedWith",
    },
    {
      source: "Carrie Wall Bell",
      target: "NDC-Pathfinders",
      predicate: "associatedWith",
    },
    {
      source: "NCAR",
      target: "NDC-Pathfinders",
      predicate: "associatedWith",
    },
    { source: "SEB", target: "RMD", predicate: "associatedWith" },
    { source: "Jon Kidder", target: "SEB", predicate: "associatedWith" },
    {
      source: "Denise Sylvester",
      target: "SEB",
      predicate: "associatedWith",
    },
    { source: "COB", target: "RMD", predicate: "associatedWith" },
    { source: "Jake Fortune", target: "COB", predicate: "associatedWith" },
    { source: "MSD", target: "NCEI", predicate: "associatedWith" },
    { source: "Scott Hausman", target: "MSD", predicate: "associatedWith" },
    { source: "ITOB", target: "MSD", predicate: "associatedWith" },
    {
      source: "Preston Carter",
      target: "ITOB",
      predicate: "associatedWith",
    },
    {
      source: "David Hernandez",
      target: "ITOB",
      predicate: "associatedWith",
    },
    { source: "Max Layer", target: "ITOB", predicate: "associatedWith" },
    {
      source: "Jefferson Ogata",
      target: "ITOB",
      predicate: "associatedWith",
    },
    {
      source: "Jason Symonds",
      target: "ITOB",
      predicate: "associatedWith",
    },
    { source: "Ernie Joynt", target: "ITOB", predicate: "associatedWith" },
    {
      source: "Database Administrators",
      target: "ITOB",
      predicate: "associatedWith",
    },
    {
      source: "Issa Perry",
      target: "Database Administrators",
      predicate: "associatedWith",
    },
    {
      source: "Rontgen Isaac",
      target: "Database Administrators",
      predicate: "associatedWith",
    },
    { source: "Eric Porter", target: "ITOB", predicate: "associatedWith" },
    {
      source: "James Pritchitt",
      target: "ITOB",
      predicate: "associatedWith",
    },
    {
      source: "Linux System Administrators",
      target: "ITOB",
      predicate: "associatedWith",
    },
    {
      source: "Windows System Administrators",
      target: "ITOB",
      predicate: "associatedWith",
    },
    {
      source: "Stephen Cummings",
      target: "Windows System Administrators",
      predicate: "associatedWith",
    },
    {
      source: "Caleb Dorsett",
      target: "Linux System Administrators",
      predicate: "associatedWith",
    },
    {
      source: "Gary Osowski",
      target: "Linux System Administrators",
      predicate: "associatedWith",
    },
    {
      source: "Joel Rodriguez Chacon",
      target: "Linux System Administrators",
      predicate: "associatedWith",
    },
    {
      source: "Jesse Williams",
      target: "Linux System Administrators",
      predicate: "associatedWith",
    },

    { source: "LSB", target: "MSD", predicate: "associatedWith" },
    {
      source: "Abraham Cavazos",
      target: "LSB",
      predicate: "associatedWith",
    },
    { source: "Shane Wise", target: "LSB", predicate: "associatedWith" },
    // { source: "", target: "", predicate: "memberOf", value: 1 },
    //
    {
      source: "Office of Ocean and Atmospheric Research",
      target: "CIAO",
      predicate: "associatedWith",
    },
    { source: "CIAO", target: "CIRES", predicate: "associatedWith" },
    // { source: "", target: "", predicate: "memberOf", value: 1 },
    // TODO: NOAA CORE
    // TODO: Mason & James
    { source: "Mason Carroll", target: "OMAO", predicate: "associatedWith" },
    { source: "Mason Carroll", target: "GSB", predicate: "associatedWith" },
    { source: "NOAA", target: "OMAO", predicate: "associatedWith" },
    // TODO: NCCF
    // TODO: AASI
    // TODO: https://www.fisheries.noaa.gov/about-us/who-we-are
    //
    { source: "NOAA Fisheries", target: "NOAA", predicate: "associatedWith" },
    {
      source: "Alaska Fisheries Science Center",
      target: "NOAA Fisheries",
      predicate: "associatedWith",
    },
    {
      source: "Northeast Fisheries Science Center",
      target: "NOAA Fisheries",
      predicate: "associatedWith",
    },
    {
      source: "Pacific Islands Fisheries Science Center",
      target: "NOAA Fisheries",
      predicate: "associatedWith",
    },
    {
      source: "Southeast Fisheries Science Center",
      target: "NOAA Fisheries",
      predicate: "associatedWith",
    },
    {
      source: "Southwest Fisheries Science Center",
      target: "NOAA Fisheries",
      predicate: "associatedWith",
    },
    {
      source: "Northwest Fisheries Science Center",
      target: "NOAA Fisheries",
      predicate: "associatedWith",
    },
    {
      source: "Office of Sustainable Fisheries",
      target: "NOAA Fisheries",
      predicate: "associatedWith",
    },
    //
    {
      source: "Carrie Wall Bell",
      target: "AA-SI",
      predicate: "associatedWith",
    },
    { source: "Rudy Klucik", target: "AA-SI", predicate: "associatedWith" },
    { source: "Mike Jech", target: "AA-SI", predicate: "associatedWith" },
    {
      source: "Mike Jech",
      target: "Northeast Fisheries Science Center",
      predicate: "associatedWith",
    },
    { source: "Allison White", target: "AA-SI", predicate: "associatedWith" },
    {
      source: "Allison White",
      target: "Southeast Fisheries Science Center",
      predicate: "associatedWith",
    },
    { source: "Tim Rowell", target: "AA-SI", predicate: "associatedWith" },
    {
      source: "Tim Rowell",
      target: "Southeast Fisheries Science Center",
      predicate: "associatedWith",
    },
    { source: "Patrick Ressler", target: "AA-SI", predicate: "associatedWith" },
    {
      source: "Patrick Ressler",
      target: "Alaska Fisheries Science Center",
      predicate: "associatedWith",
    },
    { source: "Brett Layman", target: "AA-SI", predicate: "associatedWith" },
    { source: "Camilo Roa", target: "AA-SI", predicate: "associatedWith" },
    {
      source: "Camilo Roa",
      target: "Southwest Fisheries Science Center",
      predicate: "associatedWith",
    },
    {
      source: "Elizabeth Phillips",
      target: "AA-SI",
      predicate: "associatedWith",
    },
    {
      source: "Elizabeth Phillips",
      target: "Northwest Fisheries Science Center",
      predicate: "associatedWith",
    },
    {
      source: "Dominic Bashford",
      target: "Northwest Fisheries Science Center",
      predicate: "associatedWith",
    },
    {
      source: "Rebecca Thomas",
      target: "Office of Sustainable Fisheries",
      predicate: "associatedWith",
    },
    { source: "Josiah Renfree", target: "AA-SI", predicate: "associatedWith" },
    {
      source: "Josiah Renfree",
      target: "Southwest Fisheries Science Center",
      predicate: "associatedWith",
    },
    { source: "Derek Bolser", target: "AA-SI", predicate: "associatedWith" },
    { source: "Elias Capriles", target: "AA-SI", predicate: "associatedWith" },
    {
      source: "Elias Capriles",
      target: "Southwest Fisheries Science Center",
      predicate: "associatedWith",
    },
    {
      source: "Dominic Bashford",
      target: "AA-SI",
      predicate: "associatedWith",
    },
    { source: "Michael Ryan", target: "AA-SI", predicate: "associatedWith" },
    {
      source: "Michael Ryan",
      target: "Northeast Fisheries Science Center",
      predicate: "associatedWith",
    },
    {
      source: "Hannan Khan",
      target: "Northeast Fisheries Science Center",
      predicate: "associatedWith",
    },
    { source: "Reka Domokos", target: "AA-SI", predicate: "associatedWith" },
    {
      source: "Reka Domokos",
      target: "Pacific Islands Fisheries Science Center",
      predicate: "associatedWith",
    },
    {
      source: "Nikki Dabaghchian",
      target: "AA-SI",
      predicate: "associatedWith",
    },
    {
      source: "Nikki Dabaghchian",
      target: "Northeast Fisheries Science Center",
      predicate: "associatedWith",
    },
    { source: "Dave Demer", target: "AA-SI", predicate: "associatedWith" },
    {
      source: "Dave Demer",
      target: "Southwest Fisheries Science Center",
      predicate: "associatedWith",
    },
    { source: "Hannan Khan", target: "AA-SI", predicate: "associatedWith" },
    {
      source: "Robert Levine",
      target: "Alaska Fisheries Science Center",
      predicate: "associatedWith",
    },
    {
      source: "Robert Levine",
      target: "pyEcholab",
      predicate: "associatedWith",
    },
    //
    { source: "Lloyd Izard", target: "AA-SI", predicate: "associatedWith" },
    { source: "Wu-Jung Lee", target: "AA-SI", predicate: "associatedWith" },
    // echopype
    { source: "Lloyd Izard", target: "echopype", predicate: "associatedWith" },
    { source: "Wu-Jung Lee", target: "echopype", predicate: "associatedWith" },
    { source: "echopype", target: "EchoFish", predicate: "associatedWith" },
  ],
};

// TODO: add
//  CIRES Fellows
//  OMB
//  NCAR/CISL

// function processClick(e: React.ChangeEvent<HTMLInputElement>) {
//   console.log(`toggled: ${e.target.checked}`)
// }

function App() {
  const containerRef = useRef(null);

  return (
    <div className="App" id="parentDiv">
      <div id="bottomRight">
        <div>
          <label style={{ color: "yellowgreen" }}>
            people
            {/* <input type="checkbox" name="checkboxPeople" defaultChecked={true} onChange={(e) => processClick(e)} disabled /> */}
          </label>
          <span style={{ color: "cyan" }}>{' / '}</span>
          <label style={{ color: "forestgreen" }}>
            groups
            {/* <input type="checkbox" name="checkboxGroups" defaultChecked={true} onChange={(e) => processClick(e)} disabled /> */}
          </label>
          <span style={{ color: "cyan" }}>{' / '}</span>
          <label style={{ color: "skyblue" }}>
            projects
            {/* <input type="checkbox" name="checkboxProjects" defaultChecked={true} onChange={(e) => processClick(e)} disabled /> */}
          </label>
        </div>

        <h1>
          Marine Geology & Geophysics
        </h1>
      </div>

      <div id="topLeft">
        <span
          style={{ fontFamily: "Arial", fontSize: "0.7em", color: "cyan", opacity: "0.75", letterSpacing: "0.125em" }}
        >
          {`v${import.meta.env.VITE_REACT_APP_VERSION}`}
        </span>
      </div>

      <div id="bottomLeft">
        <a href="https://github.com/CI-CMG/org-chart/" target="_blank"><FaGithub /></a>
      </div>

      <div ref={containerRef}>
        <ForceGraph2D
          graphData={meta_graph}
          // nodeAutoColorBy="group"
          // linkDirectionalParticles="value"
          linkDirectionalParticles={2}
          linkDirectionalParticleSpeed={() => {
            return 1 * 0.0005;
          }}
          linkDirectionalParticleWidth={3}
          linkCurvature={0.125}
          linkLineDash={() => {
            return [1, 1];
          }}
          linkColor={() => {
            return "rgba(71, 165, 42, 0.17)";
          }}
          linkWidth={1.5}
          linkLabel={(link) => {
            return link.predicate;
          }}
          linkDirectionalParticleColor={() => "rgba(0,206,209, 0.25)"}
          nodeCanvasObject={(node, ctx, globalScale) => {
            let label = node.id;
            if ("longName" in node) {
              label = node.longName!;
            }
            // const fontSize = 14 / globalScale;
            const fontSize = 6  / (globalScale*0.5);
            // debugger;
            ctx.font = `${fontSize}px Sans-Serif`;
            // const textWidth = ctx.measureText(label).width;
            // const bckgDimensions = [textWidth, fontSize].map(
            //   (n) => n + fontSize * 0.2,
            // );
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            if (node.group === 0) {
              // people
              ctx.fillStyle = "RebeccaPurple";
              ctx.fillStyle = "YellowGreen";
            } else if (node.group === 1) {
              // groups
              ctx.fillStyle = "ForestGreen";
            } else if (node.group === 2) {
              // projects
              ctx.fillStyle = "SkyBlue";
            }
            // ctx.font='8px "Bitcount Prop Single"';
            ctx.letterSpacing = "0.05em";
            // if ("x" in node && "y" in node) {
            ctx.fillText(label, node.x!, node.y!);
            // }

            // node.__bckgDimensions = bckgDimensions;
          }}
          nodeLabel={(node) => {
            if (node.description) {
              return node.description;
            }
            return "";
          }}
          d3VelocityDecay={0.5}
          d3AlphaDecay={0.001}
          // d3AlphaMin={0.001}
          minZoom={0.4}
          maxZoom={6}
        />
      </div>
    </div>
  );
}

export default App;
