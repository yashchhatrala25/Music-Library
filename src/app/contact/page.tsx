"use client";
import { Meteors } from "@/components/ui/meteors";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const page = () => {
  return (
    <div className="min-h-screen bg-neutral-900 py-12 pt-36">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
            Contact Us
          </h2>
          <p className="font-normal text-center md:text-lg text-neutral-300 max-w-lg mx-auto mb-6">
            We are here to help with any questions about out courses, programs,
            or events. Reach out and let us know how we can assist you in your
            musical journey.
          </p>
          <div className="mt-4 w-[90vw] md:w-[50vw]">
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="textarea">Your Message</Label>
              <Input
                className="pb-36 pt-5"
                id="textarea"
                placeholder="Your Message"
                type="text"
              />
            </LabelInputContainer>
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Send Message
              <BottomGradient />
            </button>
          </div>
        </div>
        <Meteors number={20} />
    </div>
  );
};

export default page;
