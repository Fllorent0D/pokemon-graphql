import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class item_fling_effectsScalarWhereWithAggregatesInput {

    @Field(() => [item_fling_effectsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<item_fling_effectsScalarWhereWithAggregatesInput>;

    @Field(() => [item_fling_effectsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<item_fling_effectsScalarWhereWithAggregatesInput>;

    @Field(() => [item_fling_effectsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<item_fling_effectsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;
}
