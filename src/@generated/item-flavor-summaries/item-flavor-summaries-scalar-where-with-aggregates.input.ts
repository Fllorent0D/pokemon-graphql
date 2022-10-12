import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class item_flavor_summariesScalarWhereWithAggregatesInput {

    @Field(() => [item_flavor_summariesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<item_flavor_summariesScalarWhereWithAggregatesInput>;

    @Field(() => [item_flavor_summariesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<item_flavor_summariesScalarWhereWithAggregatesInput>;

    @Field(() => [item_flavor_summariesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<item_flavor_summariesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    item_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    flavor_summary?: StringNullableWithAggregatesFilter;
}
