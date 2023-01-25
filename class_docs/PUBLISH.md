# Publish Juptyer Widget

1. Update version number. Update the following files:

- package.json
- pyproject.toml
- demo_widgets/_frontend.py
- demo_widgets/_version.py

2. Run `yarn build`, then delete the `dist` folder.

3. Install `twine` and `build` packages.

```bash
conda install -c conda-forge twine build
```

4. Build the project. This will build and package the project with both the Python and JavaScript code.

```bash
python -m build .
```

5. Publish the package to PyPi witn Twine. You will need a PyPi account. Register [here](https://pypi.org/account/register/)

```bash
twine upload dist/*
```

# Use the Jupyter Widget

Note: Ensure you have Node.js installed. Also, enable Yarn within the Node.js installation with the following command:

```bash
corepack enable
```

1. Create a new project folder and change into the folder.

```bash
mkdir juptyer-lab-project

cd juptyer-lab-project
```

2. Create a new virtual environment.

```bash
python -m venv venv
```

3. Activate the new virtual environment.

```bash
source ./venv/bin/activate
```

4. Upgrade pip.

```bash
python -m pip install --upgrade pip
```

5. Install Jupyter Lab and Demo Widgets.

```bash
python -m pip install jupyterlab demo-widgets
```

6. Install new Kernel

```bash
python -m ipykernel install --user --name=juptyer-lab-project
```

7. Run Jupyter Lab

```bash
jupyter lab
```

8. Create a notebook, and run the following code in a cell.

```python
from demo_widgets import ExampleWidget

ExampleWidget()
```


