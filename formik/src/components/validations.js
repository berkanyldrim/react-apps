import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli Bir Email Giriniz !!")
    .required("Zorunlu Alan"), // required zorunlu olması
  password: yup.string().min(5, "En az 5 karakter giriniz !!").required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")])
    .required(),
});

export default validations;
