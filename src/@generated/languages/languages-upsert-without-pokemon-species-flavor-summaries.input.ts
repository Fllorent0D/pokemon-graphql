import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutPokemon_species_flavor_summariesInput } from './languages-update-without-pokemon-species-flavor-summaries.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokemon_species_flavor_summariesInput } from './languages-create-without-pokemon-species-flavor-summaries.input';

@InputType()
export class languagesUpsertWithoutPokemon_species_flavor_summariesInput {

    @Field(() => languagesUpdateWithoutPokemon_species_flavor_summariesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutPokemon_species_flavor_summariesInput)
    update!: languagesUpdateWithoutPokemon_species_flavor_summariesInput;

    @Field(() => languagesCreateWithoutPokemon_species_flavor_summariesInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokemon_species_flavor_summariesInput)
    create!: languagesCreateWithoutPokemon_species_flavor_summariesInput;
}
