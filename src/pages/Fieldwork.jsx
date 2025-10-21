import Section from "../components/Section";

const fieldworkData = [
  {
    title: "Lahaul & Spiti, Himachal Pradesh (2023)",
    description:
      "In one of the driest high-altitude regions of the Himalayas, I collected over 200 increment cores from Cedrus deodara and Pinus wallichiana between 2700–3900 meters above sea level. These samples are crucial for building multi-century records of pre-monsoon precipitation and identifying the sensitivity of Himalayan conifers to hydroclimatic extremes.",
    img: "./images/LS.JPG",
  },
  {
    title: "Kashmir Valley (2024)",
    description:
      "An extensive sampling campaign was carried out across four different sites, spanning almost the entire Jammu and Kashmir region. We collected more than 200 cores from Pinus wallichiana and Cedrus deodara, covering a wide altitudinal range from 1500 to 3500 meters above sea level. This dataset greatly strengthens the regional chronology network and provides the foundation to study how Western Disturbances shape tree growth and drought resilience across diverse ecological settings.",
    img: "./images/MRGN1.JPG",
  },
  {
    title: "Tungnath & Beyond",
    description:
      "Earlier field campaigns in Tungnath (2023) targeted treeline zones with Betula utilis and Abies pindrow, pushing the limits of where trees can survive. Such sites are especially sensitive to shifts in temperature and moisture, making them powerful indicators of climate change.",
    img: "./images/Chopta.JPG",
  },
];

export default function Fieldwork() {
  return (
    <Section
      title="Fieldwork"
      lead="Fieldwork lies at the heart of my research. The Western Himalayas, with their steep valleys, fragile ecosystems, and limited accessibility, demand patience and persistence. Each expedition involves trekking across high altitudes, navigating rugged terrains, and sampling centuries-old trees that silently record the history of climate variability. These journeys not only generate invaluable data but also provide a firsthand perspective on how climate change is reshaping mountain landscapes."
    >
      <div className="fieldwork-grid">
        {fieldworkData.map((fw, i) => (
          <div key={i} className="fieldwork-card">
            <img src={fw.img} alt={fw.title} className="fieldwork-img" />
            <h4 className="fieldwork-title">{fw.title}</h4>
            <p className="fieldwork-desc">{fw.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
