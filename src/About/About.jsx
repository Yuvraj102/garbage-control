import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div class="responsive-container-block bigContainer">
        <div class="responsive-container-block Container bottomContainer">
          <div class="allText bottomText">
            <p class="text-blk headingText">About</p>
            <p class="text-blk subHeadingText">We build to your bespoke</p>
            <p class="text-blk description">
              By inviting people to participate in the drive, the Clean city
              driver has turned into a National Movement. A sense of
              responsibility has been evoked among the people through the Clean
              India Movement. With citizens now becoming active participants in
              cleanliness activities across the nation, the dream of a Clean
              India once seen by Mahatma Gandhi has begun to get a shape.
            </p>
            <a>
              <button class="explore">View More</button>
            </a>
          </div>
          <div class="videoContainer">
            <iframe
              allowfullscreen="allowfullscreen"
              class="mainVideo"
              controls="controls"
              src="https://www.youtube.com/embed/SRAR9SFthMQ"
            ></iframe>
            <img
              class="dotsImg image-block"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
