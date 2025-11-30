'use client'

import { useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface QRCodeGeneratorProps {
  batchNumber: string
  size?: number
}

export function QRCodeGenerator({ batchNumber, size = 300 }: QRCodeGeneratorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isGenerated, setIsGenerated] = useState(false)

  useEffect(() => {
    if (!canvasRef.current) return

    const url = `${window.location.origin}/lab-results/${batchNumber}`

    QRCode.toCanvas(
      canvasRef.current,
      url,
      {
        width: size,
        margin: 2,
        color: {
          dark: '#1B4D3E', // CANNHEAL primary green
          light: '#FFFFFF',
        },
      },
      (error) => {
        if (error) {
          console.error('QR Code generation error:', error)
        } else {
          setIsGenerated(true)
        }
      }
    )
  }, [batchNumber, size])

  const handleDownload = () => {
    if (!canvasRef.current) return

    const link = document.createElement('a')
    link.download = `CANNHEAL-QR-${batchNumber}.png`
    link.href = canvasRef.current.toDataURL('image/png')
    link.click()
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <canvas ref={canvasRef} />
      </div>

      {isGenerated && (
        <Button
          variant="primary"
          onClick={handleDownload}
          className="flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Download QR Code
        </Button>
      )}

      <p className="text-sm text-text-secondary text-center max-w-md">
        Scan this QR code to view the Certificate of Analysis for batch {batchNumber}
      </p>
    </div>
  )
}
