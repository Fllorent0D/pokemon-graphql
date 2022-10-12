import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsUpdateWithoutPokemon_species_flavor_textInput } from './versions-update-without-pokemon-species-flavor-text.input';
import { Type } from 'class-transformer';
import { versionsCreateWithoutPokemon_species_flavor_textInput } from './versions-create-without-pokemon-species-flavor-text.input';

@InputType()
export class versionsUpsertWithoutPokemon_species_flavor_textInput {

    @Field(() => versionsUpdateWithoutPokemon_species_flavor_textInput, {nullable:false})
    @Type(() => versionsUpdateWithoutPokemon_species_flavor_textInput)
    update!: versionsUpdateWithoutPokemon_species_flavor_textInput;

    @Field(() => versionsCreateWithoutPokemon_species_flavor_textInput, {nullable:false})
    @Type(() => versionsCreateWithoutPokemon_species_flavor_textInput)
    create!: versionsCreateWithoutPokemon_species_flavor_textInput;
}
