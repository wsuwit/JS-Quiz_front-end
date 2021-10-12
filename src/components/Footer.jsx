import React from "react";

function Footer() {
  return (
    <>
      <footer class="Footer w3-section">
        <div class="w3-container w3-text-white">
          © CC9THAILAND, Inc. 2021. <br />
          Part of Suwit personal project. <br />
          Hope you all enjoyed. <br />
          May the wisdom be with you.
        </div>

        <div class="w3-container w3-center">
          <div class="w3-text-white">Connect with us</div>
          <button href="">
            <img
              class="social-icon"
              src="https://i.pinimg.com/originals/76/40/a4/7640a47a8165bc33b08e948d903f5ef3.jpg"
              alt="facebook icon"
            />
          </button>
          <button href="">
            <img
              class="social-icon"
              src="https://i.pinimg.com/474x/1f/93/eb/1f93eb44da74549b3c725b9e348b8e61.jpg"
              alt="line icon"
            />
          </button>
          <button href="">
            <img
              class="social-icon"
              src="https://www.seekpng.com/png/detail/351-3516255_png-file-svg-twitter-icon-white-square.png"
              alt="twitter icon"
            />
          </button>
        </div>
      </footer>
    </>
  );
}

export default Footer;
