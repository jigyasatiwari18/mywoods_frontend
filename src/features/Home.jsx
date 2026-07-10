import { Link } from "react-router-dom";
import Card from "../components/molecule/card";
import CardData from "../sampleData/cardData";

const HomeDetail = () => {
    const featuredCards = CardData.slice(0, 4);

    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <span className="hero-tag">Woodland Crafted</span>
                    <h1>Timber style built for modern spaces.</h1>
                    <p>
                        Discover rich wood tones, textured finishes, and premium selections
                        designed to bring warmth, elegance, and sustainable charm to every room.
                    </p>
                    <div className="hero-actions">
                        <Link to="/woods" className="btn btn-primary">
                            Explore Woods
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className="hero-visual">
                    <img
                        src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900"
                        alt="Wood texture detail"
                    />
                </div>
            </section>

            <section className="featured">
                <div className="section-heading">
                    <p>Signature Collection</p>
                    <h2>Curated wood species</h2>
                </div>
                <div className="cardsClass">
                    {featuredCards.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default HomeDetail;
