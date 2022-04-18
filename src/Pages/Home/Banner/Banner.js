import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";
import banner3 from "../../../images/banner/banner3.jpg";
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>The “Back Side” of Haleakalā</h3>
            <p>
              Pack snacks and water before leaving Hāna to explore the
              “backside” around Maui past Kaupō. When you reach ‘Ulupalakua,
              duck into MauiWine. Sample a few local vintages, and toast your
              romance on the grounds of the old estate.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Honolua Bay</h3>
            <p>
              At MM 32, leave the highway to explore this jeweled bay. Linger a
              little on the forest path before snorkeling in the water or
              watching surfers if the waves are up.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Sailing to Lāna‘i</h3>
            <p>
              Cimb aboard Trilogy, our favorite sailing outfit, and chase the
              horizon to Lāna‘i. On the half-day excursion, the crew hands you
              hot cinnamon rolls and coffee as soon as you step on board, and
              after the 9-mile trip to Lāna‘i, you’ll snorkel in the island’s
              protected waters and land for a barbecue lunch.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
