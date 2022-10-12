import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ability_namesScalarWhereWithAggregatesInput {

    @Field(() => [ability_namesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ability_namesScalarWhereWithAggregatesInput>;

    @Field(() => [ability_namesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ability_namesScalarWhereWithAggregatesInput>;

    @Field(() => [ability_namesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ability_namesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    ability_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
