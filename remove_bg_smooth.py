from PIL import Image

def remove_bg_anti_aliased(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    newData = []
    
    # We want to remove pixels that are close to white (R,G,B > 220)
    for item in datas:
        # Calculate distance to pure white
        r, g, b, a = item
        if r > 200 and g > 200 and b > 200:
            avg = (r + g + b) / 3.0
            if avg > 250:
                newData.append((255, 255, 255, 0)) # Pure transparent
            else:
                # Calculate alpha based on how close to white it is
                # 200 -> 255 alpha (fully opaque)
                # 250 -> 0 alpha (fully transparent)
                alpha = int(255 - ((avg - 200) / 50.0) * 255)
                alpha = max(0, min(255, alpha))
                # For antialiasing edges, mix it with black to avoid white halos
                newData.append((int(r*0.9), int(g*0.9), int(b*0.9), alpha))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")

input_file = 'C:/Users/SHREYA/.gemini/antigravity-ide/brain/3370bbf9-a5bd-45d5-94b4-ea90916a3c00/3d_bottle_1781855411389.png'
output_file = 'c:/Users/SHREYA/OneDrive/Desktop/ATLAS/public/3d_bottle_transparent.png'

remove_bg_anti_aliased(input_file, output_file)
print("Saved with anti-aliasing!")
