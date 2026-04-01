curl POST http://localhost:3000/users/myId \
  -H "Content-Type: application/json" \
    -d '{
        "name": "Dodge",
        "age": 23,
        "description": "Maganda na ang Buhay!"
        "role": "ADMIN"
    }'