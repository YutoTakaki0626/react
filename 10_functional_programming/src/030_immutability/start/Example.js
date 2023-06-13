const num = { val: 2 }
const double = (num) => {
  num.val = num.val * 2;
  return num;
}

const newNum = double(num);
console.log('newNum', newNum, 'num', num)

const Example = () => {
  return (
    <>
      <h3>不変性（Immutability）</h3>
      <p>引数で渡ってきたオブジェクトを変更しない！</p>
    </>
  );
};

export default Example;
