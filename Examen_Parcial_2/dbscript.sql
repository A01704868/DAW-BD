--examen parcial 2 dbscript
CREATE TABLE `lugares` (
  `lugarID` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `nombreLugar` varchar(30) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (lugarID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO `lugares` (`nombreLugar`) VALUES
('Centro turístico'),
('Laboratorios'),
('Restaurante'),
('Centro operativo'),
('Triceratops'),
('Dilofosaurios'),
('Velociraptors'),
('TRex'),
('Planicie de los herbívoros');

CREATE TABLE `tipoincidente` (
  `tipoID` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `nombreTipo` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (tipoID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO `tipoincidente` (`nombreTipo`) VALUES
('Falla eléctrica'),
('Fuga de herbívoro'),
('Fuga de Velociraptors'),
('Fuga de TRex'),
('Robo de ADN'),
('Auto descompuesto'),
('Visitantes en zona no autorizada');

CREATE TABLE `incidentes` (
  `tipoID` int(11) NOT NULL,
  `lugarID` int(11) NOT NULL,
  `fechayhora` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (tipoID,lugarID,fechayhora),
  FOREIGN KEY (tipoID) REFERENCES tipoincidente (tipoID) ON DELETE RESTRICT,
  FOREIGN KEY (lugarID) REFERENCES lugares (lugarID) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO `incidentes` (`tipoID`,`lugarID`) VALUES
(1,2),
(3,7),
(6,9),
(5,2);

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `password` varchar(500) COLLATE utf8_spanish2_ci NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;