declare global {
  interface $InternalEnv {
    NODE_ENV: 'development' | 'production';
    PWD: string;
  }

  interface $ExternalEnv {
    URL: string;
  }

  type $Env = $InternalEnv & $ExternalEnv;

  var $env: $Env;
}

export {};
