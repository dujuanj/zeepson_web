import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import c from './layout.module.scss'


function Section({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={c.section} ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(-80px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
        }}
      >
        {isInView}
        {children}
      </span>
    </section>
  );
}

function SectionLeft({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={c.section_left} ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-180px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
      }}
    >
      {children}
    </section>
  );
}

function SectionRight({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={c.section_right} ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(180px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
      }}
    >
      {children}
    </section>
  );
}

function SectionBottom({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={c.section_bottom} ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
      }}
    >
      {children}
    </section>
  );
}
function SectionScale({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={c.section_bottom} ref={ref}
      style={{
        transform: isInView ? "none" : "scale(0)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
      }}
    >
      {children}
    </section>
  );
}

function SlideInAnimation({ children, index }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const transitionDelay = isInView ? `${index * 0.1}s` : '0s';

  useEffect(() => {
  }, [isInView]);

  return (
    <section className={c.section_bottom} ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transitionDelay: transitionDelay,
        transition: `all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s `
      }}
    >
      {children}
    </section>
  );
}
export { Section, SectionLeft, SectionRight, SectionBottom, SlideInAnimation, SectionScale }