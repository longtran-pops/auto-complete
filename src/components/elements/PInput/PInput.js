import React, {useCallback} from 'react'

import { PSpinner } from '../.'
import styles from './PInput.module.scss'

const getValue = (e) => (e.target || e.currentTarget || {}).value

const PInput = ({
  value,
  onChange,
  isLoading,
}) => {
  const handleChange = useCallback((e) => {
    onChange(getValue(e))
  }, [onChange])

  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        value={value}
        onChange={handleChange}
      />

      {isLoading && (
        <div className={styles.loadingSpinner}>
          <PSpinner />
        </div>
      )}
    </div>
  )
}

export default PInput
