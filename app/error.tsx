'use client';
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert"
import {TriangleAlert} from "lucide-react";


export default function ErrorPage() {
    <Alert variant="destructive">
        <TriangleAlert className="h-4 w-4"/>
        <AlertTitle> Error</AlertTitle>
        <AlertDescription>
            Something went wrong. Please try again later.
        </AlertDescription>
    </Alert>
  ;
}