import React from "react";
import { connect } from "react-redux";

const SongList = () => {
  return <div>SongList</div>;
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
