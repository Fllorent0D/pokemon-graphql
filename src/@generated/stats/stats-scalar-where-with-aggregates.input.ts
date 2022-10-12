import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class statsScalarWhereWithAggregatesInput {

    @Field(() => [statsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<statsScalarWhereWithAggregatesInput>;

    @Field(() => [statsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<statsScalarWhereWithAggregatesInput>;

    @Field(() => [statsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<statsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    damage_class_id?: IntNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    is_battle_only?: BoolWithAggregatesFilter;
}
