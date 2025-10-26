const fs = require('fs');
const path = require('path');

class GreenCodingAnalyzer {
  constructor() {
    this.statsPath = path.join(__dirname, '../dist/portfolio/stats.json');
    this.targetSize = 500000; // 500KB Green Coding target
  }

  analyze() {
    console.log('🌱 GREEN CODING BUNDLE ANALYSIS:');
    console.log('='.repeat(40));
    
    if (!fs.existsSync(this.statsPath)) {
      console.error('❌ Stats file not found:', this.statsPath);
      console.error('💡 Run: ng build --stats-json');
      process.exit(1);
    }

    try {
      const stats = JSON.parse(fs.readFileSync(this.statsPath, 'utf8'));
      this.analyzeAngular17Stats(stats);
    } catch (error) {
      console.error('❌ Error parsing stats.json:', error.message);
      process.exit(1);
    }
  }

  analyzeAngular17Stats(stats) {
    console.log('📋 Angular 17 esbuild format detected');
    
    if (stats.outputs) {
      this.analyzeOutputs(stats.outputs);
    } else if (stats.assets) {
      this.analyzeAssets(stats.assets);
    } else {
      console.log('❌ No recognizable bundle data found');
      console.log('Available keys:', Object.keys(stats));
      this.showFallbackInstructions();
    }
  }

  analyzeOutputs(outputs) {
    console.log('📦 Output files found:', Object.keys(outputs).length);
    
    let mainSize = 0;
    let styleSize = 0;
    let polyfillSize = 0;
    let largeModules = [];
    
    // Analyze each output file for Green Coding optimization
    Object.entries(outputs).forEach(([filename, data]) => {
      const size = data.bytes || 0;
      
      if (filename.includes('main') && filename.endsWith('.js')) {
        mainSize = size;
      } else if (filename.includes('styles') && filename.endsWith('.css')) {
        styleSize = size;
      } else if (filename.includes('polyfills') && filename.endsWith('.js')) {
        polyfillSize = size;
      }
      
      // Track large files for optimization opportunities
      if (size > 20000) { // Files > 20KB
        largeModules.push({ filename, size });
      }
    });
    
    this.generateReport(mainSize, styleSize, polyfillSize, largeModules);
  }

  analyzeAssets(assets) {
    console.log('📦 Assets found:', assets.length);
    
    const mainAsset = assets.find(a => a.name.includes('main') && a.name.endsWith('.js'));
    const styleAsset = assets.find(a => a.name.includes('styles') && a.name.endsWith('.css'));
    const polyfillAsset = assets.find(a => a.name.includes('polyfills') && a.name.endsWith('.js'));
    
    const mainSize = mainAsset ? mainAsset.size : 0;
    const styleSize = styleAsset ? styleAsset.size : 0;
    const polyfillSize = polyfillAsset ? polyfillAsset.size : 0;
    
    this.generateReport(mainSize, styleSize, polyfillSize, []);
  }

  generateReport(mainSize, styleSize, polyfillSize, largeModules) {
    const totalSize = mainSize + styleSize + polyfillSize;
    
    console.log('\n📊 Bundle Summary:');
    console.log(`Main JS: ${(mainSize / 1024).toFixed(2)} KB`);
    console.log(`Styles CSS: ${(styleSize / 1024).toFixed(2)} KB`);
    console.log(`Polyfills JS: ${(polyfillSize / 1024).toFixed(2)} KB`);
    console.log(`Total Initial: ${(totalSize / 1024).toFixed(2)} KB / ${(this.targetSize / 1024)} KB target`);
    
    // Green Coding Status
    const isCompliant = totalSize <= this.targetSize;
    const overBy = (totalSize - this.targetSize) / 1024;
    
    console.log(`Status: ${isCompliant ? '✅ Green Coding Compliant' : `❌ Needs Optimization (${overBy.toFixed(2)} KB over)`}`);
    
    // Show largest files for optimization
    if (largeModules.length > 0) {
      console.log('\n📋 Large Files (>20KB):');
      largeModules
        .sort((a, b) => b.size - a.size)
        .slice(0, 5)
        .forEach(module => {
          console.log(`  ${(module.size / 1024).toFixed(2)} KB - ${module.filename}`);
        });
    }
    
    // CO2 Impact Calculation
    this.calculateEnvironmentalImpact(totalSize);
    
    if (!isCompliant) {
      this.showOptimizationPlan(overBy);
    } else {
      console.log('\n🎉 Excellent! Your bundle meets Green Coding standards!');
      this.showMaintenanceAdvice();
    }
    
    console.log('='.repeat(40));
  }

  calculateEnvironmentalImpact(totalSize) {
    // Based on Green Coding best practices: 2M users/month example
    const usersPerMonth = 2000000;
    const bytesToCO2Factor = 0.000295; // kg CO2 per byte transferred
    const monthlyCO2 = (totalSize * usersPerMonth * bytesToCO2Factor) / 1000;
    
    console.log('\n🌍 Environmental Impact:');
    console.log(`Monthly CO2: ${monthlyCO2.toFixed(2)} kg (2M users)`);
    console.log(`Annual CO2: ${(monthlyCO2 * 12).toFixed(2)} kg`);
    
    // Show potential savings
    if (totalSize > this.targetSize) {
      const optimizedCO2 = (this.targetSize * usersPerMonth * bytesToCO2Factor) / 1000;
      const savings = monthlyCO2 - optimizedCO2;
      console.log(`Potential savings: ${savings.toFixed(2)} kg CO2/month`);
    }
  }

  showOptimizationPlan(overBy) {
    console.log('\n⚡ Angular 17 Green Coding Optimizations:');
    console.log('  1. Replace AOS library (-20-30KB) ← START HERE');
    console.log('     └─ Switch to CSS @keyframes animations');
    console.log('     └─ Fixes CommonJS optimization warning');
    console.log('  2. Standalone Components (-30-50KB)');
    console.log('     └─ ng generate @angular/core:standalone');
    console.log('     └─ Better tree-shaking and smaller bundles');
    console.log('  3. Angular 17 Control Flow (-10-15KB)');
    console.log('     └─ Replace *ngIf/*ngFor with @if/@for');
    console.log('     └─ More efficient change detection');
    console.log('  4. Tree-shake Material imports (-10-20KB)');
    console.log('     └─ Import specific components vs full modules');
    console.log('  5. Code Splitting & Lazy Loading (-15-25KB)');
    console.log('     └─ Load routes on demand');
    
    // Conservative estimate of potential savings
    const potentialSavings = 70; // KB
    const projectedSize = (overBy * 1024 - potentialSavings * 1024) / 1024;
    const willMeetTarget = projectedSize <= 0;
    
    console.log(`\n🎯 After optimizations: ~${Math.max(0, projectedSize + (this.targetSize / 1024)).toFixed(2)} KB ${willMeetTarget ? '✅ TARGET MET!' : '⚠️ More optimization needed'}`);
    
    console.log('\n📋 Implementation Order:');
    console.log('  1. Start with AOS removal (biggest single impact)');
    console.log('  2. Migrate to Standalone Components');
    console.log('  3. Update to new Control Flow syntax');
    console.log('  4. Optimize Material Design imports');
    console.log('  5. Run: npm run stats:read after each step');
    
    console.log('\n💡 Green Coding Benefits:');
    console.log('  • Reduced server costs');
    console.log('  • Faster load times');
    console.log('  • Lower CO2 emissions');
    console.log('  • Better user experience');
    console.log('  • Improved Core Web Vitals');
  }

  showMaintenanceAdvice() {
    console.log('\n🔄 Green Coding Maintenance:');
    console.log('  • Monitor bundle size with each release');
    console.log('  • Set up bundle size CI/CD alerts');
    console.log('  • Regular dependency audits');
    console.log('  • Keep Angular and dependencies updated');
    console.log('  • Consider lazy loading for new features');
    console.log('  • Track Core Web Vitals in production');
  }

  showFallbackInstructions() {
    console.log('\n💡 Alternative Analysis Methods:');
    console.log('  • npm run build:verbose (shows file sizes)');
    console.log('  • npm run stats:file-sizes (filesystem analysis)');
    console.log('  • Manual check: ls -la dist/portfolio/*.{js,css}');
    console.log('  • Lighthouse performance audit');
  }
}

// Run the analyzer
const analyzer = new GreenCodingAnalyzer();
analyzer.analyze();
