import React from "react";

function LeaderBoard() {
  return (
    <>
      <main id="Leader" class="w3-container w3-animate-opacity Page ">
        {/* <!-- Header content --> */}
        <header class="w3-container w3-margin-bottom w3-center Header">
          <div class="Header__content-box">
            <h1 class=" w3-text-white">Leader Board</h1>
            <p class="w3-text-white w3-small w3-margin">
              In order to entertain you, we would like to give you an experience
              of competition through our Leaders Board.
            </p>
          </div>
        </header>

        {/* <!-- Content section --> */}
        <section class="w3-container">
          <article class="w3-responsive">
            <table class="w3-table w3-bordered w3-centered w3-hoverable w3-dark-gray">
              <thead>
                <tr class="w3-deep-orange">
                  <th>RANK</th>
                  <th>PLAYER'S NICKNAME</th>
                  <th>TOTAL SCORE</th>
                </tr>
              </thead>
              <tr class="w3-hover-khaki">
                <td>1</td>
                <td>Hero 001</td>
                <td>9999</td>
              </tr>
              <tr class="w3-hover-light-green">
                <td>2</td>
                <td>Hero 002</td>
                <td>8888</td>
              </tr>
              <tr class="w3-hover-pale-red">
                <td>3</td>
                <td>Hero 003</td>
                <td>7777</td>
              </tr>
            </table>
          </article>
          <hr />
        </section>
      </main>
    </>
  );
}

export default LeaderBoard;
