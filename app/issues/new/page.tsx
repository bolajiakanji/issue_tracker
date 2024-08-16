"use client";
import  { useState } from "react";
import { Button, TextField, Callout } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";


interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
    const router = useRouter()
    const { register, control, handleSubmit } = useForm<IssueForm>();
    const [error, setError] = useState('')

    return (
        <div className="max-w-xl ">
            {error && <Callout.Root className="mb-3">
                <Callout.Text>
                    {error}
                </Callout.Text>
            </Callout.Root>}
    <form
      className="space-y-3 "
          onSubmit={handleSubmit(async (data) => {
              try {
                  await axios.post('/api/issues', data);
                  router.push('/issues')
                
              } catch (error) {
                  setError('unexpected error occured')
                
              }
           })}
    >
      <TextField.Root placeholder="Title" {...register("title")} />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />

      <Button>Submit New Issue</Button>
            </form>
            </div>
  );
};

export default NewIssuePage;
