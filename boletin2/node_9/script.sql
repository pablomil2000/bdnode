CREATE TABLE `category` (
  `id_category` int(10) UNSIGNED NOT NULL,
  `id_parent` int(10) UNSIGNED NOT NULL,
  `id_shop_default` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `level_depth` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `active` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `date_add` datetime NOT NULL,
  `date_upd` datetime NOT NULL,
  `name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id_category`, `id_parent`, `id_shop_default`, `level_depth`, `active`, `date_add`, `date_upd`, `name`) VALUES
(1, 0, 1, 1, 1, '2018-10-22 00:00:00', '2018-10-22 00:00:00', 'TV e Vídeo'),
(2, 1, 1, 2, 1, '2018-10-22 00:00:00', '2018-10-22 00:00:00', 'Televisores'),
(3, 1, 1, 2, 1, '2018-10-22 00:00:00', '2018-10-22 00:00:00', 'DVD e Blu-Ray Players'),
(4, 1, 1, 2, 1, '2018-10-22 00:00:00', '2018-10-22 00:00:00', 'Home Theater'),
(5, 836, 836, 2, 1, '2018-10-22 00:00:00', '2018-10-22 00:00:00', 'Som Automotivo'),
(7, 3279, 3279, 2, 1, '2018-10-22 00:00:00', '2018-10-22 00:00:00', 'MP3 e MP4 Players'),
(10, 11, 1, 3, 1, '2018-10-22 00:00:00', '2018-10-22 00:00:00', 'Conversores Digitais'),
(11, 1, 1, 2, 1, '2018-10-22 00:00:00', '2018-10-22 00:00:00', 'Acessórios para TVs'),
(12, 336, 336, 2, 1, '2018-10-22 00:00:00', '2018-10-22 00:00:00', 'Outros Consoles'),
(13, 0, 13, 1, 1, '2018-10-22 00:00:00', '2018-10-22 00:00:00', 'Eletrodomésticos');

ALTER TABLE `category`
  ADD PRIMARY KEY (`id_category`),
  ADD KEY `category_parent` (`id_parent`),
  ADD KEY `level_depth` (`level_depth`);

ALTER TABLE `category`
MODIFY `id_category` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3388;
