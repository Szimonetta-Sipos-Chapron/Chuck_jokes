import { useEffect } from 'react';
import Button from '../Button/Button';
import './Widget.scss';
import { changeJoke } from '../store/actions/jokeAction';
import { useDispatch, useSelector } from 'react-redux';

function Widget() {
  const joke = useSelector((state) => state.joke.value)

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(changeJoke());
    }, 2000);
  }, []);

  return (
    <article className="widget">
      {!joke ? <div>Loading...</div> : <p className="widget-content">{joke}</p>}
      <Button
        handleClick={() => dispatch(changeJoke())}
        text={'New joke'}
        backgroundColor="lightgray"
      />
    </article>
  );
}

export default Widget;
