"use client";

import { Navbar } from "@/components/Navbar";
import { ArrowUpRight } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-svh">
      <Navbar />
      <section className="container grid lg:grid-cols-2 place-items-start py-20 md:py-32 gap-10">
        <div className="text-start space-y-6">
          <main className="text-5xl md:text-6xl font-bold">
            <h1 className="inline">Contributors</h1>
          </main>

          <p className="text-lg text-muted-foreground">
            SEACrowd Catalogue is a part of{" "}
            <a className="underline" href="https://github.com/SEACrowd">
              SEACrowd initiative
            </a>
            . SEACrowd Catalogue functions as a front-end data catalogue listed
            in SEACrowd, so individuals can easily find Southeast Asia data
            for their research and projects.
          </p>

          <p className="text-lg text-muted-foreground">
            Big thanks to our wonderful contributors who have dedicated their time, energy, and effort to grow SEACrowd.
            None of this could have happened without them. 💕
            Special appreciation for <a className="underline" href="https://sonnylab.com">Sonny Lazuardi</a>, who has designed, developed, and maintained this beautiful catalogue.
          </p>

          <p className="text-lg text-muted-foreground">
            Check out our paper together{" "}
            <a
              href="https://arxiv.org/pdf/2406.10118"
              target="_blank"
              className="underline"
            >
              <b>"SEACrowd: A Multilingual Multimodal Data Hub and Benchmark Suite for Southeast Asian Languages"</b>
            </a>
            !
          </p>

          <p className="text-lg text-muted-foreground">
            Check out our amazing co-authors:
          </p>

          <div className="text-lg">
            <ul id="list" className="list-disc list-inside">
              <li>
              <a
                  href="https://holylovenia.github.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Holy</b> Lovenia{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://samuelcahyawijaya.github.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Samuel</b> Cahyawijaya{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
                  <b>Rahmad</b> Mahendra
              </li>
              <li>
              <a
                  href="https://sabilmakbar.github.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  Sal<b>sabil</b> Maulana Akbar{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://ljvmiranda921.github.io"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>L</b>ester <b>J</b>ames V. Miranda{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://yongzx.github.io"
                  target="_blank"
                  className="hover:underline"
              >
                  Zheng-Xin <b>Yong</b>{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
                  <b>Jen</b>nifer <b>San</b>toso
              </li>
              <li>
                  <b>Elyanah</b> Aco
              </li>
              <li>
              <a
                  href="https://akhdanfadh.github.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Akhdan</b> Fadhilah{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
                  <b>Joni</b>bek Mansurov
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-50">
          <div className="w-full relative">
            <img src="/seacrowd-catalogue/contributor.jpg" alt="contributor" />
          </div>
        </div>
      </section>
    </div>
  );
}
