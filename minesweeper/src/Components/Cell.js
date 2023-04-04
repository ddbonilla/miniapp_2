export default function Cell({
    row,
    col,
    value,
    isMine,
}) {

    return (
        <div className="container w-8 h-8 bg-gray-300 border border-1">
            <span>
                {isMine ? "bomb" : value}
            </span>
        </div>
    )
}