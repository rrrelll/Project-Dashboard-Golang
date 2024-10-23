package models

import (
	"gorm.io/gorm"
)

type Testimonial struct {
	gorm.Model
	AkunTujuan string `json:"akun_tujuan"`
	Product    string `json:"product"`
	Platform   string `json:"platform"`
	Value      int    `json:"value"`
	Harga      int    `json:"harga"`
}
