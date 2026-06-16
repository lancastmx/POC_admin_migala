import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import type { ArchivoDocumento } from '../../../../core/models/archivo';

@Component({
  selector: 'migala-archivo-documentos',
  standalone: true,
  imports: [],
  templateUrl: './archivo-documentos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchivoDocumentos {
  @Input({ required: true }) filteredDocumentos!: ArchivoDocumento[];
  @Input({ required: true }) getFormatIcon!: (formato: string) => string;
  @Input({ required: true }) getFormatBadgeClass!: (formato: string) => string;
  @Input({ required: true }) getFormatBadgeLabel!: (formato: string) => string;
  @Input({ required: true }) getFormatAction!: (formato: string) => { label: string; icon: string };
  @Input({ required: true }) isMockUrl!: (url: string) => boolean;
  @Input({ required: true }) clearFilters!: () => void;
}
