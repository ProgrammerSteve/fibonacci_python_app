### Creating a Venv (VS Code)
- `[ctrl]+[shift]+p` to enter the Command Palette
- type `Python: Create Environment`
- select `Venv`, then select your interpreter: `Python:3.XX` (I am using Python:3.12)

### Creating a Venv (CLI)
- Navigate to your project directory
- Run `python -m venv .venv`
- If you want intellisense, set up the path for your IDE

### Activating Venv
- windows: `.\.venv\scripts\activate`
- windows(gitbash): `source ./.venv/scripts/activate`
- linux/macOS: `source .venv/bin/activate`

### Closing Venv
- `deactivate`

### Creating requirements file (if needed)
- `pip freeze > requirements.txt`

### Installing using requirements
- `pip install -r requirements.txt`

### Installing manually
- `pip install flask flask_cors pytest`

## Running the Application
- `python ./server/main.py`

## Running Tests
- `pytest ./tests/test_fibonacci.py`