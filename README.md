
---

# Finesse Task Management App

The Finesse Task Management App is a Django-based web application for managing tasks with features like task creation, updating, deleting, and viewing detailed task information.

![Finesse Task Management App Screenshot](link-to-screenshot.png)

## Features

- Create tasks with title, description, due date, priority, and assignee.
- Update tasks and mark them as in-progress or done.
- Delete tasks permanently.
- View detailed information about each task.
- Responsive and user-friendly interface.

## Installation

Follow these instructions to set up the Finesse Task Management App locally on your machine.

### Prerequisites

- Python 3.x installed on your system.
- Pip package manager installed.

### Steps

1. **Clone the repository** to your local machine:

   ```bash
   git clone
   https://github.com/Prince-isaac04/Finnese-Task-Management-app.git
   cd Finnese-Task-Management-app
   ```

2. **Create a virtual environment** (optional but recommended):

   ```bash
   # Windows
   python -m venv env
   env\Scripts\activate

   # macOS/Linux
   python3 -m venv env
   source env/bin/activate
   ```

3. **Install dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations** to set up the database:

   ```bash
   python manage.py migrate
   ```

5. **Create a superuser** (admin account) to access the Django admin panel:

   ```bash
   python manage.py createsuperuser
   ```

   Follow the prompts to create your superuser.

6. **Start the development server**:

   ```bash
   python manage.py runserver
   ```

7. **Access the application**:

   Open your web browser and go to `http://127.0.0.1:8000/` to view the Finesse Task Management App.

## Usage

- **Create a Task**: Click on "Create new task" on the home page and fill in the task details.
- **Update a Task**: Click on a task title to view details, then click "Edit" to update the task.
- **Delete a Task**: Click on a task title to view details, then click "Delete" to remove the task permanently.
- **View Task Details**: Click on a task title to view detailed information including description, due date, priority, status, and assignee.


## Contributors:
* Chima Enyeribe (Backend)
* Isaac (Frontend)


## Contributing

Contributions are welcome! Fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by [Django](https://www.djangoproject.com/) and [Bootstrap](https://getbootstrap.com/).
- Built with love and coffee.

---

This README.md file serves as a comprehensive guide for both new users and developers interested in understanding and contributing to the Finesse Task Management App project. 
