import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class egg_groupsScalarWhereWithAggregatesInput {

    @Field(() => [egg_groupsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<egg_groupsScalarWhereWithAggregatesInput>;

    @Field(() => [egg_groupsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<egg_groupsScalarWhereWithAggregatesInput>;

    @Field(() => [egg_groupsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<egg_groupsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
