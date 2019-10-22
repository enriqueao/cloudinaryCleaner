SELECT SUBSTRING_INDEX(fotos.ruta,'.jpg', 1) as foto
FROM (SELECT SUBSTRING_INDEX(ruta,'/albumusuario/', -1) as ruta
FROM weepec.foto_album_usuario 
WHERE ruta LIKE '%.jpg') as fotos