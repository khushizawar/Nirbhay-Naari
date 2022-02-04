from django.shortcuts import render

def index(request):
    context = {}
    return render(request, 'index.html', context)

def about(request):
    context = {}
    return render(request, 'about.html', context)

def loginpage(request):
    context = {}
    return render(request, 'login.html', context)

def report(request):
    context = {}
    return render(request, 'report.html', context)

def signup(request):
    context = {}
    return render(request, 'signup.html', context)  

def story(request):
    context = {}
    return render(request, 'story.html', context) 