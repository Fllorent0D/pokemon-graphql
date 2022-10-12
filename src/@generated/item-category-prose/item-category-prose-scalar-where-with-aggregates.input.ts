import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class item_category_proseScalarWhereWithAggregatesInput {

    @Field(() => [item_category_proseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<item_category_proseScalarWhereWithAggregatesInput>;

    @Field(() => [item_category_proseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<item_category_proseScalarWhereWithAggregatesInput>;

    @Field(() => [item_category_proseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<item_category_proseScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    item_category_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
