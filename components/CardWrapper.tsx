
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import clsx from "clsx";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel?: string;
  icon?: any;
  content?: string;
  color?: string;
  showfooter?: boolean;
  hovercolor?: string
}

export const CardWrapper = ({
  children,
  headerLabel,
  icon: Icon,
  content: description,
  color,
  showfooter,
  hovercolor
}: CardWrapperProps) => {
  
  return (
    <Card className="overflow-hidden w-full shadow-md relative  md:w-64 lg:w-96 z-10 h-[370px] lg:h-[300px]">
      {/* <CardHeader>
        <div className="flex items-center">
           <Icon className={clsx(
            " text-3xl mr-4 rounded text-light-1 p-1",
            !!color  ? `${color}` : ""
           )} size={40}/>
          <h1 className="font-bold text-lg leading-8 tracking-tight" aria-label={headerLabel}>{headerLabel}</h1>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader> */}
      <CardContent>{children}</CardContent>
      <CardFooter>
        {showfooter && (
          <>
            <Button className={`ml-auto ${color} ${hovercolor}`}>Get in touch</Button>
          </>
        )}
      </CardFooter>
      {/* <CardFooter>
        {showfooter && (
          <>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </>
        )}
      </CardFooter> */}
    </Card>
  );
};
