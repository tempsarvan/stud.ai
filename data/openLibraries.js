/**
 * stud.io Global Open-Source Knowledge & Academic Library Network
 * Direct integration to open educational repositories, research archives,
 * symbolic computing tools, and interactive STEM simulations.
 */
window.STUDIO_OPEN_LIBRARIES_DB = [
  {
    id: "lib_openstax",
    name: "OpenStax Academic Library",
    provider: "Rice University Open Education",
    category: "STEM & Humanities Textbooks",
    badge: "Peer-Reviewed Open Access",
    desc: "100% free, peer-reviewed, openly-licensed college and AP textbooks covering Calculus, University Physics, Chemistry, Biology, Economics, and Psychology.",
    resourcesCount: "85+ Complete Textbooks",
    apiEndpoint: "https://openstax.org/api/v2",
    features: ["Full Chapter PDF & Web Readers", "End-of-Chapter Problem Sets", "Instructor Answer Solutions"],
    tags: ["Textbooks", "Calculus", "Physics", "Chemistry", "Biology", "Economics"]
  },
  {
    id: "lib_arxiv",
    name: "arXiv Scientific Preprint Repository",
    provider: "Cornell University",
    category: "Cutting-Edge Scientific Research",
    badge: "2.4 Million+ Papers",
    desc: "Open-access archive for 2.4 million scholarly articles in Physics, Mathematics, Computer Science, Quantitative Biology, Quantitative Finance, and Statistics.",
    resourcesCount: "2,400,000+ Research Papers",
    apiEndpoint: "https://export.arxiv.org/api/query",
    features: ["Full Text LaTeX & PDF Access", "Author Citation Graphs", "Daily Subject Feeds"],
    tags: ["Research", "Quantum Mechanics", "AI & Machine Learning", "Pure Mathematics", "Astrophysics"]
  },
  {
    id: "lib_phet",
    name: "PhET Interactive STEM Simulations",
    provider: "University of Colorado Boulder",
    category: "Interactive Lab Simulations",
    badge: "HTML5 Virtual Labs",
    desc: "Interactive, research-based simulations for exploring physics (Circuit Construction, Projectile Motion), chemistry (Molecular Shapes, Balancing Equations), and mathematics.",
    resourcesCount: "160+ Interactive Virtual Labs",
    apiEndpoint: "https://phet.colorado.edu",
    features: ["Zero-Install HTML5 Canvas Labs", "Real-Time Vector Manipulation", "Accessible Concept Demonstrations"],
    tags: ["Interactive Labs", "Physics Circuits", "Molecules", "Wave Interference", "Optics"]
  },
  {
    id: "lib_gutenberg",
    name: "Project Gutenberg & LibriVox",
    provider: "Project Gutenberg Literary Archive",
    category: "World Literature, Philosophy & History",
    badge: "70,000+ Free Classics",
    desc: "Vast digital library of free eBooks, original philosophical works (Plato, Aristotle, Descartes, Kant), historical speeches, and public domain classic world literature.",
    resourcesCount: "70,000+ Literary Classics",
    apiEndpoint: "https://gutendex.com/books",
    features: ["EPUB & Plain Text Readers", "Synchronized LibriVox Audiobooks", "Original Historical Source Texts"],
    tags: ["Philosophy", "World Literature", "History", "Classics", "Audiobooks"]
  },
  {
    id: "lib_mathworld",
    name: "Wolfram MathWorld & SymPy Engine",
    provider: "Wolfram Research & Python Software Foundation",
    category: "Exact Symbolic Mathematics",
    badge: "Computational Math",
    desc: "The web's most extensive mathematical encyclopedia, containing formal mathematical definitions, step-by-step theorem derivations, and interactive CAS symbolic algebraic proofs.",
    resourcesCount: "13,000+ Verified Theorems",
    apiEndpoint: "https://mathworld.wolfram.com",
    features: ["Exact Symbolic Algebra", "3D Geometric Surface Plotting", "Formal Mathematical Proof Trees"],
    tags: ["Pure Math", "Calculus", "Linear Algebra", "Topology", "Number Theory"]
  },
  {
    id: "lib_pubchem",
    name: "PubChem & Protein Data Bank (RCSB PDB)",
    provider: "National Institutes of Health (NIH)",
    category: "Molecular Biology & Chemistry",
    badge: "3D Structure Database",
    desc: "World's largest collection of freely accessible chemical information, 3D macromolecular structures (DNA, hemoglobin, enzymes), and pharmacological bioassays.",
    resourcesCount: "115 Million+ Compounds",
    apiEndpoint: "https://pubchem.ncbi.nlm.nih.gov/rest/pug",
    features: ["Interactive 3D Ball-and-Stick Models", "Spectroscopic NMR Spectra", "Biochemical Pathway Visualizers"],
    tags: ["Biochemistry", "Molecular Biology", "Organic Chemistry", "Pharmacology"]
  },
  {
    id: "lib_nasa",
    name: "NASA Open Science & Exoplanet Archive",
    provider: "National Aeronautics and Space Administration",
    category: "Astronomy, Planetary Science & Astrophysics",
    badge: "NASA Open Data",
    desc: "Direct access to real astronomical telemetry from James Webb Space Telescope (JWST), Hubble, Kepler exoplanet discoveries, Mars rover geology, and solar climate dynamics.",
    resourcesCount: "5,500+ Confirmed Exoplanets",
    apiEndpoint: "https://api.nasa.gov",
    features: ["High-Resolution Deep Space Imagery", "Spectroscopic Atmosphere Analysis", "Orbital Telemetry Graphs"],
    tags: ["Astronomy", "Astrophysics", "Exoplanets", "Space Exploration", "Cosmology"]
  },
  {
    id: "lib_mit_ocw",
    name: "MIT OpenCourseWare & Stanford Engineering",
    provider: "Massachusetts Institute of Technology & Stanford University",
    category: "University Course Curricula",
    badge: "Complete University Courses",
    desc: "Open publication of virtually all MIT course content, syllabi, lecture notes, exam papers with solution rubrics, and video recitations spanning all engineering and science departments.",
    resourcesCount: "2,500+ Complete Courses",
    apiEndpoint: "https://ocw.mit.edu",
    features: ["Full Professor Lecture Transcripts", "Graded Problem Sets & Solutions", "Departmental Curriculum Roadmaps"],
    tags: ["MIT Courses", "Computer Science", "Electrical Engineering", "Quantum Physics"]
  }
];
