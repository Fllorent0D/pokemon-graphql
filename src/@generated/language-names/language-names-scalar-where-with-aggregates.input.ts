import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class language_namesScalarWhereWithAggregatesInput {

    @Field(() => [language_namesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<language_namesScalarWhereWithAggregatesInput>;

    @Field(() => [language_namesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<language_namesScalarWhereWithAggregatesInput>;

    @Field(() => [language_namesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<language_namesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    language_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
