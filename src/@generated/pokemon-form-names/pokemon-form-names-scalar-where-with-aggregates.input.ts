import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class pokemon_form_namesScalarWhereWithAggregatesInput {

    @Field(() => [pokemon_form_namesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<pokemon_form_namesScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_form_namesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<pokemon_form_namesScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_form_namesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<pokemon_form_namesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_form_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    form_name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    pokemon_name?: StringNullableWithAggregatesFilter;
}
