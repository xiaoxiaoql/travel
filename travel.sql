/*
Navicat MySQL Data Transfer

Source Server         : my
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : travel

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-05-12 15:22:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for dream
-- ----------------------------
DROP TABLE IF EXISTS `dream`;
CREATE TABLE `dream` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `auto` varchar(255) NOT NULL,
  `contain` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dream
-- ----------------------------
INSERT INTO `dream` VALUES ('7', '晓明', '西藏雪山自由行', 'http://localhost:8080/th/demo/src/img/list3-1.jpg');
INSERT INTO `dream` VALUES ('6', '老王', '作品版权由 Icbeing 解释，禁止匿名转载；禁止商业使用；禁止个人使用。 临摹作品，同人作品原型版权归原作者所有。作品版权由 Icbeing 解释，禁止匿名转载；禁止商业使用；禁止个人使用。 临摹作品，同人作品原型版权归原作者所有。', 'http://localhost:8080/th/demo/src/img/list3-2.jpg');
INSERT INTO `dream` VALUES ('8', '张三', '云南自由行', 'http://localhost:8080/th/demo/src/img/list2-1.jpg');
INSERT INTO `dream` VALUES ('9', '一日游', '一日游', 'http://localhost:8080/th/demo/src/img/list2-1.jpg');

-- ----------------------------
-- Table structure for lv
-- ----------------------------
DROP TABLE IF EXISTS `lv`;
CREATE TABLE `lv` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `idx` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `adress` varchar(255) NOT NULL,
  `url1` varchar(255) NOT NULL,
  `url2` varchar(255) NOT NULL,
  `ishot` varchar(255) DEFAULT NULL,
  `discript` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lv
-- ----------------------------
INSERT INTO `lv` VALUES ('1', '001', '国内最热景区千岛湖', '杭州', 'http://localhost:8080/th/demo/src/img/list1-2.jpg', 'http://localhost:8080/th/demo/src/img/list1-3.jpg', 'hot', '杭州1天2晚自由行', '2017/06-2017/07');
INSERT INTO `lv` VALUES ('2', '002', '中国四大古镇之和顺古镇', '上海', 'http://localhost:8080/th/demo/src/img/list2-1.jpg', 'http://localhost:8080/th/demo/src/img/list2-2.jpg', 'hot', '上海3天3夜自由行', '2017/05-2017/06');
INSERT INTO `lv` VALUES ('4', '003', '桂林山水', '广西', 'http://localhost:8080/th/demo/src/img/list3-1.jpg', 'http://localhost:8080/th/demo/src/img/list3-2.jpg', 'hot', '广西4天5晚自由行', '2017/05-2017/06');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `idx` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '001', '15270019584', '123456');
INSERT INTO `user` VALUES ('2', '002', '123', '456');
SET FOREIGN_KEY_CHECKS=1;
