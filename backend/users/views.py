from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from users.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAdminUser
from users.serializers import (
    AdminUserSerializer,
    RegisterSerializer, 
    LoginSerializer,
    AdminUserActionSerializer,
    AdminUserDetailSerializer
    )



class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "User registered successfully. Waiting for admin approval."},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            refresh = RefreshToken.for_user(user)
            return Response({
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            }, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




class PendingUserListView(APIView):
    permission_classes =[IsAdminUser]
    def get(self,request):
        pending_users = User.objects.filter(approval_status='pending')
        serializer = AdminUserSerializer(pending_users,many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class ApproveRejectUserView(APIView):
    permission_classes = [IsAdminUser]

    def post(self, request, user_id):
        serializer = AdminUserActionSerializer(data=request.data)
        if serializer.is_valid():
            action = serializer.validated_data['action']

            try:
                user = User.objects.get(id=user_id, approval_status='pending')
            except User.DoesNotExist:
                return Response({"error": "User not found or already processed."},
                                status=status.HTTP_404_NOT_FOUND)

            user.approval_status = 'approved' if action == 'approve' else 'rejected'
            user.save()

            return Response({"message": f"User {action}d successfully."},
                            status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AdminUserDetailView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request, user_id):
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = AdminUserDetailSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)  


            
        