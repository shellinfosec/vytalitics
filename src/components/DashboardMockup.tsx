import { motion } from "framer-motion";
import {
  BarChart3,
  Activity,
  Database,
  Settings,
  Download,
  Share2,
  TrendingUp,
} from "lucide-react";

const DashboardMockup = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const sidebarItems = [
    { icon: BarChart3, label: "Dashboard", active: true },
    { icon: Activity, label: "Analytics" },
    { icon: Database, label: "Data Sources" },
    { icon: Settings, label: "Settings" },
  ];

  const stats = [
    { label: "Total Revenue", value: "$2.4M", change: "+24.5%", positive: true },
    { label: "Active Sessions", value: "45.2K", change: "+12.3%", positive: true },
    { label: "Error Rate", value: "0.24%", change: "-8.1%", positive: true },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6"
    >
      {/* Sidebar */}
      <motion.div
        variants={itemVariants}
        className="lg:col-span-1 glass-card border border-border/30 rounded-2xl overflow-hidden h-fit sticky top-20"
      >
        <div className="p-4 border-b border-border/30 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
          <div className="w-4 h-4 rounded bg-primary/20" />
        </div>
        <nav className="p-4 space-y-2">
          {sidebarItems.map((item, idx) => (
            <motion.button
              key={idx}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                item.active
                  ? "bg-primary/10 text-primary border border-primary/30"
                  : "text-muted-foreground hover:bg-background-secondary/50"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </motion.button>
          ))}
        </nav>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={itemVariants}
        className="lg:col-span-3 glass-card border border-border/30 rounded-2xl overflow-hidden p-4 sm:p-6"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 pb-4 border-b border-border/30 gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">Dashboard Overview</h3>
            <p className="text-sm text-muted-foreground mt-1">Real-time insights and metrics</p>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-background-secondary/50 rounded-lg transition-colors"
              aria-label="Download"
            >
              <Download className="w-4 h-4 text-muted-foreground" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-background-secondary/50 rounded-lg transition-colors"
              aria-label="Share"
            >
              <Share2 className="w-4 h-4 text-muted-foreground" />
            </motion.button>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className="p-4 rounded-lg bg-background-secondary/50 border border-border/30 hover:border-border/50 transition-all"
            >
              <p className="text-xs text-muted-foreground mb-2">{stat.label}</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</span>
                <span
                  className={`text-xs font-semibold ${
                    stat.positive ? "text-primary" : "text-destructive"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Chart Area */}
        <motion.div
          variants={itemVariants}
          className="p-4 sm:p-6 rounded-lg bg-background-secondary/50 border border-border/30 h-[240px] sm:h-[300px]"
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold text-foreground">Performance Trend</h4>
            <TrendingUp className="w-4 h-4 text-primary" />
          </div>
          <div className="h-[180px] sm:h-[240px] w-full rounded bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 flex items-center justify-center border border-border/30">
            <div className="text-center">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-sm text-muted-foreground"
              >
                📊 Interactive chart area
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DashboardMockup;
