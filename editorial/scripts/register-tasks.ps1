<#
.SYNOPSIS
  Registers (or re-registers) the two Windows scheduled tasks that run the
  editorial pipeline on this machine.

  TheRedScroll Editorial Draft    every day at 00:30 local (Shanghai, night); each
                                  run drafts the next row in the queue, whatever
                                  its publish_date (since 2026-10-10)
  TheRedScroll Editorial Publish  every day at 04:00 local, enabled (Cyril, Sept 3, 2026)

  Run from any PowerShell prompt:
    powershell -ExecutionPolicy Bypass -File editorial\scripts\register-tasks.ps1

  To pause unattended publishing:
    Disable-ScheduledTask -TaskName 'TheRedScroll Editorial Publish'

  Change the hour by editing $DraftTime / $PublishTime and rerunning.

  This script points each task straight at run-daily.ps1. The live tasks run
  through automation\scripts\Invoke-ScheduledProjectScript.ps1 (the retry
  wrapper): rerun C:\Users\cyril\Project\automation\scripts\Register-ProjectTasks.ps1,
  which calls this script and then rewraps both actions, not this script alone.
#>
param(
  [string]$DraftTime = '00:30',
  [string]$PublishTime = '04:00'
)

$ErrorActionPreference = 'Stop'
$Runner = Join-Path $PSScriptRoot 'run-daily.ps1'
$Pwsh = "$env:SystemRoot\System32\WindowsPowerShell\v1.0\powershell.exe"

function Register([string]$Name, [string]$Mode, $Trigger, [bool]$Enabled) {
  $Action = New-ScheduledTaskAction -Execute $Pwsh `
    -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$Runner`" -Mode $Mode"
  $Settings = New-ScheduledTaskSettingsSet `
    -ExecutionTimeLimit (New-TimeSpan -Hours 6) `
    -StartWhenAvailable `
    -WakeToRun `
    -MultipleInstances IgnoreNew
  Register-ScheduledTask -TaskName $Name -Action $Action -Trigger $Trigger `
    -Settings $Settings -Description "TheRedScroll editorial pipeline ($Mode)" -Force | Out-Null
  if (-not $Enabled) { Disable-ScheduledTask -TaskName $Name | Out-Null }
  Write-Host "$Name registered ($(if ($Enabled) {'enabled'} else {'disabled'}))"
}

$DraftTrigger = New-ScheduledTaskTrigger -Daily -At $DraftTime
Register 'TheRedScroll Editorial Draft' 'draft' $DraftTrigger $true

$PublishTrigger = New-ScheduledTaskTrigger -Daily -At $PublishTime
Register 'TheRedScroll Editorial Publish' 'publish' $PublishTrigger $true

Get-ScheduledTask -TaskName 'TheRedScroll Editorial *' | Format-Table TaskName, State -AutoSize
