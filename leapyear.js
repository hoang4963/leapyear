let year=prompt('Nhap nam')
let a
a= parseInt(year)
if (a%4 == 0 && a%100 != 0)
{
    alert('Nam nhuan');
}
else
{
    alert('khong phai nam nhuan');
}

