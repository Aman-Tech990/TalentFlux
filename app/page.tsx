import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-28 max-w-4xl text-center">
          <div>
            <h1 className="text-black mb-6 text-5xl font-bold">A better way to track your job application</h1>
            <p className="text-muted-foreground mb-10 text-xl">
              Capture, organize, and manage your job search in one place.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Button className="cursor-pointer h-12 px-8 font-medium"
                size="lg">
                Start for free <ArrowRightIcon />
              </Button>
              <p className="text-sm text-muted-foreground">Free forever, No credit card required.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
