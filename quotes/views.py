from django.shortcuts import render, redirect
from .models import Quote
import random

def quotes(request):
    all_quotes = Quote.objects.all()
    random_quote = random.choice(all_quotes) if all_quotes else None
    return render(request, 'quotes/quotes.html', {'random_quote': random_quote, 'quotes': all_quotes})

def add_quote(request):
    if request.method == 'POST':
        text = request.POST['text']
        author = request.POST.get('author', '')
        Quote.objects.create(text=text, author=author)
    return redirect('quotes')

def delete_quote(request, quote_id):
    Quote.objects.filter(id=quote_id).delete()
    return redirect('quotes')