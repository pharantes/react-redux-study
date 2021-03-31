import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <h3>Select a song</h3>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {selectedSong.title}</p>
      <p>Duration: {selectedSong.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
