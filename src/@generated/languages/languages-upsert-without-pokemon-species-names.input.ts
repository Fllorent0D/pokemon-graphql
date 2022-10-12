import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutPokemon_species_namesInput } from './languages-update-without-pokemon-species-names.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokemon_species_namesInput } from './languages-create-without-pokemon-species-names.input';

@InputType()
export class languagesUpsertWithoutPokemon_species_namesInput {

    @Field(() => languagesUpdateWithoutPokemon_species_namesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutPokemon_species_namesInput)
    update!: languagesUpdateWithoutPokemon_species_namesInput;

    @Field(() => languagesCreateWithoutPokemon_species_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokemon_species_namesInput)
    create!: languagesCreateWithoutPokemon_species_namesInput;
}
