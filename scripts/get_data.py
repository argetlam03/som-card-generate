import requests

def write(fname, req):
    with open(fname, 'wb') as f:
        for chunk in req.iter_content(chunk_size=8192):
            if chunk:
                f.write(chunk)


def main():
    pitch = 'https://www.baseball-reference.com/data/war_daily_pitch.txt'
    bat = 'https://www.baseball-reference.com/data/war_daily_bat.txt'

    req = requests.get(pitch)
    filename = 'war_daily_pitch.txt'
    write(filename, req)

    req = requests.get(bat)
    filename = 'war_daily_bat.txt'
    write(filename, req)
    
main()
