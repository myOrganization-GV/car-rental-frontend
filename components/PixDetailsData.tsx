"use server"

interface PixDetailsResponse {
  qrCodeBase64: string;
  qrCode: string;
  sagaId: string;
}

interface GetPixDetailsResult {
    data: PixDetailsResponse | null;
    error: string | null;
    status: number | null;
}

export async function getPixDetails(sagaId: string): Promise<GetPixDetailsResult> { 
    const backendUrl = process.env.BACKEND_URL;

    if (!sagaId) {
        console.error("SagaId is missing for PIX details fetch.");
        return { data: null, error: "Missing PIX transaction ID (sagaId).", status: 400 };
    }

    try {
        console.log(`[Server Action] Fetching PIX details for sagaId: ${sagaId}`);

        const response = await fetch(`${backendUrl}/payments/${sagaId}`, { 
            cache: 'no-store', 
        });

        const responseBody = await response.json();

        if (!response.ok) {
            const errorData = responseBody;
            console.error(
                `[Server Action] Error fetching PIX details for sagaId ${sagaId}: HTTP ${response.status} - ${errorData.message || response.statusText}`
            );
            return {
                data: null,
                error: errorData.message || `Failed to fetch PIX details (Status: ${response.status})`,
                status: response.status,
            };
        }

        const pixDetails: PixDetailsResponse = responseBody;
        console.log(`[Server Action] Successfully fetched PIX details for sagaId ${sagaId}.`);
        return { data: pixDetails, error: null, status: response.status };

    } catch (err: any) {
        console.error(`[Server Action] Network/fetch error during PIX details fetch for sagaId ${sagaId}:`, err);
        return { data: null, error: `Network error: ${err.message || 'Unknown error'}`, status: 500 };
    }
}