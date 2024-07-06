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

def index(request):
    return render(request, 'index.html')

def listar_admin(request):
    categorias = categoria.objects.all()
    productos = producto.objects.all()
    context = {
        'categorias': categorias,
        'productos': productos,
    }
    return render(request, 'admin_crud/listar_admin.html', context)

def registrar_prod(request):
    if request.method == 'POST':
        nombre = request.POST['txtNombre']
        descripcion = request.POST['txtDescripcion']
        precio = request.POST['txtPrecio']
        img = request.FILES['imgUpload']  # Usa request.FILES para manejar la carga de archivos
        categoria_id = request.POST['txtCategoria']

        # Obtén la instancia de la categoría desde la base de datos
        cat = categoria.objects.get(id=categoria_id)

        # Crea el producto con la instancia de la categoría
        producto.objects.create(
            nombre=nombre,
            descripcion=descripcion,
            precio=precio,
            imagen=img,
            categoria=cat
        )
    
    # Asegúrate de pasar las categorías a la plantilla si es una solicitud GET
    categorias = categoria.objects.all()
    productos = producto.objects.all()  # Añade esto si necesitas pasar productos a la plantilla
    return render(request, 'admin_crud/listar_admin.html', {'categorias': categorias, 'productos': productos})

def eliminar_prod(request, id):
    id_producto = producto.objects.get(id=id)
    id_producto.delete()

    categorias = categoria.objects.all()
    productos = producto.objects.all()
    return render(request, 'admin_crud/listar_admin.html', {'categorias': categorias, 'productos': productos})

def editar_prod(request, id):
    id_producto = producto.objects.get(id=id)
    
    return render(request , 'admin_crud/editar_prod.html', {"id_producto": id_producto})

def actualizar_prod(request):
    if request.method == 'POST':
        nombre = request.POST['txtNombre']
        descripcion = request.POST['txtDescripcion']
        precio = request.POST['txtPrecio']
        img = request.FILES['imgUpload']  # Usa request.FILES para manejar la carga de archivos
        categoria_id = request.POST['txtCategoria']

        # Obtén la instancia de la categoría desde la base de datos
        cat = categoria.objects.get(id=categoria_id)

        producto.objects.filter(id=id).update(
            nombre=nombre,
            descripcion=descripcion,
            precio=precio,
            imagen=img,
            categoria=cat
        )
        producto.save()
        
    return render(request , 'admin_crud/editar_prod.html')
