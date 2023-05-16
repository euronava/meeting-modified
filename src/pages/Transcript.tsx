import React, { useState } from "react";

export const Transcript = () => {
  const rows = [
    {
      checked: false,
      name: "Test 1",
      date: "Wed 05 th 9:14pm",
      participants: "Juan Miguel, Jose Antonio",
    },
    {
      checked: false,
      name: "Test 2",
      date: "Thu 04 th 11:23am",
      participants: "Juan Miguel, Jose Antonio, Rodrigo Borgia, Tom Hanks",
    },
  ];

  const [transcriptData, setTranscriptData] = useState(rows);
  const [viewMode, setViewMode] = useState(false);

  const cards = transcriptData.map(
    ({ checked, name, date, participants }, index) => {
      return (
        <div className="card">
            <div className="cardContent">
            </div>
          <span className="cardName">{name}</span>
        </div>
      );
    }
  );

  const columns = transcriptData.map(
    ({ checked, name, date, participants }, index) => {
      return (
        <tr className="row">
          <td className="tableCheckbox">
            <input type="checkbox" className="checkbox" />
          </td>
          <td className="tableSection">{name}</td>
          <td className="tableSection">{date}</td>
          <td className="tableSection">{participants}</td>
          <td className="tableSection options">
            <i className="fa fa-arrow-down icon" />
            <i className="fa fa-share-from-square icon" />
          </td>
        </tr>
      );
    }
  );

  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <div className="header">
        <p className="title">Transcripts</p>
        <div className="search">
          <div className="searchArea">
            <input placeholder={"Find"} className="searchInput" />
            <i className="fa fa-magnifying-glass icon" />
          </div>
          <button className="searchButton">Search</button>
        </div>
      </div>
      <div>
        <div className="upperSide">
          <div className="rightPanel">
            <span>April</span>
            <i className="fa fa-chevron-down"></i>
          </div>
          <div className="leftPanel">
            <i className="fa fa-bars icon"></i>
            <i
              className="fa fa-border-all icon"
              onClick={() => setViewMode(!viewMode)}
            ></i>
            <i className="fa fa-trash icon"></i>
          </div>
        </div>
        {viewMode ? (
          <div className="cardContainer">{cards}</div>
        ) : (
          <table className="table">
            <tr className="row">
              <th className="tableCheckbox">
                <input type="checkbox" className="checkbox" />
              </th>
              <th className="tableSection">
                Meeting Name <i className="fa fa-arrow-up"></i>
              </th>
              <th className="tableSection">
                Date and Time <i className="fa fa-arrow-up"></i>
              </th>
              <th className="tableSection">Participants</th>
              <th></th>
            </tr>
            <tbody>{columns}</tbody>
          </table>
        )}
      </div>
    </div>
  );
};
