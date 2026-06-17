import { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from '@mui/material/Typography';
import type { Testimonial } from '../../content/site-content';
import { TestimonialCard } from '../testimonial-card/testimonial-card';
import {
  CarouselRoot,
  CarouselSlide,
  CarouselTrack,
  CarouselViewport,
  DotButton,
  DotsRow,
  NavButton,
} from './testimonials-carousel.styled';

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = testimonials.length;

  function goTo(index: number) {
    setActiveIndex((index + total) % total);
  }

  return (
    <CarouselRoot>
      <NavButton
        aria-label="Previous review"
        onClick={() => goTo(activeIndex - 1)}
        sx={{ left: { sm: -20, md: -28 } }}
      >
        <ChevronLeftIcon />
      </NavButton>

      <CarouselViewport>
        <CarouselTrack offset={activeIndex * 100}>
          {testimonials.map((item) => (
            <CarouselSlide key={item.author}>
              <TestimonialCard quote={item.quote} author={item.author} />
            </CarouselSlide>
          ))}
        </CarouselTrack>
      </CarouselViewport>

      <NavButton
        aria-label="Next review"
        onClick={() => goTo(activeIndex + 1)}
        sx={{ right: { sm: -20, md: -28 } }}
      >
        <ChevronRightIcon />
      </NavButton>

      <DotsRow>
        {testimonials.map((item, index) => (
          <DotButton
            key={item.author}
            type="button"
            isActive={index === activeIndex}
            aria-label={`Show review ${index + 1} of ${total}`}
            onClick={() => goTo(index)}
          />
        ))}
      </DotsRow>

      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: 'block', textAlign: 'center', mt: 1.5 }}
      >
        {activeIndex + 1} of {total} Google reviews
      </Typography>
    </CarouselRoot>
  );
}
