"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { urlFormSchema, UrlFormSchemaType } from "@/utils/form";

interface ShortenFormProps {
  handleUrlShortened: () => void;
}

export default function ShortenForm({ handleUrlShortened }: ShortenFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<UrlFormSchemaType>({
    resolver: zodResolver(urlFormSchema),
  });

  const onSubmit = async (data: UrlFormSchemaType) => {
    try {
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data), // Send form data directly
      });
      if (!response.ok) {
        throw new Error("Error shortening URL");
      }
      await response.json();
      reset(); // Reset the form after successful submission
      toast.success("URL shortened successfully");
      handleUrlShortened();
    } catch (error) {
      console.error("Error shortening URL:", error);
      toast.error("Error shortening URL");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <div className="space-y-4">
        <Input
          {...register("url")}
          className="h-12"
          type="url"
          placeholder="Enter URL to shorten"
        />
        {errors.url && <p className="text-red-500">{errors.url.message}</p>} {/* Display validation error */}

        <Button className="w-full p-2" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Shortening URL..." : "Shorten URL"}
        </Button>
      </div>
    </form>
  );
}
