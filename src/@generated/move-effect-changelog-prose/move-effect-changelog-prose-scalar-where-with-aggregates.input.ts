import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class move_effect_changelog_proseScalarWhereWithAggregatesInput {

    @Field(() => [move_effect_changelog_proseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<move_effect_changelog_proseScalarWhereWithAggregatesInput>;

    @Field(() => [move_effect_changelog_proseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<move_effect_changelog_proseScalarWhereWithAggregatesInput>;

    @Field(() => [move_effect_changelog_proseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<move_effect_changelog_proseScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    move_effect_changelog_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    effect?: StringWithAggregatesFilter;
}
