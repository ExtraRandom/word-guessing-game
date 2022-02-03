type Props = {
  index: number
  size: number
  label: string
}

export const Progress = ({ index, size, label }: Props) => {
  var colour = ""
  if (label === "0"){
    colour = "key_absent"
  }
  else{
    colour = "key_correct"
  }

  var class_name = colour + " text-xs font-medium text-blue-100 text-center p-0.5 rounded-l-full rounded-r-full"

  return (
    <div className="flex justify-left m-1">
      <div className="items-center justify-center w-2">{index + 1}</div>
      <div className="rounded-full w-full ml-2">
        <div
          style={{ width: `${5 + size}%` }}
          className={class_name}
        >
          {label}
        </div>
      </div>
    </div>
  )
}
