from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import (
    PendingUserListView,
    RegisterView, 
    LoginView,
    ApproveRejectUserView,
    AdminUserDetailView,
    )


urlpatterns = [
    path('auth/register/', RegisterView.as_view(), name='register'),         
    path('auth/login/', LoginView.as_view(), name='login'),                  
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('admin/users/pending/', PendingUserListView.as_view(), name='pending_users'),
    path('admin/users/<int:user_id>/approve/', ApproveRejectUserView.as_view(), name='approve_user'),
    path('admin/users/<int:user_id>/', AdminUserDetailView.as_view(), name='admin_user_detail')

]
