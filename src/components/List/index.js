const List = ({listType='ol', children}) => {
  // const {listType='ol', children} = props;
  return listType === 'ol' ? <ol>{children}</ol> : <ul>{children}</ul>;
}

export default List;
