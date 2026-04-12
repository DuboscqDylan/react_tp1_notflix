export const CardItem = ({ item }) => {
    return (
        <div>
            {Object.entries(item).map(([key, value]) => (
                <p key={key}>
                    {key}: {String(value)}
                </p>
            ))}
            <hr />
        </div>
    )
}