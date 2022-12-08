## gitops get credential

Get CAPI credentials

```
gitops get credential [flags]
```

### Examples

```

# Get all CAPI credentials
gitops get credentials
		
```

### Options

```
  -h, --help   help for credential
```

### Options inherited from parent commands

```
  -e, --endpoint string            The Weave GitOps Enterprise HTTP API endpoint
      --insecure-skip-tls-verify   If true, the server's certificate will not be checked for validity. This will make your HTTPS connections insecure
      --namespace string           The namespace scope for this operation (default "flux-system")
  -v, --verbose                    Enable verbose output
```

### SEE ALSO

* [gitops get](gitops_get.md)	 - Display one or many Weave GitOps resources

###### Auto generated by spf13/cobra on 12-Apr-2022