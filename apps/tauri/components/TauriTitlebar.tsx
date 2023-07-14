import { appWindow } from '@tauri-apps/api/window'
import Image from 'next/image'

const TauriTitlebar = () => {
  return (
    <div data-tauri-drag-region className="titlebar">
      <div className="titlebar-nav">
        <div className="titlebar-button" id="titlebar-back">
          <Image src="https://api.iconify.design/mdi:arrow-left.svg" alt="back" />
        </div>
        <div className="titlebar-button" id="titlebar-forward">
          <Image src="https://api.iconify.design/mdi:arrow-right.svg" alt="forward" />
        </div>
      </div>
      <div className="titlebar-button" id="titlebar-minimize" onClick={() => appWindow.minimize()}>
        <Image src="https://api.iconify.design/mdi:window-minimize.svg" alt="minimize" />
      </div>
      <div
        className="titlebar-button"
        id="titlebar-maximize"
        onClick={() => appWindow.toggleMaximize()}
      >
        <Image src="https://api.iconify.design/mdi:window-maximize.svg" alt="maximize" />
      </div>
      <div className="titlebar-button" id="titlebar-close" onClick={() => appWindow.close()}>
        <Image src="https://api.iconify.design/mdi:close.svg" alt="close" />
      </div>
    </div>
  )
}

export default TauriTitlebar
