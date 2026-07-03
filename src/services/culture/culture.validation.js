export const cultureValidationRules = {
  namaBudaya: {
    required: "Nama budaya wajib diisi",
    minLength: {
      value: 3,
      message: "Nama budaya minimal 3 karakter",
    },
  },
  kategori: {
    required: "Kategori budaya wajib diisi",
  },
  deskripsi: {
    required: "Deskripsi budaya wajib diisi",
    minLength: {
      value: 10,
      message: "Deskripsi minimal 10 karakter",
    },
  },
  gambar: {
    required: "URL gambar wajib diisi",
    pattern: {
      value: /^https?:\/\/.+/i,
      message: "URL harus dimulai dengan http:// atau https://",
    },
  },
};

export const cultureCategoryOptions = [
  { value: "tarian", label: "Tarian" },
  { value: "musik", label: "Musik" },
  { value: "kerajinan", label: "Kerajinan" },
  { value: "tradisi", label: "Tradisi" },
  { value: "tenun", label: "Tenun" },
  { value: "kuliner", label: "Kuliner" },
  { value: "lainnya", label: "Lainnya" },
];
