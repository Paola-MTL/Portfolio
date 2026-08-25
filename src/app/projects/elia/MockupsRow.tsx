"use client";

import { motion } from "framer-motion";

export default function MockupsRow({
  images,
  containerClassName,
  itemClassName,
  imgClassName,
}: {
  images: string[];
  containerClassName: string;
  itemClassName: string;
  imgClassName: string;
}) {
  return (
    <div className={containerClassName}>
      {images.map((src, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            delay: idx * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={itemClassName}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className={imgClassName} src={src} />
        </motion.div>
      ))}
    </div>
  );
}
