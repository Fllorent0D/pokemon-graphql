import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ability_changelog_proseScalarWhereWithAggregatesInput {

    @Field(() => [ability_changelog_proseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ability_changelog_proseScalarWhereWithAggregatesInput>;

    @Field(() => [ability_changelog_proseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ability_changelog_proseScalarWhereWithAggregatesInput>;

    @Field(() => [ability_changelog_proseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ability_changelog_proseScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    ability_changelog_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    effect?: StringWithAggregatesFilter;
}
