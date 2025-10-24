from django.shortcuts import render, redirect
from .models import Task

def home(request):
    return render(request, 'home.html')

def timer(request):
    tasks = Task.objects.all()
    return render(request, 'tasks/timer.html', {'tasks': tasks})

def add_task(request):
    if request.method == 'POST':
        title = request.POST['title']
        Task.objects.create(title=title)
    return redirect('timer')

def delete_task(request, task_id):
    Task.objects.filter(id=task_id).delete()
    return redirect('timer')

def toggle_task(request, task_id):
    task = Task.objects.get(id=task_id)
    task.completed = not task.completed
    task.save()
    return redirect('timer')