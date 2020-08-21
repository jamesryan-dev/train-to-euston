import React, { useState, useEffect } from 'react';
import {BottomStickerComp, StickerComp} from './styled'

function BottomSticker () {
  const [showBottomSticker, setShowBottomSticker] = useState(false);

  const handleShowBottomSticker = () => {
    if (showBottomSticker) {
      setShowBottomSticker(false)
    } else {
      setShowBottomSticker(true)
    }
  }
  return (
    <BottomStickerComp>
      <StickerComp onClick={handleShowBottomSticker} show={showBottomSticker}>
        <div className='bottom-header'>
          <h3>Made by <span>namesjame.es</span></h3>
          <div>chevron</div>
          <h3>Add to homepage</h3>
        </div>
      </StickerComp>
    </BottomStickerComp>
  )
}

export default BottomSticker
