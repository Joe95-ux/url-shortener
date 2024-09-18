"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

export default function ShortenForm() {
  const [url, setUrl] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="space-y-4">
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="h-12"
          type="url"
          placeholder="Enter URL to shorten"
          required
        />
        <Button className="w-full p-2" type="submit">
          Shorten Url
        </Button>
      </div>
    </form>
  );
}
