import { useFetchArticles } from "../../hooks/useFetchArticles";
import ServiceSection from "../serviceSection/ServiceSection";

const ServicesMap = ({ limit = null }) => {
  const { articles, articleIsLoading, articleError } = useFetchArticles();

  const displayedArticles = limit ? articles.slice(0, limit) : articles;

  if (articleIsLoading) return <p>Loading services...</p>;
  if (articleError) return <p>Error loading services: {articleError}</p>;

  return (
    <section>
      {displayedArticles.length > 0 ? (
        displayedArticles.map((article) => (
          <ServiceSection
            key={article._id}
            title={article.title}
            description={article.description}
            list={article.list}
            image={article.image}
          />
        ))
      ) : (
        <p>No services available.</p>
      )}
    </section>
  );
};

export default ServicesMap;
