/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useSearchParams } from 'react-router-dom'
import Select from './Select'

export default function SortBy({ options }) {
  const [seachParams, setSeachParams] = useSearchParams()
  const sortBy = seachParams.get('sortBy') || ''

  const handleChange = (e) => {
    seachParams.set('sortBy', e.target.value)
    setSeachParams(seachParams)
  }

  return (
    <Select
      options={options}
      value={sortBy}
      type="white"
      onChange={handleChange}
    />
  )
}
