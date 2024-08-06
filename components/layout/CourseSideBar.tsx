import { db } from "@/lib/db";
import { Course, Section } from "@prisma/client";
import CourseSideBarClient from "./CourseSideBarClient";

interface CourseSideBarProps {
  course: Course & { sections: Section[] };
  studentId: string;
}

const CourseSideBar = async ({ course, studentId }: CourseSideBarProps) => {
  // Fetch data on the server
  const publishedSections = await db.section.findMany({
    where: {
      courseId: course.id,
      isPublished: true,
    },
    orderBy: {
      position: "asc",
    },
  });

  const publishedSectionIds = publishedSections.map((section) => section.id);

  const purchase = await db.purchase.findUnique({
    where: {
      customerId_courseId: {
        customerId: studentId,
        courseId: course.id,
      },
    },
  });

  const completedSections = await db.progress.count({
    where: {
      studentId,
      sectionId: {
        in: publishedSectionIds,
      },
      isCompleted: true,
    },
  });

  const progressPercentage = (completedSections / publishedSectionIds.length) * 100;

  // Render the Client Component with props
  return (
    <CourseSideBarClient
      course={{ id: course.id, title: course.title }}
      sections={publishedSections.map((section) => ({
        id: section.id,
        title: section.title,
      }))}
      progressPercentage={progressPercentage}
    />
  );
};

export default CourseSideBar;
