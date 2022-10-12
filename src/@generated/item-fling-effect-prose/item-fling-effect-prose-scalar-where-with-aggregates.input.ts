import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class item_fling_effect_proseScalarWhereWithAggregatesInput {

    @Field(() => [item_fling_effect_proseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<item_fling_effect_proseScalarWhereWithAggregatesInput>;

    @Field(() => [item_fling_effect_proseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<item_fling_effect_proseScalarWhereWithAggregatesInput>;

    @Field(() => [item_fling_effect_proseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<item_fling_effect_proseScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    item_fling_effect_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    effect?: StringWithAggregatesFilter;
}
