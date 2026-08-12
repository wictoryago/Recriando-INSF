/**
 * Gera o payload "BR Code" (PIX copia e cola) no padrão EMV®QRCPS.
 * O valor retornado pode ser lido por qualquer app bancário.
 */

function crc16(payload: string): string {
  let crc = 0xffff;
  for (let i = 0; i < payload.length; i += 1) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

function field(id: string, value: string): string {
  return `${id}${String(value.length).padStart(2, "0")}${value}`;
}

function sanitize(value: string, maxLength: number): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Za-z0-9 .-]/g, "")
    .trim()
    .slice(0, maxLength);
}

export function buildPixPayload({
  key,
  merchantName,
  merchantCity,
  amount,
  txid = "***",
  description,
}: {
  key: string;
  merchantName: string;
  merchantCity: string;
  amount?: number;
  txid?: string;
  description?: string;
}): string {
  const merchantAccount =
    field("00", "br.gov.bcb.pix") +
    field("01", key) +
    (description ? field("02", sanitize(description, 72)) : "");

  let payload =
    field("00", "01") +
    field("26", merchantAccount) +
    field("52", "0000") +
    field("53", "986") +
    (amount && amount > 0 ? field("54", amount.toFixed(2)) : "") +
    field("58", "BR") +
    field("59", sanitize(merchantName, 25) || "RECEBEDOR") +
    field("60", sanitize(merchantCity, 15) || "SAO PAULO") +
    field("62", field("05", sanitize(txid, 25) || "***"));

  payload += "6304";
  return payload + crc16(payload);
}
