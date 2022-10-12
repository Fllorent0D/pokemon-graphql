import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class type_namesScalarWhereWithAggregatesInput {

    @Field(() => [type_namesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<type_namesScalarWhereWithAggregatesInput>;

    @Field(() => [type_namesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<type_namesScalarWhereWithAggregatesInput>;

    @Field(() => [type_namesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<type_namesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    type_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
