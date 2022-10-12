import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class pokemon_form_namesScalarWhereInput {

    @Field(() => [pokemon_form_namesScalarWhereInput], {nullable:true})
    AND?: Array<pokemon_form_namesScalarWhereInput>;

    @Field(() => [pokemon_form_namesScalarWhereInput], {nullable:true})
    OR?: Array<pokemon_form_namesScalarWhereInput>;

    @Field(() => [pokemon_form_namesScalarWhereInput], {nullable:true})
    NOT?: Array<pokemon_form_namesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_form_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    form_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    pokemon_name?: StringNullableFilter;
}
