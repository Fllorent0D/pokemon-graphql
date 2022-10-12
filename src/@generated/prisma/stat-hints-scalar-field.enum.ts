import { registerEnumType } from '@nestjs/graphql';

export enum Stat_hintsScalarFieldEnum {
    id = "id",
    stat_id = "stat_id",
    gene_mod_5 = "gene_mod_5"
}


registerEnumType(Stat_hintsScalarFieldEnum, { name: 'Stat_hintsScalarFieldEnum', description: undefined })
