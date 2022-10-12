import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_statsCreateWithoutPokemon_form_pokeathlon_statsInput } from './pokeathlon-stats-create-without-pokemon-form-pokeathlon-stats.input';
import { Type } from 'class-transformer';
import { pokeathlon_statsCreateOrConnectWithoutPokemon_form_pokeathlon_statsInput } from './pokeathlon-stats-create-or-connect-without-pokemon-form-pokeathlon-stats.input';
import { pokeathlon_statsUpsertWithoutPokemon_form_pokeathlon_statsInput } from './pokeathlon-stats-upsert-without-pokemon-form-pokeathlon-stats.input';
import { pokeathlon_statsWhereUniqueInput } from './pokeathlon-stats-where-unique.input';
import { pokeathlon_statsUpdateWithoutPokemon_form_pokeathlon_statsInput } from './pokeathlon-stats-update-without-pokemon-form-pokeathlon-stats.input';

@InputType()
export class pokeathlon_statsUpdateOneRequiredWithoutPokemon_form_pokeathlon_statsNestedInput {

    @Field(() => pokeathlon_statsCreateWithoutPokemon_form_pokeathlon_statsInput, {nullable:true})
    @Type(() => pokeathlon_statsCreateWithoutPokemon_form_pokeathlon_statsInput)
    create?: pokeathlon_statsCreateWithoutPokemon_form_pokeathlon_statsInput;

    @Field(() => pokeathlon_statsCreateOrConnectWithoutPokemon_form_pokeathlon_statsInput, {nullable:true})
    @Type(() => pokeathlon_statsCreateOrConnectWithoutPokemon_form_pokeathlon_statsInput)
    connectOrCreate?: pokeathlon_statsCreateOrConnectWithoutPokemon_form_pokeathlon_statsInput;

    @Field(() => pokeathlon_statsUpsertWithoutPokemon_form_pokeathlon_statsInput, {nullable:true})
    @Type(() => pokeathlon_statsUpsertWithoutPokemon_form_pokeathlon_statsInput)
    upsert?: pokeathlon_statsUpsertWithoutPokemon_form_pokeathlon_statsInput;

    @Field(() => pokeathlon_statsWhereUniqueInput, {nullable:true})
    @Type(() => pokeathlon_statsWhereUniqueInput)
    connect?: pokeathlon_statsWhereUniqueInput;

    @Field(() => pokeathlon_statsUpdateWithoutPokemon_form_pokeathlon_statsInput, {nullable:true})
    @Type(() => pokeathlon_statsUpdateWithoutPokemon_form_pokeathlon_statsInput)
    update?: pokeathlon_statsUpdateWithoutPokemon_form_pokeathlon_statsInput;
}
