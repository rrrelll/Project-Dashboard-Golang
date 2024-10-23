package main

import (
	"WEB-GO-INIT/config"
	"WEB-GO-INIT/controllers/categorycontroller"
	"WEB-GO-INIT/controllers/homecontroller"
	"log"
	"net/http"
)

func main() {

	config.ConnectDB()

	//1.Homepage
	http.HandleFunc("/", homecontroller.Welcome)

	// 2. Categories
	http.HandleFunc("/categories", categorycontroller.Index)
	http.HandleFunc("/categories/add", categorycontroller.Add)
	http.HandleFunc("/categories/edit", categorycontroller.Edit)
	http.HandleFunc("/categories/delete", categorycontroller.Delete)

	log.Println("server running on port 8080")
	http.ListenAndServe(":8080", nil)
}
