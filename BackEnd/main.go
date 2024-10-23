package main

import (
	"testimoniFollowers/controllers"
	"testimoniFollowers/models"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()

	// Konfigurasi CORS
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3001"}, // Ubah ini sesuai dengan URL frontend Anda
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Authorization", "Content-Type"},
		AllowCredentials: true,
	}))

	models.ConnectDatabase()

	r.GET("/api/testimonials", controllers.GetTestimonials)
	r.POST("/api/testimonials", controllers.CreateTestimonial)
	r.PUT("/api/testimonials/:id", controllers.UpdateTestimonial)
	r.DELETE("/api/testimonials/:id", controllers.DeleteTestimonial)

	r.Run(":8080")
}
