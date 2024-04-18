import Image from "next/image"
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { ChevronRightIcon } from "@radix-ui/react-icons"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between mt-[80px] mb-[80px]">
      <section className="w-full sm:h-[400px]">
        <AspectRatio ratio={16 / 9} className="max-h-[400px]">
          <Image fill={true} src="/image/index_6.jpg" alt="Image" className="object-cover" />
        </AspectRatio>
      </section>
      <section className="container mx-auto py-16 px-14 text-center sm:text-left w-full">
        <h3 className="text-3xl font-bold mb-10">WE SPECIALIZE IN MOTOR SOLUTIONS</h3>
        <div className="mb-5 text-lg">Get the Motor Solution that Suits Your Needs Today.</div>
        <Button variant="default" className="transition duration-300 ease-in-out">
          Get Solution Today<ChevronRightIcon className="h-4 w-4 ml-2" />
        </Button>
      </section>
      <section className="container mx-auto pb-20 px-16">
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem className="bg-zinc-100 md:basis-full sm:basis-1/3 lg:basis-1/5 ml-2 flex justify-center items-center">
              <Image width={140} height={140} className="object-cover" src="/image/parts_1.png" alt="Image" />
            </CarouselItem>
            <CarouselItem className="bg-zinc-100 md:basis-1/3 lg:basis-1/5 ml-2 flex justify-center items-center">
              <Image width={140} height={140} className="object-cover" src="/image/parts_2.png" alt="Image" />
            </CarouselItem>
            <CarouselItem className="bg-zinc-100 md:basis-1/3 lg:basis-1/5 ml-2 flex justify-center items-center">
              <Image width={140} height={140} className="object-cover" src="/image/parts_3.png" alt="Image" />
            </CarouselItem>
            <CarouselItem className="bg-zinc-100 md:basis-1/3 lg:basis-1/5 ml-2 flex justify-center items-center">
              <Image width={140} height={140} className="object-cover" src="/image/parts_4.png" alt="Image" />
            </CarouselItem>
            <CarouselItem className="bg-zinc-100 md:basis-1/3 lg:basis-1/5 ml-2 flex justify-center items-center">
              <Image width={140} height={140} className="object-cover" src="/image/parts_5.png" alt="Image" />
            </CarouselItem>
            <CarouselItem className="bg-zinc-100 md:basis-1/3 lg:basis-1/5 ml-2 flex justify-center items-center">
              <Image width={140} height={140} className="object-cover" src="/image/parts_3.png" alt="Image" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="container mx-auto pb-9">
        <h3 className="text-3xl font-bold mb-12 text-center uppercase">Our solutions for business clients</h3>
        <ul className="flex flex-col sm:flex-row gap-12">
          <li className="basis-full sm:basis-1/3">
            <h5 className="text-xl font-bold mb-4">Mobility</h5>
            <p className="mb-3">Epoch brings together comprehensive expertise in vehicle technology with hardware, software, and services to offer complete mobility solutions.</p>
            <Link href="#" className="text-blue-800 font-bold hover:underline underline-offset-2">Discover the entire portfolio <ChevronRightIcon className="h-4 w-4 inline" /></Link>
          </li>
          <li className="basis-full sm:basis-1/3">
            <h5 className="text-xl font-bold mb-4">Industry and trades</h5>
            <p className="mb-3">Epoch offers innovative products and services for industry and trades.</p>
            <Link href="#" className="text-blue-800 font-bold hover:underline underline-offset-2">Discover the entire portfolio <ChevronRightIcon className="h-4 w-4 inline" /></Link>
          </li>
          <li className="basis-full sm:basis-1/3">
            <h5 className="text-xl font-bold mb-4">Market-specific solutions</h5>
            <p className="mb-3">Explore Epoch wide range of products and solutions for your market and industry.</p>
            <Link href="#" className="text-blue-800 font-bold hover:underline underline-offset-2">Discover the entire portfolio <ChevronRightIcon className="h-4 w-4 inline" /></Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
