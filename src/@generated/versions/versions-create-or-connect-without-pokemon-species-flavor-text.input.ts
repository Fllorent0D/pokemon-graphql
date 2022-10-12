import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsWhereUniqueInput } from './versions-where-unique.input';
import { Type } from 'class-transformer';
import { versionsCreateWithoutPokemon_species_flavor_textInput } from './versions-create-without-pokemon-species-flavor-text.input';

@InputType()
export class versionsCreateOrConnectWithoutPokemon_species_flavor_textInput {

    @Field(() => versionsWhereUniqueInput, {nullable:false})
    @Type(() => versionsWhereUniqueInput)
    where!: versionsWhereUniqueInput;

    @Field(() => versionsCreateWithoutPokemon_species_flavor_textInput, {nullable:false})
    @Type(() => versionsCreateWithoutPokemon_species_flavor_textInput)
    create!: versionsCreateWithoutPokemon_species_flavor_textInput;
}
