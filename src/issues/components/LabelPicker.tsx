import { FC } from 'react'
import { useLabels } from "../hooks/useLabels"
import LoadingIcon from "../../shared/components/LoadingIcon"
interface Props {
  selectedLabel: string[];
  onChange: (labelName: string) => void;
}
export const LabelPicker: FC<Props> = ({ selectedLabel, onChange }) => {
  const labelsQuery = useLabels()
  if (labelsQuery.isLoading)
    return <LoadingIcon />
  return (
    <div>
      {labelsQuery.data?.map(label => (
        <span
          className={`${selectedLabel.includes(label.name) ? 'label-active' : ''} badge rounded-pill m-1 label-picker `}
          style={{ border: `1px solid #${label.color}`, color: `${label.color}` }}
          key={label.id}
          onClick={() => onChange(label.name)}
        >
          {label.name}
        </span>

      ))}

    </div>
  )
}
