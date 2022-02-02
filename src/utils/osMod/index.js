import * as os from "os";

export function osTestFunc() {
  console.table(os.userInfo());
  console.table(os.uptime());
  const currentOS = {
    platform: os.platform(),
    host_name: os.hostname(),
    name: os.type(),
    release: os.release(),
    arch: os.arch(),
    total_mem: os.totalmem(),
    free_mem: os.freemem(),
    cpu_count: os.cpus().length,
    cpu_model: os.cpus()[0].model,
    cpu_speed: os.cpus()[0].speed,
    cpu_times: os.cpus()[0].times,
    cpu_load: os.loadavg(),
    cpu_load_avg: os.loadavg()[0],
    cpu_load_avg_1: os.loadavg()[1],
    cpu_load_avg_5: os.loadavg()[2],
    cpu_load_avg_15: os.loadavg()[3],
    system_uptime: os.uptime(),
  };

  console.table(currentOS);
}

export function osInfo() {
  console.log("first, but with osInfo, mind gernade@@!");
  osTestFunc();
}

osInfo();
