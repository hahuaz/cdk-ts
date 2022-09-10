#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AppStack } from '../lib/app-stack';

const app = new cdk.App();
new AppStack(app, 'MyAppStack', {
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});