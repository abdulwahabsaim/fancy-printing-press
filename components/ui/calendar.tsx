"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker, DropdownProps } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from "./scroll-area"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const handleSelectYear = (
    setSelectedMonth: (date: Date) => void,
    selectedMonth?: Date
  ) => {
    return (year: string) => {
      const newMonth = selectedMonth ? new Date(selectedMonth) : new Date()
      newMonth.setFullYear(parseInt(year))
      setSelectedMonth(newMonth)
    }
  }

  const handleSelectMonth = (
    setSelectedMonth: (date: Date) => void,
    selectedMonth?: Date
  ) => {
    return (month: string) => {
      const newMonth = selectedMonth ? new Date(selectedMonth) : new Date()
      newMonth.setMonth(parseInt(month))
      setSelectedMonth(newMonth)
    }
  }
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium hidden",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        caption_dropdowns: "flex gap-2",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
        Dropdown: ({ ...props }: DropdownProps) => {
          const { fromDate, toDate, fromMonth, toMonth, fromYear, toYear } =
            props
          const { onMonthChange, onYearChange } = props.props
          const months: { label: string; value: number }[] = [
            { label: "January", value: 0 },
            { label: "February", value: 1 },
            { label: "March", value: 2 },
            { label: "April", value: 3 },
            { label: "May", value: 4 },
            { label: "June", value: 5 },
            { label: "July", value: 6 },
            { label: "August", value: 7 },
            { label: "September", value: 8 },
            { label: "October", value: 9 },
            { label: "November", value: 10 },
            { label: "December", value: 11 },
          ]
          const years: { label: string; value: number }[] = []
          if (fromYear && toYear) {
            for (let i = fromYear; i <= toYear; i++) {
              years.push({ label: i.toString(), value: i })
            }
          }
          return (
            <div className="flex gap-2">
              <Select
                onValueChange={
                  onMonthChange
                    ? (value) =>
                        handleSelectMonth(onMonthChange, props.month)(value)
                    : undefined
                }
                value={props.month?.getMonth().toString()}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <ScrollArea className="h-72">
                    {months.map((month) => (
                      <SelectItem value={month.value.toString()} key={month.label}>{month.label}</SelectItem>
                    ))}
                  </ScrollArea>
                </SelectContent>
              </Select>
              <Select
                onValueChange={
                  onYearChange
                    ? (value) =>
                        handleSelectYear(onYearChange, props.month)(value)
                    : undefined
                }
                value={props.month?.getFullYear().toString()}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <ScrollArea className="h-72">
                    {years.map((year) => (
                      <SelectItem value={year.value.toString()} key={year.label}>{year.label}</SelectItem>
                    ))}
                  </ScrollArea>
                </SelectContent>
              </Select>
            </div>
          )
        },
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }