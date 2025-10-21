import { useState } from "react";
import Section from "../components/Section";
import { Zap, CloudSnow, Activity, Globe, LineChart, LineSquiggleIcon } from "lucide-react";

export default function Research() {
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [activeCardList, setActiveCardList] = useState([]);

  const researchThemes = [
    {
      title: "Tree-Ring Reconstructions",
      text: "Developing multi-century chronologies of Cedrus deodara and Pinus wallichiana to reconstruct pre-monsoon precipitation and identify drought extremes.",
      details:
        "Tree-ring reconstructions provide long-term hydroclimate records, allowing us to identify historical droughts and pluvial periods, and analyze their impact on Himalayan ecosystems.",
      img: "./images/icons/tr.jpg",
      icon: <Zap size={22} />,
    },
    {
      title: "Western Disturbances & Snow–Rain Variability",
      text: "Investigating how winter westerlies shape the hydrological cycle, with implications for agriculture, glaciers, and river flows.",
      details:
        "Western Disturbances drive winter precipitation and snowpack formation. Understanding their variability is key for flood risk management and glacier health.",
      img: "./images/icons/hs.jpg",
      icon: <CloudSnow size={22} />,
    },
    {
      title: "Hydroclimate Extremes",
      text: "Detecting multidecadal droughts and pluvial phases, including the finding that 2000–2022 was the driest two-decade span in the past four centuries.",
      details:
        "Using long-term reconstructions, we identify extreme events that affect agriculture, river flows, and water security, providing insights into potential future risks.",
      img: "./images/icons/dr.jpg",
      icon: <Activity size={22} />,
    },
    {
      title: "Teleconnections & Nonstationarity",
      text: "Assessing how ENSO, IOD, AMO, and NAO influence Himalayan precipitation and why these relationships vary over time.",
      details:
        "Large-scale teleconnections influence regional rainfall, but their impacts are nonstationary, requiring advanced statistical and modeling approaches for prediction.",
      img: "./images/icons/tele.png",
      icon: <Globe size={22} />,
    },
    {
      title: "Climate Modeling & S2S Prediction",
      text: "Working with CMIP5/6 and CORDEX ensembles to evaluate how well models capture Himalayan hydroclimate and exploring subseasonal-to-seasonal forecasting as a “big data” problem.",
      details:
        "We combine climate model outputs with observational and proxy data to assess model skill and explore subseasonal-to-seasonal forecasts for water resource planning.",
      img: "./images/icons/RCP8.5.png",
      icon: <LineSquiggleIcon size={22} />,
    },
  ];

  const recentFindings = [
    {
      title: "Tree-Ring Evidence",
      text: "Tree-ring evidence identifies 2022 as the driest spring season in 400 years.",
      details:
        "By analyzing Cedrus deodara and Pinus wallichiana chronologies, we reconstructed centuries of hydroclimate variability. The year 2022 stands out as an extreme drought event, unprecedented in the last 400 years of Himalayan history.",
      img: "./images/TRE.png",
      icon: <Zap size={22} />,
    },
    {
      title: "Historical Droughts",
      text: "Long-term reconstructions show repeated 18th–19th century droughts, echoing risks still relevant today.",
      details:
        "Extended dry phases in the 1700s and 1800s caused agricultural collapses and societal stress across South Asia. These historical analogues highlight the continued vulnerability of the region to drought risk.",
      img: "./images/FMAM.png",
      icon: <Activity size={22} />,
    },
    {
      title: "Western Disturbances",
      text: "Western Disturbances emerge as a dominant driver of pre-monsoon precipitation.",
      details:
        "Winter westerlies play a crucial role in Himalayan snowpack and spring rainfall. Their variability has direct consequences for agriculture, river flows, and glacier health.",
      img: "./images/icons/wd.jpg",
      icon: <CloudSnow size={22} />,
    },
    {
      title: "Teleconnections & Predictability",
      text: "Nonstationary ENSO–precipitation links complicate predictability, requiring multi-model and proxy integration.",
      details:
        "ENSO, IOD, and NAO influence Himalayan precipitation, but their relationships vary over centuries. This nonstationarity challenges seasonal forecasting and demands integration of multiple proxies and models.",
      img: "./images/icons/SST.png",
      icon: <LineChart size={22} />,
    },
  ];

  const handleCardClick = (index, list) => {
    setActiveCardIndex(index);
    setActiveCardList(list);
  };

  const cardsToUse =
    activeCardList === "themes" ? researchThemes : recentFindings;

  return (
    <Section lead="The Himalayas are among the most climate-sensitive regions of the world, yet instrumental records here are short and sparse. My research integrates dendroclimatology, atmospheric circulation studies, and climate modeling to provide long-term perspectives on hydroclimate variability.">
      {/* Key Research Themes */}
      <h2 className="research-subheading">Key Research Themes</h2>
      <div className="cards-grid">
        {researchThemes.map((card, i) => (
          <div
            key={i}
            className="card hover-card"
            onClick={() => handleCardClick(i, "themes")}
          >
            <div className="card-header">{card.icon}</div>
            <h4 className="card-title">{card.title}</h4>
            <p className="card-text">{card.text}</p>
          </div>
        ))}
      </div>

      {/* Recent Findings */}
      <h2 className="research-subheading mt-12">Recent Findings</h2>
      <div className="cards-grid">
        {recentFindings.map((card, i) => (
          <div
            key={i}
            className="card hover-card"
            onClick={() => handleCardClick(i, "findings")}
          >
            <div className="card-header">{card.icon}</div>
            <h4 className="card-title">{card.title}</h4>
            <p className="card-text">{card.text}</p>
          </div>
        ))}
      </div>

      <p style={{ marginTop: '20px', lineHeight: 1.7, color: 'var(--muted)' }}>
              My approach builds on pioneering reconstructions from the region but extends them through new sampling networks and advanced statistical methods, including machine learning, Bayesian, and nonlinear reconstruction techniques, combined with coupled climate model evaluation. This integrated framework helps reveal not only what happened in the past but also what may lie ahead for Himalayan water security.
            </p>

      {/* Modal */}
      {activeCardIndex !== null && (
        <div
          className="modal-overlay fade-in"
          onClick={() => setActiveCardIndex(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setActiveCardIndex(null)}
            >
              ✕
            </button>
            <h3>{cardsToUse[activeCardIndex].title}</h3>
            <div className="modal-body">
              <img
                src={cardsToUse[activeCardIndex].img}
                alt={cardsToUse[activeCardIndex].title}
                className="modal-img"
              />
              <p>{cardsToUse[activeCardIndex].details}</p>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
