from rembg import remove
from PIL import Image

input_path = 'c:/Users/SHREYA/OneDrive/Desktop/ATLAS/public/user_bottle_transparent.png'
output_path = 'c:/Users/SHREYA/OneDrive/Desktop/ATLAS/public/user_bottle_transparent_clean.png'

try:
    input_img = Image.open(input_path)
    output_img = remove(input_img)
    output_img.save(output_path)
    print("Successfully removed checkerboard background!")
except Exception as e:
    print(f"Error: {e}")
