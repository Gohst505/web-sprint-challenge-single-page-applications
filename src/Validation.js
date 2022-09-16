import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required("name required")
    .min(2, "name must be at least 2 characters"),

    size: yup
    .string()
    .trim()
    .required("size required"),

    toppingsOne: yup
    .boolean()
    .notRequired([true], "First Topping"),

    toppingsTwo: yup
    .boolean()
    .notRequired([true], "Second Topping"),
    
    toppingsThree: yup
    .boolean()
    .notRequired([true], "Second Topping"),
    
    toppingsFour: yup
    .boolean()
    .notRequired([true], "Second Topping"),

    specialText: yup
    .string()
    .trim(),

})

export default formSchema;