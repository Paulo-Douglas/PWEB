export const montarTabela = (cs, targetId = "tabelaDiv", headers = null) => {
  const container = document.getElementById(targetId);
  if (!container) return;
  if (!Array.isArray(cs) || cs.length === 0) {
    container.innerHTML = "<div>Nenhum dado para exibir</div>";
    return;
  }
  if (!headers) headers = Object.keys(cs[0]);
  const thead = `<thead class="bg-gray-200"><tr>${headers.map(h => `<th class="px-4 py-2 text-left font-semibold">${h}</th>`).join("")}</tr></thead>`;
  const tbodyRows = cs.map((item, i) => {
    const cells = headers.map(h => `<td class="px-4 py-2">${item[h] ?? ""}</td>`).join("");
    return `<tr class="${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50">${cells}</tr>`;
  }).join("\n");
  container.innerHTML = `<table class="min-w-full border border-gray-300 rounded-lg shadow-sm">${thead}<tbody>${tbodyRows}</tbody></table>`;
};
