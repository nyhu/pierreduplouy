package main

import (
  "io/ioutil"
  "path/filepath"
  "net/http"
  "encoding/json"
)

const (
	corsAllowedMethods = "HEAD,GET,POST,PUT,DELETE,OPTIONS,PATCH"
	corsAllowedHeaders = "DNT,X-Logged-As,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization"
)

type Response struct {
  Content []Dir  `json:"content,omitempty"`
  Error   string `json:"Error,omitempty"`
}

type Dir struct {
  Name     string   `json:"Name"`
  Path     string   `json:"Path"`
  DirList  []Dir    `json:"directoryList"`
  FileList []string `json:"FileList"`
}

func ioReadDir(path string) (Dir, error) {
  currentDir := Dir{
    Name: filepath.Base(path),
    Path: path,
  }
  fileInfo, err := ioutil.ReadDir(path)
  if err != nil {
    return Dir{}, err
  }

  for _, file := range fileInfo {
    if file.IsDir() {
      subDir, err := ioReadDir(filepath.Join(path, file.Name()))
      if err != nil {
        return Dir{}, err
      }
      currentDir.DirList = append(currentDir.DirList, subDir)
    } else {
      currentDir.FileList = append(currentDir.FileList, file.Name())
    }
  }
  return currentDir, nil
}

func main () {
  root := "/private"

  dirs, err := ioReadDir(root)
  if err != nil {
    panic(err)
  }

  response := Response{}
  response.Content = append(response.Content, dirs)

  errorResponse := Response{Error:"Authentification failed"}

  test := func (w http.ResponseWriter, r *http.Request) {
    login := r.URL.Query().Get("login")
    passwd := r.URL.Query().Get("password")

    w.Header().Set("Content-Type", "application/json")
  	w.Header().Set("Access-Control-Allow-Methods", corsAllowedMethods)
	  w.Header().Set("Access-Control-Allow-Headers", corsAllowedHeaders)
	  w.Header().Set("Access-Control-Allow-Origin", "*")
	  w.Header().Set("Vary", "Origin")

    if login != "danse bourgtheroulde" || passwd != "boubou" {
      w.WriteHeader(http.StatusForbidden)
      json.NewEncoder(w).Encode(errorResponse)
      return
    }

    w.WriteHeader(http.StatusOK)
    json.NewEncoder(w).Encode(response)
  }

  mux := http.NewServeMux()
  mux.HandleFunc("/", test)
  http.ListenAndServe(":5000", mux)
}
