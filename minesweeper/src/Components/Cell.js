export default function Cell({
    row,
    col,
    value,
    isMine,
}) {

    return (
        <div className="container w-7 h-7 bg-gray-300 border border-1">
            <span>
                {value}
            </span>
        </div>
    )
}