import axios from "../config/axios";
import React, { useEffect, useState } from "react";

function LeaderBoard() {
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    axios
      .get(`/user`)
      .then((res) => {
        console.log("@resUser:", res.data.result);
        setPlayerData(
          res.data.result.sort((a, b) => b.score - a.score).slice(0, 10)
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main id="Leader" className="w3-container w3-animate-opacity Page ">
        {/* <!-- Header content --> */}
        <header className="w3-container w3-margin-bottom w3-center Header">
          <div className="Header__content-box">
            <h1 className=" w3-text-white">Leader Board</h1>
            <p className="w3-text-white w3-small w3-margin">
              In order to entertain you, we would like to give you an experience
              of competition through our Leaders Board.
            </p>
          </div>
        </header>

        {/* <!-- Content section --> */}
        <section className="w3-container">
          <article className="w3-responsive">
            <table className="w3-table w3-bordered w3-centered w3-hoverable w3-dark-gray">
              <thead>
                <tr className="w3-deep-orange">
                  <th>RANK</th>
                  <th>PLAYER'S NICKNAME</th>
                  <th>TOTAL SCORE</th>
                </tr>
              </thead>
              <tbody>
                {playerData?.map((elem, idx) => (
                  <tr
                    key={idx}
                    className={
                      idx === 0
                        ? `w3-hover-khaki`
                        : idx === 1
                        ? `w3-hover-light-green`
                        : idx === 2
                        ? `w3-hover-pale-red`
                        : ""
                    }
                  >
                    <td>{idx + 1}</td>
                    <td>{elem.nickname}</td>
                    <td>{elem.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
          <hr />
        </section>
      </main>
    </>
  );
}

export default LeaderBoard;
