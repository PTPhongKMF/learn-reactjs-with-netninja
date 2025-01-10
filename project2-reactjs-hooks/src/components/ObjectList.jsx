const ObjectList = (props) => {
    const objects = props.objects;

    return ( 
        <div className="object-list">
                { objects.map((object) =>  (
                    <div className="object-preview" key={object.id}>
                        <h3>{ object.name }</h3>
                        <p>Data: { object.data?.color || "No color" }, { object.data?.price || "No price" }</p>   
                    </div>
                )) }
        </div>
     );
}
 
export default ObjectList;