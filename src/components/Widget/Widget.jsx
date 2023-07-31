import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import './Widget.scss';
import axios from 'axios';

function Widget() {
  const [joke, setJoke] = useState(null);

  const fetchJoke = async () => {
    console.log('CLICK');
    try {
      const res = await axios.get('https://api.chucknorris.io/jokes/random');
      console.log(res);
      setJoke(res.data.value);
    } catch (error) {
      console.log(error);
      alert('Une erreur est survenue...');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchJoke();
    }, 2000);
  }, []);

  return (
    <article className="widget">
      {!joke ? <div>Loading...</div> : <p className="widget-content">{joke}</p>}
      <Button
        handleClick={fetchJoke}
        text={'Click for a joke'}
        backgroundColor="lightgray"
      />
    </article>
  );
}

export default Widget;
