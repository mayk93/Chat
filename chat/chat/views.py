import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def process_text(request):
    print("Received request")
    text = json.loads(request.body)["text"]
    return JsonResponse({"response": "You said: %s" % text})