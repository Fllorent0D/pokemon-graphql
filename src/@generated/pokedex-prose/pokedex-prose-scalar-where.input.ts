import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class pokedex_proseScalarWhereInput {

    @Field(() => [pokedex_proseScalarWhereInput], {nullable:true})
    AND?: Array<pokedex_proseScalarWhereInput>;

    @Field(() => [pokedex_proseScalarWhereInput], {nullable:true})
    OR?: Array<pokedex_proseScalarWhereInput>;

    @Field(() => [pokedex_proseScalarWhereInput], {nullable:true})
    NOT?: Array<pokedex_proseScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokedex_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;
}
