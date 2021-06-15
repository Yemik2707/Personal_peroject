//instructions for inserting products to the products table 
INSERT INTO products
(product_name, product_image)
VALUES
('Black polymer','https://res.cloudinary.com/dgaapgd2f/image/upload/v1623093255/AAFA2FB9-0861-4A95-B973-C4A3F91532C7_1_201_a_v8lwic.jpg' )
('Green & gold set for him & her', 'https://res.cloudinary.com/dgaapgd2f/image/upload/v1623097101/F88EA229-7623-4B22-811A-3188E74C2E68_1_201_a_gdhi5c.jpg')
('Cyan dangle', 'https://res.cloudinary.com/dgaapgd2f/image/upload/v1623093229/B1A1A1CC-2BD2-4FFF-8D2E-2184C20245F1_1_201_a_pfuhne.jpg')
('Black hexagon', 'https://res.cloudinary.com/dgaapgd2f/image/upload/v1623093206/8AA39071-B1D2-4B0E-8834-FDD311FD3343_1_201_a_fodwm6.jpg')
('Yellow Mesob', 'https://res.cloudinary.com/dgaapgd2f/image/upload/v1623093191/F2906605-7DB9-4145-BD29-7F7D9CDE576E_1_201_a_jlmasn.jpg')
('Blue & gold', 'https://res.cloudinary.com/dgaapgd2f/image/upload/v1623093171/C27608DB-13C9-4067-B21B-42586AD29DD0_1_201_a_crqesq.jpg')
('Orange bundle', 'https://res.cloudinary.com/dgaapgd2f/image/upload/v1623093150/EC6E5393-0F16-4352-AFEB-66B30D4D1690_1_201_a_crnc7b.jpg')
('Red bundle', 'https://res.cloudinary.com/dgaapgd2f/image/upload/v1623093062/3F39AC2B-C979-4FE7-8FBC-10A260D7982C_1_201_a_zvpxdf.jpg')
('Green bundle', 'https://res.cloudinary.com/dgaapgd2f/image/upload/v1623092173/AB567724-0E6C-4F81-9D21-0CCCDED4C48D_1_201_a_wimd59.jpg')
('Pink dangle with Aztec print', 'https://res.cloudinary.com/dgaapgd2f/image/upload/v1623092153/8FE92D04-37D5-458D-9085-942728CF8032_1_201_a_xbnh1q.jpg')
('Green & gold bundle', 'https://res.cloudinary.com/dgaapgd2f/image/upload/v1623092127/1F952402-7936-457D-946E-4D12BB6BDC3D_1_201_a_qdsamu.jpg')
('Orange & gold', 'https://res.cloudinary.com/dgaapgd2f/image/upload/v1623091902/487268F3-61B0-476F-B470-3F63755ED273_1_201_a_vqhb9v.jpg')
('Purple & gold', 'https://res.cloudinary.com/dgaapgd2f/image/upload/v1623091820/3F596050-6290-411A-B36E-BC1AD1DA9664_1_201_a_goglrt.jpg')
('Magenta & gold', 'https://res.cloudinary.com/dgaapgd2f/image/upload/v1623091518/B4668CC6-F47B-4CE6-9969-4B53733FE1A9_1_201_a_mcd0rk.jpg')
('Cherry Blossom(pink)', 'https://res.cloudinary.com/dgaapgd2f/image/upload/v1623091455/BF37568A-E46A-40BC-974A-52438C5EA5A9_1_201_a_u845ju.jpg')
('Peacock & gold', 'https://res.cloudinary.com/dgaapgd2f/image/upload/v1623086716/CCC6AC2E-E8D4-41A2-91CA-25DA25D132EE_1_201_a_kzobgs.jpg')
('Royal Green', 'https://res.cloudinary.com/dgaapgd2f/image/upload/v1623726166/937672F2-FA22-47DE-91D3-3C31F7451334_1_201_a_s2nhir.jpg')
('Orange dangle', 'https://res.cloudinary.com/dgaapgd2f/image/upload/v1623726139/2F5C7D93-6DD2-4A0B-A833-B519202E0350_vk0bew.jpg')
('Black & gold', 'https://res.cloudinary.com/dgaapgd2f/image/upload/v1623726111/D30F47CF-53D6-479C-9FE8-F5D2985720F9_btjm8p.jpg')
('Pink & gold', 'https://res.cloudinary.com/dgaapgd2f/image/upload/v1623726079/3B2F1F08-9F72-42CD-9712-CE12E4F8259B_uot3wq.jpg')
UPDATE products 
SET product_name = 'green earrings' 
WHERE product_id = 1;