type Props ={
    param: string
}

export default function GetDate({ param }: Props) {
    const months: string[] = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    const getDate = new Date(param);
    const date = getDate.getDate()
    const month = months[getDate.getMonth()];
    const year = getDate.getFullYear();
    const time = (
        <span className="text-xs italic text-slate-500">
            {`${date}, ${month}, ${year}.`}
        </span>
    )

    return time
}
