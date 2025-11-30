type LogLevel = 'info' | 'warn' | 'error' | 'debug'

interface LogContext {
  [key: string]: unknown
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development'
  private isTest = process.env.NODE_ENV === 'test'

  private formatMessage(level: LogLevel, message: string, context?: LogContext): string {
    const timestamp = new Date().toISOString()
    const contextStr = context ? ` ${JSON.stringify(context)}` : ''
    return `[${timestamp}] [${level.toUpperCase()}] ${message}${contextStr}`
  }

  info(message: string, context?: LogContext): void {
    if (this.isTest) return
    const formatted = this.formatMessage('info', message, context)
    console.log(formatted)
  }

  warn(message: string, context?: LogContext): void {
    if (this.isTest) return
    const formatted = this.formatMessage('warn', message, context)
    console.warn(formatted)
  }

  error(message: string, error?: Error | unknown, context?: LogContext): void {
    const errorContext = error instanceof Error
      ? { ...context, error: error.message, stack: error.stack }
      : { ...context, error }

    const formatted = this.formatMessage('error', message, errorContext)
    console.error(formatted)

    // In production, you would send this to an error tracking service like Sentry
    if (!this.isDevelopment && !this.isTest) {
      // TODO: Send to error tracking service
      // Sentry.captureException(error, { extra: context })
    }
  }

  debug(message: string, context?: LogContext): void {
    if (!this.isDevelopment || this.isTest) return
    const formatted = this.formatMessage('debug', message, context)
    console.log(formatted)
  }
}

export const logger = new Logger()
