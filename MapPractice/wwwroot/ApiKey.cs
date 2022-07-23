public class ApiKey
{
    private readonly IConfiguration _config;

    public ApiKey(IConfiguration config)
    {
        _config = config;
    }

    public string GetKey()
    {
        return _config["Movies:ServiceApiKey"];
    }
}