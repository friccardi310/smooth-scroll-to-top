import SmoothScrollToTop from "smooth-scroll-to-top";
import React from "react";

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>The Evolution of Modern Technology</h1>
      <p><strong>Published on:</strong> March 21, 2025</p>
      <p>Technology has drastically transformed the way we live, work, and interact. From the early days of the internet to the emergence of artificial intelligence, the pace of innovation has never been faster. In this article, we explore the key milestones in technological evolution and what the future holds.</p>

      <img src="/images/image1.jpg" alt="Technology Evolution" />

      <h2>The Internet Revolution</h2>
      <p>The 1990s saw the rapid adoption of the internet, changing the way people accessed information. Websites became the new storefronts, and email revolutionized communication. The emergence of search engines like Google in the early 2000s further enhanced our ability to navigate the digital world.</p>

      <h2>Rise of Mobile Technology</h2>
      <p>With the introduction of smartphones, connectivity reached new heights. Apple’s iPhone and Android devices redefined user experience, bringing the power of computing to our fingertips. Mobile applications transformed businesses, enabling seamless communication, entertainment, and commerce.</p>

      <h2>Artificial Intelligence and Automation</h2>
      <p>Today, AI is integrated into various industries, from healthcare to finance. Machine learning algorithms power recommendation engines, chatbots, and autonomous vehicles. As AI continues to evolve, its ethical implications and impact on jobs remain key discussion points.</p>

      <img src="/images/image2.jpg" alt="Artificial Intelligence" />

      <h2>The Future of Technology</h2>
      <p>Looking ahead, we anticipate breakthroughs in quantum computing, biotechnology, and space exploration. With advancements in renewable energy and sustainable tech, the future promises a balance between innovation and environmental responsibility.</p>

      <p>As we embrace these changes, staying informed and adapting to new technologies will be essential. The digital age is only just beginning, and the possibilities are limitless.</p>

      <SmoothScrollToTop
        bgColor="#000"
        color="white"
        width="50px"
        height="50px"
        position="left"
        visibilityOffset={300}
        customStyle="border-radius: 50%; box-shadow: 2px 2px 5px rgba(0,0,0,0.3); right: 30px;"
        customIcon="▲"
      />

    </div>
  );
}

export default App;
