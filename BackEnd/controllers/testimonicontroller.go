package controllers

import (
	"log"
	"net/http"
	"testimoniFollowers/models"

	"github.com/gin-gonic/gin"
)

func GetTestimonials(c *gin.Context) {
	log.Println("Get Testimonial Dipanggil")
	var testimonials []models.Testimonial
	models.DB.Find(&testimonials)

	c.JSON(http.StatusOK, testimonials)
}

func CreateTestimonial(c *gin.Context) {
	var input models.Testimonial
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	models.DB.Create(&input)
	c.JSON(http.StatusOK, input)
}

func UpdateTestimonial(c *gin.Context) {
	var testimonial models.Testimonial
	if err := models.DB.Where("id = ?", c.Param("id")).First(&testimonial).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
		return
	}

	var input models.Testimonial
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	models.DB.Model(&testimonial).Updates(input)
	c.JSON(http.StatusOK, testimonial)
}

func DeleteTestimonial(c *gin.Context) {
	var testimonial models.Testimonial
	if err := models.DB.Where("id = ?", c.Param("id")).First(&testimonial).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
		return
	}

	models.DB.Delete(&testimonial)
	c.JSON(http.StatusOK, gin.H{"data": true})
}
