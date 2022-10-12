import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class contest_type_namesScalarWhereWithAggregatesInput {

    @Field(() => [contest_type_namesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<contest_type_namesScalarWhereWithAggregatesInput>;

    @Field(() => [contest_type_namesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<contest_type_namesScalarWhereWithAggregatesInput>;

    @Field(() => [contest_type_namesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<contest_type_namesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    contest_type_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    flavor?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    color?: StringNullableWithAggregatesFilter;
}
