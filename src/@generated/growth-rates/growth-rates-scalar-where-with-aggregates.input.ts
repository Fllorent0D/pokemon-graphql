import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class growth_ratesScalarWhereWithAggregatesInput {

    @Field(() => [growth_ratesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<growth_ratesScalarWhereWithAggregatesInput>;

    @Field(() => [growth_ratesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<growth_ratesScalarWhereWithAggregatesInput>;

    @Field(() => [growth_ratesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<growth_ratesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    formula?: StringWithAggregatesFilter;
}
