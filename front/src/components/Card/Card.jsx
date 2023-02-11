import React from "react";
import { Link } from "react-router-dom";
import { Rick } from "../../data";
import style from './Card.module.css';
import { add_favorite, delete_favorite } from "../../redux/actions";
import { connect } from 'react-redux';

export function Card(props) {

   const [isFav, setIsFav] = React.useState(false);

   function handleFavorite(){
      if(isFav === true){
         setIsFav(false)
         props.delete_favorite(props.id)
      } else {
         setIsFav(true)
         props.add_favorite(props)
      }
   }
   React.useEffect(() => {
      props.myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [props.myFavorites]);

   return (
      <div className={style.DivCard}>
         {isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)}
         <button className={style.ButtonClose} onClick={() => props.onClose(props.id)}>X</button>
         <img  src={props.image} alt="" />
         <Link to={`/detail/${props.id}`}>
         <h2 >Nombre:{props.name}</h2>
         </Link>
         <h2>Especie:    {props.species}</h2>
         <h2>Genero:   {props.gender}</h2>
      </div>
   );
}

export function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites,
   }
};

export function mapDispatchToProps(dispatch){
   return{
      add_favorite: function(personaje) {dispatch(add_favorite(personaje))},
      delete_favorite: function(id) {dispatch(delete_favorite(id))}
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);


