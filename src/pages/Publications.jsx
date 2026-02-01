import Section from "../components/Section";

const publications = {
  peerReviewed: [
    {
      title: "Tree-ring evidence marks 2022 as the driest spring season in the Western Himalayas in the last four centuries",
      authors: "Pandey P., Ashfaq M., Shekhar M., Singh B.B., Ranhotra P.S., Chand P., Bhattacharyya A.",
      journal: "Science Of The Total Environment ",
      year: 2026,
      url: "https://www.sciencedirect.com/science/article/abs/pii/S0048969725029572"
    },
    {
      title: "Forest-stand structure and treeline dynamics of Himalayan Fir over the last four centuries in Kashmir, western Himalaya",
      authors: "Jain S., Chinthala B.D., Ranhotra P.S., Pandey P., Shekhar M., Grießinger J., Joshi R., Hamid M., Dar F.A., Shafee F., Khuroo A.A., Singh C.P., Bajpai R., Bräuning A.",
      journal: "Dendrochronologia",
      year: 2025,
      url: "https://www.sciencedirect.com/science/article/abs/pii/S1125786525001560"
    },
    {
      title: "Tree-Ring-Based Drought Reconstruction Reveals Increased Pre-Monsoon Droughts Over the Past Two Centuries in the Lug Valley Kullu, Northwest Himalayas",
      authors: "Lal, D., Pandey, P., Shekhar, M., Chand, P., Dhyani, R., Ahmed, I., … & Ranhotra, P.S.",
      journal: "International Journal of Climatology",
      year: 2025,
      url: "https://rmets.onlinelibrary.wiley.com/doi/10.1002/joc.70104"
    },
    {
      title: "Monsoon dynamics and future projections in the Himalaya",
      authors: "Shekhar, M., Pandey, P., Shaktiman Singh, Sharma, A.",
      journal: "Dynamics of Atmospheres and Oceans",
      year: 2025,
      url: "https://www.sciencedirect.com/science/article/abs/pii/S0377026525000338"
    },
    {
      title: "Assessing the past and future dynamics of the Asian summer monsoon: Insights from palaeomonsoon synthesis and CMIP6 data",
      authors: "Shekhar, M., Sharma, A., Pandey, P., Sharma, A., & Dimri, A.P.",
      journal: "Global Environmental Change Advances",
      year: 2024,
      url: "https://www.sciencedirect.com/science/article/pii/S2950138523000049"
    },
    {
      title: "Age-Girth Stand Structure of Himalayan Fir and Growth-NDVI Relationship in the Treeline Transects of Western Himalaya",
      authors: "Chinthala, B.D., Singh, A., Shekhar, M., Tomar, N., Phulara, M., Yadav, A., … & Pandey, P.",
      journal: "In Ecology of Himalayan Treeline Ecotone. Springer Nature",
      year: 2023,
      url: "https://link.springer.com/chapter/10.1007/978-981-19-4476-5_19"
    },
  ],
  underReview: [
    {
      title: "Early Holocene latitudinal variations in Monsoon–Westerly dynamics from the Northwest Himalaya. Under review.",
      authors: "Nag, D., Pandey, P., Verma, S., et al. ",
      journal: "Under Review"
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
             {pub.url && (
        <a
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="pub-link"
        >
          View publication →
        </a>
      )}
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
