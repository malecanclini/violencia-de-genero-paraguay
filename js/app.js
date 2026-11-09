onEachFeature: function(feature, layer) {

  const p = feature.properties;

  layer.bindPopup(`
    <b>${p.nombref || "Puesto Policial"}</b><br>
    📍 ${p.barlocdesc || ""}<br>
    🏘️ ${p.distdesc || ""}<br>
    🗺️ ${p.dptodesc || ""}<br>
    🏢 ${p.desc_class || ""}
  `);

}
function cargarDepartamentos(data){

  const select =
    document.getElementById("departamentoFilter");

  const departamentos =
    [...new Set(
      data.features.map(
        f => f.properties.dptodesc
      )
    )].sort();

  departamentos.forEach(dep => {

    const option =
      document.createElement("option");

    option.value = dep;
    option.textContent = dep;

    select.appendChild(option);

  });

}
