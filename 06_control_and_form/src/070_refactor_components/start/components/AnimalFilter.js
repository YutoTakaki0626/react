const AnimalFilter = ({ filterState}) => {
  const [filteVal, setFilteVal] = filterState;
  return (<input
  type="text"
  value={filteVal}
  onChange={(e) => setFilteVal(e.target.value)}
/>);
}

export default AnimalFilter;