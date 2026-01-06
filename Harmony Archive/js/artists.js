console.log("artists.js YÜKLENDİ");

document.addEventListener("DOMContentLoaded", () => {
  const inputEl = document.getElementById("searchInput");
  const listEl = document.getElementById("artists");

  // Güvenlik kontrolleri
  if (!inputEl || !listEl) {
    console.error("HTML elemanları bulunamadı");
    return;
  }

  async function searchArtists(query) {
    listEl.innerHTML = "<p>Yükleniyor...</p>";

    try {
      const res = await fetch(
        `https://musicbrainz.org/ws/2/artist/?query=${encodeURIComponent(query)}&fmt=json`,
        {
          headers: {
            "Accept": "application/json"
          }
        }
      );

      const data = await res.json();
      listEl.innerHTML = "";

      if (!data.artists || data.artists.length === 0) {
        listEl.innerHTML =
          "<div class='alert alert-warning'>Sonuç bulunamadı.</div>";
        return;
      }

      data.artists.slice(0, 12).forEach((artist) => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-3";

        col.innerHTML = `
          <div class="card p-3 h-100">
            <h5>${artist.name}</h5>
            <p>Ülke: ${artist.country || "Bilinmiyor"}</p>
          </div>
        `;

        listEl.appendChild(col);
      });
    } catch (error) {
      console.error(error);
      listEl.innerHTML =
        "<div class='alert alert-danger'>Veri alınırken hata oluştu.</div>";
    }
  }

  // Input dinleme (NET ve stabil)
  inputEl.addEventListener("keyup", () => {
    const value = inputEl.value.trim();
    console.log("Aranan:", value);

    if (value.length >= 2) {
      searchArtists(value);
    } else {
      listEl.innerHTML = "";
    }
  });
});
