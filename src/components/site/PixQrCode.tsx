import { useEffect, useState } from "react";
import QRCode from "qrcode";

/**
 * Renderiza o QR Code do PIX a partir do payload BR Code.
 * Alto contraste (preto puro sobre branco) e correção de erros alta,
 * para leitura mesmo com reflexo de tela ou câmera de baixa qualidade.
 */
export function PixQrCode({ payload, size = 224 }: { payload: string; size?: number }) {
  const [src, setSrc] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    setFailed(false);
    setSrc(null);

    QRCode.toDataURL(payload, {
      width: size * 3,
      margin: 2,
      errorCorrectionLevel: "H",
      color: { dark: "#000000", light: "#ffffff" },
    })
      .then((url) => {
        if (active) setSrc(url);
      })
      .catch(() => {
        if (active) setFailed(true);
      });

    return () => {
      active = false;
    };
  }, [payload, size]);

  if (failed) {
    return (
      <p className="text-sm text-muted-foreground">
        Não foi possível gerar o QR Code. Use a chave PIX ao lado.
      </p>
    );
  }

  return (
    <div
      className="grid shrink-0 place-items-center rounded-2xl border-4 border-white bg-white p-3"
      style={{ width: size, height: size }}
    >
      {src ? (
        <img
          src={src}
          alt="QR Code para doação via PIX ao Instituto Social Nossa Senhora de Fátima"
          width={size - 24}
          height={size - 24}
          className="size-full object-contain"
        />
      ) : (
        <span className="text-xs text-navy">Gerando QR Code...</span>
      )}
    </div>
  );
}
