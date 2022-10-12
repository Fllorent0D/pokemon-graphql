import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class move_effect_changelogScalarWhereWithAggregatesInput {

    @Field(() => [move_effect_changelogScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<move_effect_changelogScalarWhereWithAggregatesInput>;

    @Field(() => [move_effect_changelogScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<move_effect_changelogScalarWhereWithAggregatesInput>;

    @Field(() => [move_effect_changelogScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<move_effect_changelogScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    effect_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    changed_in_version_group_id?: IntWithAggregatesFilter;
}
