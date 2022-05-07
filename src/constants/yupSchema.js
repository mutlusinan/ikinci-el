import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  identifier: yup
    .string()
    .email("Geçerli bir e-posta adresi giriniz")
    .min(6, "Uzunluğu 6 karakterden az olamaz")
    .required("Zorunlu alan"),
  password: yup
    .string()
    .min(6, "Şifreniz 6 karakterden az olamaz")
    .max(16, "Şifreniz 16 karakterden fazla olamaz")
    .required("Zorunlu alan"),
});

export const SigninSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir e-posta adresi giriniz")
    .min(6, "Uzunluğu 6 karakterden az olamaz")
    .required("Zorunlu alan"),
  password: yup
    .string()
    .min(6, "Şifreniz 6 karakterden az olamaz")
    .max(16, "Şifreniz 16 karakterden fazla olamaz")
    .required("Zorunlu alan"),
});

export const ProductSchema = yup.object().shape({
  name: yup.string().required("Zorunlu alan"),
  category: yup.string().required("Zorunlu alan"),
  price: yup.number().typeError('Lütfen sadece sayı giriniz').required("Zorunlu alan")
});
