import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class growth_rate_proseScalarWhereWithAggregatesInput {

    @Field(() => [growth_rate_proseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<growth_rate_proseScalarWhereWithAggregatesInput>;

    @Field(() => [growth_rate_proseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<growth_rate_proseScalarWhereWithAggregatesInput>;

    @Field(() => [growth_rate_proseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<growth_rate_proseScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    growth_rate_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
