"use client";

import Image from "next/image";
import { useRef } from "react";

/* ---------------- DATA ---------------- */

const practiceArtifacts = [
  {
    title: "Instructional Coaching Snapshot",
    src: "/coaching.jpg", // <-- rename your uploaded image to this
    alt: "Instructional coaching data display",
    caption:
      "Short-cycle observation and data tracking used to analyze instructional moves, student engagement, and response accuracy. Separates teacher-initiated monitoring from student-initiated support to identify patterns in independence, feedback, and instructional timing.",
  },
  {
    title: "Reading Bootcamp Progress Tracker",
    src: "/tracker.jpg",
    alt: "Progress tracker",
    caption:
      "Students track benchmark performance over time, making growth visible and strengthening ownership.",
  },
  {
    title: "R.1.1 Benchmark Mini Task",
    src: "/work-sample-1.jpg",
    alt: "Mini task",
    caption:
      "Mini tasks target specific reading benchmarks through explicit modeling, guided practice, and independent application.",
  },
  {
    title: "Claim Evidence Explanation Writing Frame",
    src: "/work-sample-2.jpg",
    alt: "Writing frame",
    caption:
      "Writing frames help students move from short answers to clearer, evidence-based explanations.",
  },
  {
    title: "Annotated Student Work",
    src: "/Student-work.jpg",
    alt: "Student work",
    caption:
      "Students interact directly with text to identify evidence, paraphrase accurately, and justify their thinking.",
  },
];

/* ---------------- PAGE ---------------- */

export default function HomePage() {
  const audioRef = useRef(null);

  const handleAudioEnter = async () => {
    if (!audioRef.current) return;
    try {
      audioRef.current.currentTime = 0;
      await audioRef.current.play();
    } catch {}
  };

  const handleAudioLeave = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <audio ref={audioRef} src="/bag-of-chips.mp3" preload="auto" />

      {/* ---------------- HERO ---------------- */}

      <section className="bg-slate-950 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Literacy Educator • Instructional Leader
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Structured reading systems. Visible growth. Independent learners.
            </p>
          </div>

          <div className="relative h-[420px] w-full rounded-3xl overflow-hidden">
            <Image
              src="/stephen_scott_headshot.jpg"
              alt="Stephen Scott"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------------- INSTRUCTION IN PRACTICE ---------------- */}

      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-10">
            Instruction in Practice
          </h2>

          {/* GRID */}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {/* -------- TOP ROW (3 CARDS) -------- */}

            {practiceArtifacts.slice(0, 3).map((item) => (
              <div
                key={item.title}
                className="rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition"
              >
                <div className="relative h-[220px] w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-7">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}

            {/* -------- BOTTOM ROW (3 CARDS) -------- */}

            {practiceArtifacts.slice(3).map((item) => (
              <div
                key={item.title}
                className="rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition"
              >
                <div className="relative h-[220px] w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-7">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}

            {/* -------- BAG OF CHIPS (BOTTOM ROW LAST) -------- */}

            <a
              href="https://docs.google.com/document/d/1YM7dEmtcHnih-X_48h7QMoAOwf-oqmJP83aLeQGVy7o/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={handleAudioEnter}
              onMouseLeave={handleAudioLeave}
              className="rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition"
            >
              <div className="relative h-[220px] w-full">
                <Image
                  src="/bagofchipschallenge.jpeg"
                  alt="Bag of Chips"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <p className="text-sm uppercase text-emerald-600 font-semibold">
                  Free Idea
                </p>
                <h3 className="text-xl font-semibold mt-2">
                  Bag of Chips Challenge
                </h3>
                <p className="mt-3 text-slate-600 leading-7">
                  A classroom engagement hook built around routine, energy, and
                  motivation. Hover to hear the track.
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}
