from django.shortcuts import render

# Create your views here.

def hello(request):
    context = {
        'menus' : ['a','b','c'],
        'users' : [],
    }
    return render(request, 'my_app/hello.html', context)