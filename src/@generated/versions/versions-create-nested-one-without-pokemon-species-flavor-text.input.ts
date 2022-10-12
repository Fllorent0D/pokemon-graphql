import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsCreateWithoutPokemon_species_flavor_textInput } from './versions-create-without-pokemon-species-flavor-text.input';
import { Type } from 'class-transformer';
import { versionsCreateOrConnectWithoutPokemon_species_flavor_textInput } from './versions-create-or-connect-without-pokemon-species-flavor-text.input';
import { versionsWhereUniqueInput } from './versions-where-unique.input';

@InputType()
export class versionsCreateNestedOneWithoutPokemon_species_flavor_textInput {

    @Field(() => versionsCreateWithoutPokemon_species_flavor_textInput, {nullable:true})
    @Type(() => versionsCreateWithoutPokemon_species_flavor_textInput)
    create?: versionsCreateWithoutPokemon_species_flavor_textInput;

    @Field(() => versionsCreateOrConnectWithoutPokemon_species_flavor_textInput, {nullable:true})
    @Type(() => versionsCreateOrConnectWithoutPokemon_species_flavor_textInput)
    connectOrCreate?: versionsCreateOrConnectWithoutPokemon_species_flavor_textInput;

    @Field(() => versionsWhereUniqueInput, {nullable:true})
    @Type(() => versionsWhereUniqueInput)
    connect?: versionsWhereUniqueInput;
}
