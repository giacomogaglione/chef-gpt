"use client"

import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  supabase,
  supabaseClient,
  supabaseClientPublic,
} from "@/lib/supabase-client"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Slider, SliderThumb } from "@/components/ui/slider"
import { RecipeFormLabel } from "@/components/form/label-form-field"
import {
  howInjured,
  options,
  RadioGroupFormField,
} from "@/components/form/radio-group-form-field"
import { SwitchFormField } from "@/components/form/switch-form-field"
import { Icons } from "@/components/icons"

const FormSchema = z.object({
  description: z.string(),
  period: z.enum(["1", "3", "6", "18", "24"]),
  how_injured: z.enum([
    "Automobile Accident",
    "Pedestrian or Bicycle Accident",
    "Truck Accident",
    "Motorcycle Accident",
    "Accident or Injury At Work",
    "Medical Negligence",
    "Fall or Slip",
    "Other Injury or Accident",
  ]),
  when_happened: z.string(),
  name: z.string(),
  email: z.string().email({ message: "Please Enter a valid email" }),
  phone_number: z
    .string()
    .min(4, { message: "Please Enter Valid Phone Number" }),
  see_doctor: z.boolean(),
  represented_by_attorney: z.boolean(),
  at_fault: z.boolean(),
})

export function RecipeForm() {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      description: "",
      period: "1",
      when_happened: "2024",
      name: "",
      email: "",
      phone_number: "",
      see_doctor: false,
      represented_by_attorney: false,
      at_fault: false,
    },
  })

  const isLoading = form.formState.isSubmitting

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    const numericPeriod = Number(values.period)
    console.log({ ...values, period: numericPeriod })
    const { data, error } = await supabase
      .from("accident_form")
      .insert(values)
      .select()
    if (error) {
      console.log(error)
    } else {
      console.log(data)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormItem>
          <RecipeFormLabel stepIndex="1" labelIndex="How were you injured?" />
          <RadioGroupFormField
            form={form}
            name="how_injured"
            options={howInjured}
          />
        </FormItem>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <RecipeFormLabel
                stepIndex="2"
                labelIndex="Describe the incident"
              />

              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="Describe the incident"
                    {...field}
                    onClick={() => setShowAdditionalFields(true)}
                    className="rounded-xl bg-primary text-secondary shadow-lg placeholder:text-secondary/70"
                  />
                  <Icons.input className="absolute right-2.5 top-3 size-4 text-secondary" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <>
          <FormField
            name="period"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <RecipeFormLabel stepIndex="3" labelIndex="When Happened" />
                <Slider
                  defaultValue={[1]}
                  min={1}
                  max={24}
                  step={1}
                  onValueChange={(value) => field.onChange(value.toString())}
                >
                  <SliderThumb />
                </Slider>
                <FormDescription className="flex flex-row-reverse items-center">
                  Within {field.value} Months
                </FormDescription>
              </FormItem>
            )}
          />

          <div>
            <RecipeFormLabel stepIndex="4" labelIndex="Personal Details" />
            <div className="mt-2 flex flex-col items-center justify-between gap-2 lg:flex-row">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Input {...field} placeholder="Name" />
                    <FormMessage className="absolute" />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Input {...field} placeholder="Email Address" />
                    <FormMessage className="absolute" />
                  </FormItem>
                )}
              />
              <FormField
                name="phone_number"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Input
                      {...field}
                      placeholder="Phone Number"
                      type="number"
                    />
                    <FormMessage className="absolute" />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormItem>
            <RecipeFormLabel
              stepIndex="5"
              labelIndex="Any other information?"
            />
            <SwitchFormField
              form={form}
              name="see_doctor"
              label="👨‍⚕️ Did you see a doctor?"
            />
            <SwitchFormField
              form={form}
              name="represented_by_attorney"
              label="👩‍💼 Are you currently represented by an attorney? "
            />
            <SwitchFormField
              form={form}
              name="at_fault"
              label="😩 Were you at fault?"
            />
          </FormItem>
          {isLoading ? (
            <Button disabled size="lg" className="w-full font-semibold">
              <Icons.loader
                className="mr-2 size-4 animate-spin"
                aria-hidden="true"
              />
              Loading
            </Button>
          ) : (
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gray-100 text-black hover:text-white"
            >
              Get Connected
              <Icons.generate className="ml-2 size-4" aria-hidden="true" />
            </Button>
          )}
        </>
      </form>
    </Form>
  )
}
