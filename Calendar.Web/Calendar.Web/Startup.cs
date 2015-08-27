using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Calendar.Web.Startup))]
namespace Calendar.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
