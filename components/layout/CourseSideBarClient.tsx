"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Progress } from "../ui/progress";

interface CourseSideBarClientProps {
  course: {
    id: string;
    title: string;
  };
  sections: {
    id: string;
    title: string;
  }[];
  progressPercentage: number;
}

const CourseSideBarClient = ({
  course,
  sections,
  progressPercentage,
}: CourseSideBarClientProps) => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex flex-col w-64 border-r shadow-md px-3 my-4 text-sm font-medium animate-fadeIn">
      <h1 className="text-lg font-bold text-center mb-4">{course.title}</h1>
      <div className="mb-4">
        <Progress value={progressPercentage} className="h-2" />
        <p className="text-xs">{Math.round(progressPercentage)}% completed</p>
      </div>
      <Link
        href={`/courses/${course.id}/overview`}
        className={`p-3 rounded-lg mt-4 border-b-2 transition-colors duration-300 ${
          pathname === `/courses/${course.id}/overview`
            ? "bg-[#FFF8EB] text-gray-950 border-blue-500"
            : " hover:bg-[#FDAB04]/80"
        }`}
      >
        Overview
      </Link>
      {sections.map((section) => (
        <Link
          key={section.id}
          href={`/courses/${course.id}/sections/${section.id}`}
          className={`p-3 rounded-lg mt-4 border-b-2 transition-colors duration-300 ${
            pathname === `/courses/${course.id}/sections/${section.id}`
              ? "bg-[#f3c164] text-gray-950 border-blue-500"
              : " hover:bg-[#FDAB04]/80"
          }`}
        >
          {section.title}
        </Link>
      ))}
    </div>
  );
};

export default CourseSideBarClient;
