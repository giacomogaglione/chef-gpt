"use client"

import { Check, ChevronsUpDown } from "lucide-react"

import { Option } from "@/types/types"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface ComboboxFormFieldProps {
  form: any
  name: any
  label: string
  inputArray: Option[]
}

export function RecipeFormField({
  form,
  name,
  label,
  inputArray,
}: ComboboxFormFieldProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="font-semibold">{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-full justify-between",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value
                    ? inputArray.find((item) => item.value === field.value)
                        ?.label
                    : "Select item"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput
                  placeholder={`Search ${label.toLowerCase()}...`}
                />
                <CommandEmpty>No {label.toLowerCase()} found.</CommandEmpty>
                <CommandGroup>
                  {inputArray.map((item) => (
                    <CommandItem
                      value={item.value}
                      key={item.value}
                      onSelect={(value) => {
                        form.setValue(name, value)
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          item.value === field.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {item.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
