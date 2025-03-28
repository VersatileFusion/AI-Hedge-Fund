const { PythonShell } = require('python-shell');
const path = require('path');

class PythonBridge {
  constructor() {
    this.pythonPath = process.env.PYTHON_PATH || 'python';
    this.scriptPath = path.join(__dirname, '../../python/src');
  }

  async runHedgeFund(params) {
    const options = {
      mode: 'text',
      pythonPath: this.pythonPath,
      pythonOptions: ['-u'], // unbuffered output
      scriptPath: path.join(this.scriptPath, 'main.py'),
      args: [
        '--tickers', params.tickers.join(','),
        '--initial-cash', params.initialCapital.toString(),
        '--margin-requirement', params.marginRequirement.toString(),
        '--start-date', params.startDate,
        '--end-date', params.endDate,
        '--show-reasoning', params.showReasoning ? 'true' : 'false'
      ]
    };

    try {
      const results = await PythonShell.run('main.py', options);
      return this.parseResults(results);
    } catch (error) {
      console.error('Error running Python script:', error);
      throw new Error('Failed to execute hedge fund analysis');
    }
  }

  async runBacktest(params) {
    const options = {
      mode: 'text',
      pythonPath: this.pythonPath,
      pythonOptions: ['-u'],
      scriptPath: path.join(this.scriptPath, 'backtester.py'),
      args: [
        '--tickers', params.tickers.join(','),
        '--initial-cash', params.initialCapital.toString(),
        '--margin-requirement', params.marginRequirement.toString(),
        '--start-date', params.startDate,
        '--end-date', params.endDate,
        '--show-reasoning', params.showReasoning ? 'true' : 'false'
      ]
    };

    try {
      const results = await PythonShell.run('backtester.py', options);
      return this.parseResults(results);
    } catch (error) {
      console.error('Error running backtest:', error);
      throw new Error('Failed to execute backtest');
    }
  }

  parseResults(results) {
    try {
      // Find the last JSON object in the results
      const jsonResult = results
        .filter(line => line.trim().startsWith('{'))
        .map(line => {
          try {
            return JSON.parse(line);
          } catch (e) {
            return null;
          }
        })
        .filter(result => result !== null)
        .pop();

      if (!jsonResult) {
        throw new Error('No valid JSON results found');
      }

      return jsonResult;
    } catch (error) {
      console.error('Error parsing Python results:', error);
      throw new Error('Failed to parse Python results');
    }
  }
}

module.exports = new PythonBridge(); 