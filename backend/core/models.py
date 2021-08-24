from django.db import models


class FileUp(models.Model):
    trade_code = models.CharField(max_length=255, blank=True, null=True)
    high = models.DecimalField(
        max_digits=5, decimal_places=2, null=True, blank=True)
    low = models.DecimalField(
        max_digits=5, decimal_places=2, null=True, blank=True)
    open = models.DecimalField(
        max_digits=5, decimal_places=2, null=True, blank=True)
    close = models.DecimalField(
        max_digits=5, decimal_places=2, null=True, blank=True)
    volume = models.CharField(max_length=255, null=True, blank=True)
    date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.trade_code
