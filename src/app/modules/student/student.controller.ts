import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import studentValidationSchema from "./student.validate";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    // Validate the student data
    const { error } = studentValidationSchema.validate(studentData);
    // Call the service function
    const result = await StudentServices.createStudentIntoDB(studentData);

    if (error) {
      res.status(500).send({
        success: false,
        message: "Student validation failed!",
        error: error.details,
      });
    }

    // Send the respponse
    res.status(200).send({
      success: true,
      message: "Student created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Something went wrong!",
      error: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).send({
      success: true,
      message: "All students fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).send({
      success: true,
      message: "Student fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Something went wrong!",
      error: err,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
