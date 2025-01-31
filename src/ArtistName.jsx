import PropTypes from "prop-types";

export const ArtistName = ({ artistName, artistUrl }) => {
  return (
    <a href={artistUrl} className="artist" alt="to artist on spotify" target="_blank" rel="noreferrer">{artistName}</a>
  )
};

ArtistName.propTypes = {
  artistName: PropTypes.string,
  artistUrl: PropTypes.string,
};
