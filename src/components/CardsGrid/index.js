import CardItem from "../CardItem";

const CardsGrid = props => {
  const {data} = props;
  return (
      <div>
        {data.map((movie, index) => <CardItem key={index+1} movie={movie}/>)}
      </div>
  );
}

export default CardsGrid;
