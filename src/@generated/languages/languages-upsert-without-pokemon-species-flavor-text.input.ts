import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutPokemon_species_flavor_textInput } from './languages-update-without-pokemon-species-flavor-text.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokemon_species_flavor_textInput } from './languages-create-without-pokemon-species-flavor-text.input';

@InputType()
export class languagesUpsertWithoutPokemon_species_flavor_textInput {

    @Field(() => languagesUpdateWithoutPokemon_species_flavor_textInput, {nullable:false})
    @Type(() => languagesUpdateWithoutPokemon_species_flavor_textInput)
    update!: languagesUpdateWithoutPokemon_species_flavor_textInput;

    @Field(() => languagesCreateWithoutPokemon_species_flavor_textInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokemon_species_flavor_textInput)
    create!: languagesCreateWithoutPokemon_species_flavor_textInput;
}
