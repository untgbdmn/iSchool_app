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
        title: "Siswa",
        url: "/siswa",
        icon: Users,
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
        ],
      },
    ],
  }
