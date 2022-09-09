const List = (props) => {
    const { dataNavbar } = props;
    return(
        <>
            {dataNavbar.list.map((data, index) => {
                return(
                    <li key={index}><a href={data.link}>{data.name}</a></li>
                )
            })}
        </>
    )
}

export default List;