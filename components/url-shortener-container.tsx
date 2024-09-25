'use client'

import { useState } from "react"
import ShortenForm  from "../components/shorten-form"
import UrlList  from "../components/url-list"
const UrlShortenerContainer = () => {
  const [refreshKey, setRefreshKey] = useState<number>(0);

  const handleRefreshKey = ()=>{
    setRefreshKey((prev)=> prev + 1)
  }


  return (
    <div>
      <ShortenForm handleUrlShortened={handleRefreshKey}/>
      <UrlList key={refreshKey}/>
    </div>
  )
}

export default UrlShortenerContainer