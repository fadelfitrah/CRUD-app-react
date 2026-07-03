export const eventValidationRules = {
  namaEvent: {
    required: "Nama event wajib diisi",
    minLength: {
      value: 3,
      message: "Nama event minimal 3 karakter",
    },
  },
  kategori: {
    required: "Kategori event wajib diisi",
  },
  deskripsi: {
    required: "Deskripsi event wajib diisi",
    minLength: {
      value: 10,
      message: "Deskripsi minimal 10 karakter",
    },
  },
  tanggalPelaksanaan: {
    required: "Tanggal pelaksanaan wajib diisi",
  },
  gambar: {
    required: "URL gambar wajib diisi",
    pattern: {
      value: /^https?:\/\/.+/i,
      message: "URL harus dimulai dengan http:// atau https://",
    },
  },
};

export const eventCategoryOptions = [
  { value: "seminar", label: "Seminar" },
  { value: "workshop", label: "Workshop" },
  { value: "konferensi", label: "Konferensi" },
  { value: "peluncuran", label: "Peluncuran Produk" },
  { value: "pameran", label: "Pameran" },
  { value: "training", label: "Training" },
  { value: "lainnya", label: "Lainnya" },
];
