import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const validationSchema = zod.object({
  name: zod.string().nonempty(),
  email: zod.string().email().nonempty(),
  password: zod.string().min(8).nonempty(),
  friends: zod.array(zod.string()).nonempty(),
});
type FormData = {
  name: string;
  email: string;
  password: string;
  friends: { name: string }[];
};

const TestPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
    shouldUseNativeValidation: true, //show native error messages on the browser
    mode: "onChange", // show errors as you type
    defaultValues: {
      name: "",
      email: "",
      password: "",
      friends: [],
    },
  });

  const { fields, append, prepend, remove } = useFieldArray({
    control,
    name: "friends",
  });
  return (
    <form
      className="w-1/4 mx-auto p-10 border space-y-3 border-gray-200 rounded-xl bg-white shadow-lg"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <div className="">
        <input
          type="text"
          placeholder="name"
          className="input"
          {...register("name")}
        />
      </div>
      <div className="">
        <input
          type="email"
          placeholder="email"
          className="input"
          {...register("email")}
        />
      </div>
      <div className="">
        <input
          type="password"
          placeholder="password"
          className="input"
          // {...register("password", { required: "This is required" })}
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div className="space-y-3">
        <p>friends</p>
        {fields.map((friend, index) => (
          <input
            key={friend.id}
            {...register(`friends.${index}.name`)}
            className="input"
          />
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          append({ name: "append" });
        }}
      >
        Append friend
      </button>
      <button
        type="button"
        onClick={() => {
          remove(0);
        }}
      >
        remove friend
      </button>
      <div className="">
        <button type="submit" disabled={!isValid || isSubmitting}>
          submit
        </button>
      </div>
    </form>
  );
};

export default TestPage;
