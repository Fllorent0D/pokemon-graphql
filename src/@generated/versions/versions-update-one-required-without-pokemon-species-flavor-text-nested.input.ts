import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsCreateWithoutPokemon_species_flavor_textInput } from './versions-create-without-pokemon-species-flavor-text.input';
import { Type } from 'class-transformer';
import { versionsCreateOrConnectWithoutPokemon_species_flavor_textInput } from './versions-create-or-connect-without-pokemon-species-flavor-text.input';
import { versionsUpsertWithoutPokemon_species_flavor_textInput } from './versions-upsert-without-pokemon-species-flavor-text.input';
import { versionsWhereUniqueInput } from './versions-where-unique.input';
import { versionsUpdateWithoutPokemon_species_flavor_textInput } from './versions-update-without-pokemon-species-flavor-text.input';

@InputType()
export class versionsUpdateOneRequiredWithoutPokemon_species_flavor_textNestedInput {

    @Field(() => versionsCreateWithoutPokemon_species_flavor_textInput, {nullable:true})
    @Type(() => versionsCreateWithoutPokemon_species_flavor_textInput)
    create?: versionsCreateWithoutPokemon_species_flavor_textInput;

    @Field(() => versionsCreateOrConnectWithoutPokemon_species_flavor_textInput, {nullable:true})
    @Type(() => versionsCreateOrConnectWithoutPokemon_species_flavor_textInput)
    connectOrCreate?: versionsCreateOrConnectWithoutPokemon_species_flavor_textInput;

    @Field(() => versionsUpsertWithoutPokemon_species_flavor_textInput, {nullable:true})
    @Type(() => versionsUpsertWithoutPokemon_species_flavor_textInput)
    upsert?: versionsUpsertWithoutPokemon_species_flavor_textInput;

    @Field(() => versionsWhereUniqueInput, {nullable:true})
    @Type(() => versionsWhereUniqueInput)
    connect?: versionsWhereUniqueInput;

    @Field(() => versionsUpdateWithoutPokemon_species_flavor_textInput, {nullable:true})
    @Type(() => versionsUpdateWithoutPokemon_species_flavor_textInput)
    update?: versionsUpdateWithoutPokemon_species_flavor_textInput;
}
