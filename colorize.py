import colorsys
from PIL import Image

def colorize_to_aqua(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    newData = []
    
    for r, g, b, a in datas:
        if a < 10:
            newData.append((r,g,b,a))
            continue
            
        h, s, v = colorsys.rgb_to_hsv(r/255.0, g/255.0, b/255.0)
        
        # If it's amber/brown glass (hue ~0.05 to 0.15)
        # Shift it to Teal/Cyan (hue ~0.50)
        if 0.0 <= h <= 0.20 and s > 0.1:
            h = 0.50 # Cyan/Teal
            s = min(1.0, s * 1.2) # Make it vibrant
            
        # If it's blue text (hue ~0.55 to 0.70)
        # Shift it to Deep Teal (hue ~0.50)
        elif 0.55 <= h <= 0.75:
            h = 0.50
            
        new_r, new_g, new_b = colorsys.hsv_to_rgb(h, s, v)
        newData.append((int(new_r*255), int(new_g*255), int(new_b*255), a))
        
    img.putdata(newData)
    img.save(output_path, "PNG")

input_file = 'c:/Users/SHREYA/OneDrive/Desktop/ATLAS/public/3d_bottle_transparent.png'
output_file = 'c:/Users/SHREYA/OneDrive/Desktop/ATLAS/public/theme_bottle.png'

colorize_to_aqua(input_file, output_file)
print("Colorized bottle to match aqua theme!")
