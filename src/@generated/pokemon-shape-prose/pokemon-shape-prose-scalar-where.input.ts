import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class pokemon_shape_proseScalarWhereInput {

    @Field(() => [pokemon_shape_proseScalarWhereInput], {nullable:true})
    AND?: Array<pokemon_shape_proseScalarWhereInput>;

    @Field(() => [pokemon_shape_proseScalarWhereInput], {nullable:true})
    OR?: Array<pokemon_shape_proseScalarWhereInput>;

    @Field(() => [pokemon_shape_proseScalarWhereInput], {nullable:true})
    NOT?: Array<pokemon_shape_proseScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_shape_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    awesome_name?: StringNullableFilter;
}
