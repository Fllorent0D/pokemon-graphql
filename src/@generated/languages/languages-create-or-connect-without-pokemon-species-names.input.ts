import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokemon_species_namesInput } from './languages-create-without-pokemon-species-names.input';

@InputType()
export class languagesCreateOrConnectWithoutPokemon_species_namesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutPokemon_species_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokemon_species_namesInput)
    create!: languagesCreateWithoutPokemon_species_namesInput;
}
