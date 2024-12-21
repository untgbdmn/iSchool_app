import {
    BookOpen,
    Users,
    LayoutDashboard
  } from "lucide-react"

export const data = {
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Master Data",
        icon: BookOpen,
        url: "/master-data",
        items: [
          {
            title: "Kelas",
            url: "/kelas",
          },
        ],
      },
      {
        title: "Siswa",
        url: "/siswa",
        icon: Users,
      },
    ],
  }
