import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { CopyIcon, EyeIcon } from "lucide-react";

type Url = {
  id: string,
  shortcode: string,
  originUrl: string,
  visits: number
}

export default function UrlList() {
  const [urls, setUrls] = useState<Url[]>([])

  const fetchUrls = async ()=>{
    try {
      const response = await fetch('/api/urls');
      const data = await response.json();
      setUrls(data);
      
    } catch (error) {
      console.error('Error fetching urls', error);
      
    }
  }

  useEffect(()=>{
    fetchUrls();
  }, [])

  const shortenerUrl = (code:string)=>{
    return `${process.env.NEXT_PUBLIC_BASE_URL}/${code}`;
  }
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Recent Urls</h2>
      <ul className="space-y-2">
        {urls.map((url)=>(
          <li key={`/${url.shortcode}`} className="flex items-center gap-2 justify-between">
          <Link href={url.originUrl} className="text-blue-500" target="_blank">{shortenerUrl(url.shortcode)}</Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-muted">
              <CopyIcon className="w-4 h-4"/>
              <span className="sr-only">Copy URL</span>
            </Button>
            <span className="flex items-center gap-2">
              <EyeIcon className="w-4 h-4"/>
                {url.visits} views
            </span>

          </div>
        </li>
        ))}
      </ul>
    </div>
  );
}
