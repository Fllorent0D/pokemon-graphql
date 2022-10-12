import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class ability_changelogScalarWhereWithAggregatesInput {

    @Field(() => [ability_changelogScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ability_changelogScalarWhereWithAggregatesInput>;

    @Field(() => [ability_changelogScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ability_changelogScalarWhereWithAggregatesInput>;

    @Field(() => [ability_changelogScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ability_changelogScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    ability_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    changed_in_version_group_id?: IntWithAggregatesFilter;
}
