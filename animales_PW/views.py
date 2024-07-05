from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login
from django.contrib import messages
from .models import categoria, producto
from .forms import CustomUserCreationForm
from django.contrib.auth import views as auth_views

def tienda_ani(request):
    categorias = categoria.objects.all()
    productos = producto.objects.all()
    context = {
        'categorias': categorias,
        'productos': productos,
    }
    return render(request, 'tienda_ani.html', context)

def adopcion_ani(request):
    return render(request, 'adopcion_ani.html')

def nosotros_ani(request):
    return render(request, 'nosotros_ani.html')

def contacto_ani(request):
    return render(request, 'contacto_ani.html')

def reg_ini_sesion_ani(request):
    return render(request, 'reg_ini_sesion_ani.html')

def pago_ani(request):
    return render(request, 'pago_ani.html')

@login_required
def dashboard(request):
    return render(request, 'users/dashboard.html', {'section': 'dashboard'})

def registro(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index_new')
    else:
        form = CustomUserCreationForm()
    return render(request, 'registration/registro.html', {'form': form})

def base(request):
    return render(request, 'base.html')

def index_new(request):
    return render(request, 'index_new.html')
