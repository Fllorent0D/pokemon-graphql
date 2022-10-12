import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_statsCreateWithoutPokemon_form_pokeathlon_statsInput } from './pokeathlon-stats-create-without-pokemon-form-pokeathlon-stats.input';
import { Type } from 'class-transformer';
import { pokeathlon_statsCreateOrConnectWithoutPokemon_form_pokeathlon_statsInput } from './pokeathlon-stats-create-or-connect-without-pokemon-form-pokeathlon-stats.input';
import { pokeathlon_statsWhereUniqueInput } from './pokeathlon-stats-where-unique.input';

@InputType()
export class pokeathlon_statsCreateNestedOneWithoutPokemon_form_pokeathlon_statsInput {

    @Field(() => pokeathlon_statsCreateWithoutPokemon_form_pokeathlon_statsInput, {nullable:true})
    @Type(() => pokeathlon_statsCreateWithoutPokemon_form_pokeathlon_statsInput)
    create?: pokeathlon_statsCreateWithoutPokemon_form_pokeathlon_statsInput;

    @Field(() => pokeathlon_statsCreateOrConnectWithoutPokemon_form_pokeathlon_statsInput, {nullable:true})
    @Type(() => pokeathlon_statsCreateOrConnectWithoutPokemon_form_pokeathlon_statsInput)
    connectOrCreate?: pokeathlon_statsCreateOrConnectWithoutPokemon_form_pokeathlon_statsInput;

    @Field(() => pokeathlon_statsWhereUniqueInput, {nullable:true})
    @Type(() => pokeathlon_statsWhereUniqueInput)
    connect?: pokeathlon_statsWhereUniqueInput;
}
