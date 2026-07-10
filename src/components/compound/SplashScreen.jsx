import { useEffect, useState } from "react";
import { TreePine, Leaf, Trees } from "lucide-react";

const SplashScreen = ({ onFinish }) => {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        // Start fading out slightly before removing the component
        const fadeTimer = setTimeout(() => {
            setFade(true);
        }, 2200);

        const removeTimer = setTimeout(() => {
            onFinish();
        }, 2800);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, [onFinish]);

    return (
        <div className={`splash-screen ${fade ? "fade-out" : ""}`}>
            <div className="splash-content">
                <div className="icon-container">
                    <TreePine className="wood-icon bounce-1" size={48} />
                    <Trees className="wood-icon bounce-2" size={64} />
                    <Leaf className="wood-icon bounce-3" size={40} />
                </div>
                <h1 className="splash-text">Mywoods</h1>
                <p className="splash-subtext">Timber & Design</p>
                <div className="loading-bar-container">
                    <div className="loading-bar"></div>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
