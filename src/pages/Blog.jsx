import { useState, useEffect } from "react";
import Section from "../components/Section";

const blogPosts = [
  {
    title: "The Story in Tree Rings",
    subtitle:
      "How centuries-old Himalayan trees reveal past droughts and climate extremes.",
    content:
      "Tree-ring analysis allows reconstruction of centuries of hydroclimate variability. By studying Cedrus deodara and Pinus wallichiana, we uncover past droughts, extremes, and climate patterns, helping us understand present and future Himalayan water security.",
    img: "./images/icons/bcd.JPG",
  },
  {
    title: "Western Disturbances Explained",
    subtitle:
      "Why winter storms from the Mediterranean matter for India’s water security.",
    content:
      "Western Disturbances bring winter rainfall and snow to the Himalayas. Understanding their dynamics helps predict impacts on agriculture, glaciers, and river flows in northern India.",
    img: "./images/icons/hs.jpg",
  },
  {
    title: "2022: Most severe Drought in last 4 Centuries",
    subtitle: "What recent extremes tell us about the future.",
    content:
      "The spring of 2022 marked the driest 400-year period in Himalayan history. Tree-ring chronologies reveal the severity and frequency of past droughts, emphasizing the need for climate resilience strategies.",
    img: "./images/FMAM.png",
  },
  {
    title: "Climate Futures",
    subtitle:
      "Understanding subseasonal-to-seasonal forecasts, teleconnections, and Himalayan resilience.",
    content:
      "By combining tree-ring reconstructions with CMIP5/6 and CORDEX climate models, we explore how teleconnections and subseasonal forecasts can inform future water security and climate resilience strategies.",
    img: "./images/icons/RCP8.5.png",
  },
];

export default function Blog() {
  const [activeBlog, setActiveBlog] = useState(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveBlog(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Section
      title="Exploring Climate, Science, and Society"
      lead="This section hosts my writings on the Himalayan climate and beyond. The blog bridges academic research and public understanding, translating complex scientific insights into accessible stories."
    >
      <h2 className="section-subheading mt-6">Planned Blog Themes</h2>
      <div className="blog-grid">
        {blogPosts.map((post, i) => (
          <div key={i} className="blog-card">
            <h4 className="blog-title">{post.title}</h4>
            <p className="blog-subtitle">{post.subtitle}</p>
            <button
              className="read-more-btn"
              onClick={() => setActiveBlog(post)}
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeBlog && (
        <div
          className="modal-overlay"
          onClick={() => setActiveBlog(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActiveBlog(null)}
            >
              ✕
            </button>
            <h3>{activeBlog.title}</h3>
            <div className="modal-body">
              <img
                src={activeBlog.img}
                alt={activeBlog.title}
                className="modal-img"
              />
              <p>{activeBlog.content}</p>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
