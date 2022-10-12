import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class version_groupsScalarWhereWithAggregatesInput {

    @Field(() => [version_groupsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<version_groupsScalarWhereWithAggregatesInput>;

    @Field(() => [version_groupsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<version_groupsScalarWhereWithAggregatesInput>;

    @Field(() => [version_groupsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<version_groupsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    generation_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokedex_id?: IntWithAggregatesFilter;
}
