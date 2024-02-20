import { Search } from "./ui/search";
import { useEffect, useRef, useState } from "react";
import { LoadingSpinner } from "./ui/spinner";
import { Button } from "./ui/button";
import { Eye, FileType, Filter, Speech, Video } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { TASKS } from "./helper/constants";

import { DatasetProps, useDatasetFetch } from "./helper/hooks";
import Card from "./Card";

const PER_PAGE = 15;

export const Dataset = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [filterModality, setFilterModality] = useState<string[]>([]);
  const [filterTask, setFilterTask] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const { data, loading } = useDatasetFetch();
  const [filteredData, setFilteredData] = useState<DatasetProps[]>([]);
  const [page, setPage] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const pageRef = useRef(0);
  const pageCountRef = useRef(0);

  const filterData = (data: DatasetProps[]) => {
    let result = data.filter(
      (d) =>
        d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.description.toLowerCase().includes(search.toLowerCase())
    );
    if (filterModality.length > 0) {
      result = result.filter((d) =>
        filterModality.every((f) => d.modality.includes(f))
      );
    }
    if (filterTask.length > 0) {
      result = result.filter((d) =>
        filterTask.some((f) => d.tasks.includes(f))
      );
    }
    return result;
  };

  const filterPage = () => {
    const start = 0; // Start from the first item
    const end = page * PER_PAGE; // Load up to the current page * PER_PAGE
    // Also filter by search
    return filterData(data).slice(start, end);
  };

  useEffect(() => {
    const filtered = filterData(data);
    setFilteredData(filtered);
    setPage(1); // Reset to the first page when search changes
  }, [search, data, filterModality, filterTask]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const totalPage = pageCountRef.current / PER_PAGE;
          if (totalPage > pageRef.current) {
            setPage((v) => v + 1);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );
    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }
  }, []);

  useEffect(() => {
    pageRef.current = page;
    pageCountRef.current = filteredData.length;
  }, [page, filteredData.length]);

  return (
    <div id="dataset" className="bg-yellow-50">
      <div className="sticky top-14 py-4 z-20 bg-white shadow-sm">
        <div className="container flex flex-col space-y-1 md:flex-row items-center">
          <div className="text-neutral-400">
            Showing {filteredData.length} dataset.
          </div>
          <div className="flex flex-1"></div>
          <Search
            placeholder="Search Dataset..."
            className="w-full max-w-[500px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="container pb-24 sm:pb-32">
        <div className="mb-4 pt-4">
          <Button variant="outline" onClick={() => setShowFilter((v) => !v)}>
            <Filter size={20} className="mr-2" /> Filter
          </Button>

          {showFilter ? (
            <div className="px-4 py-2 mt-2 rounded-md border border-slate-100 bg-slate-50">
              <div className="flex flex-col">
                <div className="flex flex-row items-start mb-2">
                  <div className="text-xs w-16 mr-4 text-right leading-10 mt-2">
                    Modality
                  </div>
                  <div className="p-2 border border-slate-100 rounded-md bg-white flex flex-1">
                    <ToggleGroup
                      type="multiple"
                      className="flex flex-wrap justify-start"
                      value={filterModality}
                      onValueChange={(value) => {
                        setFilterModality(value);
                      }}
                    >
                      <ToggleGroupItem
                        className="text-xs"
                        value="Language"
                        aria-label="Toggle language"
                      >
                        <FileType size={20} className="mr-2 text-amber-500" />{" "}
                        Language
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        className="text-xs"
                        value="Vision"
                        aria-label="Toggle vision"
                      >
                        <Eye size={20} className="mr-2 text-fuchsia-500" />{" "}
                        Vision
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        className="text-xs"
                        value="Speech"
                        aria-label="Toggle speech"
                      >
                        <Speech size={20} className="mr-2 text-green-500" />{" "}
                        Speech
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        className="text-xs"
                        value="Video"
                        aria-label="Toggle video"
                      >
                        <Video size={20} className="mr-2 text-rose-500" /> Video
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </div>
                <div className="flex flex-row items-start">
                  <div className="text-xs w-16 mr-4 text-right leading-10 mt-2">
                    Tasks
                  </div>
                  <div className="p-2 border border-slate-100 rounded-md bg-white flex flex-1">
                    <ToggleGroup
                      type="multiple"
                      className="flex flex-wrap justify-start"
                      value={filterTask}
                      onValueChange={(value) => {
                        setFilterTask(value);
                      }}
                    >
                      {TASKS.map((task) => (
                        <ToggleGroupItem
                          value={task}
                          key={task}
                          className="text-xs text-left"
                        >
                          {task}
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {loading ? (
          <div className="h-[160px] flex flex-row justify-center items-center">
            Fetching data{" "}
            <span className="ml-2">
              <LoadingSpinner />
            </span>
          </div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 justify-items-center">
          {filterPage().map((item: DatasetProps) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>

        <div
          className="px-8 lg:px-0 py-4 flex flex-row justify-center items-center space-x-2"
          ref={scrollRef}
        >
          {filteredData.length / PER_PAGE > page && (
            <Button
              variant="outline"
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Load More...
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
