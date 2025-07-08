import { Carousel } from 'react-responsive-carousel';

function App() {
  const images = [
    {
      src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
      alt: "Hong Kong"
    },
    {
      src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp",
      alt: "Macao"
    },
    {
      src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp",
      alt: "Japan"
    },
    {
      src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp",
      alt: "Las Vegas"
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Travel Destinations</h2>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img.src} alt={img.alt} />
            <p className="legend">{img.alt}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
