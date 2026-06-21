function Login() {
  return (
    <div>
      <form>
        <label htmlFor="username">Username:</label>
        <br />
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" id="password" name="password" required />
        <br /><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
