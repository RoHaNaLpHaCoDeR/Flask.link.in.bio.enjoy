from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('indexnew.html')

@app.route('/redirect')
def redirect_to_link():
    return redirect('https://t.me/LinkInBioEnjoy')

if __name__ == '__main__':
    app.run(debug=True)
    
# For Vercel
def handler(event, context):
    from werkzeug.middleware.proxy_fix import ProxyFix
    app.wsgi_app = ProxyFix(app.wsgi_app, x_for=1, x_proto=1, x_host=1, x_port=1)
    return app(event, context)