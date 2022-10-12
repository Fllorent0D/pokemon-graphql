import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class itemsScalarWhereWithAggregatesInput {

    @Field(() => [itemsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<itemsScalarWhereWithAggregatesInput>;

    @Field(() => [itemsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<itemsScalarWhereWithAggregatesInput>;

    @Field(() => [itemsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<itemsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    category_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    cost?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    fling_power?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    fling_effect_id?: IntNullableWithAggregatesFilter;
}
