def update(request,pk):
    reservation = Reservation.objects.get(pk)
    if request.method == "POST":
        form = Reservation(request.POST, instance=reservaion)
        if form.is_valid():
            form.save()
            return redirect("articles:detail",reservation.pk)
    else:
        form = Reservation(instance=reservation)
    context = {
        'reservation':reservation,
        'form':form,
    }
    return render(request,"articles/update.html",context)
