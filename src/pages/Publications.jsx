import Section from "../components/Section";

const publications = {
  peerReviewed: [
    {
      title: "Tree-Ring-Based Drought Reconstruction Reveals Increased Pre-Monsoon Droughts Over the Past Two Centuries in the Lug Valley Kullu, Northwest Himalayas",
      authors: "Lal, D., Pandey, P., Shekhar, M., Chand, P., Dhyani, R., Ahmed, I., … & Ranhotra, P.S.",
      journal: "International Journal of Climatology",
      year: 2025,
    },
    {
      title: "Monsoon dynamics and future projections in the Himalaya",
      authors: "Shekhar, M., Pandey, P., Shaktiman Singh, Sharma, A.",
      journal: "Dynamics of Atmospheres and Oceans",
      year: 2025,
    },
    {
      title: "Assessing the past and future dynamics of the Asian summer monsoon: Insights from palaeomonsoon synthesis and CMIP6 data",
      authors: "Shekhar, M., Sharma, A., Pandey, P., Sharma, A., & Dimri, A.P.",
      journal: "Global Environmental Change Advances",
      year: 2024,
    },
    {
      title: "Age-Girth Stand Structure of Himalayan Fir and Growth-NDVI Relationship in the Treeline Transects of Western Himalaya",
      authors: "Chinthala, B.D., Singh, A., Shekhar, M., Tomar, N., Phulara, M., Yadav, A., … & Pandey, P.",
      journal: "In Ecology of Himalayan Treeline Ecotone. Springer Nature",
      year: 2023,
    },
  ],
  underReview: [
    {
      title: "Tree-ring evidence marks 2022 as the driest spring season in the Western Himalayas in the last four centuries",
      authors: "Pandey P., Ashfaq M., Shekhar M., Singh B.B., Ranhotra P.S., Chand P., Bhattacharyya A.",
      journal: "Under Review",
    },
  ],
};

export default function Publications() {
  return (
    <Section title="Research Outputs & Contributions">
      {/* Peer-Reviewed Articles */}
      <h2 className="section-subheading">Peer-Reviewed Articles</h2>
      <div className="pub-list">
        {publications.peerReviewed.map((pub, idx) => (
          <div key={idx} className="pub-card hover-card">
            <p className="pub-title">{pub.title}</p>
            <p className="pub-authors">{pub.authors}</p>
            <p className="pub-journal">
              {pub.journal} {pub.year && `, ${pub.year}`}
            </p>
          </div>
        ))}
      </div>

      {/* Under Review */}
      <h2 className="section-subheading mt-8">Under Review</h2>
      <div className="pub-list">
        {publications.underReview.map((pub, idx) => (
          <div key={idx} className="pub-card hover-card">
            <p className="pub-title">{pub.title}</p>
            <p className="pub-authors">{pub.authors}</p>
            <p className="pub-journal">{pub.journal}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
