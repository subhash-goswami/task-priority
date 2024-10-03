FROM python:3.12-slim

WORKDIR /backend

COPY requirements.txt /backend/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /backend/

EXPOSE 8000

CMD ["python", "src/manage.py", "runserver", "0.0.0.0:8000"]
