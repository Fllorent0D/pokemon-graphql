import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class stat_hintsScalarWhereWithAggregatesInput {

    @Field(() => [stat_hintsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<stat_hintsScalarWhereWithAggregatesInput>;

    @Field(() => [stat_hintsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<stat_hintsScalarWhereWithAggregatesInput>;

    @Field(() => [stat_hintsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<stat_hintsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    stat_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    gene_mod_5?: IntWithAggregatesFilter;
}
