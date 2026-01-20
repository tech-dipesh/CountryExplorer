import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircleExclamation } from '@fortawesome/fontawesome-svg-core'
import {faCircleExclamation} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useRouteError } from 'react-router'

export default function Error() {
  const error=useRouteError()
  const {notFound, data, message, status, statusText}=error
  console.log(statusText);
  return (
    <>
    <h3>The Page your' lookiing for: {data}</h3>
    <h4>The Status is: {status}</h4>
    <h1>Ther'es not a page that you're looking for., {statusText}</h1>
      <FontAwesomeIcon icon={faCircleExclamation} color='red'/>
    </>
  )
}
