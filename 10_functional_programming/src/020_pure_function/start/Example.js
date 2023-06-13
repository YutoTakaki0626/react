const val1 = 3, val2 = 4;

const add = (val1, val2) => {
  return val1 + val2;
}

const Example = () => {
  return (
    <>
      <h3>純粋関数:{add(val1, val2)}</h3>
    </>
  );
};

export default Example;
