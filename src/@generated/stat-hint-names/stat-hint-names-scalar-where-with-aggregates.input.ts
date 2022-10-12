import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class stat_hint_namesScalarWhereWithAggregatesInput {

    @Field(() => [stat_hint_namesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<stat_hint_namesScalarWhereWithAggregatesInput>;

    @Field(() => [stat_hint_namesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<stat_hint_namesScalarWhereWithAggregatesInput>;

    @Field(() => [stat_hint_namesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<stat_hint_namesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    stat_hint_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    message?: StringWithAggregatesFilter;
}
