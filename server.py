import socket

port = 8000
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
result = sock.connect_ex(("localhost", port))

if result == 0:
    print(f"Port {port} is open, server is running!")
else:
    print(f"Port {port} is closed, server might not be running.")

sock.close()