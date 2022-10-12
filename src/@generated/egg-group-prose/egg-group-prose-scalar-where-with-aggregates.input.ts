import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class egg_group_proseScalarWhereWithAggregatesInput {

    @Field(() => [egg_group_proseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<egg_group_proseScalarWhereWithAggregatesInput>;

    @Field(() => [egg_group_proseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<egg_group_proseScalarWhereWithAggregatesInput>;

    @Field(() => [egg_group_proseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<egg_group_proseScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    egg_group_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
