import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class pokemon_species_namesScalarWhereInput {

    @Field(() => [pokemon_species_namesScalarWhereInput], {nullable:true})
    AND?: Array<pokemon_species_namesScalarWhereInput>;

    @Field(() => [pokemon_species_namesScalarWhereInput], {nullable:true})
    OR?: Array<pokemon_species_namesScalarWhereInput>;

    @Field(() => [pokemon_species_namesScalarWhereInput], {nullable:true})
    NOT?: Array<pokemon_species_namesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_species_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    genus?: StringNullableFilter;
}
