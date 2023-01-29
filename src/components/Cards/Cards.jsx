import Card from '../Card/Card.jsx';
import style from './Cards.module.css';

export default function Cards(props) {
   const { characters } = props;
   return <div className={style.DivCards}>
      {characters.map(ele => (
         <Card
         key={ele.name}
         name={ele.name}
         species={ele.species}
         gender={ele.gender}
         image={ele.image}
         id={ele.id}
         onClose={props.onClose}
         />
      ))}
   </div>;
}
