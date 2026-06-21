from rembg import remove
from PIL import Image

input_path = 'C:/Users/SHREYA/.gemini/antigravity-ide/brain/3370bbf9-a5bd-45d5-94b4-ea90916a3c00/atlas_lab_bottle_1781853795732.png'
output_path = 'C:/Users/SHREYA/OneDrive/Desktop/ATLAS/public/perfect_atlas_bottle_transparent.png'

print("Opening image...")
input_img = Image.open(input_path)

print("Removing background...")
output_img = remove(input_img)

print("Saving transparent image...")
output_img.save(output_path)
print("Done!")
