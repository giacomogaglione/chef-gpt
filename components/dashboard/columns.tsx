"use client"

import Link from "next/link"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
/*
import { deleteRecipe } from "@/lib/delete-recipe"
*/
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { DataTableColumnHeader } from "./data-table-column-header"
/*
import { DeleteRecipeButton } from "../recipe/delete-recipe-button"
*/

export interface RecipeTable {
  id: string
  title: string
  description: string
  cooking_time: number
  calories: number
  difficulty: string
  macros: {
    protein: number
    fats: number
    carbs: number
  }
  ingredients2: Array<{ name: string; amount: number | string }>
  instructions: Array<{ step: number; description: string | string }>
  vegan: string
  low_calories: string
  paleo: string
}

export const columns: ColumnDef<RecipeTable>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
  },
  {
    accessorKey: "difficulty",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Difficulty" />
    ),
  },
  {
    accessorKey: "cooking_time",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cooking Time" />
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const { vegan, paleo } = row.original

      if (vegan === "Yes") {
        return <Badge variant="vegan">Vegan</Badge>
      } else if (paleo === "Yes") {
        return <Badge variant="paleo">Paleo</Badge>
      }
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const recipe = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="size-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href={`/dashboard/my-recipes/${recipe.id}`}>View</Link>
            </DropdownMenuItem>
            { /* 
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <DeleteRecipeButton onClick={deleteRecipe(recipe.id)} />
            </DropdownMenuItem>*/}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
