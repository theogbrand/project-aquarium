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
            Special appreciation for <a className="underline" href="https://sonnylab.com"><b>Sonny Lazuardi</b>{" "}<ArrowUpRight size={20} className="inline" /></a>, who has designed, developed, and maintained this beautiful catalogue.
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
              <li>
              <a
                  href="http://fajrikoto.com/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Fajri</b> Koto{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://www.josephimperial.com/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Joseph</b> Marvin Imperial{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://ruochenzhang.com"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Ruochen</b> Zhang{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://gentawinata.com/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Genta</b> Indra Winata{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://onnokampman.github.io"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Onno</b> P. Kampman{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
                  <b>Joel</b> Ruben Antony Moniz
              </li>
              <li>
              <a
                  href="https://muhammadravi251001.github.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  Muhammad <b>Ravi</b> Shulthan Habibi{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
                  Frederikus <b>Hudi</b>
              </li>
              <li>
              <a
                  href="https://sedrickkeh.github.io"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Sedrick</b> Keh{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://afaji.github.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  Alham Fikri <b>Aji</b>{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
                  <b>Railey</b> Montalan
              </li>
              <li>
              <a
                  href="https://mrpeerat.github.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Peerat</b> Limkonchotiwat{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
                  <b>R</b>yan <b>I</b>gnatius
              </li>
              <li>
                  <b>Joanito</b> Agili Lopo
              </li>
              <li>
                  <b>William</b> Nixon
              </li>
              <li>
              <a
                  href="https://tellarin.com/borje/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Börje</b> F. Karlsson{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://jamesjaya.com"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>James</b> Jaya{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="rayendito.github.io"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Ryandito</b> Diandaru{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="gyyz.github.io"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Yuze</b> Gao{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
                  <b>William</b> Tjhi
              </li>
              <li>
              <a
                  href="https://patrickamadeus.github.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Patrick</b> Amadeus{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://binwang28.github.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Bin</b> Wang{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://blaisecruz.com"
                  target="_blank"
                  className="hover:underline"
              >
                  Jan Christian <b>Blaise</b> Cruz{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://chenxwh.github.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Chenxi</b> Whitehouse{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
                  <b>Ivan</b> Halim Parmonangan
              </li>
              <li>
              <a
                  href="https://khelli07.vercel.app/"
                  target="_blank"
                  className="hover:underline"
              >
                  Maria <b>Khelli</b>{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://www.ruder.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Sebastian</b> Ruder{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://sites.coecis.cornell.edu/wenyuzhang/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Wenyu</b> Zhang{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://luckysusanto.github.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Lucky</b> Susanto{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://reynardryanda.github.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Reynard</b> Adha Ryanda{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://sonnylab.com"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Sonny</b> Lazuardi Hermawan{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://danjohnvelasco.github.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Dan</b> John Velasco{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://dehanalkautsar.github.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  Muhammad <b>Dehan</b> Al Kautsar{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://willyfh.github.io"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Willy</b> Fitra Hendria{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://machinetranslation.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Yasmin</b> Moslem{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://noahrflynn.com/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Noah</b> Flynn{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://faridlazuarda.github.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  Muhammad <b>Farid</b> Adilazuarda{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://alex-haochenli.github.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Haochen</b> Li{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://github.com/Enliven26"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Johanes</b> Lee{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
                  R. <b>Damanhuri</b>
              </li>
              <li>
              <a
                  href="https://ssun32.github.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Shuo</b> Sun{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://mrqorib.github.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  Muhammad Reza <b>Qorib</b>{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
                  <b>Amir</b>bek Djanibekov
              </li>
              <li>
                  <b>Wei Qi</b> Leong
              </li>
              <li>
              <a
                  href="dovanquyet.github.io"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Quyet</b> V. Do{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://muennighoff.github.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Niklas</b> Muennighoff{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://tanradap.github.io"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Tanrada</b> Pansuwan{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://ilhamfp.github.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  <b>Ilham</b> Firdausi Putra{" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
              <a
                  href="https://yana-xuyan.github.io/"
                  target="_blank"
                  className="hover:underline"
              >
                  Yan Xu (<b>Yana</b>){" "}
                  <ArrowUpRight size={20} className="inline" />
              </a>
              </li>
              <li>
                  <b>Ayu</b> Purwarianti
              </li>
              <li>
                  Ngee Chia <b>Tai</b>
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
