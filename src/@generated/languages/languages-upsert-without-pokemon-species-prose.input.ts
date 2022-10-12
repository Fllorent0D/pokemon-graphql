import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutPokemon_species_proseInput } from './languages-update-without-pokemon-species-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokemon_species_proseInput } from './languages-create-without-pokemon-species-prose.input';

@InputType()
export class languagesUpsertWithoutPokemon_species_proseInput {

    @Field(() => languagesUpdateWithoutPokemon_species_proseInput, {nullable:false})
    @Type(() => languagesUpdateWithoutPokemon_species_proseInput)
    update!: languagesUpdateWithoutPokemon_species_proseInput;

    @Field(() => languagesCreateWithoutPokemon_species_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokemon_species_proseInput)
    create!: languagesCreateWithoutPokemon_species_proseInput;
}
