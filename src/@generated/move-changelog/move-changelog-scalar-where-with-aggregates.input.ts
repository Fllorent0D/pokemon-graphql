import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class move_changelogScalarWhereWithAggregatesInput {

    @Field(() => [move_changelogScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<move_changelogScalarWhereWithAggregatesInput>;

    @Field(() => [move_changelogScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<move_changelogScalarWhereWithAggregatesInput>;

    @Field(() => [move_changelogScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<move_changelogScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    move_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    changed_in_version_group_id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    type_id?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    effect_id?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    effect_chance?: IntNullableWithAggregatesFilter;
}
