import qrcode

# 1️⃣ Tu URL
url = "https://bestburguer.onrender.com"  # reemplaza con tu web

# 2️⃣ Generar el QR
qr = qrcode.QRCode(
    version=1,  # tamaño del QR, 1 es pequeño
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,  # tamaño de cada "cuadro"
    border=4      # borde alrededor
)

qr.add_data(url)
qr.make(fit=True)

# 3️⃣ Crear la imagen
img = qr.make_image(fill_color="black", back_color="white")

# 4️⃣ Guardar la imagen
img.save("mi_qr.png")

print("QR generado exitosamente! 🔥")
