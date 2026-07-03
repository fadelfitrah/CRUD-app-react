export const formatDate = (date) => {
  if (!date) return "";
  if (typeof date === "string") return date;
  if (date.toDate) return date.toDate().toISOString().split("T")[0];
  return new Date(date).toISOString().split("T")[0];
};

export const parseDate = (dateString) => {
  if (!dateString) return null;
  return new Date(dateString);
};

export const getEventStatus = (tanggalPelaksanaan) => {
  const eventDate = new Date(tanggalPelaksanaan);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (eventDate < today) {
    return "Selesai";
  } else if (eventDate.toDateString() === today.toDateString()) {
    return "Hari Ini";
  } else {
    return "Mendatang";
  }
};

export const getStatusColor = (status) => {
  switch (status) {
    case "Selesai":
      return "bg-gray-100 text-gray-800";
    case "Hari Ini":
      return "bg-yellow-100 text-yellow-800";
    case "Mendatang":
      return "bg-green-100 text-green-800";
    default:
      return "bg-slate-100 text-slate-800";
  }
};

export const eventListFormatter = (events) => {
  return events.map((event) => ({
    ...event,
    status: getEventStatus(event.tanggalPelaksanaan),
  }));
};
