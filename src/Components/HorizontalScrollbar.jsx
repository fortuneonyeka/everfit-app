import { Box } from "@mui/material"
import React from 'react'
import BodyParts from "./BodyParts"

const HorizontalScrollbar = ({data, bodyPart, setBodyPart}) => {
  return (
    <div>
      {data.map((item,index) => (
        <Box 
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
        >
          <BodyParts item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
      ))}
    </div>
  )
}

export default HorizontalScrollbar