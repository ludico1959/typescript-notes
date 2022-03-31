import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "POO",
    educator: "Márcio",
    duration: 20,
  });

  CreateCourseService.execute({
    name: "Bando de Dados",
    educator: "Igor",
  });

  return response.send();
}
