from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('indexbuttonnewupdated.html')

@app.route('/redirect')
def redirect_to_link():
    return redirect('https://t.me/LinkInBioEnjoy')

if __name__ == "__main__":
    from waitress import serve  # Optional for production
    serve(app, host="0.0.0.0", port=8000)