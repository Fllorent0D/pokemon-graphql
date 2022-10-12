import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsCreateWithoutPokemon_statsInput } from './stats-create-without-pokemon-stats.input';
import { Type } from 'class-transformer';
import { statsCreateOrConnectWithoutPokemon_statsInput } from './stats-create-or-connect-without-pokemon-stats.input';
import { statsUpsertWithoutPokemon_statsInput } from './stats-upsert-without-pokemon-stats.input';
import { statsWhereUniqueInput } from './stats-where-unique.input';
import { statsUpdateWithoutPokemon_statsInput } from './stats-update-without-pokemon-stats.input';

@InputType()
export class statsUpdateOneRequiredWithoutPokemon_statsNestedInput {

    @Field(() => statsCreateWithoutPokemon_statsInput, {nullable:true})
    @Type(() => statsCreateWithoutPokemon_statsInput)
    create?: statsCreateWithoutPokemon_statsInput;

    @Field(() => statsCreateOrConnectWithoutPokemon_statsInput, {nullable:true})
    @Type(() => statsCreateOrConnectWithoutPokemon_statsInput)
    connectOrCreate?: statsCreateOrConnectWithoutPokemon_statsInput;

    @Field(() => statsUpsertWithoutPokemon_statsInput, {nullable:true})
    @Type(() => statsUpsertWithoutPokemon_statsInput)
    upsert?: statsUpsertWithoutPokemon_statsInput;

    @Field(() => statsWhereUniqueInput, {nullable:true})
    @Type(() => statsWhereUniqueInput)
    connect?: statsWhereUniqueInput;

    @Field(() => statsUpdateWithoutPokemon_statsInput, {nullable:true})
    @Type(() => statsUpdateWithoutPokemon_statsInput)
    update?: statsUpdateWithoutPokemon_statsInput;
}
