import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokemon_species_flavor_textInput } from './languages-create-without-pokemon-species-flavor-text.input';

@InputType()
export class languagesCreateOrConnectWithoutPokemon_species_flavor_textInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutPokemon_species_flavor_textInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokemon_species_flavor_textInput)
    create!: languagesCreateWithoutPokemon_species_flavor_textInput;
}
