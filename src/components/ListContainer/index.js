import List from "../List";

const ListContainer = ({listType, listData = []}) => {
  return (
      <List listType={listType}>
        {
          listData.map((movie,index) => {
            return <li key={'objeto-'+index}>{movie.title}. - {movie.votes} Votes</li>
          })
        }
      </List>
  )
}

export default ListContainer
