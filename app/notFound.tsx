import {TriangleAlert} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert"


export default function ErrorPage() {
    <Alert variant="destructive">
        <TriangleAlert className="h-4 w-4"/>
        <AlertTitle> 404 Error</AlertTitle>
        <AlertDescription>
            Oops! Page Not Found.
        </AlertDescription>
    </Alert>
  ;
}