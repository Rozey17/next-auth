import { Form, Field, ErrorMessage } from "vee-validate";
import { toFormValidator } from "@vee-validate/zod";
import * as zod from "zod";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    const validationSchema = toFormValidator(
      zod.object({
        email: zod
          .string()
          .nonempty("This is required")
          .email({ message: "Must be a valid email" }),
        password: zod
          .string()
          .nonempty("This is required")
          .min(8, { message: "Too short" }),
      })
    );
    function onSubmit(values: any) {
      alert(JSON.stringify(values, null, 2));
    }
    return {
      validationSchema,
      onSubmit,
    };
  },
};
