curl POST http://localhost:3000/users/ \
  -H "Content-Type: application/json" \
    -d '{
        "name": "Dodge",
        "age": 22,
        "description": "Nagbabagong Buhay na.",
        "role": "STUDENT"
    }'