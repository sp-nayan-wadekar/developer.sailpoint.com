import {Card, CardContent} from '@site/src/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@site/src/components/ui/carousel';
import React, {useEffect} from 'react';

import type {CarouselApi} from '@site/src/components/ui/carousel';
import 'atropos/css';

export default function HomepageCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [mouseOver, setMouseOver] = React.useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    let interval = setInterval(() => {
      if (mouseOver) return;
      //   if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
      //     api.scrollTo(0);
      //   } else {
      api.scrollNext();
      //   }
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [mouseOver, api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{loop: true}}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      className="flex justify-center items-center rounded-xl px-6 py-24 h-[100px] overflow-hidden z-0">
      <CarouselContent>
        <CarouselItem>
          <div className="bg-background flex aspect-square items-center justify-center">
            <span className="text-4xl font-semibold">
              Join the discussion on our{' '}
              <a
                className="text-[#0188f7]"
                href="https://developer.sailpoint.com/discuss/">
                developer forum
              </a>
            </span>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="bg-background flex aspect-square items-center justify-center">
            <span className="text-4xl font-semibold text-center">
              Take a look at the workflows, tools, and connectors <br /> from
              the community in the{' '}
              <a className="text-[#0188f7]" href="/colab/">
                CoLab
              </a>
            </span>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}