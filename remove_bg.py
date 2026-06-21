from PIL import Image

img = Image.open('C:/Users/SHREYA/.gemini/antigravity-ide/brain/3370bbf9-a5bd-45d5-94b4-ea90916a3c00/3d_bottle_1781855411389.png')
img = img.convert("RGBA")
datas = img.getdata()

newData = []
for item in datas:
    # Check if pixel is very close to white
    if item[0] > 240 and item[1] > 240 and item[2] > 240:
        newData.append((255, 255, 255, 0))
    else:
        newData.append(item)

img.putdata(newData)
img.save('c:/Users/SHREYA/OneDrive/Desktop/ATLAS/public/3d_bottle_transparent.png', "PNG")
