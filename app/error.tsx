'use client';
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert"
import {Rocket} from "lucide-react";


export default function ErrorPage() {
    <Alert>
        <Rocket className="h-4 w-4"/>
        <AlertTitle> Heads up!</AlertTitle>
        <AlertDescription>
            Something went wrong. Please try again later.
        </AlertDescription>
    </Alert>
  ;
}