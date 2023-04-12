import useCounter from '../hooks/use-counter';
import Card from './Card';

const ForwardCounter = () => {
  const counter = useCounter(true, 3);
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
