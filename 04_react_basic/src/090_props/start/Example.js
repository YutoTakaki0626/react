import Child from "./components/Child";

const Example = () => {
  const hello = (arg) => `Hello ${arg}`;
  const o ={
    color: "red",
    num:123
  }
  return(
    <>
      {/* <Child color="red"/> */}
      <Child 
        // color="red"
        // num={123}
        {...o}
        fn={hello}
        bool
        obj={{ name:'Tom', age:18}}
      />   
    </>
  )
};

export default Example;
