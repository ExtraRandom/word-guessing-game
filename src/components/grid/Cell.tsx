import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'

type Props = {
  value?: string
  status?: CharStatus
}

export const Cell = ({ value, status }: Props) => {
  const classes = classnames(
    'tile',
    {
      'guess_none': !status,
      'letter': value && !status,
      'guess_absent animation_flip': status === 'absent',
      'guess_correct animation_flip': status === 'correct',
      'guess_present animation_flip': status === 'present'
    }
  )

  return <div className={classes}>{value}</div>
}
